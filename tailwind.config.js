/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		container: {
			center:true,
			padding: '15px',
		},
		screens:{
			sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1280px'
		}, 
		fontFamily: {
			primary: "var(--font-jetbrainsMono)" 
		},
  	extend: {
			keyframes:{
				"accordion-down":{
					from: {height:'0'},
					to: {height:'100vh'}
				},
			},
  		colors: {
  			primary: "#1c1c22",
				accent:{
					DEFAULT: "#00ff99",
					hover:"#00e187",
				}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
