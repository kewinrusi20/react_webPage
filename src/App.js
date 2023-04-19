import './App.css';
import Build from './Build/Build.js';
import WindowCategory from './WindowCategory/WindowCategory.js';
import listOfItems from './data/listOfItems.json'

function App() {
  return (
    <div className="App">

      <div className="WindowCategory_List">
          <WindowCategory group={listOfItems.onTheWay}/>
          <WindowCategory group={listOfItems.blast}/>
          {/* <WindowCategory group="Blast"/>
          <WindowCategory group="Orbit"/>
          <WindowCategory group="Screen"/>
          <WindowCategory group="Special"/> */}
        </div>
        
        <Build />

    </div>
  );
}


export default App;
