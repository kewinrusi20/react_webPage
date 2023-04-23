import './App.css';
import Build from './Build/Build.js';
import Category from './Container/Container.js';
import CategoryList from './data/CategoryList.json'

function App() {
  return (
    <div className="App">

      <div className="CategoryList">
          <Category category={CategoryList.onTheWay}/>
          <Category category={CategoryList.blast}/>
          <Category category={CategoryList.orbit}/>
          <Category category={CategoryList.screen}/>
          <Category category={CategoryList.special}/>
        </div>

        <Build />
    </div>
  );
}


export default App;
