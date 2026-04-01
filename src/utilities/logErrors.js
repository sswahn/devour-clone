
/* 
context = {
  component: 'HomeButton',
  action: 'onClick'
}
*/

function logErrors(error, context) {
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

export default logErrors
