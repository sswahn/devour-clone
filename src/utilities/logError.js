
/* 
context = {
  component: 'HomeButton',
  action: 'onClick',
  userId: context.user.id
}
*/

function logError(error, context = {}) {

  return console.error('Basic error: ', error)

  // dedupe:
  if (error.__logged) {
    return
  }
  error.__logged = true
  
  const payload = {
    message: error.message,
    stack: error.stack,
    name: error.name,
    context,
    timestamp: Date.now(),
    userAgent: navigator.userAgent
  }
  
  console.log('logErrors: ', JSON.stringify(payload))
  
  // make request to sentry
}

export default logError
