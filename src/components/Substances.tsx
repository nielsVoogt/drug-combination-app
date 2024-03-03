import SelectSubstances from './SelectSubstances';
import SubstanceInteractions from './SubstanceInteractions';
import { SubtanceContext } from '../App';
import brainImgUrl from '../assets/brain.png'
import { useContext } from "react";
import Footer from './Footer';

const Substances = () => {
  const { selectedSubstances } = useContext(SubtanceContext)

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
            {selectedSubstances.map((selectedSubstance, idx) => (
              <SubstanceInteractions selectedSubstance={selectedSubstance} key={idx} />
            ))}
          </div>
          <SelectSubstances />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Substances