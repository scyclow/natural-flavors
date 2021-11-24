async function main() {
    const [deployer] = await ethers.getSigners();

    const NaturalFlavors = await ethers.getContractFactory('NaturalFlavors', deployer);

    const naturalFlavorsContract = await NaturalFlavors.deploy(
      'ipfs://bafybeicsnpw5rn77326e6j245knn6eecqe3bt2vhvtveggwrwzkeifhzqm/',
    );
    await naturalFlavorsContract.deployed();


    console.log(naturalFlavorsContract.address)


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });