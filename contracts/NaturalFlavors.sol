// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
  // - handle name per token
  // - upload attributes per token
  // - ASCI art




// SPDX-License-Identifier: MIT

import "./Dependencies.sol";

pragma solidity ^0.8.2;


contract NaturalFlavors is ERC721, ERC721Burnable, Ownable {
  using Strings for uint256;

  bytes4 private constant _INTERFACE_ID_ERC2981 = 0x2a55205a;

  uint private _tokenIdCounter;

  bool public useURIPointer;
  string public baseUrl;
  string public baseImgUrl;
  string public baseNamePrefix;
  string public baseNameSuffix;
  string public baseExternalUrl;
  string public baseUrlExtension;
  string public projectDescription;
  string public license;
  string public imgExtension;
  string public metadataExtension;
  address public mintingAddress;
  address public royaltyBenificiary;
  uint public royaltyBasisPoints;

  mapping(address => bool) public operatorDenials;

  event ProjectEvent(address indexed poster, string indexed eventType, string content);
  event TokenEvent(address indexed poster, uint256 indexed tokenId, string indexed eventType, string content);

  constructor(
    string memory _baseUrl,
    string memory _baseImgUrl,
    string memory _baseNamePrefix,
    string memory _baseNameSuffix,
    string memory _baseExternalUrl,
    string memory _projectDescription
  ) ERC721('NaturalFlavors', 'FLAV') {
    baseUrl = _baseUrl;
    baseImgUrl = _baseImgUrl;
    baseNamePrefix = _baseNamePrefix;
    baseNameSuffix = _baseNameSuffix;
    baseExternalUrl = _baseExternalUrl;
    projectDescription = _projectDescription;

    license = 'CC BY-NC 4.0';
    imgExtension = '.png';
    baseUrlExtension = '.json';
    useURIPointer = true;

    royaltyBasisPoints = 750;
    _tokenIdCounter = 0;

    mintingAddress = msg.sender;
    royaltyBenificiary = msg.sender;
  }

  function totalSupply() public view virtual returns (uint256) {
    return _tokenIdCounter - 1;
  }

  function mint(address to) public {
    require(mintingAddress == _msgSender(), 'Caller is not the minting address');
    _mint(to, _tokenIdCounter);
    _tokenIdCounter++;
  }

  function setMintingAddress(address minter) public onlyOwner {
    mintingAddress = minter;
  }


  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    require(_exists(tokenId), 'ERC721Metadata: URI query for nonexistent token');

    string memory tokenString = tokenId.toString();

    if (useURIPointer) {
      return string(abi.encodePacked(baseUrl, tokenString, baseUrlExtension));
    }

    string memory json = Base64.encode(
      bytes(
        string(
          abi.encodePacked(
            '{"name": "', baseNamePrefix, tokenId.toString(), baseNameSuffix,
            '", "description": "', projectDescription,
            '", "license": "', license,
            '", "image": "', baseImgUrl, tokenString, imgExtension,
            '", "external_url": "', baseExternalUrl, tokenString,
            '"}'
          )
        )
      )
    );
    return string(abi.encodePacked('data:application/json;base64,', json));

  }

  function flipUseURIPointer() public onlyOwner {
    useURIPointer = !useURIPointer;
  }

  function updateBaseUrl(string memory _baseUrl, string memory _baseUrlExtension) public onlyOwner {
    baseUrl = _baseUrl;
    baseUrlExtension = _baseUrlExtension;
  }

  function updateProjectDescription(
    string memory _projectDescription
  ) public onlyOwner {
    projectDescription = _projectDescription;
  }

  function updateMetadataParams(
    string memory _baseNamePrefix,
    string memory _baseNameSuffix,
    string memory _baseImgUrl,
    string memory _imgExtension,
    string memory _baseExternalUrl,
    string memory _license
  ) public onlyOwner {
    baseNamePrefix = _baseNamePrefix;
    baseNameSuffix = _baseNameSuffix;
    baseImgUrl = _baseImgUrl;
    imgExtension = _imgExtension;
    baseExternalUrl = _baseExternalUrl;
    license = _license;
  }

  function emitProjectEvent(string memory _eventType, string memory _content) public onlyOwner {
    emit ProjectEvent(_msgSender(), _eventType, _content);
  }

  function emitTokenEvent(uint256 tokenId, string memory _eventType, string memory _content) public {
    require(
      owner() == _msgSender() || ERC721.ownerOf(tokenId) == _msgSender(),
      'Only project or token owner can emit token event'
    );
    emit TokenEvent(_msgSender(), tokenId, _eventType, _content);
  }

  function updatRoyaltyInfo(
    address _royaltyBenificiary,
    uint _royaltyBasisPoints
  ) public onlyOwner {
    royaltyBenificiary = _royaltyBenificiary;
    royaltyBasisPoints = _royaltyBasisPoints;
  }


  function royaltyInfo(uint256, uint256 _salePrice) external view returns (address, uint256) {
    return (royaltyBenificiary, _salePrice * royaltyBasisPoints / 10000);
  }

  function setOperatorDenial(address operator, bool denied) public onlyOwner {
    operatorDenials[operator] = denied;
  }

  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 tokenId
  ) internal virtual override(ERC721) {
    super._beforeTokenTransfer(from, to, tokenId);
    require(!_exists(tokenId) || ERC721.ownerOf(tokenId) == _msgSender() ||  !operatorDenials[_msgSender()], "Operator denied");
  }


  /**
   * @dev See {IERC165-supportsInterface}.
   */
  function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721) returns (bool) {
    return interfaceId == _INTERFACE_ID_ERC2981 || super.supportsInterface(interfaceId);
  }

}



