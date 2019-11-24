module.exports = bundler => {
  bundler.addAssetType('ts', require.resolve('./ts-asset'))
  bundler.addAssetType('tsx', require.resolve('./ts-asset'))
  bundler.addAssetType('jsx', require.resolve('./js-asset'))
  bundler.addAssetType('js', require.resolve('./js-asset'))
  bundler.addAssetType('es6', require.resolve('./js-asset'))
}
