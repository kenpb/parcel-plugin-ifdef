const TypeScriptAsset = require('parcel-bundler/src/assets/TypeScriptAsset')
const { parse } = require('ifdef-loader/preprocessor')
const { filterVariables } = require('./util')

class TsAssetIFDEF extends TypeScriptAsset {
  async pretransform() {
    // run the loader on the source
    this.contents = parse(this.contents, { ...filterVariables(process.env) })
    // continue the normal flow
    return await super.pretransform()
  }
}

module.exports = TsAssetIFDEF
