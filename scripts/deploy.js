async function main() {
    const [deployer] = await ethers.getSigners();

    const NaturalFlavors = await ethers.getContractFactory('NaturalFlavors', deployer);

    const naturalFlavorsContract = await NaturalFlavors.deploy(
      'https://steviep.xyz/natural-flavors/metadata/',
    );
    await naturalFlavorsContract.deployed();
    await naturalFlavorsContract.connect(deployer).batchMint([
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
      deployer.address,
    ])



    console.log(naturalFlavorsContract.address)


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });