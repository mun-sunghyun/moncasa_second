/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/css/**/*.css",
  ],
  theme: {
    extend: {
      colors:{
        basic : "#F6F1EB",
      },
      fontFamily:{
        cafe24: ['Cafe24Classic', 'sans-serif'],
        pretendard: ['Pretendard-Regular', 'sans-serif'],
        pretendardMedium: ['Pretendard-Medium', 'sans-serif'],
        pretendardSemiBold: ['Pretendard-SemiBold', 'sans-serif'],
        pretendardBold: ['Pretendard-Bold', 'sans-serif'],        
      },
      maxWidth: {        
        'custom': '1450px', // 원하는 최대 너비 설정
        'wide': '1920px',      
      },
    },
  },
  plugins: [],
}

