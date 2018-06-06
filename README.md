# XRP simple wallet generator

An XRP wallet is essentially just a private keypair. This tool allows you to generate one (or however many you desire) of these keys. You can then keep it as a cold (paper wallet) or add it to any reputable wallet software (Toast, Rippex) and you'll be able to access any of the features they support.

## Credits

The code used in this tool is a stripped back version of WietseWind's xrp-vanity-generator (https://github.com/WietseWind/xrp-vanity-generator)
I have to give him credit for both the code (which is amazing, yet simple), and some of the below instructions.

Check him out on Twitter: [@WietseWind](https://twitter.com/WietseWind)

## How to use this tool

1. Make sure you have **nodejs** installed on your computer:
[https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm).
(nodejs allowes you to run Javascript code on your computer from the commandline).
2. Download the source of this repository (using `git clone` or by downloading the zip)
3. Start your commandline and go to the folder containing the source of this repository
4. Install the dependency (ripple-lib) by running `npm install`
5. Fire up the tool and **append the number of private keys desire**:
```
node xrpwallet.js 5
```

The example command above will create five wallets (private keypairs).

## Notes

- If you want to be make sure the generated wallets / keys are safe, generate offline.

### Security / randomness

> Serious question. How do we know these addresses are random and not some sort of sequence? [@ Reddit](https://www.reddit.com/r/Ripple/comments/7u9wmc/create_your_own_fancy_wallet_address_open_source/dtinlkd/)

Good question indeed. The only way to be sure is to check the code;

Wietse original code [is over here](https://github.com/WietseWind/xrp-vanity-generator/blob/master/xrpwallet.js) and as you can see is invoking the method "api.generateAddress()" - and on line 1 and 2:

    const rippleLib  = require('ripple-lib').RippleAPI
    const api        = new rippleLib()

... It uses **ripple-lib** to do this. [ripple-lib](https://github.com/ripple/ripple-lib) is from Ripple (the company) - this code is open source as well.

[This](https://github.com/ripple/ripple-lib/blob/develop/src/offline/generate-address.ts) is how they generate a keypair. They use their own lib [ripple-keypairs](https://github.com/ripple/ripple-keypairs) to do this. The function is on [line 17 over here](https://github.com/ripple/ripple-keypairs/blob/master/src/index.js) and at line 19 you can see they use the **brorand** lib. to [generate the randomness](https://github.com/indutny/brorand/blob/master/index.js). This lib. uses the **crypto** object, a native NodeJS object, by invoking:

    crypto.randomBytes()

More info about this method [over here](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback).

### Feeling generous?

WietseWind's details are below if you want to check out his stuff, or give him a well deserved donation.
If this tool helped you out and you're feeling more generous than I deserve, feel free to tip my XRP address r3d764J1rtwnhHXv1FiwWU95nSoWfFofHt

Tips are highly appreciated at XRP address `rPdvC6ccq8hCdPKSPJkPmyZ4Mi1oG2FFkT` or using
the [XRP TipBot](https://xrptipbot.com) at Twitter: [@WietseWind](https://twitter.com/WietseWind) 😇
