import camelCase from 'lodash/camelCase'

const requireLang = require.context(
  './en',
  true,
  /\.json$/
)

function loadLocaleMessages () {
  const messages = {}
  requireLang.keys().forEach((file) => {
    const path = file.replace(/(\.\/|\.json$)/g, '').split('/')
    path.reduce((o, s, i) => {
      const prop = camelCase(s)

      o[prop] = i + 1 === path.length
        ? requireLang(file)
        : o[prop] || {}

      return o[prop]
    }, messages)
  })
  return messages
}

export default loadLocaleMessages()
