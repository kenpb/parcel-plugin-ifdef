// workaround for: https://github.com/kenpb/parcel-plugin-ifdef/issues/2
export const filterEnvVariables = (variables) => variables.filter(env => !/\(|\)/.test(env))
