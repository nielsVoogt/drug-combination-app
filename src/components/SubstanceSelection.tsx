import { SubtanceContext } from '../App';
import comboData from '../data/comboData';
import { useContext } from 'react';

const SubstanceSelection = () => {
  const { selectedSubstances, setSelectedSubstances } = useContext(SubtanceContext)

  const substances = Object.keys(comboData);
  const substanceAlreadySelected = (substance: string) => {
    if (selectedSubstances.find((s) => substance === s)) {
      return true;
    }

    return false;
  };

  const handleOnAddSubstanceClick = (substance: string) => {
    setSelectedSubstances([...selectedSubstances, substance])
  }

return (
  <>
  {substances.map((substance, idx) => (
    <button
      onClick={() => handleOnAddSubstanceClick(substance)}
      disabled={substanceAlreadySelected(substance)}
      className="px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100"
      key={idx}
    >
      {substance}
    </button>
  ))}
  </>
)
}

export default SubstanceSelection