const { expect } = require('chai')
const { ethers, waffle } = require('hardhat')


function times(t, fn) {
  const out = []
  for (let i = 0; i < t; i++) out.push(fn(i))
  return out
}

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

    await NaturalFlavorsContract.connect(owner).batchMint([
      owner.address,
      tokenHolder1.address,
      tokenHolder2.address,
      tokenHolder3.address,
    ])


    expect(await NaturalFlavorsContract.connect(owner).ownerOf(0)).to.equal(owner.address)
    expect(await NaturalFlavorsContract.connect(owner).ownerOf(1)).to.equal(tokenHolder1.address)
    expect(await NaturalFlavorsContract.connect(owner).ownerOf(2)).to.equal(tokenHolder2.address)
    expect(await NaturalFlavorsContract.connect(owner).ownerOf(3)).to.equal(tokenHolder3.address)
    expect(await NaturalFlavorsContract.connect(owner).ownerOf(4)).to.equal(owner.address)
    expect(await NaturalFlavorsContract.connect(owner).ownerOf(5)).to.equal(tokenHolder1.address)
    expect(await NaturalFlavorsContract.connect(owner).ownerOf(6)).to.equal(tokenHolder2.address)
    expect(await NaturalFlavorsContract.connect(owner).ownerOf(7)).to.equal(tokenHolder3.address)

    const metadata0 = await NaturalFlavorsContract.connect(owner).tokenURI(0)
    expect(metadata0).to.equal('https://steviep.xyz/0.json')

    await NaturalFlavorsContract.connect(owner).updateBaseUrl('https://bing.com/', '.xml')
    const metadata0updated = await NaturalFlavorsContract.connect(owner).tokenURI(0)
    expect(metadata0updated).to.equal('https://bing.com/0.xml')

    await NaturalFlavorsContract.connect(owner).updateTokenMetadata(0, '{"name": "something"}')
    const metadata0updatedAgain = await NaturalFlavorsContract.connect(owner).tokenURI(0)
    const metadata0Parsed = Buffer.from(metadata0updatedAgain.split(',')[1], 'base64').toString('utf-8')
    expect(metadata0Parsed).to.equal('{"name": "something"}')

    await NaturalFlavorsContract.connect(owner).updateTokenMetadata(0, '')
    const metadata0updatedYetAgain = await NaturalFlavorsContract.connect(owner).tokenURI(0)
    expect(metadata0updatedYetAgain).to.equal('https://bing.com/0.xml')

    const metadata1 = await NaturalFlavorsContract.connect(owner).tokenURI(1)
    expect(metadata1).to.equal('https://bing.com/1.xml')



    await NaturalFlavorsContract.connect(owner).emitProjectEvent('projectGreeting', 'Hello project')
    await NaturalFlavorsContract.connect(owner).emitTokenEvent(1, 'tokenGreeting', 'Hello token 1')
    await NaturalFlavorsContract.connect(tokenHolder1).emitTokenEvent(1, 'tokenGreeting', 'Hello token 2 holder')

    await expectFailure(() => NaturalFlavorsContract.connect(tokenHolder2).mint(tokenHolder2.address), 'Caller is not the minting address')
    await expectFailure(() => NaturalFlavorsContract.connect(tokenHolder2).updateTokenMetadata(0, 'blah'), 'Ownable:')
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

describe.only('NaturalFlavorFinder', () => {
  let owner, claimer1, claimer2, signers
  let NaturalFlavors, NaturalFlavorsFinder

  beforeEach(async () => {
    const signers = await ethers.getSigners()
    owner = signers[0]
    claimer1 = signers[1]
    claimer2 = signers[2]


    const NaturalFlavorsFactory = await ethers.getContractFactory('NaturalFlavors', owner)
    NaturalFlavors = await NaturalFlavorsFactory.deploy('https://steviep.xyz/')

    await NaturalFlavors.deployed()
    await NaturalFlavors.connect(owner).batchMint(times(50, () => owner.address))

    const NaturalFlavorsFinderFactory = await ethers.getContractFactory('NaturalFlavorsFinder', owner)
    NaturalFlavorsFinder = await NaturalFlavorsFinderFactory.deploy(NaturalFlavors.address)

    const safeTransferFrom = "safeTransferFrom(address,address,uint256)"

    await NaturalFlavors.connect(owner)[safeTransferFrom](owner.address, NaturalFlavorsFinder.address, 49)
    await NaturalFlavors.connect(owner)[safeTransferFrom](owner.address, NaturalFlavorsFinder.address, 48)
    await NaturalFlavors.connect(owner)[safeTransferFrom](owner.address, NaturalFlavorsFinder.address, 47)
    await NaturalFlavors.connect(owner)[safeTransferFrom](owner.address, NaturalFlavorsFinder.address, 46)
    await NaturalFlavors.connect(owner)[safeTransferFrom](owner.address, NaturalFlavorsFinder.address, 45)
  })

  describe('constructor', () => {
    it('should work', async () => {
      const ownerAddr = await NaturalFlavorsFinder.owner()
      const nfAddr = await NaturalFlavorsFinder.naturalFlavorsContract()

      expect(owner.address).to.equal(ownerAddr)
      expect(NaturalFlavors.address).to.equal(nfAddr)

      expect(await NaturalFlavorsFinder.connect(owner).claimed(49)).to.equal(false)
      expect(await NaturalFlavorsFinder.connect(owner).claimed(48)).to.equal(false)
      expect(await NaturalFlavorsFinder.connect(owner).claimed(47)).to.equal(false)
      expect(await NaturalFlavorsFinder.connect(owner).claimed(46)).to.equal(false)
      expect(await NaturalFlavorsFinder.connect(owner).claimed(45)).to.equal(false)
    })
  })

  describe('transferOwnership', () => {
    it('should transfer ownership', async () => {
      await NaturalFlavorsFinder.connect(owner).transferOwnership(claimer1.address)

      const newOwner = await NaturalFlavorsFinder.owner()
      expect(newOwner).to.equal(claimer1.address)
    })
    it('should revert if called by non owner', async () => {
      await expectFailure(
        () => NaturalFlavorsFinder.connect(claimer2).transferOwnership(claimer1.address),
        'Ownable: caller is not the owner'
      )
    })
  })

  describe('ownerWithdraw', () => {
    it('should revert if called by non owner', async () => {
      await expectFailure(
        () => NaturalFlavorsFinder.connect(claimer2).ownerWithdraw(49),
        'Ownable: caller is not the owner'
      )
    })

    it('should send tokens to owner', async () => {
      const originalOwner = await NaturalFlavors.connect(owner).ownerOf(49)
      await NaturalFlavorsFinder.connect(owner).ownerWithdraw(49)
      const newOwner = await NaturalFlavors.connect(owner).ownerOf(49)

      expect(originalOwner).to.equal(NaturalFlavorsFinder.address)
      expect(newOwner).to.equal(owner.address)
    })
  })

  describe('setTokenClaimer', () => {
    it('should revert if called by non owner', async () => {
      const hashedClaimer = await NaturalFlavorsFinder.connect(claimer2).hashClaimer(claimer2.address)
      await expectFailure(
        () => NaturalFlavorsFinder.connect(claimer2).setTokenClaimer(49, hashedClaimer),
        'Ownable: caller is not the owner'
      )
    })

    it('should set the token claimer', async () => {
      const hashedClaimer = await NaturalFlavorsFinder.connect(claimer2).hashClaimer(claimer2.address)
      await NaturalFlavorsFinder.connect(owner).setTokenClaimer(49, hashedClaimer)
      const claimer = await NaturalFlavorsFinder.connect(owner).tokenClaimers(49)
      expect(hashedClaimer).to.equal(claimer)

    })
  })

  describe('claim', () => {
    it('should revert if wrong address attempts to claim', async () => {
      const hashedClaimer = await NaturalFlavorsFinder.connect(claimer2).hashClaimer(claimer2.address)
      await NaturalFlavorsFinder.connect(owner).setTokenClaimer(49, hashedClaimer)
      await expectFailure(
        () => NaturalFlavorsFinder.connect(claimer1).claim(49),
        'Signer cannot claim token'
      )

    })
    it('should transfer ownership if hashed addr claims', async () => {
      const originalOwner = await NaturalFlavors.connect(owner).ownerOf(49)

      const hashedClaimer = await NaturalFlavorsFinder.connect(claimer2).hashClaimer(claimer2.address)
      await NaturalFlavorsFinder.connect(owner).setTokenClaimer(49, hashedClaimer)
      await NaturalFlavorsFinder.connect(claimer2).claim(49)

      const newOwner = await NaturalFlavors.connect(owner).ownerOf(49)
      const isClaimed = await NaturalFlavorsFinder.connect(owner).claimed(49)

      expect(originalOwner).to.equal(NaturalFlavorsFinder.address)
      expect(newOwner).to.equal(claimer2.address)
      expect(isClaimed).to.equal(true)

      console.log(
        await NaturalFlavorsFinder.connect(claimer2).hashClaimer('0x62bAA2E4d2d40ad3912c4AAA73E3d6A3D83b8DEB')
      )
    })
  })
})
