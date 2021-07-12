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

## Deployed testnet contracts
WETH9: `0x48690Cc897e7fEB8605A0B8d4754D9d187b91F38`  
SushiToken: `0x2d52e036D8810220b07f668Ed9bD2EC9CE9bB66E`  
UniswapV2Router02: `0x55ffec903264f037736c87ba78db639607908c15`  
MiniChefV2: `0x88A7b9143C3fa4d032AA3F2fa1d299b5A5704249`  
MasterChef: `0x817Abc5895d294a66156931f24AE6e91590511Da`  
SushiBar: `0xE96076C79891d6925E8e6a07aD25BF6B45a70c0e`  
SushiMaker: `0xf5e8933D726C33Ef1FcEfd26B4EA6A86A0Ba1E67`  
SushiRoll: `0x78520A1b65e8A442019Aa762E0baEa767a5106B1`  
UniswapV2Factory(Sushiswap protocol): `0x86454ca325D03b85Ac77a982791865d532B4f68e`  
UniswapV2Router02(Sushiswap protocol): `0x353a5384A688118d451AF60c4B7eBdf64E77543c`  
