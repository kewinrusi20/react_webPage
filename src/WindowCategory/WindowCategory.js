import "./WindowCategory.css"
import SetOfItems from "./SetOfItems"

function WindowCategory({group}) {

    return(
        <div className="WindowCategory">
            <h3>{group.title}</h3>

            <div className="Collection_Of_Sets">
                {group.sets.map(set => <SetOfItems items={set}/> )}
            </div> {/* close div: ItemCollection */}

        </div> // close: WindowCategory
    )
}

export default WindowCategory;
