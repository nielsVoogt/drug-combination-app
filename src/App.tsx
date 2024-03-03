import { createContext, useState } from "react";

import Substances from "./components/Substances";
import { Toaster } from 'sonner'

const App = () => {
  const [selectedSubstances, setSelectedSubstances] = useState<string[]>([]);

  return (
    <div className="min-h-[100vh] text-sm overflow-auto">
      <SubtanceContext.Provider value={{ selectedSubstances, setSelectedSubstances }}>
        <Substances />
      </SubtanceContext.Provider>
      <Toaster richColors />
    </div>
  );
}

type SubstanceContext = {
  selectedSubstances: string[]
  setSelectedSubstances: any
}

export const SubtanceContext = createContext<SubstanceContext>(undefined as unknown as SubstanceContext)


export default App;
