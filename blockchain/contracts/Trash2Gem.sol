// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;
    
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Trash2Gem is ERC721URIStorage,Ownable{

        uint8 public totalMintedNfts;
        event minting(uint8 nftId,string ipfs);


        uint8 public totalCreatedNfts;
        uint8 public totalWasteCategories;
        mapping(uint8=> WasteCategory) public WasteCategories;
        mapping(uint8=>NFT) public NftAwards;

        event WasteType(uint8 totalWasteCategories, string wasteType,uint8 amountRecycled);
        event CreateNFT(uint8 totalCreatedNfts,string ipfs,string awardedFor);


        
        mapping(string =>UserStructure) public Users;

        event UserEvent(string id,string message);

        uint8 public totalCommunities;
        mapping(string=>Community) public Communities; 

        event ProductCreation(string productName,uint8 price,address seller);
        event ImportWasteItem(uint8 id,uint8 price,string wasteType);

        uint8 public totalProducts;
        mapping(uint8=>Item) public marketItems;

        struct NFT{
            uint8  id;string awardedFor;string ipfs;
        }
        struct Item{
            uint8 id;string owner;string seller;uint8 price;string productName;Production productState;
        }
        enum Production{
                Sold,NotSold
        }
        struct WasteCategory{
            uint8 id;string wasteType;uint amountPresent;uint amountRecycled;uint amtPerUint;
        }
        struct UserStructure{
            string id;uint amountSold;bool isExists;uint8[] Nfts;uint8[] Items;
            mapping(uint8=>Item) boughtItems;
        }
        struct Community{
            string id;bool isExists;
            uint8 totalCreatedProducts;uint8 totalWasteCategories;
            mapping(uint8=>WasteCategory) WasteCategories;
            address owner;
            uint8[] CreatedProducts;
            uint8[] communityNfts;

        }

        constructor() payable ERC721("Trash2Gem","T2G"){
            
        }
        
        function mintNFT(uint8 nftId) internal returns(uint8){
            totalMintedNfts++;
            NFT storage nft=NftAwards[nftId];
            _mint(msg.sender,totalMintedNfts);
            _setTokenURI(totalMintedNfts,nft.ipfs);
            emit minting(totalMintedNfts,nft.ipfs);
            return totalMintedNfts;
        }
        function grantReward(uint totalCategories) internal pure returns(uint8){
            
            if(totalCategories>5){
                    return 1;
            }
            else if(totalCategories>10){
                return 2;
            }
            else if(totalCategories>15){
                return 3;
            }
            return 0;
        }
       
        function addWasteType(string memory wasteType,uint amtPerUint)external onlyOwner {
            totalWasteCategories++;
            WasteCategories[totalWasteCategories]=WasteCategory(totalWasteCategories,wasteType,0,0,amtPerUint);
            emit WasteType(totalWasteCategories,wasteType,0);
        }
        function createNFT(string memory ipfs,string memory awardedFor)external onlyOwner{
            totalCreatedNfts++;
            NftAwards[totalCreatedNfts]=NFT(totalCreatedNfts,ipfs,awardedFor);
            emit CreateNFT(totalCreatedNfts,awardedFor,ipfs);
        }


        function totalWaste()public view returns(uint8){
             return totalWasteCategories;
        } 
        function getWasteStore(uint8 wasteId)public view returns(WasteCategory memory){
            return WasteCategories[wasteId];
        }
        function getWasteCommunity(string memory communityId,uint8 wasteId)public view returns(WasteCategory memory){
            Community storage community=Communities[communityId];
            return community.WasteCategories[wasteId];
        }
        


        function createUser(string memory id)external{
            //string memory emailCoded=CheckUser.CheckUserExists(email);
            require(!Users[id].isExists,"User already Exists");

            UserStructure storage User=Users[id];
            User.id=id;
            User.amountSold=0;
            User.isExists=true;
        }
        function sellWaste(string memory id,uint8 wasteId,uint wasteAmt)external{
            UserStructure storage User=Users[id];
            WasteCategory storage Waste=WasteCategories[wasteId];
            Waste.amountPresent+=wasteAmt;
            payable(msg.sender).transfer(wasteAmt*(Waste.amtPerUint));
            User.amountSold+=wasteAmt;
            
        }
        function buyProduct(string memory id,string memory communityId,uint8 productId)external payable{
            UserStructure storage User=Users[id];
            Community storage community=Communities[communityId];
            Item storage productItem=marketItems[productId];
            uint8 productPrice=productItem.price;
            payable(community.owner).transfer(productPrice);
            productItem.owner=id;
            productItem.productState=Production.Sold;
            User.boughtItems[productId]=productItem;
        }



        function createCommunity(string memory id)external{
                totalCommunities++;
                //string memory emailCoded=CheckUser.CheckUserExists(email);
                require(!Communities[id].isExists,"Community already Exists");
                Community storage community=Communities[id];
                community.id=id;community.owner=msg.sender;
                community.isExists=true;
        }
        function createWasteCategory(string memory id,uint8 wasteItemId)external{
                Community storage community=Communities[id];
                WasteCategory storage waste=WasteCategories[wasteItemId];
                community.WasteCategories[wasteItemId]=WasteCategory(waste.id,waste.wasteType,0,0,waste.amtPerUint);
        }
        function buyWasteItems(string memory id,uint8 wasteItemId,uint amtNeeded)external payable{
                require(msg.value>=(amtNeeded*WasteCategories[wasteItemId].amtPerUint),"Provide sufficient fees");
                Community storage community=Communities[id];
                WasteCategories[wasteItemId].amountPresent-=amtNeeded;   
                WasteCategories[wasteItemId].amountRecycled+=amtNeeded; 
                community.WasteCategories[wasteItemId].amountPresent+=amtNeeded;            
        }

        function createProduct(string memory id,uint8 price,string memory productName )external{

                Community storage community=Communities[id];
                community.totalCreatedProducts+=1;
                totalProducts+=1;
                marketItems[totalProducts]=Item(totalProducts,"",id,price,productName,Production.NotSold);
                community.CreatedProducts.push(totalProducts);
                
                emit ProductCreation(productName,price,msg.sender);
                uint8 getId=grantReward(community.totalCreatedProducts);
                if(getId!=0){
                    mintNFT(getId);
            
                    community.communityNfts.push(getId);
                }
        }

}


