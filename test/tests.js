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


describe('NaturalFlavors', () => {
  it('should work', async () => {
    const [
      _, __,
      devWallet,
      owner,
      tokenHolder1,
      tokenHolder2,
      tokenHolder3,
      ...signers
    ] = await ethers.getSigners()


    const NaturalFlavors = await ethers.getContractFactory('NaturalFlavors', devWallet)
    const NaturalFlavorsContract = await NaturalFlavors.deploy(
      'https://steviep.xyz',
      'https://steviep.xyz/images/',
      'NFT #',
      '',
      'https://steviep.xyz/',
      'Base NFT contract',
      owner.address
    )

    await NaturalFlavorsContract.deployed()

    await NaturalFlavorsContract.connect(owner).safeMint(owner.address)
    await NaturalFlavorsContract.connect(owner).safeMint(tokenHolder1.address)
    await NaturalFlavorsContract.connect(owner).safeMint(tokenHolder2.address)
    await NaturalFlavorsContract.connect(owner).safeMint(tokenHolder3.address)

    console.log(await NaturalFlavorsContract.connect(owner).ownerOf(1))
    console.log(await NaturalFlavorsContract.connect(owner).ownerOf(2))
    console.log(await NaturalFlavorsContract.connect(owner).ownerOf(3))
    console.log(await NaturalFlavorsContract.connect(owner).ownerOf(4))


    const metadata0 = await NaturalFlavorsContract.connect(owner).tokenURI(1)
    console.log(Buffer.from(metadata0.split(',')[1], 'base64').toString('utf-8'))

    await NaturalFlavorsContract.connect(owner).flipUseURIPointer()

    await NaturalFlavorsContract.connect(owner).updateBaseUrl('www.bing.com/', '.html')
    const metadata1 = await NaturalFlavorsContract.connect(owner).tokenURI(1)
    console.log(metadata1)

    await NaturalFlavorsContract.connect(owner).flipUseURIPointer()

    const metadata2 = await NaturalFlavorsContract.connect(owner).tokenURI(1)
    console.log(Buffer.from(metadata2.split(',')[1], 'base64').toString('utf-8'))

    await NaturalFlavorsContract.connect(owner).updateMetadataParams(
      'Edition',
      ' out of 256',
      'prettyPictures/',
      '.jpg',
      'www.google.com/tokenPage/',
      'MIT'
    )
    await NaturalFlavorsContract.connect(owner).updateProjectDescription('new description')


    const metadata3 = await NaturalFlavorsContract.connect(owner).tokenURI(1)
    console.log(Buffer.from(metadata3.split(',')[1], 'base64').toString('utf-8'))


    await NaturalFlavorsContract.connect(owner).emitProjectEvent('projectGreeting', 'Hello project')
    await NaturalFlavorsContract.connect(owner).emitTokenEvent(1, 'tokenGreeting', 'Hello token 1')
    await NaturalFlavorsContract.connect(tokenHolder1).emitTokenEvent(2, 'tokenGreeting', 'Hello token 2 holder')

    await expectFailure(() => NaturalFlavorsContract.connect(tokenHolder2).safeMint(tokenHolder2.address), 'Caller is not the minting address')
    await expectFailure(() => NaturalFlavorsContract.connect(tokenHolder2).flipUseURIPointer(), 'Ownable:')
    await expectFailure(() => NaturalFlavorsContract.connect(tokenHolder2).updateBaseUrl('www.wrong.com', '.wrong'), 'Ownable:')
    await expectFailure(() => NaturalFlavorsContract.connect(tokenHolder2).emitProjectEvent('projectGreeting', 'wrong project event'), 'Ownable:')
    await expectFailure(() => NaturalFlavorsContract.connect(tokenHolder2).emitTokenEvent(1, 'tokenGreeting', 'wrong token event'), 'Only project or token owner can emit token event')
    await expectFailure(() => NaturalFlavorsContract.connect(tokenHolder2).updateProjectDescription('wong description'), 'Ownable:')
    await expectFailure(() => NaturalFlavorsContract.connect(tokenHolder2).updateMetadataParams(
      '@',
      ' of 257',
      'wrongPictures/',
      '.wrong',
      'www.wrong.com/wrongPage/',
      'ISC'
    ), 'Ownable:')



    await NaturalFlavorsContract.connect(tokenHolder1).setApprovalForAll(tokenHolder2.address, true)
    await NaturalFlavorsContract.connect(owner).setOperatorDenial(tokenHolder2.address, true)

    const safeTransferFrom = "safeTransferFrom(address,address,uint256)"
    await expectFailure(() =>
      NaturalFlavorsContract.connect(tokenHolder2)[safeTransferFrom](tokenHolder1.address, tokenHolder3.address, 2)
    , 'Operator denied')


    await NaturalFlavorsContract.connect(tokenHolder1)[safeTransferFrom](tokenHolder1.address, tokenHolder3.address, 2)
  })
})