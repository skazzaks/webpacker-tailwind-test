/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.


|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

// let defaultConfig = require('tailwindcss/defaultConfig')()

/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/

let colors = {
  transparent: "transparent",

  black: "#000000",
  "grey-darkest": "#3d4852",
  "grey-darker": "#606f7b",
  "grey-dark": "#8795a1",
  grey: "#b8c2cc",
  "grey-light": "#889796",
  "grey-lighter": "#f1f5f8",
  "grey-lightest": "#f1f1f1",
  white: "#ffffff",

  oat: "#EDCCA5",
  "oat-less-light": "#e8e3da",
  "oat-light": "#F1ECE4",
  "oat-lighter": "#f8f6f2",
  "oat-lightest": "#FAF9F7",

  // 'red-darkest': '#3b0d0c',
  // 'red-darker': '#621b18',
  // 'red-dark': '#cc1f1a',
  // 'red': '#e3342f',
  // 'red-light': '#ef5753',
  // 'red-lighter': '#f9acaa',
  // 'red-lightest': '#fcebea',

  // 'orange-darkest': '#462a16',
  // 'orange-darker': '#613b1f',
  // 'orange-dark': '#de751f',
  orange: "#E8A879",
  // 'orange-light': '#faad63',
  // 'orange-lighter': '#fcd9b6',
  // 'orange-lightest': '#fff5eb',

  // 'yellow-darkest': '#453411',
  // 'yellow-darker': '#684f1d',
  // 'yellow-dark': '#f2d024',
  // 'yellow': '#ffed4a',
  // 'yellow-light': '#fff382',
  // 'yellow-lighter': '#fff9c2',
  // 'yellow-lightest': '#fcfbeb',

  "green-darkest": "#12302D",
  // 'green-darker': '#1a4731',
  // 'green-dark': '#1f9d55',
  green: "#53C07D",
  "green-light": "#A0E0B2",
  "green-light-accessible": "#ACD0B6"
  // 'green-lighter': '#a2f5bf',
  // 'green-lightest': '#e3fcec',

  // 'teal-darkest': '#0d3331',
  // 'teal-darker': '#20504f',
  // 'teal-dark': '#38a89d',
  // 'teal': '#4dc0b5',
  // 'teal-light': '#64d5ca',
  // 'teal-lighter': '#a0f0ed',
  // 'teal-lightest': '#e8fffe',

  // 'blue-darkest': '#12283a',
  // 'blue-darker': '#1c3d5a',
  // 'blue-dark': '#2779bd',
  // 'blue': '#3490dc',
  // 'blue-light': '#6cb2eb',
  // 'blue-lighter': '#bcdefa',
  // 'blue-lightest': '#eff8ff',

  // 'indigo-darkest': '#191e38',
  // 'indigo-darker': '#2f365f',
  // 'indigo-dark': '#5661b3',
  // 'indigo': '#6574cd',
  // 'indigo-light': '#7886d7',
  // 'indigo-lighter': '#b2b7ff',
  // 'indigo-lightest': '#e6e8ff',

  // 'purple-darkest': '#21183c',
  // 'purple-darker': '#382b5f',
  // 'purple-dark': '#794acf',
  // 'purple': '#9561e2',
  // 'purple-light': '#a779e9',
  // 'purple-lighter': '#d6bbfc',
  // 'purple-lightest': '#f3ebff',

  // 'pink-darkest': '#451225',
  // 'pink-darker': '#6f213f',
  // 'pink-dark': '#eb5286',
  // 'pink': '#f66d9b',
  // 'pink-light': '#fa7ea8',
  // 'pink-lighter': '#ffbbca',
  // 'pink-lightest': '#ffebef',
};

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    colors: colors,
    screens: {
      xs: "420px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      menu: "1100px",
      xl: "1300px"
    },
    fontFamily: {
      sans: [
        "Graphik--web"
        // 'Roboto',
        // 'Fira Sans',
        // 'Droid Sans',
        // 'sans-serif',
      ],
      serif: [
        "Chap--web"
        // 'Lucida Serif',
        // 'Lucida',
        // 'Georgia',
        // 'serif',
      ]
    },
    fontSize: {
      xs: ".75rem", // 12px
      sm: ".875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.375rem", // 22px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "2.5rem", // 40px
      "6xl": "3.5rem", // 56px
      "10xl": "4.25rem" // 68px
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    lineHeight: {
      none: 1,
      tight: 1.35,
      normal: 1.5,
      loose: 1.75
    },
    letterSpacing: {
      tight: "-0.05em",
      normal: "0",
      narrow: "0.0362rem",
      wide: "0.05em"
    },
    textColor: colors,
    backgroundColor: colors,
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain"
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "3": "3px",
      "8": "8px"
    },
    borderColor: global.Object.assign({ default: colors["grey-light"] }, colors),
    borderRadius: {
      none: "0",
      sm: ".125rem",
      default: ".25rem",
      lg: ".5rem",
      full: "9999px"
    },
    width: {
      auto: "auto",
      px: "1px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "8": "2rem",
      "10": "2.5rem",
      "12": "3rem",
      "16": "4rem",
      "18": "4.5rem",
      "20": "5rem",
      "24": "6rem",
      "32": "8rem",
      "48": "12rem",
      "64": "16rem",
      "1/2": "50%",
      "1/3": "33.33333%",
      "2/3": "66.66667%",
      "1/4": "25%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.66667%",
      "5/6": "83.33333%",
      full: "100%",
      screen: "100vw"
    },
    height: {
      auto: "auto",
      px: "1px",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "8": "2rem",
      "10": "2.5rem",
      "12": "3rem",
      "16": "4rem",
      "18": "4.5rem",
      "24": "6rem",
      "32": "8rem",
      "48": "12rem",
      "64": "16rem",
      full: "100%",
      screen: "100vh"
    },
    minWidth: {
      "0": "0",
      full: "100%"
    },
    minHeight: {
      "0": "0",
      full: "100%",
      screen: "100vh"
    },
    maxWidth: {
      xs: "20rem",
      sm: "30rem",
      md: "40rem",
      lg: "50rem",
      xl: "60rem",
      "2xl": "70rem",
      "3xl": "80rem",
      "4xl": "90rem",
      "5xl": "100rem",
      full: "100%"
    },
    maxHeight: {
      full: "100%",
      screen: "100vh"
    },
    padding: {
      px: "1px",
      "0": "0",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "8": "2rem",
      "10": "2.5rem",
      "12": "3rem",
      "14": "3.75rem", // 60px
      "15": "3.875rem", // 62px
      "16": "4rem",
      "18": "4.5rem",
      "20": "5rem",
      "22": "5.5rem",
      "24": "6rem",
      "28": "7.5rem",
      "30": "7.75rem",
      "32": "8.75rem",
      "40": "10.25rem"
    },
    margin: {
      auto: "auto",
      px: "1px",
      "0": "0",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "8": "2rem",
      "10": "2.5rem",
      "12": "3rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "30": "7.5rem",
      "32": "8rem",
      "-px": "-1px",
      "-1": "-0.25rem",
      "-2": "-0.5rem",
      "-3": "-0.75rem",
      "-4": "-1rem",
      "-5": "-1.25rem",
      "-6": "-1.5rem",
      "-8": "-2rem",
      "-10": "-2.5rem",
      "-12": "-3rem",
      "-16": "-4rem",
      "-20": "-5rem",
      "-24": "-6rem",
      "-32": "-8rem"
    },
    boxShadow: {
      default: "0 2px 4px 0 rgba(0,0,0,0.10)",
      md: "0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)",
      lg: "0 4px 32px 0 rgba(0,0,0,0.2)",
      inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
      outline: "0 0 0 3px rgba(52,144,220,0.5)",
      none: "none"
    },
    zIndex: {
      auto: "auto",
      "0": 0,
      "10": 10,
      "20": 20,
      "30": 30,
      "40": 40,
      "50": 50
    },
    opacity: {
      "0": "0",
      "25": ".25",
      "50": ".5",
      "75": ".75",
      "100": "1"
    },
    fill: {
      current: "currentColor"
    },
    stroke: {
      current: "currentColor"
    },
  },
  /* Close out theme*/

  variants: {
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    cursor: ['responsive'],
    display: ['responsive'],
    fill: [],
    flex: [],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
  },
  corePlugins: {},
  plugins: [],
}
