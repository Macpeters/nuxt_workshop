export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  inject('myInjectedFunction', string => console.log('That was easy!', string))
}
