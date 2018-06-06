const rippleLib  = require('ripple-lib').RippleAPI
const api        = new rippleLib()
const inputCount    = process.argv[2]
const MAX_COUNT = 20

console.log('')
console.log('\x1b[35m%s\x1b[0m', 'XRP Simple Wallet Generator')
console.log('\x1b[35m%s\x1b[0m', '   by @retryWhore (Twitter)')
console.log('')

if (inputCount > 0) {

  if(inputCount > 20) {
	  console.log('Excessive number of wallets chosen, defaulting to ' + MAX_COUNT + '.')
	  count = MAX_COUNT
  }
  else {
	  count = inputCount
  }
	console.log('Generating ' + count + ' wallets:')

  for (let i = 0; i < count; i++) {
    account = api.generateAddress();
	address = account.address
    console.log(' > Address ' + (i+1) + ': [ ' + address + ' ] with secret [ ' + account.secret + ' ]')
  }
  console.log('')
  console.log('The "address" is public and what you give people to send you XRP.')
  console.log('The "secret" \x1b[4mIS\x1b[0m your wallet; \x1b[4mDO NOT LOSE\x1b[0m the secret once youve activated (with 20+ XRP), or let anyone else see it.')
  console.log('Access to the secret (private) key means access to your XRP. Exercise caution! and HODL :D')

} else {
  console.log('Please enter the desired number of wallets (greater than zero) after the script to generate.')
  console.log('Eg. "node xrpgenerator.js 5"')
  console.log('')
  process.exit(0)
}