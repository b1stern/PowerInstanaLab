module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Carbon Design Gatsby Theme","icon":"src/images/favicon.svg","short_name":"Gatsby Theme Carbon","start_url":"/","background_color":"#ffffff","theme_color":"#0062ff","display":"browser","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"983518b19848eae6cfeb24d757f74f96"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-lunr/gatsby-browser.js'),
      options: {"plugins":[],"languages":[{"name":"en"}],"fields":[{"name":"title","store":true,"attributes":{"boost":30}},{"name":"keywords"},{"name":"path","store":true},{"name":"description","store":true},{"name":"content"}],"resolvers":{"SitePage":{}}},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-unwrap-images"},{"resolve":"gatsby-remark-smartypants"},{"resolve":"gatsby-remark-images","options":{"maxWidth":1152,"linkImagesToOriginal":false,"quality":75,"withWebp":false,"pngCompressionSpeed":4}},{"resolve":"gatsby-remark-responsive-iframe"},{"resolve":"gatsby-remark-copy-linked-files"}],"remarkPlugins":[],"defaultLayouts":{"default":"/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab/node_modules/gatsby-theme-carbon/src/templates/Default.js","home":"/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab/node_modules/gatsby-theme-carbon/src/templates/Homepage.js"},"lessBabel":false,"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Carbon Design Gatsby Theme","short_name":"Gatsby Theme Carbon","start_url":"/","background_color":"#ffffff","theme_color":"#0f62fe","display":"browser","icon":"/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab/src/images/custom-icon-512.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"b9f7bc7184653bc99b220354e52aaf46"},
    },{
      plugin: require('../node_modules/gatsby-theme-carbon/gatsby-browser.js'),
      options: {"plugins":[],"iconPath":"./src/images/custom-icon-512.png","isSearchEnabled":true,"repository":{"baseUrl":"https://github.com/b1stern/PowerInstanaLab","subDirectory":"/","branch":"master"}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
