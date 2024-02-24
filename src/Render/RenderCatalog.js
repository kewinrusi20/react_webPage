import "./RenderCatalog.css";

import ListCategory from "../data/ListCategory.json";
import CatalogCombo from "../data/CatalogCombo.json";
import ListItems_Basic from "../data/ListItems_Basic.json";
import ListItems_Evolved from "../data/ListItems_Evolved.json";
import ListItems_Passive from "../data/ListItems_Passive.json";
import RegisterItems from "../Elaborate/RegisterItems";

function RenderCatalog() {
    const handleClick = (item) => {
        RegisterItems(item);
    }


    return (
        <div>
            {ListCategory.map((e_ListCategory) => (
                <div>
                    <h1>{e_ListCategory.title}</h1>

                    {e_ListCategory.composition.map((e_composition_ListCategory) => (
                        <div>
                            {CatalogCombo.map((e_ListCombos) => {
                                if (e_ListCombos.title === e_composition_ListCategory.name) {
                                    return e_ListCombos.composition.map(
                                        (e_composition_ListCombos) => (
                                            <div className="lol"
                                                 onClick={() => handleClick(e_composition_ListCombos)}>
                                                {ListItems_Basic.map((e) => {
                                                    if (e_composition_ListCombos.name === e.name) {
                                                        return (
                                                            <div className="Item" id="Base">
                                                                <img src={e.srcIcone}></img>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                                {ListItems_Evolved.map((e) => {
                                                    if (e_composition_ListCombos.name === e.name) {
                                                        return (
                                                            <div className="Item" id="Evolved">
                                                                <img src={e.srcIcone}></img>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                                {ListItems_Passive.map((e) => {
                                                    if (e_composition_ListCombos.name === e.name) {
                                                        return (
                                                            <div className="Item" id="Passive">
                                                                <img src={e.srcIcone}></img>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        )
                                    );
                                }
                            })}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}


export default RenderCatalog;
