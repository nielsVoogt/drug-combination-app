import SubstanceInteractions from './SubstanceInteractions';
import SubstanceSelection from './SubstanceSelection';
import { SubtanceContext } from '../App';
import { useContext } from "react";

const Substances = () => {
  const { selectedSubstances } = useContext(SubtanceContext)

  return (

    <div className="bg-slate-200">
      <h1 className="text-xl font-semibold">Substances</h1>
      <SubstanceSelection />

      <h1 className="text-xl font-semibold">SelectedSubstances</h1>
      {selectedSubstances.map((selectedSubstance, idx) => (
        <SubstanceInteractions selectedSubstance={selectedSubstance} key={idx} />
      ))}
    </div>
  );
}

export default Substances