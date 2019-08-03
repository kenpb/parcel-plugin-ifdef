const TypeScriptAsset = require('parcel-bundler/src/assets/TypeScriptAsset')
const { parse } = require('ifdef-loader/preprocessor')

class TsAsset extends TypeScriptAsset {
  async pretransform() {
    // run the loader on the source
    this.contents = parse(this.contents, { ...process.env })
    // continue the normal flow
    return await super.pretransform()
  }
}

module.exports = TsAsset
