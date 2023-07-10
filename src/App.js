import "./App.css";
import Build from "./Build/Build.js";
import CategoryFunc from "./Container/Container.js";
import CategoryList from "./data/CategoryList.json";
import RenderItems from "./RenderItems/RenderItems";

function App() {
  return (
    <div className="App">
      <div className="CategoryList">
        {CategoryList.map((categoryList_e) => (
          <CategoryFunc
            categoryList_e={categoryList_e}
            key={categoryList_e.title}
          />
        ))}
      </div>

      <Build />
      <RenderItems />
    </div>
  );
}

export default App;
