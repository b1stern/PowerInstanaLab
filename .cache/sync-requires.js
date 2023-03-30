

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": (preferDefault(require("/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab/src/pages/404.js"))),
  "component---src-pages-contributions-mdx": (preferDefault(require("/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab/src/pages/contributions.mdx"))),
  "component---src-pages-index-mdx": (preferDefault(require("/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab/src/pages/index.mdx"))),
  "component---src-pages-tutorials-administration-index-mdx": (preferDefault(require("/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab/src/pages/tutorials/Administration/index.mdx"))),
  "component---src-pages-tutorials-diagnose-index-mdx": (preferDefault(require("/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab/src/pages/tutorials/Diagnose/index.mdx"))),
  "component---src-pages-tutorials-explore-index-mdx": (preferDefault(require("/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab/src/pages/tutorials/Explore/index.mdx"))),
  "component---src-pages-tutorials-install-index-mdx": (preferDefault(require("/Users/bstern/tivoli/Best_Practices/PowerInstanaLab/PowerInstanaLab/src/pages/tutorials/Install/index.mdx")))
}

