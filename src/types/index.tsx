export type SubstanceInteractionName = string

export type SubstanceInteractionInfo = {
  status: string
  note?: string
}

export type Interaction = {
  substanceName: SubstanceInteractionName
  interactionWithSelectedSubstances: SubstanceInteractionInfo
}