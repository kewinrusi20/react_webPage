import './Button2.css';
import "./Build.css"
import "./../Container/Item.css";
import Button from './../Button/Button.js'
import { myBuild } from './../Container/Container.js';
import React, { useState } from 'react';


function Build() {
    return (
        <div className="Build">
            <p>Build:</p>
            <Button text="Back" />
            <Button text="Reset" />
            <ItemRender />
            <BuildReset />
        </div>
    )
}


function ItemRender() {
    const [childComponents, setChildComponents] = useState([]);
    const onClickFunc = () => {
        setChildComponents([ChildComponentFunc, <ChildComponentFunc definitely_not_a_key={childComponents.length} />]);
      };



    return(
        <div className="ItemRender" >
            {myBuild.map(item_e => <ItemPrint item_e={item_e} definitely_not_a_key={item_e.id} key={item_e.id} /> )}
            {childComponents}

            <button className="Button2" onClick={onClickFunc}>Render Build</button>
        </div>
    )
}

function ChildComponentFunc(props) {
    return <div>{props.definitely_not_a_key}</div>;
}

function BuildReset() {
    return(
        <div className="Button" onClick={ () => {myBuild.length = 0} } >
        </div>
    )
}


function ItemPrint({item_e}) {
    const imagePath = "/assets/" + item_e.type + "/" + item_e.name +".png" ;

    return (
        <div className="ItemCss" id={item_e.name} >
            <img src={imagePath} alt={item_e.name} />
        </div>
    )
}









export default Build;
