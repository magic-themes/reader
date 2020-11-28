export const View = (props = {}, children = []) => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { menu, title, ...state } = props
  const { root } = state

  let { branding } = state

  if (!Array.isArray(branding)) {
    branding = [branding]
  }

  const [first, second, ...rest] = branding

  return header({ class: 'Header' }, [
    div({ class: 'BrandContainer' }, [
      div([
        Logo({ root }),
        branding && Link({ to: root, class: 'branding' }, [first, span(second), rest]),
      ]),
    ]),
    div({ class: 'Toc' }, [
      Burger(),
      h3({ title: 'Table of Contents' }, Link({ to: root }, 'ToC')),
      Menu({ state, items: menu, collapse: false }),
    ]),
  ])
}

export const style = vars => ({
  margin: 0,
  padding: '.5em 0 0',
  width: '100%',

  '.BrandContainer': {
    width: '100%',
    textAlign: 'center',

    '> div': {
      display: 'inline-block',
    },
  },

  'a, .Menu li a': {
    color: vars.white,

    '&:hover': {
      color: vars.link.hover.dark,
    },
  },

  '.branding': {
    color: vars.neutral,
    float: 'left',
    fontSize: '1.5em',
    lineHeight: '1',
    margin: '0.4em 0 0 0.2em',
    textDecoration: 'none',

    span: {
      color: vars.primary.neutral,
      fontSize: '1em',
      margin: '0',
    },
  },

  '> div': {
    margin: '0 auto',
    maxWidth: '1000px',
    padding: '0 5%',
  },

  [`@media screen and (min-width: ${(vars.widths && vars.widths.laptop) || '1024px'})`]: {
    margin: '0 0 0 200px',
    width: 'calc(100% - 200px)',
  },
})

export const propTypes = {
  Header: [{ key: 'menu', type: 'array' }],
}
