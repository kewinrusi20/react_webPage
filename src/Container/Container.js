import "./Category.css"
import "./Set.css"
import "./Item.css"

/*CATEGORY*/
function CategoryFunc({categoryList_e}) {
    return(
        <div className="CategoryCss">
            <h3>{categoryList_e.title}</h3>

            <div className="CategoryCssGroups">
                {categoryList_e.setList.map(set_e => 
                    <SetFunc set_e={set_e} key={set_e.id} />)}
            </div>

        </div>
    )
}


/*SET*/
function SetFunc({set_e}) {
    return(
        <div className="SetCss">
            {set_e.itemList.map(item_e => 
                <ItemFunc item_e={item_e} key={item_e.id} /> )}
        </div>
    )
  }

  
/*ITEM*/
function ItemFunc({item_e}) {
    const imagePath = "/assets/" + item_e.type + "/" + item_e.name +".png" ;

    return (
        <div className="ItemCss" id={item_e.name} onClick={OnClickFunc} >
            <img src={imagePath} alt={item_e.name} />
        </div>
    )
}


function OnClickFunc(event) {
    console.log(event.target.id)
}

export default CategoryFunc;
