import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        bigDarkGray: "rgb(78, 76, 76)",
        blue: "rgb(28, 98, 158)",
        dark: "rgb(45, 45, 45)",
        darkGray: "rgb(123, 123, 123)",
        gray: "rgb(240, 240, 240)",
        pale: "rgb(235, 245, 253)",
        yellow: "rgb(255, 207, 98)",
      },
    },
  },
};
export default config;
