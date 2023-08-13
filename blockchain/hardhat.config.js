require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

module.exports = {
    solidity: "0.8.17",
     
    networks:{
        polygon:{
            url:'https://polygon-mumbai.g.alchemy.com/v2/Utziw1Gw3aYXckp9bH_I-oiAj7Ni3O--',
            accounts:['6fb70dec8c69902659855d5db9c332e5d636211c7933bf390ce8f2b27edd1126']
        }
    },
    path:{
        artifacts:'./artifacts'
    }
  };
  