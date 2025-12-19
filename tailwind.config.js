/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/css/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        basic: "var(--c-basic)",
        text: "var(--c-text)",
        main: "var(--c-main)",
        sub: "var(--c-sub)",
        white: "var(--c-white)",
      },
      fontFamily:{
        cafe24: ['Cafe24Classic', 'sans-serif'],
        pretendard: ['Pretendard-Regular', 'sans-serif'],
        pretendardMedium: ['Pretendard-Medium', 'sans-serif'],
        pretendardSemiBold: ['Pretendard-SemiBold', 'sans-serif'],
        pretendardBold: ['Pretendard-Bold', 'sans-serif'],        
      },
      maxWidth: {
        "sm": "var(--mw-1280)",
        "custom": "var(--mw-1450)",
        "md": "var(--mw-1650)",
        "wide": "var(--mw-1920)",
      },
      fontSize: {
        "event-main": "var(--fs-event-main)",
        "event-sub": "var(--fs-event-sub)",
        "event-mid": "var(--fs-event-mid)",
        "title-lg": "var(--fs-title-lg)",
        "title-md": "var(--fs-title-md)",
        "body-md": "var(--fs-body-md)",
        "body-sm": "var(--fs-body-sm)",
      },
    },
  },
  plugins: [],
}

