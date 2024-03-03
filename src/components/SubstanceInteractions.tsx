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

  const [open, setOpen] = useState(true)

  const getAllStatuses = (interaction:SubstanceInteractionInfo) => {
    console.log('a', interaction)
  }

  interactions = selectedSubstances.map(substanceName => {
    const interaction:SubstanceInteractionInfo = get(allInteractions, substanceName)
    if (interaction) {
      getAllStatuses(interaction)
      return { substanceName, interaction }
    }
  })

  const handleOnToggleClick = () => setOpen(!open)

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

