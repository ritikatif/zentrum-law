import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
     fontFamily:{
        inter:['var(--font-inter)']
     },
      colors:{
        lightGray:'#D9D9D954',
        gray:'#D9D9D9',
        darkGray:'#A9A9A9',
      },

      height:{
        h80:'80vh',
        h90:'90vh',
        box:'450px',
        h411:'411px',
      },
      width:{
        box:'434px',
        text:'464px',
        fw:'702px',
        w556:'556px',
        w475:'475px',
      },
     borderColor:{
      bc:'#D9D9D9',
     },
     lineHeight:{
      aboutBanner:'74px',
     },
     fontSize:{
      aboutBanner:'28px',
     },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
export default config
