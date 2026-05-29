const { chromium } = require('playwright');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

async function humanScroll(page, totalPx) {
  const steps = Math.floor(totalPx / 5);
  for (let i = 0; i < steps; i++) {
    await page.mouse.wheel(0, 5);
    await page.waitForTimeout(12 + Math.floor(Math.random() * 10));
  }
}

async function moveMouse(page, x, y) {
  await page.mouse.move(x, y, { steps: 40 });
  await page.waitForTimeout(80 + Math.floor(Math.random() * 120));
}

async function naturalWait(page, ms) {
  await page.waitForTimeout(ms + Math.floor(Math.random() * 250));
}

async function slowScroll(page, totalPx) {
  const steps = Math.floor(totalPx / 3);
  for (let i = 0; i < steps; i++) {
    await page.mouse.wheel(0, 3);
    await page.waitForTimeout(20 + Math.floor(Math.random() * 15));
  }
}

(async () => {
  const recordingsDir = path.join(__dirname, 'recordings');
  if (!fs.existsSync(recordingsDir)) {
    fs.mkdirSync(recordingsDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: false });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: {
      dir: recordingsDir,
      size: { width: 1440, height: 900 },
    },
  });

  const page = await context.newPage();

  // ─── 1. Apertura sito ────────────────────────────────────────────────────
  await page.goto('https://the-noctis-project.netlify.app/');
  await page.waitForLoadState('networkidle');
  await naturalWait(page, 4000); // attendi logo Noctis, orologio London, coordinate scrollanti

  // ─── 2. Hero section ────────────────────────────────────────────────────
  await moveMouse(page, 720, 450);
  await humanScroll(page, 300);
  await naturalWait(page, 1000);

  // ─── 3. Encounter with Extraordinary ────────────────────────────────────
  await humanScroll(page, 400);
  await naturalWait(page, 800);

  // hover prima immagine
  await moveMouse(page, 360, 600);
  await naturalWait(page, 1200);

  // hover seconda immagine
  await moveMouse(page, 720, 600);
  await naturalWait(page, 1200);

  // hover terza immagine
  await moveMouse(page, 1080, 600);
  await naturalWait(page, 1200);

  // zona neutrale
  await moveMouse(page, 720, 400);

  // ─── 4. Heart Steel and Fire ────────────────────────────────────────────
  await humanScroll(page, 500);
  await naturalWait(page, 800);

  // ─── 5. Omakase — testo riga per riga ───────────────────────────────────
  await slowScroll(page, 400);
  await naturalWait(page, 1500);

  // ─── 6. Piatti — carousel ───────────────────────────────────────────────
  await humanScroll(page, 350);
  await naturalWait(page, 600);

  // Individua il bottone Next del carousel
  const nextBtn = page.locator('button.carousel-btn.next, button[aria-label*="next" i], button[aria-label*="Next"], .carousel-next, [class*="next"]').first();

  for (let i = 0; i < 10; i++) {
    const waitMs = 900 + Math.floor(Math.random() * 300);

    try {
      const box = await nextBtn.boundingBox();
      if (box) {
        await moveMouse(page, box.x + box.width / 2, box.y + box.height / 2);
      }
    } catch {
      // il bottone potrebbe non avere bounding box, procedi comunque
    }

    await page.waitForTimeout(waitMs);
    await nextBtn.click();
    await page.waitForTimeout(200);
  }

  await naturalWait(page, 800);

  // ─── 7. Chef ────────────────────────────────────────────────────────────
  await slowScroll(page, 500);
  await naturalWait(page, 500);
  await slowScroll(page, 300); // fino a "Every detail is designed to disappear into memory"
  await naturalWait(page, 2000);

  // ─── 8. Ticker e animazioni Constructed / Encounter ─────────────────────
  await humanScroll(page, 200);
  await naturalWait(page, 400);
  await slowScroll(page, 400);
  await naturalWait(page, 2500); // attendi completamento animazioni
  await naturalWait(page, 1000);

  // ─── 9. Gallery ─────────────────────────────────────────────────────────
  await humanScroll(page, 400);
  await naturalWait(page, 3500); // foto che cambiano automaticamente

  // hover prima foto
  await moveMouse(page, 400, 500);
  await naturalWait(page, 1500);

  // hover seconda foto
  await moveMouse(page, 900, 500);
  await naturalWait(page, 1500);

  // ─── 10. Bar — Liquid Poetry ─────────────────────────────────────────────
  await humanScroll(page, 400);
  await naturalWait(page, 500);
  await slowScroll(page, 500); // 4 immagini con effetto parallax
  await naturalWait(page, 600);

  // ─── 11. Reserve Your Night — form ──────────────────────────────────────
  await humanScroll(page, 300);
  await naturalWait(page, 500);

  // campo Full Name
  const nameField = page.locator('input[name="name"], input[placeholder*="Name" i], input[id*="name" i]').first();
  try {
    const nameBox = await nameField.boundingBox();
    if (nameBox) await moveMouse(page, nameBox.x + nameBox.width / 2, nameBox.y + nameBox.height / 2);
    await nameField.click();
  } catch { /* continua */ }
  await naturalWait(page, 600);

  // campo Email
  const emailField = page.locator('input[type="email"], input[name="email"], input[placeholder*="Email" i]').first();
  try {
    const emailBox = await emailField.boundingBox();
    if (emailBox) await moveMouse(page, emailBox.x + emailBox.width / 2, emailBox.y + emailBox.height / 2);
    await emailField.click();
  } catch { /* continua */ }
  await naturalWait(page, 600);

  // dropdown Experience
  const selectEl = page.locator('select, [role="listbox"], [class*="select" i]').first();
  try {
    const selBox = await selectEl.boundingBox();
    if (selBox) await moveMouse(page, selBox.x + selBox.width / 2, selBox.y + selBox.height / 2);
    await selectEl.click();
  } catch { /* continua */ }
  await naturalWait(page, 500);

  await page.keyboard.press('ArrowDown');
  await naturalWait(page, 700);
  await page.keyboard.press('ArrowDown');
  await naturalWait(page, 700);
  await page.keyboard.press('Escape');

  // hover bottone Reserve Your Night (senza click)
  const reserveBtn = page.locator('button:has-text("Reserve"), input[value*="Reserve" i], [class*="reserve" i] button').first();
  try {
    const btnBox = await reserveBtn.boundingBox();
    if (btnBox) await moveMouse(page, btnBox.x + btnBox.width / 2, btnBox.y + btnBox.height / 2);
  } catch { /* continua */ }
  await naturalWait(page, 1200);

  // ─── 12. Footer ─────────────────────────────────────────────────────────
  await humanScroll(page, 300);
  await naturalWait(page, 400);

  // hover "Reserve Your Night" nel footer
  const footerReserve = page.locator('footer :text("Reserve Your Night"), footer a:has-text("Reserve")').first();
  try {
    const frBox = await footerReserve.boundingBox();
    if (frBox) await moveMouse(page, frBox.x + frBox.width / 2, frBox.y + frBox.height / 2);
  } catch { /* continua */ }
  await naturalWait(page, 1000);

  // hover logo Noctis nel footer
  const footerLogo = page.locator('footer img, footer [class*="logo" i], footer [class*="brand" i]').first();
  try {
    const flBox = await footerLogo.boundingBox();
    if (flBox) await moveMouse(page, flBox.x + flBox.width / 2, flBox.y + flBox.height / 2);
  } catch { /* continua */ }
  await naturalWait(page, 800);

  // hover "Reserve a Table" nel footer
  const reserveTable = page.locator('footer :text("Reserve a Table"), footer a:has-text("Reserve a Table")').first();
  try {
    const rtBox = await reserveTable.boundingBox();
    if (rtBox) await moveMouse(page, rtBox.x + rtBox.width / 2, rtBox.y + rtBox.height / 2);
  } catch { /* continua */ }
  await naturalWait(page, 1000);

  // ─── 13. Menu di navigazione ─────────────────────────────────────────────
  // Torna in cima scrollando
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await page.waitForTimeout(1200);

  const navLinks = ['Experience', 'Menu', 'Chef', 'Reserve'];
  for (const label of navLinks) {
    const link = page.locator(`nav a:has-text("${label}"), header a:has-text("${label}")`).first();
    try {
      const lBox = await link.boundingBox();
      if (lBox) await moveMouse(page, lBox.x + lBox.width / 2, lBox.y + lBox.height / 2);
    } catch { /* continua */ }
    await naturalWait(page, 800);
  }

  // Clicca su "Menu"
  const menuLink = page.locator('nav a:has-text("Menu"), header a:has-text("Menu")').first();
  try {
    await menuLink.click();
  } catch { /* continua */ }
  await naturalWait(page, 1000);

  // Hover English → Italiano (switcher lingua)
  const englishEl = page.locator(':text("English"), [lang="en"], [hreflang="en"], a:has-text("EN")').first();
  try {
    const enBox = await englishEl.boundingBox();
    if (enBox) await moveMouse(page, enBox.x + enBox.width / 2, enBox.y + enBox.height / 2);
  } catch { /* continua */ }
  await naturalWait(page, 400);

  const italianoEl = page.locator(':text("Italiano"), [lang="it"], [hreflang="it"], a:has-text("IT")').first();
  try {
    const itBox = await italianoEl.boundingBox();
    if (itBox) await moveMouse(page, itBox.x + itBox.width / 2, itBox.y + itBox.height / 2);
  } catch { /* continua */ }
  await naturalWait(page, 1000);

  // ─── Chiusura e salvataggio video ────────────────────────────────────────
  await context.close(); // salva il video prima di chiudere il browser
  await browser.close();

  console.log('Video salvato in ./recordings/');

  // ─── Conversione in MP4 sul Desktop ──────────────────────────────────────
  const desktopPath = path.join(require('os').homedir(), 'Desktop', 'demo.mp4');

  let ffmpegAvailable = false;
  try {
    execSync('ffmpeg -version', { stdio: 'ignore' });
    ffmpegAvailable = true;
  } catch {
    ffmpegAvailable = false;
  }

  if (!ffmpegAvailable) {
    console.log('\nffmpeg non trovato. Per convertire il video in MP4 installa ffmpeg:');
    console.log('  macOS:   brew install ffmpeg');
    console.log('  Ubuntu:  sudo apt install ffmpeg');
    console.log('  Windows: https://ffmpeg.org/download.html');
    console.log('\nPoi esegui manualmente:');
    const webmFiles = fs.readdirSync(recordingsDir).filter(f => f.endsWith('.webm'));
    if (webmFiles.length > 0) {
      const lastVideo = path.join(recordingsDir, webmFiles[webmFiles.length - 1]);
      console.log(`  ffmpeg -i "${lastVideo}" -c:v libx264 -pix_fmt yuv420p "${desktopPath}"`);
    }
    return;
  }

  // Trova l'ultimo file .webm nella cartella recordings
  const webmFiles = fs.readdirSync(recordingsDir)
    .filter(f => f.endsWith('.webm'))
    .map(f => ({ name: f, mtime: fs.statSync(path.join(recordingsDir, f)).mtime }))
    .sort((a, b) => b.mtime - a.mtime);

  if (webmFiles.length === 0) {
    console.log('Nessun file video trovato in ./recordings/');
    return;
  }

  const latestWebm = path.join(recordingsDir, webmFiles[0].name);
  console.log(`\nConversione in corso: ${latestWebm} → ${desktopPath}`);

  try {
    execSync(
      `ffmpeg -y -i "${latestWebm}" -c:v libx264 -preset fast -crf 18 -pix_fmt yuv420p "${desktopPath}"`,
      { stdio: 'inherit' }
    );
    console.log(`\nDemo video salvato sul Desktop: ${desktopPath}`);
  } catch (err) {
    console.error('Errore durante la conversione ffmpeg:', err.message);
  }
})();
