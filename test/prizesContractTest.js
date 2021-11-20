console.log('blah')
const { expect } = require("chai")

const expectFailure = async (fn, err) => {
  let failure
  try {
    await fn()
  } catch (e) {
    failure = e
  }
  expect(failure.message).to.include(err)
}

const num = n => Number(ethers.utils.formatEther(n))

describe('Prizes', () => {
  it('should work', async () => {
    const [
      _, __,
      god,
      owner,
      grandPrizeWinner,
      firstRunnerUp,
      secondRunnerUp,
      loser,
      ...signers
    ] = await ethers.getSigners();


    const Prizes = await ethers.getContractFactory('Prizes', god);
    const PrizesContract = await Prizes.deploy();

    await PrizesContract.deployed();
    await PrizesContract.connect(god).transferOwnership(owner.address)
    await PrizesContract.connect(owner).batchSafeMint([
      owner.address,
      grandPrizeWinner.address,
      firstRunnerUp.address,
      secondRunnerUp.address,
      loser.address,
      owner.address,
      owner.address,
      owner.address,
    ])

    console.log(await PrizesContract.connect(owner).ownerOf(0))
    console.log(await PrizesContract.connect(owner).ownerOf(1))
    console.log(await PrizesContract.connect(owner).ownerOf(2))
    console.log(await PrizesContract.connect(owner).ownerOf(3))
    console.log(await PrizesContract.connect(owner).ownerOf(4))
    console.log(await PrizesContract.connect(owner).ownerOf(5))

    const metadata0 = await PrizesContract.connect(owner).tokenURI(1)
    console.log(metadata0)
    await PrizesContract.connect(owner).flipUseURIPointer()

    const metadata1 = await PrizesContract.connect(owner).tokenURI(1)
    console.log(metadata1)

    await PrizesContract.connect(owner).updateBaseUrl('www.bing.com/', '.html')

    const metadata2 = await PrizesContract.connect(owner).tokenURI(1)
    console.log(Buffer.from(metadata2.split(',')[1], 'base64').toString('utf-8'))

    await PrizesContract.connect(owner).updateMetadataParams(
      'prettyPictures/',
      '.jpg',
      'www.google.com/tokenPage/',
    )
    await PrizesContract.connect(owner).updateProjectDescription('new description')


    const metadata3 = await PrizesContract.connect(owner).tokenURI(1)
    console.log(Buffer.from(metadata3.split(',')[1], 'base64').toString('utf-8'))


    await PrizesContract.connect(owner).emitProjectEvent('Hello project')
    await PrizesContract.connect(owner).emitTokenEvent(1, 'Hello token 1')
    await PrizesContract.connect(grandPrizeWinner).emitTokenEvent(1, 'Hello token 1 holder')

    expectFailure(() => PrizesContract.connect(grandPrizeWinner).safeMint(grandPrizeWinner.address), 'Ownable:')
    expectFailure(() => PrizesContract.connect(grandPrizeWinner).batchSafeMint([grandPrizeWinner.address]), 'Ownable:')
    expectFailure(() => PrizesContract.connect(grandPrizeWinner).flipUseURIPointer(), 'Ownable:')
    expectFailure(() => PrizesContract.connect(grandPrizeWinner).updateBaseUrl('www.wrong.com', '.wrong'), 'Ownable:')
    expectFailure(() => PrizesContract.connect(grandPrizeWinner).emitProjectEvent('wrong project event'), 'Ownable:')
    expectFailure(() => PrizesContract.connect(grandPrizeWinner).emitTokenEvent(1, 'wrong token event'), 'Only project or token owner can emit token event')
    expectFailure(() => PrizesContract.connect(grandPrizeWinner).updateProjectDescription('wong description'), 'Ownable:')
    expectFailure(() => PrizesContract.connect(grandPrizeWinner).updateMetadataParams(
      'wrongPictures/',
      '.wrong',
      'www.wrong.com/wrongPage/',
    ), 'Ownable:')

  })

  xit('should measure gas cost', async () => {
    const [
      _, __,
      proxy,
      owner,
      ...signers
    ] = await ethers.getSigners();

    const startingBalance = num(await owner.getBalance())
    Prizes = await ethers.getContractFactory('IOU_IOU', owner);

    PrizesContract = await Prizes.deploy();
    await PrizesContract.deployed();

    await PrizesContract.connect(owner).setPredicateProxy(proxy.address)

    const addresses = []
    for (let i = 0; i < 250; i++) addresses.push(owner.address)
    await PrizesContract.connect(owner).batchWhiteList(addresses)
    const endingBalance = num(await owner.getBalance())

    console.log(startingBalance - endingBalance)
  })


  xit('ETH contract should work', async () => {
    const [
      _, __,
      god,
      proxy,
      owner,
      grandPrizeWinner,
      firstRunnerUp,
      secondRunnerUp,
      ...signers
    ] = await ethers.getSigners();


    Prizes = await ethers.getContractFactory('Prizes', god);

    PrizesContract = await Prizes.deploy();
    await PrizesContract.deployed();

    await PrizesContract.connect(god).transferOwnership(owner.address)


    await PrizesContract.connect(owner).safeMint(owner.address, 0)
    await PrizesContract.connect(owner).safeMint(grandPrizeWinner.address, 1)
    await PrizesContract.connect(owner).safeMint(firstRunnerUp.address, 2)
    await PrizesContract.connect(owner).safeMint(secondRunnerUp.address, 3)
    await PrizesContract.connect(owner).safeMint(loser.address, 4)
    await PrizesContract.connect(owner).safeMint(owner.address, 5)
    await PrizesContract.connect(owner).safeMint(owner.address, 6)

    console.log(await PrizesContract.connect(owner).ownerOf(0))
    console.log(await PrizesContract.connect(owner).ownerOf(1))
    console.log(await PrizesContract.connect(owner).ownerOf(2))
    console.log(await PrizesContract.connect(owner).ownerOf(3))
    console.log(await PrizesContract.connect(owner).ownerOf(4))
    console.log(await PrizesContract.connect(owner).ownerOf(5))

    const metadata = await PrizesContract.connect(owner).tokenURI(1)
    console.log(metadata)
    // console.log(Buffer.from(metadata.split(',')[1], 'base64').toString('utf-8'))

    await PrizesContract.connect(owner).flipUseURIPointer()

    const metadata2 = await PrizesContract.connect(owner).tokenURI(1)

    console.log(metadata2)
    // console.log(Buffer.from(metadata2.split(',')[1], 'base64').toString('utf-8'))

  })
})

