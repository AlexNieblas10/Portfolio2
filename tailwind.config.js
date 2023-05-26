/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./***"], 
  theme: {
    extend: {
      backgroundImage: {
        firstDesktop: "url('../assets/svgs/fistBackgroundDesktopDM.svg')",
        firstDesktopWhite: "url('../assets/svgs/fistBackgroundDesktop.svg')",
        tecnologias: "url('../assets/svgs/tecnologiasDesktop.svg')",
        experiencia: "url('../assets/svgs/experiencia.svg')",
        endMobile: "url('../assets/svgs/endBackgroundMobile.svg')",
        firstMobileWhite: "url('../assets/svgs/firstBackgroundMobile.svg')",
        firstMobile: "url('../assets/svgs/firstBackgroundMobileDM.svg')",
        proyectos: "url('../assets/svgs/proyectos.svg')"
      },
    },
  },
  plugins: [],
};
