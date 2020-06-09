const TypeScriptAsset = require('parcel-bundler/src/assets/TypeScriptAsset')
const { parse } = require('ifdef-loader/preprocessor')
const { filterEnvVariables } = require('./util')

class TsAssetIFDEF extends TypeScriptAsset {
  async pretransform() {
    // run the loader on the source
    this.contents = parse(this.contents, { ...filterEnvVariables(process.env) })
    // continue the normal flow
    return await super.pretransform()
  }
}

module.exports = TsAssetIFDEF
