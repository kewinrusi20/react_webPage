import ListCategory from "./../data/ListCategory.json";
import ListCombos from "./../data/ListCombos.json";
import ListItems_Basic from "./../data/ListItems_Basic.json";
import ListItems_Evolved from "./../data/ListItems_Evolved.json";
import ListItems_Passive from "./../data/ListItems_Passive.json";

function RenderItems() {
  return (
    <div>
      {ListCategory.map((e_ListCategory) => (
        <div>
          <h1>{e_ListCategory.title}</h1>

          {e_ListCategory.composition.map((e_composition_ListCategory) => (
            <div>
              {ListCombos.map((e_ListCombos) => {
                if (e_ListCombos.title === e_composition_ListCategory.name) {
                  return e_ListCombos.composition.map(
                    (e_composition_ListCombos) => (
                      <div>
                        <div id="Base">
                          {ListItems_Basic.map((e) => {
                            if (e_composition_ListCombos.name === e.name) {
                              return <img src={e.srcIcone}></img>;
                            }
                          })}
                        </div>
                        <div id="Evolved">
                          {ListItems_Evolved.map((e) => {
                            if (e_composition_ListCombos.name === e.name) {
                              return <img src={e.srcIcone}></img>;
                            }
                          })}
                        </div>
                        <div id="Passive">
                          {ListItems_Passive.map((e) => {
                            if (e_composition_ListCombos.name === e.name) {
                              return <img src={e.srcIcone}></img>;
                            }
                          })}
                        </div>
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

export default RenderItems;
