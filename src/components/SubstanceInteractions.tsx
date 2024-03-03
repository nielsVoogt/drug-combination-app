import { Interaction, SubstanceInteractionInfo, SubstanceInteractionName } from "../types"

import SubstanceInteractionDetails from "./SubstanceInteractionDetails"
import { SubtanceContext } from "../App"
import comboData from "../data/comboData"
import { get } from "radash"
import { useContext, useState } from "react"
import FeatherIcon from 'feather-icons-react';



const SubstanceInteractions = ({ selectedSubstance }: { selectedSubstance: string }) => {
  const { selectedSubstances } = useContext(SubtanceContext)
  const allInteractions: Record<SubstanceInteractionName, SubstanceInteractionInfo> = get(comboData, selectedSubstance)
  let interactions: any | [] = []

  // const [statuses, setStatuses] = useState([])

  const [open, setOpen] = useState(true)

  const getAllStatuses = (interactionWithSelectedSubstances:SubstanceInteractionInfo) => {
    console.log('a', interactionWithSelectedSubstances)
  }

  interactions = selectedSubstances.map(substanceName => {
    const interactionWithSelectedSubstances:SubstanceInteractionInfo = get(allInteractions, substanceName)
    if (interactionWithSelectedSubstances) {
      getAllStatuses(interactionWithSelectedSubstances)
      return { substanceName, interactionWithSelectedSubstances }
    }
  })

  const handleOnToggleClick = () => setOpen(!open)

  console.log('interactions', interactions)
  // const x = interactions.map((interaction:Interaction) => interaction.interactionWithSelectedSubstances.note)

  // console.log(x)

  return (

    <div className="max-w-sm p-5 mb-5 overflow-hidden bg-white rounded shadow-lg">
      <div className="flex">
       <div className="font-semibold">{selectedSubstance}</div>
        <button onClick={handleOnToggleClick}>
          <FeatherIcon icon={open ? 'chevron-down' : 'chevron-up'} />
        </button>
      </div>
      {open && (
        <>
          {interactions.map((interaction: Interaction, idx: number) => (
            <SubstanceInteractionDetails interaction={interaction} key={idx} />
          ))}
        </>
      )}
    </div>
  )
}

export default SubstanceInteractions

