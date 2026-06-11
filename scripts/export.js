/**
 * Export every templates/flyer-*.html to PNG with Puppeteer.
 *
 *   npm run export            → 1080×1350 PNGs in exports/whatsapp/
 *   npm run export -- --story → 1080×1920 PNGs in exports/instagram/
 *
 * The story export adds class="story" to <body>; styles.css handles the
 * taller layout. No other logic — keep this simple.
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const ROOT = path.join(__dirname, '..');
const TEMPLATES = path.join(ROOT, 'templates');

const story = process.argv.includes('--story');
const width = 1080;
const height = story ? 1920 : 1350;
const outDir = path.join(ROOT, 'exports', story ? 'instagram' : 'whatsapp');

async function main() {
  const flyers = fs.readdirSync(TEMPLATES).filter(
    (f) => f.startsWith('flyer-') && f.endsWith('.html')
  );
  if (flyers.length === 0) {
    console.log('No flyer-*.html templates found.');
    return;
  }

  fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--force-color-profile=srgb'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });

  for (const file of flyers) {
    const url = 'file://' + path.join(TEMPLATES, file);
    // networkidle0 waits for the Google Fonts to finish loading
    await page.goto(url, { waitUntil: 'networkidle0' });
    if (story) {
      await page.evaluate(() => document.body.classList.add('story'));
    }
    const name = file.replace('.html', story ? '-story.png' : '.png');
    await page.screenshot({
      path: path.join(outDir, name),
      clip: { x: 0, y: 0, width, height },
    });
    console.log(`✓ ${name}  (${width}×${height})`);
  }

  await browser.close();
  console.log(`\nDone → ${path.relative(ROOT, outDir)}/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
