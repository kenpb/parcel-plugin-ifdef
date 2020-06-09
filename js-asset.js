const JSAsset = require('parcel-bundler/src/assets/JSAsset')
const { parse } = require('ifdef-loader/preprocessor')
const { filterEnvVariables } = require('./util')

class JSAssetIFDEF extends JSAsset {
  async pretransform() {
    // run the loader on the source
    this.contents = parse(this.contents, { ...filterEnvVariables(process.env) })
    // continue the normal flow
    return await super.pretransform()
  }
}

module.exports = JSAssetIFDEF
