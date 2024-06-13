import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "10": "10px",
        "11": "11px",
        "13": "13px",
        "15": "15px",
        "17": "17px",
        "19": "19px",
      },
      colors:{
        'pawpaw': "#ff5e00"
      }
    },
  },
  plugins: [],
};
export default config;
