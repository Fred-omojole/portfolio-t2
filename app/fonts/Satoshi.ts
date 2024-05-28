import localFont from "next/font/local";

// Define font families for normal and italic styles
export const satoshi = {
  normal: localFont({
    src: [
      {
        path: "./Satoshi-Black.eot",
        weight: "900",
        style: "normal",
      },
      {
        path: "./Satoshi-Black.ttf",
        weight: "900",
        style: "normal",
      },
      {
        path: "./Satoshi-Black.woff",
        weight: "700",
        style: "normal",
      },
      {
        path: "./Satoshi-Black.woff2",
        weight: "700",
        style: "normal",
      },
    ],
  }),
  italic: localFont({
    src: [
      {
        path: "./Satoshi-Black.ttf",
        weight: "900",
        style: "italic",
      },
      {
        path: "./Satoshi-Black.woff2",
        weight: "700",
        style: "italic",
      },
    ],
  }),
};
