/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#02A435",
        },
        titileText: {
          DEFAULT: "#333333",
        },
        noteText: {
          DEFAULT: "#999999",
        },
        noteText2: {
          DEFAULT: "#666666",
        },
      },
      boxShadow: {
        aptitude: "0px 4px 16px 0px rgba(2,16,83,0.08)",
      },
    },
  },
  variants: {},
  plugins: [],
};
