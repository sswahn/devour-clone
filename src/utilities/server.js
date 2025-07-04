import cache from './cache'

const typeCheck = (method, api, request = undefined, headers = {}) => {
  if (typeof api !== 'string') {
    throw new TypeError(`${method} request expects first argument to be of type string.`)
  }
  if (request && (typeof request !== 'object' || Array.isArray(request))) {
    throw new TypeError(`${method} request expects second argument to be of type object literal.`)
  }
  if (headers && (typeof headers !== 'object' || Array.isArray(headers))) {
    throw new TypeError(`${method} request expects headers to be an object literal.`)
  }
}

const handleResponse = async response => {
  if (!response.ok) {
    const errorMessage = await response.text()
    throw new Error(`${response.status}: ${errorMessage}`)
  }
  // Handle 204 No Content or empty body
  if (response.status === 204 || response.headers.get('Content-Length') === '0') {
    return { success: true, message: 'No content' }
  }
  return response.json()
}

const server = {
  async get(api, headers = {}) {
    try {
      typeCheck('get', api, undefined, headers)
      const request = new Request(api, {
        method: 'get',
        headers: { ...headers }
      })
      const cachedResponse = await cache.get('main', request)
      if (cachedResponse) {
        return handleResponse(cachedResponse)
      }
      const response = await fetch(request)
      await cache.set('main', request, response)
      return handleResponse(response)
    } catch (error) {
      throw new Error(`Failed to execute GET request. ${error}`)
    }
  },
  async post(api, request, headers = {}) {
    try {
      typeCheck('post', api, request, headers)
      const options = {
        method: 'post',
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      }
      const response = await fetch(api, options)
      return handleResponse(response)
    } catch (error) {
      throw new Error(`Failed to execute POST request. ${error}`)
    }
  },
  async put(api, request, headers = {}) {
    try {
      typeCheck('put', api, request, headers)
      const options = {
        method: 'put',
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      }
      const response = await fetch(api, options)
      return handleResponse(response)
    } catch (error) {
      throw new Error(`Failed to execute PUT request. ${error}`)
    }
  },
  async delete(api, headers = {}) {
    try {
      typeCheck('delete', api, undefined, headers)
      const options = {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      }
      const response = await fetch(api, options)
      return handleResponse(response)
    } catch (error) {
      throw new Error(`Failed to execute DELETE request. ${error}`)
    }
  }
}

export default server
