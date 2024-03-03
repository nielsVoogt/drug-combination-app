import { CombinationInteraction } from "@/types"
import StatusLabel from "./StatusLabel"

const CombinationInformation = ({ combination }: { combination: CombinationInteraction }) => {

  return (
    <div className='p-2 mb-1 bg-white rounded-md shadow-md'>
      <h1>{combination.combinationSubstance} + {combination.baseSubstance} <StatusLabel status={combination.interaction.status} /></h1>
      <p>{combination.interaction.note}</p>
    </div>
  )
}

export default CombinationInformation