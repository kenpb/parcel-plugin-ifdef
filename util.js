/**
 * Delete environment variables that are not valid JavaScript variable names.
 * @param {Record<string, string>} variables
 * @returns {Record<string, string>}
 * @see https://github.com/kenpb/parcel-plugin-ifdef/issues/2
 */
function filterEnvVariables(variables) {
  const result = {}
  for (const [key, value] of Object.entries(variables)) {
    if (/^[A-Za-z_$][A-Za-z_$0-9]*$/.test(key)) {
      result[key] = value
    }
  }
  return result
}

exports.filterEnvVariables = filterEnvVariables
