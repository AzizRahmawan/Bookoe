/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './*.html',
    './src/**/*.{js,jsx}',
    './node_modules/preline/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin')
] 
}

