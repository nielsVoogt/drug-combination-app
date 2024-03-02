import { useContext } from "react"
import { Interaction, SubstanceInteractionInfo, SubstanceInteractionName } from "../types"
import { get } from "radash"
import { SubtanceContext } from "../App"
import comboData from "../data/comboData"
import SubstanceInteractionDetails from "./SubstanceInteractionDetails"

const SubstanceInteractions = ({ selectedSubstance }: { selectedSubstance: string }) => {
  const { selectedSubstances } = useContext(SubtanceContext)

  const allInteractions: Record<SubstanceInteractionName, SubstanceInteractionInfo> = get(comboData, selectedSubstance)

  let interactions: any | [] = []

  interactions = selectedSubstances.map(substanceName => {
    const interactionWithSelectedSubstances = get(allInteractions, substanceName)
    if (interactionWithSelectedSubstances) {
      return { substanceName, interactionWithSelectedSubstances }
    }
  })

  return (

    <div className="max-w-sm p-5 mb-5 overflow-hidden bg-white rounded shadow-lg">
      <div className="font-semibold">{selectedSubstance}</div>
      {interactions.map((interaction: Interaction, idx: number) => (
        <SubstanceInteractionDetails interaction={interaction} key={idx}  />
      ))}
    </div>
  )
}

export default SubstanceInteractions

