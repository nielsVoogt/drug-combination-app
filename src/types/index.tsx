export type SubstanceInteractionName = string

export type SubstanceInteractionInfo = {
  status: string
  note?: string
}

export type Interaction = {
  substanceName: SubstanceInteractionName
  interaction: SubstanceInteractionInfo
}

export type CombinationInteraction = {
  baseSubstance: string
  combinationSubstance: string
  interaction: SubstanceInteractionInfo
}