import './App.css';
import Build from './Build/Build.js';
import CategoryF from './Container/Container.js';
import CategoryList from './data/CategoryList.json'

function App() {
  return (
    <div className="App">

      <div className="CategoryList">
          <CategoryF categoryR={CategoryList.onTheWay}/>
          <CategoryF categoryR={CategoryList.blast}/>
          <CategoryF categoryR={CategoryList.orbit}/>
          <CategoryF categoryR={CategoryList.screen}/>
          <CategoryF categoryR={CategoryList.special}/>
        </div>

        <Build />
    </div>
  );
}


export default App;
