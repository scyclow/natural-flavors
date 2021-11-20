

// TODO
// - blacklist approval addresses
// ipfs instead of github
// enumerable?


// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Prizes is ERC721, ERC721Enumerable, ERC721Burnable, Ownable {
  using Strings for uint256;

  uint private _tokenIdCounter;

  bool useURIPointer;

  mapping(uint256 => string) public tokenIdToName;
  string baseUrl;
  string baseUrlExtension;
  string baseExternalUrl;
  string baseImgUrl;
  string imgExtension;
  string projectDescription;
  string metadataExtension;


  event ProjectEvent(address indexed poster, string content);
  event TokenEvent(address indexed poster, uint256 indexed tokenId, string content);

  constructor() ERC721("Prizes", "PRIZE") {
    useURIPointer = true;
    baseUrlExtension = ".json";
    baseUrl = "https://steviep.xyz/prizes/tokens/metadata/";
    baseImgUrl = "https://steviep.xyz/prizes/tokens/images/";
    baseExternalUrl = "https://steviep.xyz#";
    imgExtension = ".jpg";
    projectDescription = "";
  }

  function safeMint(address to) public onlyOwner {
    _safeMint(to, _tokenIdCounter);
    _tokenIdCounter++;
  }

  function batchSafeMint(address[] memory addresses) public onlyOwner {
    for (uint i = 0; i < addresses.length; i++) {
      _safeMint(addresses[i], _tokenIdCounter);
      _tokenIdCounter++;
    }
  }


  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

    string memory tokenString = tokenId.toString();

    if (useURIPointer) {
      return string(abi.encodePacked(baseUrl, tokenString, baseUrlExtension));
    }

    string memory json = Base64.encode(
      bytes(
        string(
          abi.encodePacked(
            '{"name": "', tokenIdToName[tokenId],
            '", "description": "', projectDescription,
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

  function updateTokenName(uint256 tokenId, string memory _name) public onlyOwner {
    tokenIdToName[tokenId] = _name;
  }

  function updateMetadataParams(
    string memory _baseImgUrl,
    string memory _imgExtension,
    string memory _baseExternalUrl
  ) public onlyOwner {
    baseImgUrl = _baseImgUrl;
    imgExtension = _imgExtension;
    baseExternalUrl = _baseExternalUrl;
  }

  function emitProjectEvent(string memory _content) public onlyOwner {
    emit ProjectEvent(_msgSender(), _content);
  }

  function emitTokenEvent(uint256 tokenId, string memory _content) public {
    require(
      owner() == _msgSender() || ERC721.ownerOf(tokenId) == _msgSender(),
      "Only project or token owner can emit token event"
    );
    emit TokenEvent(_msgSender(), tokenId, _content);
  }




  // The following functions are overrides required by Solidity.

  function _beforeTokenTransfer(address from, address to, uint256 tokenId)
    internal
    override(ERC721, ERC721Enumerable)
  {
    super._beforeTokenTransfer(from, to, tokenId);
  }

  function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721, ERC721Enumerable) returns (bool)
  {
      return super.supportsInterface(interfaceId);
  }
}





/// [MIT License]
/// @title Base64
/// @notice Provides a function for encoding some bytes in base64
/// @author Brecht Devos <brecht@loopring.org>
library Base64 {
    bytes internal constant TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    /// @notice Encodes some bytes to the base64 representation
    function encode(bytes memory data) internal pure returns (string memory) {
        uint256 len = data.length;
        if (len == 0) return "";

        // multiply by 4/3 rounded up
        uint256 encodedLen = 4 * ((len + 2) / 3);

        // Add some extra buffer at the end
        bytes memory result = new bytes(encodedLen + 32);

        bytes memory table = TABLE;

        assembly {
            let tablePtr := add(table, 1)
            let resultPtr := add(result, 32)

            for {
                let i := 0
            } lt(i, len) {

            } {
                i := add(i, 3)
                let input := and(mload(add(data, i)), 0xffffff)

                let out := mload(add(tablePtr, and(shr(18, input), 0x3F)))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(shr(12, input), 0x3F))), 0xFF))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(shr(6, input), 0x3F))), 0xFF))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(input, 0x3F))), 0xFF))
                out := shl(224, out)

                mstore(resultPtr, out)

                resultPtr := add(resultPtr, 4)
            }

            switch mod(len, 3)
            case 1 {
                mstore(sub(resultPtr, 2), shl(240, 0x3d3d))
            }
            case 2 {
                mstore(sub(resultPtr, 1), shl(248, 0x3d))
            }

            mstore(result, encodedLen)
        }

        return string(result);
    }
}