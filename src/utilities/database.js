const DEFAULT_CONFIG = {
  storeName: 'store',
  dbName: 'indexedDB',
  dbVersion: 1,
  keyPath: 'id'
}

let dbInstance = null

const openDatabase = async storeConfigs => {
  if (dbInstance) {
    return dbInstance
  }
  
  storeConfigs = Array.isArray(storeConfigs) ? storeConfigs : [storeConfigs]

  const config = { 
    ...DEFAULT_CONFIG, 
    ...storeConfigs[0] 
  }
  return new Promise((resolve, reject) => {
    const connection = indexedDB.open(config.dbName, config.dbVersion)
    connection.onupgradeneeded = event => {
      const db = event.target.result
      storeConfigs.forEach(storeConfig => {
        if (!db.objectStoreNames.contains(storeConfig.storeName)) {
          const store = db.createObjectStore(storeConfig.storeName, { keyPath: storeConfig.keyPath || config.keyPath })
          storeConfig.indexes && storeConfig.indexes.forEach(index => {
            store.createIndex(index.name, index.keyPath, { unique: index.unique })
          })
        }
      })
    }
    connection.onsuccess = () => {
      dbInstance = connection.result
      resolve(dbInstance)
    }
    connection.onerror = ({ target: { error } }) => {
      reject(new Error(`Failed to open DB: ${error}`))
    }
  })
}

const executeRequest = async (storeConfigs, storeName, mode, operation, data) => {
  const db = await openDatabase(storeConfigs)
  const transaction = db.transaction(storeName, mode)
  const objectStore = transaction.objectStore(storeName)
  const request = data ? objectStore[operation](data) : objectStore[operation]()

  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      resolve(request.result)
    }
    request.onerror = ({ target: { error } }) => {
      reject(new Error(`Failed to execute ${operation} on ${storeName}: ${error}`))
    }
  })
}

const database = (storeConfigs = [DEFAULT_CONFIG]) => {
  return {
    get(key, storeName = DEFAULT_CONFIG.storeName) {
      return executeRequest(storeConfigs, storeName, 'readonly', 'get', key)
    },
    async getAll(storeName = DEFAULT_CONFIG.storeName) {
      const db = await openDatabase(storeConfigs)
      const transaction = db.transaction(storeName, 'readonly')
      const objectStore = transaction.objectStore(storeName)
      const request = objectStore.getAll()
  
      return new Promise((resolve, reject) => {
        request.onsuccess = () => {
          resolve(request.result)
        }
        request.onerror = ({ target: { error } }) => {
          reject(new Error(`Failed to retrieve all records from ${storeName}: ${error}`))
        }
      })
    },
    add(data, storeName = DEFAULT_CONFIG.storeName) {
      return executeRequest(storeConfigs, storeName, 'readwrite', 'add', data)
    },
    put(data, storeName = DEFAULT_CONFIG.storeName) {
      return executeRequest(storeConfigs, storeName, 'readwrite', 'put', data)
    },
    delete(key, storeName = DEFAULT_CONFIG.storeName) {
      return executeRequest(storeConfigs, storeName, 'readwrite', 'delete', key)
    },
    destroy(dbName = DEFAULT_CONFIG.dbName) {
      return new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(dbName)
        request.onsuccess = () => {
          if (dbInstance) {
            dbInstance.close()
            dbInstance = null
          }
          resolve(`Database ${dbName} deleted successfully.`)
        }
        request.onerror = ({ target: { error } }) => {
          reject(new Error(`Failed to delete ${dbName}: ${error}`))
        }
      })
    },
    async addAll(items, storeName = DEFAULT_CONFIG.storeName) {
      const db = await openDatabase(storeConfigs)
      const transaction = db.transaction(storeName, 'readwrite')
      const objectStore = transaction.objectStore(storeName)
      items.forEach(item => objectStore.add(item))

      return new Promise((resolve, reject) => {
        transaction.oncomplete = () => {
          resolve(`Successfully added ${items.length} items to ${storeName}.`)
        }
        transaction.onerror = () => {
          reject(new Error(`Failed to add items to ${storeName}.`))
        }
        transaction.onabort = ({ target: { error } }) => {
          reject(new Error(`Transaction aborted while adding items to ${storeName}: ${error}`))
        }
      })
    },
    async count(storeName = DEFAULT_CONFIG.storeName) {
      const db = await openDatabase(storeConfigs)
      const transaction = db.transaction(storeName, 'readonly')
      const objectStore = transaction.objectStore(storeName)
      const request = objectStore.count()
  
      return new Promise((resolve, reject) => {
        request.onsuccess = () => {
          resolve(request.result)
        }
        request.onerror = ({ target: { error }}) => {
          reject(new Error(`Failed to retrieve count of records from ${storeName}: ${error}`))
        }
      })
    },
    close() {
      if (dbInstance) {
        dbInstance.close()
        dbInstance = null
      }
    }
  }
}

export default database
