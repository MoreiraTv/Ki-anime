const withImages = require('next-images')
// module.exports = {
  //   webpack: (config, { isServer }) => {
    //     if (isServer) {
      //       require("./scripts/sitemap-generator");
      //     }
      //     return config;
      //   },
      //   staticPageGenerationTimeout: 3500,
      // }
      
      // const withImages = require('next-images')
      // // require("./scripts/sitemap-generator");
      // // module.exports = sitemap
      // module.exports = withImages()
module.exports =  withImages({
  future:{
    webpack5: true
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      if (isServer) {
        console.log(isServer)
        // require("./scripts/sitemap-generator");
      }
    return config;
  },
  staticPageGenerationTimeout: 3500,
})