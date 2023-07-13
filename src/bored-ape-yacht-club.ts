import {
  Transfer as TransferEvent
} from "../generated/BoredApeYachtClub/BoredApeYachtClub"

import {
  Token,
  User
} from "../generated/schema"



// The mappings take data from a particular source and transform it into entities that are defined within your schema.
// or each event handler that is defined in subgraph.yaml under mapping.eventHandlers, create an exported function of
//  the same name. Each handler must accept a single parameter called event with a type corresponding to the name of 
//  the event which is being handled.


export function handleTransfer(event: TransferEvent): void {
  

}
  
