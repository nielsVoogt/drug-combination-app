import { Interaction } from "../types"
import StatusLabel from "./StatusLabel";

const SubstanceInteractionDetails = ({ interaction }: { interaction: Interaction }) => {

  if (!interaction) {
    return false;
  }

  return (
    <div>
      <div className="font-bold">{interaction?.substanceName}</div>
      {interaction?.interaction.status && (
        <>
          <StatusLabel status={interaction?.interaction.status} />
          {interaction?.interaction.note && interaction?.interaction.note}
        </>
      )}
    </div>
  )
}

export default SubstanceInteractionDetails
