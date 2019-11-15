import { env } from '../config/index.js'

class Model {
  constructor() {}

  api(options = {}) {

    if (!options.method) options.method = 'get'

    return new Promise((resolve, reject) => {
      wx.request({
        method: options.method,
        url: env.REQUEST_URL + options.url,
        data: options.data,
        success: function (res) {
          resolve(res)
        },
        fail: function (error) {
          reject(error)
        },
        complete: function (res) {
        }
      })
    })
  }

  get(options = {}) {
    options.method = 'GET'
    return this.api(options)
  }

  post(options = {}) {
    options.method = 'POST'
    return this.api(options)
  }

  put(options = {}) {
    options.method = 'PUT'
    return this.api(options)
  }

  delete(options = {}) {
    options.method = 'DELETE'
    return this.api(options)
  }
}

export { Model }
