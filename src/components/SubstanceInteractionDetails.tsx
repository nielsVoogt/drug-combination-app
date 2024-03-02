import { Interaction } from "../types"
import StatusLabel from "./StatusLabel";

const SubstanceInteractionDetails = ({ interaction }: { interaction: Interaction }) => {

  if (!interaction) {
    return false;
  }
  
  return (

    <div>
      <div className="font-bold">{interaction?.substanceName}</div>
      {interaction?.interactionWithSelectedSubstances.status && (
        <>
          <StatusLabel status={interaction?.interactionWithSelectedSubstances.status} />
          {interaction?.interactionWithSelectedSubstances.note && interaction?.interactionWithSelectedSubstances.note}
        </>
      )}
    </div>
  )
}

export default SubstanceInteractionDetails