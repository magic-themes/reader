<div>

# @magic-themes/reader

this is the
[@magic-themes](https://github.com/magic-themes)
reader theme.
It is being used in [explain.webboot](https://explain.webboot.org)

<h3 id="installation">installation</h3>

<Pre>npm install magic-themes/reader</Pre>

<h2 id="usage">usage</h2>

<h3 id="usage-require">require in config.mjs:</h3>

<Pre>
// config.mjs

export default {
  // ... other config
  THEME: 'reader',
}
</Pre>

<h3 id="usage-customize">customize / overwrite</h3>

you can customize and add any kind of style

create /assets/themes/reader/index.mjs, any css there will overwrite the theme css

<Pre>
// /assets/themes/reader/index.mjs

export default vars => ({
  body: {
    color: vars.colors.orange[900],
  },
})
</Pre>

magic will then find and merge the themes automatically, just as it did on this page.

</div>
