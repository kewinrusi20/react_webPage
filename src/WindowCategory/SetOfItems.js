import Item from "../Item/Item.js"

function SetOfItems({items}) {

    return(
        <div className="SetOfItems">
          {items.map(item => <Item name={item.name} type={item.type} /> )}
        </div> // close: SetOfItems
    )
}

export default SetOfItems;
