export * as Burger from './Burger.mjs'
export * as Header from './Header.mjs'
export * as Footer from './Footer.mjs'

export const vars = {
  pageBackground: {
    dark: '#eeeeee',
    light: '#f0f0f0',
  },

  menuWidth: '200px',

  link: {
    dark: '#8f6ab4',
    light: '#8f6ab4',

    hover: {
      dark: 'rebeccapurple',
      light: '#412162',
    },
  },

  background: {
    dark: '#212121',
    light: '#e0e0e0',
  },

  neutral: '#5a5a5a',

  primary: {
    dark: '#412162',
    light: 'rebeccapurple',
    neutral: '#8f6ab4',
  },

  text: {
    dark: '#c4c4c4',
    light: '#212121',
  },

  white: '#ffffff',

  maxWidth: '1200px',

  fadeDuration: '500ms',

  widths: {
    tablet: '500px',
    laptop: '1024px',
    desktop: '1600px',
  },
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    body: {
      fontFamily: [
        '"Ubuntu Narrow"',
        'Ubuntu',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Helvetica',
        'sans-serif',
      ].join(', '),

      lineHeight: '2',
    },

    '#Magic': {
      backgroundColor: v.background.dark,
      color: v.text.dark,
      transition: `color ${v.fadeDuration}, background-color ${v.fadeDuration}`,

      '&.light': {
        backgroundColor: v.background.light,
        color: v.text.light,
      },
    },

    '.Page': {
      '> div': {
        fontSize: '1.55vw',
        padding: '5%',
        width: '100%',
        maxWidth: 'inherit',
        width: '90vw',
        height: '125vw',
        backgroundColor: v.pageBackground.dark,
        color: v.text.light,
        margin: '0 auto 2em',
        boxShadow: `6px 6px 3px 1px ${v.neutral}`,

        '.light &&': {
          backgroundColor: v.pageBackground.light,
        },
      },
    },

    'h1,h2,h3': { color: v.primary.neutral },
    h1: { fontSize: '1.5em' },
    h2: { fontSize: '1.4em' },
    h3: { fontSize: '1.3em' },
    h4: { fontSize: '1.2em' },
    h5: { fontSize: '1.1em', padding: 0 },

    ul: {
      width: '100%',
    },

    p: {
      margin: '0 0 0.4em',
    },

    a: {
      color: v.link.dark,
      transition: `color ${v.fadeDuration}`,

      '&:hover': {
        color: v.link.hover.dark,
      },

      '.light &&': {
        color: v.link.light,

        '&:hover': {
          color: v.link.hover.light,
        },
      },
    },

    i: {
      fontStyle: 'italic',
    },

    b: {
      fontWeight: 700,
    },

    'img, svg': {
      maxWidth: '100%',
      maxHeight: '100%',
    },

    '.Wrapper': {
      width: '100%',
      maxWidth: 'inherit',
    },

    '.Header': {
      position: 'relative',
      zIndex: 1,

      '.Toc': {
        padding: '0',
        position: 'fixed',
        left: '-197px',
        top: 0,
        width: v.menuWidth,
        height: '100vh',
        backgroundColor: v.neutral,
        transition: `left ${v.fadeDuration}`,

        '.Menu': {
          direction: 'rtl',
          height: '80vh',
          overflowY: 'auto',
          padding: '0 0 0 .5em',
          scrollbarColor: `${v.background.dark} ${v.neutral}`,
          scrollbarWidth: 'thin',

          ul: {
            direction: 'ltr',
          },
        },

        '&:hover, &:focus': {
          left: 0,
        },
      },

      h3: {
        margin: 0,
        padding: '0 0 0 .3em',
      },

      '.Menu': {
        margin: 0,
        lineHeight: 1,
        float: 'none',

        li: {
          float: 'none',
          margin: '0 0 1em',
        },

        ul: {
          ul: {
            position: 'relative',
            margin: '0.5em 0 0 5%',
          },
        },

        a: {
          color: v.link.hover.dark,

          '&:hover': {
            color: v.primary.neutral,
          },
        },
      },
    },

    '.Footer': {
      zIndex: 0,

      '.Container': {
        width: '80vw',
        maxWidth: 'inherit',
        padding: 0,
      },
    },

    '.LightSwitch': {
      position: 'fixed',
      bottom: '0.5em',
      right: '0.5em',
    },

    '.Gdpr': {
      left: 'auto',
      right: '0.5em',

      '.ShowHide': {
        left: 'auto',
        bottom: '3em',
        right: '0.5em',
      },
    },

    [`@media screen and (min-width: ${v.widths.laptop})`]: {
      '.Page': {
        '> div': {
          fontSize: '1vw',
          height: `calc(125vw - ${v.menuWidth})`,
          margin: `0 calc(2vw + ${v.menuWidth}) 2em`,
          width: `calc(90vw - ${v.menuWidth})`,
        },
      },

      '.Header': {
        '.Toc': {
          left: 0,
        },
        '.Menu': {
          li: {
            margin: '0 0 0.5em',
          },
        },
      },

      '.Footer': {
        '.Container': {
          width: '55vw',
        },
      },
    },
  }
}
