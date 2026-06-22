const sharp = require("sharp");

const IN = "public/assets/strategy-brain-arch.jpeg";
const OUT = "public/assets/strategy-brain-arch-2x.png";
const SCALE = 3;

(async () => {
  const m = await sharp(IN).metadata();
  await sharp(IN)
    .resize({
      width: m.width * SCALE,
      height: m.height * SCALE,
      kernel: "lanczos3",
    })
    .sharpen({ sigma: 1.1 })
    .png({ compressionLevel: 9 })
    .toFile(OUT);
  const o = await sharp(OUT).metadata();
  console.log(`IN ${m.width}x${m.height}  ->  OUT ${o.width}x${o.height}`);

  // crop a representative region (lower pipeline/infra area) for eyeballing.
  await sharp(OUT)
    .extract({ left: 0, top: Math.round(o.height * 0.62), width: Math.min(o.width, 2000), height: 700 })
    .toFile("C:/tmp/upscaled-crop.png");
  console.log("crop written");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
