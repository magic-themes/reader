<div>

# @magic-themes/reader

this is the
[@magic-themes](https://github.com/magic-themes)
reader theme.

It is being used in [explain.webboot](https://explain.webboot.org)

### installation

`npm install @magic-themes/reader`

## usage

### #usage- require

in /config.mjs

```
// config.mjs

export default {
  // ... other config
  THEME: 'reader',

  // multiple themes:
  THEME: ['reader', 'custom'],
}
```

### #usage- customize

you can customize and add any kind of style

create /assets/themes/reader/index.mjs, any css there will overwrite the theme css

```
// /assets/themes/reader/index.mjs

export default vars => ({
  body: {
    color: vars.colors.orange[900],
  },
})
```

magic will then find and merge the themes automatically, just as it did on this page.

<ThemeVars state></ThemeVars>

</div>
