
const typeCheck = (method, api, request = undefined, headers = {}) => {
  if (typeof api !== 'string') {
    throw new TypeError(`${method} request expects first argument to be of type string.`)
  }
  if (request && (typeof request !== 'object' || Array.isArray(request))) {
    throw new TypeError(`${method} request expects second argument to be of type object literal.`)
  }
  if (typeof headers !== 'object' || Array.isArray(headers)) {
    throw new TypeError(`${method} request expects headers to be an object literal.`)
  }
}

const handleResponse = async response => {
  if (!response.ok) {
    const errorMessage = await response.text()
    throw new Error(`Status: ${response.status}, Message: ${errorMessage}`)
  }
  return response.json()
}

const server = {
  async get(api, headers = {}) {
    try {
      typeCheck('get', api, undefined, headers)
      const options = {
        headers: {
          ...headers
        }
      }
      const response = await fetch(api, options)
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
