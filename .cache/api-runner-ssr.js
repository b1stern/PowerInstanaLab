var plugins = [{
      plugin: require('/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Carbon Design Gatsby Theme","icon":"src/images/favicon.svg","short_name":"Gatsby Theme Carbon","start_url":"/","background_color":"#ffffff","theme_color":"#0062ff","display":"browser","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"983518b19848eae6cfeb24d757f74f96"},
    },{
      plugin: require('/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-unwrap-images"},{"resolve":"gatsby-remark-smartypants"},{"resolve":"gatsby-remark-images","options":{"maxWidth":1152,"linkImagesToOriginal":false,"quality":75,"withWebp":false,"pngCompressionSpeed":4}},{"resolve":"gatsby-remark-responsive-iframe"},{"resolve":"gatsby-remark-copy-linked-files"}],"remarkPlugins":[],"defaultLayouts":{"default":"/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab/node_modules/gatsby-theme-carbon/src/templates/Default.js","home":"/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab/node_modules/gatsby-theme-carbon/src/templates/Homepage.js"},"lessBabel":false,"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab"},
    },{
      plugin: require('/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Carbon Design Gatsby Theme","short_name":"Gatsby Theme Carbon","start_url":"/","background_color":"#ffffff","theme_color":"#0f62fe","display":"browser","icon":"/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab/src/images/custom-icon-512.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"b9f7bc7184653bc99b220354e52aaf46"},
    },{
      plugin: require('/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab/node_modules/gatsby-theme-carbon/gatsby-ssr'),
      options: {"plugins":[],"iconPath":"./src/images/custom-icon-512.png","isSearchEnabled":true,"repository":{"baseUrl":"https://github.com/b1stern/PowerInstanaLab","subDirectory":"/","branch":"master"}},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
