const mode = 'dev' // dev | prod

const env = require(`./${mode}.js`)

module.exports = {
  env,
  mode
}