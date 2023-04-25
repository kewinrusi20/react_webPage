import './App.css';
import Build from './Build/Build.js';
import CategoryFunc from './Container/Container.js';
import CategoryList from './data/CategoryList.json'

function App() {
  return (
    <div className="App">

      <div className="CategoryList">
      {CategoryList.map(categoryList_elem => <CategoryFunc categoryList_elem={categoryList_elem} key={categoryList_elem.title} />)}
      {/*CategoryList.map( function (e) { return (<Category category={e} />)})*/}
      </div>

        <Build />
    </div>
  );
}


export default App;
