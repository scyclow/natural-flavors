

async function main(contractType) {
  const [owner] = await ethers.getSigners();


  Prizes = await ethers.getContractFactory('Prizes', owner);

  PrizesContract = await Prizes.deploy();
  await PrizesContract.deployed();

  const mints = []
  for (let i = 0; i < 50; i++) {
    mints.push(owner.address)
  }

  await PrizesContract.connect(owner).batchSafeMint(mints)

  console.log(`Prizes Contract Address: ${PrizesContract.address}`)

}



main(process.env.CONTRACT)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });