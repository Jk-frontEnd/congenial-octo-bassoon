import { SynonymSearch } from "./Synonym/Synonym";
import { AntonymSearch } from "./Antonym/Antonym";
import { Adjective } from "./Adjective/Adjective";

export const App = () => {
  

  return (
    <div className="App">
      <SynonymSearch />
      <AntonymSearch />
      <Adjective />
    </div>
  );
};
