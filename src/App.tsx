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

      <div className="bg-[#EDF8FF]">
        <div className="container">
          <small>
            The app is meant as a quick reference guide and additional research MUST always be done. For additional information check out the <a href="http://drugs.tripsit.me/">Factsheet</a>.
          </small>

        </div>
      </div>
      <div>
        <Toaster richColors />
      </div>
    </div>
  );
}

type SubstanceContext = {
  selectedSubstances: string[]
  setSelectedSubstances: any
}

export const SubtanceContext = createContext<SubstanceContext>(undefined as unknown as SubstanceContext)


export default App;
