// One-off: export the /agentic-spectrum route to a styled PDF via system Chrome.
const puppeteer = require("puppeteer-core");

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const URL = process.env.PDF_URL || "http://localhost:3210/agentic-spectrum";
const OUT = process.argv[2] || "C:/Users/cyril varghese/code/chlorophyll-proposal/agentic-spectrum.pdf";

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox", "--hide-scrollbars", "--force-color-profile=srgb"],
  });
  const page = await browser.newPage();
  // Desktop viewport so the `lg` (>=1024px) layout applies.
  await page.setViewport({ width: 1280, height: 1000, deviceScaleFactor: 2 });
  // Dev server keeps an HMR socket open, so don't wait for networkidle.
  await page.goto(URL, { waitUntil: "load", timeout: 90000 });
  await page.emulateMediaType("screen");
  // Wait for web fonts and every image to finish.
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(
    () =>
      Promise.all(
        [...document.images].map((img) =>
          img.complete && img.naturalWidth
            ? null
            : new Promise((res) => {
                img.addEventListener("load", res);
                img.addEventListener("error", res);
              })
        )
      )
  );
  // Let the reveal animation settle.
  await new Promise((r) => setTimeout(r, 1200));

  // Pin vh-based min-heights to fixed px. Otherwise `min-h-screen` (100vh)
  // re-expands against the huge PDF page height and the slides paginate.
  await page.evaluate(() => {
    document
      .querySelectorAll('[class*="min-h-screen"], section')
      .forEach((el) => {
        el.style.minHeight = el.getBoundingClientRect().height + "px";
      });
  });

  const height = await page.evaluate(() =>
    Math.ceil(document.documentElement.scrollHeight)
  );

  await page.pdf({
    path: OUT,
    printBackground: true,
    width: "1280px",
    height: height + "px",
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    scale: 1,
  });

  // Verification artifact: same render as a PNG so it can be eyeballed.
  await page.screenshot({ path: OUT.replace(/\.pdf$/, ".png"), fullPage: true });

  await browser.close();
  console.log("WROTE", OUT, "| content height:", height, "px");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
