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
        gray:'#D9D9D9',
      },

      height:{
        h90:'90vh',
        box:'450px',
      },
      width:{
        box:'434px',
        text:'464px',
        fw:'702px'
      },
     borderColor:{
      bc:'#D9D9D9',
     },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
export default config
