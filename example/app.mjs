export const state = {
  logotext: '@magic-themes/reader',
  menu: [
    { to: '/#installation', text: 'installation' },
    {
      to: '/#usage',
      text: 'usage',
      items: [
        { to: '-require', text: 'require' },
        { to: '-customize', text: 'customize' },
      ],
    },
  ],

  footer: {
    one: {
      title: '@magic',
      before: ['jamstack generator', 'created by', 'Wizards & Witches'],
    },
    two: {
      title: 'organizations',
      menu: [
        { to: 'https://github.com/magic', text: '@magic' },
        { to: 'https://github.com/magic/core', text: '@magic/core' },
        { to: 'https://github.com/magic-modules', text: '@magic-modules' },
        { to: 'https://github.com/magic-libraries', text: '@magic-libraries' },
        { to: 'https://github.com/magic-themes', text: '@magic-themes' },
      ],
    },
    three: {
      title: 'social links',
      menu: [
        { to: 'https://www.npmjs.com/org/magic', text: 'npm' },
        { to: 'https://github.com/magic', text: 'github' },
      ],
    },
  },


  vars: {
    pageBackground: {
      dark: '#eeeeee',
      light: '#f0f0f0',
    },

    link: {
      dark: '#ea4444',
      light: '#ea4444',

      hover: {
        dark: '#c4c4c4',
        light: '#212121',
      },
    },

    background: {
      dark: '#212121',
      light: '#e0e0e0',
    },

    neutral: '#5a5a5a',

    primary: {
      dark: '#412162',
      light: '#8f6ab4',
      neutral: 'rebeccapurple',
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
  },
}
