const puppeteer = require("puppeteer-core");
(async () => {
  const b = await puppeteer.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: "new",
    args: ["--no-sandbox", "--hide-scrollbars"],
  });
  const p = await b.newPage();
  await p.setViewport({ width: 1280, height: 1000, deviceScaleFactor: 2 });
  await p.goto("http://localhost:3000/agentic-spectrum", { waitUntil: "load", timeout: 90000 });
  await p.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 1000));
  const fig = await p.$("#architecture figure");
  await fig.scrollIntoViewIfNeeded?.();
  await new Promise((r) => setTimeout(r, 400));
  await fig.screenshot({ path: "C:/tmp/arch-fig.png" });
  await b.close();
  console.log("done");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
