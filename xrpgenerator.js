const rippleLib  = require('ripple-lib').RippleAPI
const api        = new rippleLib()
const count    = process.argv[2]

console.log('\x1b[35m%s\x1b[0m', 'XRP Simple Wallet Generator')
console.log('\x1b[35m%s\x1b[0m', '   by @retryWhore (Twitter)')
console.log('')

if (count.length > 0) {

  console.log('Generating ' + process.argv[2] + ' wallets (private keypairs):')

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
  console.log('Please enter the desired number of addresses after the script to generate.')
  console.log('Eg. "node ' + process.argv[1] + ' 5"')
  console.log('')
  process.exit(0)
}
