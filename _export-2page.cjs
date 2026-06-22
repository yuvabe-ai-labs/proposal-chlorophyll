// Export /agentic-spectrum as a 2-page PDF — one slide per page.
const puppeteer = require("puppeteer-core");
const { PDFDocument } = require("pdf-lib");
const fs = require("fs");

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const URL = process.env.PDF_URL || "http://localhost:3000/agentic-spectrum";
const OUT = process.argv[2] || "C:/Users/cyril varghese/code/chlorophyll-proposal/Chlorophyll × Yuvabe — Agentic Spectrum.pdf";

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox", "--hide-scrollbars", "--force-color-profile=srgb"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1000, deviceScaleFactor: 2 });
  await page.goto(URL, { waitUntil: "load", timeout: 90000 });
  await page.emulateMediaType("screen");
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() =>
    Promise.all(
      [...document.images].map((i) =>
        i.complete && i.naturalWidth
          ? null
          : new Promise((r) => {
              i.addEventListener("load", r);
              i.addEventListener("error", r);
            })
      )
    )
  );
  await new Promise((r) => setTimeout(r, 1200));

  // Pin each SECTION's height so its 100vh min-height doesn't re-expand during
  // pdf rendering — but zero the Doc container's vh min-height so the document
  // collapses to just the visible slide on each page.
  await page.evaluate(() => {
    document.querySelectorAll("section").forEach((el) => {
      el.style.minHeight = el.getBoundingClientRect().height + "px";
    });
    document.querySelectorAll('[class*="min-h-screen"]').forEach((el) => {
      if (el.tagName.toLowerCase() !== "section") el.style.minHeight = "0px";
    });
  });

  const setVisible = (spec) => page.evaluate((s) => {
    const show = (sel, on) => {
      const el = document.querySelector(sel);
      if (el) el.style.display = on ? "" : "none";
    };
    show("header", s.header);
    show("#spectrum", s.spectrum);
    show("#architecture", s.architecture);
    show("footer", s.footer);
  }, spec);

  async function renderBuf() {
    await new Promise((r) => setTimeout(r, 200));
    const h = await page.evaluate(() => Math.ceil(document.documentElement.scrollHeight));
    return page.pdf({
      printBackground: true,
      width: "1280px",
      height: h + "px",
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      scale: 1,
    });
  }

  // Page 1: header + spectrum slide
  await setVisible({ header: true, spectrum: true, architecture: false, footer: false });
  const buf1 = await renderBuf();

  // Page 2: architecture slide + footer
  await setVisible({ header: false, spectrum: false, architecture: true, footer: true });
  const buf2 = await renderBuf();

  await browser.close();

  const out = await PDFDocument.create();
  for (const buf of [buf1, buf2]) {
    const src = await PDFDocument.load(buf);
    const [pg] = await out.copyPages(src, [0]);
    out.addPage(pg);
  }
  fs.writeFileSync(OUT, await out.save());
  console.log("WROTE", OUT, "| pages:", out.getPageCount());
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
