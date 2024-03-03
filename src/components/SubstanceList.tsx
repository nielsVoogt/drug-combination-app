import { SubtanceContext } from '../App';
import comboData from '../data/comboData';
import { useContext } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"

const SubstanceList = () => {
  const { selectedSubstances, setSelectedSubstances } = useContext(SubtanceContext)

  const substances = Object.keys(comboData);
  const selected = (substance: string) => selectedSubstances.find((s) => substance === s ? true : false)
  const toggleSubstance = (substance: string) => {
    if(selected(substance)) {
      setSelectedSubstances((oldValues: string[]) => {
        return oldValues.filter((selectedSubstances: string) => selectedSubstances !== substance)
      })
    } else {
      setSelectedSubstances([...selectedSubstances, substance])
    }
  }

return (
  <ScrollArea className="w-full border rounded-md h-80">
  <ul className='divide-y'>
  {substances.map((substance, idx) => (
    <li
      onClick={() => toggleSubstance(substance)}
      className="flex items-center px-4 py-2 font-semibold text-gray-800 bg-white hover:bg-gray-100"
      key={idx}
    >
      <div className={`w-5 h-5 rounded-md transition-colors duration-75 ease-out ${selected(substance) ? 'bg-green-500' : 'bg-slate-200'}`}></div>
      {substance}
    </li>
  ))}
  </ul>
  </ScrollArea>
)
}

export default SubstanceList