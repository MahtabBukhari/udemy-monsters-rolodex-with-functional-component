import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/fetch-data.utils";


export type Monsters = {
  id:string;
  name:string;
  email:string;
}



const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monsters[]>([]);
  const [filteredMonsters, setFilterdMonsters] = useState(monsters);

  const onSearchChange = (event:ChangeEvent<HTMLInputElement>):void => {
    const searching = event.target.value;
    setSearchField(searching.toLocaleLowerCase());
  };

  useEffect(() => {
    const fetchMonster=async()=>{

     const userMonster = await getData<Monsters[]>("https://jsonplaceholder.typicode.com/users")
        setMonsters(userMonster)
    }

    fetchMonster()
      
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilterdMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onEventHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
