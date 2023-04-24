import "./Category.css"
import "./Set.css"
import "./Item.css"


/*CATEGORY*/
function CategoryF({categoryR}) {
    
    return(
        <div className="CategoryCss">
            <h3>{categoryR.title}</h3>

            <div className="CategoryCssGroups">
                {categoryR.sets.map(setE => <SetF setR={setE}/> )}
            </div>

        </div>
    )
}


/*SET*/
function SetF({setR}) {

    return(
        <div className="SetCss">
          {setR.map(itemE => <Item itemR={itemE}/> )}
        </div>
    )
  }


/*ITEM*/

function onClickItem(event){
	console.log(event.target.id)
}

function Item({itemR}) {
    const imagePath = "/assets/" + itemR.type + "/" + itemR.name +".png" ;
    //console.log(imagePath);e

    return (
        <div className="ItemCss" id={itemR.name} onClick={onClickItem} >
            <img src={imagePath} alt={itemR.name} />
        </div>
    )
}

export default CategoryF;
