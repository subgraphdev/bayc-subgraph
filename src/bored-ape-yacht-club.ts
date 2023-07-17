
// import the Events class generated from the ABI
import {
  Transfer as TransferEvent,
  BoredApeYachtClub
} from "../generated/BoredApeYachtClub/BoredApeYachtClub";

// import the Entities generated from GraphQL schema
import {
  Transfer,
  Token,
  Property
} from "../generated/schema";

import { store,ethereum,ipfs,crypto,json,log } from "@graphprotocol/graph-ts";



// The mappings take data from a particular source and transform it into entities that are defined within your schema.
// or each event handler that is defined in subgraph.yaml under mapping.eventHandlers, create an exported function of
//  the same name. Each handler must accept a single parameter called event with a type corresponding to the name of 
//  the event which is being handled.


export function handleTransfer(event: TransferEvent): void {
  
}
  
