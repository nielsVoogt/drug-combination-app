// import comboData from '../data/comboData';
import { get } from 'radash'
import { useContext } from "react";
import { Interaction, SubstanceInteractionInfo, SubstanceInteractionName } from '../types';
import { SubtanceContext } from '../App';
import SubstanceSelection from './SubstanceSelection';
import comboData from '../data/comboData';
import SubstanceInteractions from './SubstanceInteractions';

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