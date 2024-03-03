import SubstanceInteractions from './SubstanceInteractions';
import { SubtanceContext } from '../App';
import { useContext } from "react";
import SelectSubstances from './SelectSubstances';

const Substances = () => {
  const { selectedSubstances } = useContext(SubtanceContext)

  return (
    <div className="bg-slate-200">
      <h1 className="text-xl font-semibold">Combinations</h1>
      
      {selectedSubstances.map((selectedSubstance, idx) => (
        <SubstanceInteractions selectedSubstance={selectedSubstance} key={idx} />
      ))}
      
      <SelectSubstances />
    </div>
  );
}

export default Substances