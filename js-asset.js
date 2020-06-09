const JSAsset = require('parcel-bundler/src/assets/JSAsset')
const { parse } = require('ifdef-loader/preprocessor')

class JSAssetIFDEF extends JSAsset {
  async pretransform() {
    // run the loader on the source
    this.contents = parse(this.contents, { ...filterVariables(process.env) })
    // continue the normal flow
    return await super.pretransform()
  }
}

module.exports = JSAssetIFDEF
