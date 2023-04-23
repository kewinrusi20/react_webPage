import "./Category.css"
import "./Set.css"
import "./Item.css"


/*CATEGORY*/
function Category({category}) {
    
    return(
        <div className="Category">
            <h3>{category.title}</h3>

            <div className="CategoryGroups">
                {category.sets.map(set => <Set set={set}/> )}
            </div>

        </div>
    )
}


/*SET*/
function Set({set}) {

    return(
        <div className="Set">
          {set.map(item => <Item item={item}/> )}
        </div>
    )
  }


/*ITEM*/
function Item({item}) {
    const imagePath = "/assets/" + item.type + "/" + item.name +".png" ;
    console.log(imagePath);

    return (
        <div className="Item">
            <img src={imagePath} alt={item.name} />
        </div>
    )
}

export default Category;
