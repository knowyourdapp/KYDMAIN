# Dependecies:

- @solana/web3.js
- @solana/spl-token

## how to use this

```
npm install @solana/web3.js
npm install @solana/spl-token
npm install express

node token.js
```

## call api demo

```
POST: http://127.0.0.1:3000/send-token
{
  "fromSecretKey": [100, 27, 245, 177, 107, 90, 225, 54, 176, 210, 127, 22, 49, 148, 203, 42, 160, 67, 187, 106, 109, 61, 236, 177, 209, 122, 17, 141, 100, 213, 183, 246, 252, 9, 191, 203, 3, 45, 125, 99, 251, 79, 16, 106, 204, 206, 134, 12, 130, 25, 44, 173, 102, 70, 170, 108, 209, 26, 148, 33, 122, 72, 103, 15],
  "toPublicKey": "4uStFcSh8ptepTsQBfvwQkEokjUKtj4knYgx6oqUF6Vx",
  "mintAddress": "99Wo6VwDLsRHEQWuyuc3TvTRFAwDBCkGeREwR2bJCcF7",
  "amount": 100
}
```

- fromSecretKey is the secret key of the sender
- toPublicKey is the public key of the receiver
- mintAddress is the mint address of the token
- amount is the amount of the token to send.
