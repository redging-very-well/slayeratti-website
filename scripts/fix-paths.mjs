/**
 * Post-build script: converts absolute asset paths in HTML files to relative paths.
 * Astro outputs absolute paths (e.g. /favicon.svg, /_astro/...) which don't work
 * on GitHub Pages when served from a subdirectory or with a custom base.
 * This rewrites them to relative paths (e.g. ./favicon.svg, ./_astro/...).
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const distDir = new URL('../dist', import.meta.url).pathname;

async function getHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  return entries
    .filter((e) => e.isFile() && e.name.endsWith('.html'))
    .map((e) => join(e.parentPath ?? e.path, e.name));
}

async function fixPaths() {
  const files = await getHtmlFiles(distDir);

  for (const file of files) {
    let content = await readFile(file, 'utf-8');
    const original = content;

    // Convert absolute paths starting with / to relative ./ paths
    // Matches href="/...", src="/...", content="/...", url(/)
    content = content.replace(/((?:href|src|content|poster)=")\/(?!\/)/g, '$1./');
    content = content.replace(/(url\()\/(?!\/)/g, '$1./');

    // Fix all URLs inside srcset (multiple comma-separated entries)
    content = content.replace(/srcset="([^"]*)"/g, (_match, srcsetValue) => {
      const fixed = srcsetValue.replace(/(^|,\s*)\/(?!\/)/g, '$1./');
      return `srcset="${fixed}"`;
    });
    if (content !== original) {
      await writeFile(file, content, 'utf-8');
      console.log(`  ✓ Fixed paths in ${file.replace(distDir, 'dist')}`);
    }
  }
}

fixPaths().catch((err) => {
  console.error('Failed to fix paths:', err);
  process.exit(1);
});
