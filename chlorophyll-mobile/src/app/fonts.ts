import localFont from "next/font/local";

// Clash Display — display / headings. Self-hosted via next/font (zero layout shift).
export const clashDisplay = localFont({
  variable: "--font-clash",
  display: "swap",
  src: [
    { path: "./fonts/clash-display/ClashDisplayExtralight.woff2", weight: "200", style: "normal" },
    { path: "./fonts/clash-display/ClashDisplayLight.woff2", weight: "300", style: "normal" },
    { path: "./fonts/clash-display/ClashDisplayRegular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/clash-display/ClashDisplayMedium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/clash-display/ClashDisplaySemibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/clash-display/ClashDisplayBold.woff2", weight: "700", style: "normal" },
  ],
});

// Gilroy — body / UI.
export const gilroy = localFont({
  variable: "--font-gilroy",
  display: "swap",
  src: [
    { path: "./fonts/gilroy/Gilroy-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/gilroy/Gilroy-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/gilroy/Gilroy-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/gilroy/Gilroy-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/gilroy/Gilroy-Bold.ttf", weight: "700", style: "normal" },
  ],
});
