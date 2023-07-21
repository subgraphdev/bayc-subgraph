
// import the Events class generated from the ABI
import {
  SetStartingIndexCall__Inputs,
  Transfer as TransferEvent
} from "../generated/BoredApeYachtClub/BoredApeYachtClub";

// import the Entities generated from GraphQL schema
import {
  Transfer,
  Ape,
  User
} from "../generated/schema";

import {TokenMetadata as TokenMetadataTemplate} from "../generated/templates";

import { store, ethereum, ipfs, crypto, json, log, Bytes, dataSource } from "@graphprotocol/graph-ts";

const ipfsHash = "QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq";

// The mappings take data from a particular source and transform it into entities that are defined within your schema.
// or each event handler that is defined in subgraph.yaml under mapping.eventHandlers, create an exported function of
//  the same name. Each handler must accept a single parameter called event with a type corresponding to the name of 
//  the event which is being handled.

export function handleTransfer(event: TransferEvent): void {

  let token = Ape.load(event.params.tokenId.toString());
  if (!token) {
    token = new Ape(event.params.tokenId.toString());
    token.tokenId = event.params.tokenId;
    token.tokenURI = "ipfs://" + ipfsHash + "/" + event.params.tokenId.toString();

    const tokenIpfsHash = ipfsHash + token.tokenURI;
    // token.ipfsURI = tokenIpfsHash;

    TokenMetadataTemplate.create(tokenIpfsHash);

  }

  token.owner = event.params.to.toHexString();
  token.save();

  let user = User.load(event.params.to.toHexString());
  if (!user) {
    user = new User(event.params.to.toHexString());
    user.save();
  }
}



// export function handleMetadata(content:Bytes):void {
//   let tokenMetadata = new TokenMetadata(dataSource.stringParam());
//   const value = json.fromBytes(content).toObject();
//   if(value){
//     const image = value.get('image');
//     const name = value.get('name');
//     const description = value.get('description');
//     const externalURL = value.get('external_url');

//     if (image && name && description && externalURL){
//       tokenMetadata.name = name.toString();
//       tokenMetadata.image = image.toString();
//       tokenMetadata.description = description.toString();
//       tokenMetadata.externalURL = externalURL.toString();

//     }
//     const coven = value.get('coven')
//     if (coven) {
//       let covenData = coven.toObject()
//       const type = covenData.get('type')
//       if (type) {
//         tokenMetadata.type = type.toString()
//       }

//       const birthChart = covenData.get('birthChart')
//       if (birthChart) {
//         const birthChartData = birthChart.toObject()
//         const sun = birthChartData.get('sun')
//         const moon = birthChartData.get('moon')
//         const rising = birthChartData.get('rising')
//         if (sun && moon && rising) {
//           tokenMetadata.sun = sun.toString()
//           tokenMetadata.moon = moon.toString()
//           tokenMetadata.rising = rising.toString()
//         }
//       }
//     }
//   tokenMetadata.save()
//   }
// }


