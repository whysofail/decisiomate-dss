/** u/type {import('tailwindcss').Config} */
module.exports = {
  //...
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], 
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8b5cf6",
          secondary: "#c1faff",
          accent: "#fff763",
          neutral: "#232434",
          "base-100": "#f3f4f6",
          info: "#276bf1",
          success: "#1ac759",
          warning: "#c17c06",
          error: "#ed5754",
        },
      },
    ],
  },
};
