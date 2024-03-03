import SelectSubstances from './SelectSubstances';
import { SubtanceContext } from '../App';
import brainImgUrl from '../assets/brain.png'
import { useCallback, useContext, useEffect, useState } from "react";
import Footer from './Footer';
import comboData from "../data/comboData"
import { get } from 'radash';
import { CombinationInteraction } from '@/types';
import StatusLabel from './StatusLabel';

const Substances = () => {
  const { selectedSubstances } = useContext(SubtanceContext)
  const [combinations, setCombinations] = useState<CombinationInteraction[] | []>([])

  const getCombinationInteractions = useCallback(() => {
    let selectedSubstancesClone = [...selectedSubstances]
    let acc: any = []

    for (let i = 0; i < selectedSubstancesClone.length; i++) {
      const baseSubstance: string = selectedSubstancesClone[0]
      selectedSubstancesClone.shift()
      selectedSubstancesClone.forEach(combinationSubstance => {
        const baseSubstanceInteractions = get(comboData, baseSubstance)
        const interaction = get(baseSubstanceInteractions, combinationSubstance)

        const combinationInteraction = {
          baseSubstance,
          combinationSubstance,
          interaction
        } as CombinationInteraction

        acc.push(combinationInteraction)
      })
    }
    setCombinations(acc)
  }, [selectedSubstances])

  useEffect(() => {
    if (selectedSubstances.length !== 0) getCombinationInteractions()
  }, [getCombinationInteractions, selectedSubstances])

  return (
    <>
      <div className='flex flex-col min-h-[100vh]'>

        {/* HEADER */}
        <div className='container py-10 text-center text-white'>
          <img src={brainImgUrl} className='mx-auto mb-8' />
          <h1 className='mb-4 text-2xl'>KNOW YOUR SHIT</h1>
          <p className='text-lg'>Check for possible harmful or dangerous drug combinations and interactions</p>
        </div>

        <div className='flex-1 py-10 bg-yellow-400'>
          <div className='container'>
            {combinations.map((combo, idx) => (
              <div className='mb-1 bg-white' key={idx}>
                <h1>{combo.combinationSubstance} + {combo.baseSubstance} <StatusLabel status={combo.interaction.status} /></h1>
                <p>{combo.interaction.note}</p>
              </div>
            ))
            }
          </div>
          <SelectSubstances />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Substances