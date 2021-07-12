const { WETH } = require("@sushiswap/sdk");

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const factoryAddress = (await deployments.get("UniswapV2Factory")).address;
  const wethAddress = (await deployments.get("WETH9")).address;

  await deploy("UniswapV2Router02", {
    from: deployer,
    args: [factoryAddress, wethAddress],
    log: true,
    deterministicDeployment: false,
  });
};

module.exports.tags = ["UniswapV2Router02"];
module.exports.dependencies = ["UniswapV2Factory", "WETH9"];
