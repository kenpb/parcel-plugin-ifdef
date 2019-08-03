module.exports = bundler => {
  bundler.addAssetType('ts', require.resolve('./ts-asset'))
  bundler.addAssetType('tsx', require.resolve('./ts-asset'))
}
