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
      owner,
      tokenHolder1,
      tokenHolder2,
      tokenHolder3,
      ...signers
    ] = await ethers.getSigners()


    const NaturalFlavors = await ethers.getContractFactory('NaturalFlavors', owner)
    const NaturalFlavorsContract = await NaturalFlavors.deploy(
      'https://steviep.xyz/',
    )

    await NaturalFlavorsContract.deployed()

    await NaturalFlavorsContract.connect(owner).mint(owner.address)
    await NaturalFlavorsContract.connect(owner).mint(tokenHolder1.address)
    await NaturalFlavorsContract.connect(owner).mint(tokenHolder2.address)
    await NaturalFlavorsContract.connect(owner).mint(tokenHolder3.address)

    console.log(await NaturalFlavorsContract.connect(owner).ownerOf(0))
    console.log(await NaturalFlavorsContract.connect(owner).ownerOf(1))
    console.log(await NaturalFlavorsContract.connect(owner).ownerOf(2))
    console.log(await NaturalFlavorsContract.connect(owner).ownerOf(3))


    const metadata0 = await NaturalFlavorsContract.connect(owner).tokenURI(0)
    expect(metadata0).to.equal('https://steviep.xyz/0.json')

    await NaturalFlavorsContract.connect(owner).updateBaseUrl('https://bing.com/', '.xml')
    const metadata0updated = await NaturalFlavorsContract.connect(owner).tokenURI(0)
    expect(metadata0updated).to.equal('https://bing.com/0.xml')

    await NaturalFlavorsContract.connect(owner).updateTokenMetadata(0, '{"name": "something"}', true)
    const metadata0updatedAgain = await NaturalFlavorsContract.connect(owner).tokenURI(0)
    const metadata0Parsed = Buffer.from(metadata0updatedAgain.split(',')[1], 'base64').toString('utf-8')
    expect(metadata0Parsed).to.equal('{"name": "something"}')

    await NaturalFlavorsContract.connect(owner).updateTokenMetadata(0, '', false)
    const metadata0updatedYetAgain = await NaturalFlavorsContract.connect(owner).tokenURI(0)
    expect(metadata0updatedYetAgain).to.equal('https://bing.com/0.xml')

    await NaturalFlavorsContract.connect(owner).updateTokenMetadata(0, 'ipfs://blahblahblah', false)
    const metadata0updatedOneMoreTime = await NaturalFlavorsContract.connect(owner).tokenURI(0)
    expect(metadata0updatedOneMoreTime).to.equal('ipfs://blahblahblah')

    const metadata1 = await NaturalFlavorsContract.connect(owner).tokenURI(1)
    expect(metadata1).to.equal('https://bing.com/1.xml')






    await NaturalFlavorsContract.connect(owner).emitProjectEvent('projectGreeting', 'Hello project')
    await NaturalFlavorsContract.connect(owner).emitTokenEvent(1, 'tokenGreeting', 'Hello token 1')
    await NaturalFlavorsContract.connect(tokenHolder1).emitTokenEvent(1, 'tokenGreeting', 'Hello token 2 holder')

    await expectFailure(() => NaturalFlavorsContract.connect(tokenHolder2).mint(tokenHolder2.address), 'Caller is not the minting address')
    await expectFailure(() => NaturalFlavorsContract.connect(tokenHolder2).updateTokenMetadata(0, 'blah', false), 'Ownable:')
    await expectFailure(() => NaturalFlavorsContract.connect(tokenHolder2).updateBaseUrl('www.wrong.com', '.wrong'), 'Ownable:')
    await expectFailure(() => NaturalFlavorsContract.connect(tokenHolder2).emitProjectEvent('projectGreeting', 'wrong project event'), 'Ownable:')
    await expectFailure(() => NaturalFlavorsContract.connect(tokenHolder2).emitTokenEvent(1, 'tokenGreeting', 'wrong token event'), 'Only project or token owner can emit token event')
    await expectFailure(() => NaturalFlavorsContract.connect(tokenHolder2).updateLicense('open source'), 'Ownable')
    await expectFailure(() => NaturalFlavorsContract.connect(tokenHolder2).updatRoyaltyInfo(tokenHolder2.address, 69), 'Ownable:')


    // await NaturalFlavorsContract.connect(tokenHolder1).setApprovalForAll(tokenHolder2.address, true)
    // await NaturalFlavorsContract.connect(owner).setOperatorDenial(tokenHolder2.address, true)

    // const safeTransferFrom = "safeTransferFrom(address,address,uint256)"
    // await expectFailure(() =>
    //   NaturalFlavorsContract.connect(tokenHolder2)[safeTransferFrom](tokenHolder1.address, tokenHolder3.address, 1)
    // , 'Operator denied')


    // await NaturalFlavorsContract.connect(tokenHolder1)[safeTransferFrom](tokenHolder1.address, tokenHolder3.address, 1)
  })
})