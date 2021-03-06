module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js",
    "./components/UIElements/*.js",
  ],
  safelist: [],
  theme: {
    fontFamily: {
      body: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
      code: ["Roboto Mono", "monospace"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        DEFAULT: "#ffffff",
      },
      green: {
        lighter: "#E2F5EA",
        light: "#6fcf97",
        DEFAULT: "#27AE60",
        dark: "#219653",
        text: "#1e874b",
        bright: "#00AA45",
      },
      red: {
        light: "#FFEAEA",
        DEFAULT: "#EB5757",
        dark: "#C20D0D",
      },
      orange: {
        light: "#FFEBDA",
        DEFAULT: "#F66A0A",
        dark: "#A04100",
      },
      yellow: {
        DEFAULT: "#F2C94C",
        light: " #FFF6E7",
        bright: "#FFA10D",
      },
      gray: {
        DEFAULT: "#444D56",
        gray0: "#fafbfc",
        gray1: "#F6F8FA",
        gray2: "#E1E4E8",
        gray3: "#D1D5DA",
        gray4: "#959DA5",
        gray5: "#6A737D",
        gray6: "#586069",
        gray7: "#444D56",
        gray8: "#2F363D",
        gray9: "#24292E",
        bg1: "#F8F9FB",
        grayBg2: "#FAF8F6",
        gray1k: "#0D0D0D",
      },
      primary: {
        DEFAULT: "#212121",
      },
      warning: {
        DEFAULT: "#D1711C",
      },
      lighter: {
        DEFAULT: "#9696BB",
      },
      light: {
        DEFAULT: "#6A737D",
      },
      primaryBorder: {
        DEFAULT: "#E1E4E8",
      },
    },
    extend: {
      screens: {
        xs: "320px",
      },
      inset: {
        "70px": "69px",
        "61px": "61px",
        "40cent": "40%",
        150: "150px",
      },
      height: {
        35: "8.75rem",
        3.7: "3.5rem",
        17.5: "70px",
        200: "200px",
        120: "120px",
      },
      width: {
        35: "8.75rem",
        3.7: "3.5rem",
        200: "200px",
        300: "300px",
        400: "400px",
        600: "600px",
        "80p": "80%",
        "100p": "100%",
        "32p": "32%",
        "64p": "64%",
        "55p": "55%",
      },
      minHeight: {
        35: "8.75rem",
        3.7: "3.5rem",
        20: "5rem",
      },
      minWidth: {
        35: "8.75rem",
        "50vw": "50vw",
        "40vw": "40vw",
        200: "200px",
        tab: "100px",
      },
      maxHeight: {
        modal: "34rem",
        144: "144px",
        "40px": "40px",
      },
      maxWidth: {
        screen: "1200px",
        screenSmall: "999px",
        700: "697px",
        view: "100vw",
      },
      boxShadow: {
        default: "0px 10px 20px rgba(150, 150, 187, 0.1)",
        bold: "4px 4px 0px #212121",
        bolder: "8px 8px 0px #212121",
      },
      fontSize: {
        "2rem": "2rem",
        40: "40px",
        80: "80px",
        96: "96px",
        "5.5xl": "56px",
        h2: "64px",
        xxs: "10px",
      },
      lineHeight: {
        120: "120%",
        125: "125%",
        140: "140%",
        145: "145%",
      },
      padding: {
        "10px": "10px",
        "7px": "7px",
        5.5: "22px",
        17: "4.25rem",
      },
      margin: {
        0.5: "2px",
        3.5: "14px",
        26: "6.5rem",
        30: "120px",
        300: "300px",
        200: "200px",
      },
      letterSpacing: {
        "tight-2": "-0.02em",
      },
      zIndex: {
        "-10": "-10",
      },
      borderWidth: {
        1: "1px",
      },
      top: {
        150: "150px",
      },
      right: {
        _5: "-5px",
      },
    },
  },
  plugins: [],
};
