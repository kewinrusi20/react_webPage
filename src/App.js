import "./App.css";
import RenderCatalog from "./Render/RenderCatalog";
import RegisterItems from "./Elaborate/RegisterItems"
import ElaborateList, {RenderList} from "./Elaborate/ElaborateList";

function App() {
    const handleClick1 = () => {
        RenderList();
    };

    const handleClick2 = () => {
        ElaborateList();
    };






    return (
        <div className="App">
            <RenderCatalog/>

            <button onClick={handleClick1}></button>
            <button onClick={handleClick2}></button>
        </div>
    );
}

export default App;
