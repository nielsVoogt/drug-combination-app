import { createContext, useState } from "react";

import Substances from "./components/Substances";

const App = () => {
  const [selectedSubstances, setSelectedSubstances] = useState<string[]>([]);

  return (
    <div className="h-full text-sm bg-slate-200">
      <main className="container">
      <SubtanceContext.Provider value={{ selectedSubstances, setSelectedSubstances }}>
        <Substances />
      </SubtanceContext.Provider>
      </main>
      <small>
        The app is meant as a quick reference guide and additional research MUST always be done. For additional information check out the <a href="http://drugs.tripsit.me/">Factsheet</a>.
      </small>
    </div>
  );
}

type SubstanceContext = {
  selectedSubstances: string[]
  setSelectedSubstances: any
}

export const SubtanceContext = createContext<SubstanceContext>(undefined as unknown as SubstanceContext)


export default App;
