import { Model } from './index.js'

class ExampleModel extends Model {
  constructor() {
    super()
  }

  getUserInfo (options = {}) {
    options.url = '/...'
    return this.get(options)
  }
}

const exampleModel = new ExampleModel()
export default exampleModel