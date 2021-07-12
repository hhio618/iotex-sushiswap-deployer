# Deploy sushiswap on top of the IoTeX network

## Quickstart
1. Prepare the environment
```sh
$ cp .env.example .env # edit with your favorite editor!
```
2. Install deps 
```sh
$ npm i -g hardhat
$ npm i
```
3. Deploy weth9, uniswapv2 and sushi token.
```sh
$ npx hardhat --network iotextestnet deploy
```
4. Clone my sushiswap fork (this includes required configs for the iotex network that could be merged to sushiswap repo)
```sh
$ git clone https://github.com/hhio618/sushiswap
```
5. Set env variabels
```sh
$ cp .env.example .env # edit with your favorite editor!
```
6. Deploy sushiswap on top of IoTeX network.
```sh
$ npx hardhat --network iotextestnet deploy
```

## Deployed contracts

