import "./Item.css"

function Item({name, type}) {
    const imagePath = "/assets/" + type + "/" + name +".png" ;
    console.log(imagePath);


    return (
        <div className="Item" >
            <img src={imagePath} alt={name} />
        </div>
    )
}

export default Item;
