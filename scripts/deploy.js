async function main() {
    const [deployer] = await ethers.getSigners();

    // const NaturalFlavorsFactory = await ethers.getContractFactory('NaturalFlavors', deployer);

    // const NaturalFlavors = await NaturalFlavorsFactory.deploy(
    //   'https://steviep.xyz/natural-flavors/metadata/',
    // );
    // await NaturalFlavors.deployed();
    // await NaturalFlavors.connect(deployer).batchMint([
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    //   deployer.address,
    // ])

    const NaturalFlavorsFinderFactory = await ethers.getContractFactory('NaturalFlavorsFinder', deployer)
    NaturalFlavorsFinder = await NaturalFlavorsFinderFactory.deploy('0x6BF1A8C173Fe275Ae608f64Cac422a33d2081A73')
    // NaturalFlavorsFinder = await NaturalFlavorsFinderFactory.deploy(NaturalFlavors.address)

    // const safeTransferFrom = "safeTransferFrom(address,address,uint256)"

    // await NaturalFlavors.connect(deployer)[safeTransferFrom](deployer.address, NaturalFlavorsFinder.address, 49)
    // await NaturalFlavors.connect(deployer)[safeTransferFrom](deployer.address, NaturalFlavorsFinder.address, 48)
    // await NaturalFlavors.connect(deployer)[safeTransferFrom](deployer.address, NaturalFlavorsFinder.address, 47)
    // await NaturalFlavors.connect(deployer)[safeTransferFrom](deployer.address, NaturalFlavorsFinder.address, 46)
    // await NaturalFlavors.connect(deployer)[safeTransferFrom](deployer.address, NaturalFlavorsFinder.address, 45)

    // console.log(NaturalFlavors.address)
    console.log(NaturalFlavorsFinder.address)


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });