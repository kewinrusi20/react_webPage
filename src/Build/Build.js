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
        </div>
    )
}


function ItemRender() {
    const [childComponents, setChildComponents] = useState([]);

    const onClickFunc = () => {
        setChildComponents([childComponents, <ChildComponent key={childComponents.length} />]);
      };



    return(
        <div className="ItemRender" onClick={() => setChildComponents([childComponents, <ChildComponent />])} >
            {myBuild.map(item_e => <ItemPrint item_e={item_e} key={item_e.id} /> )}
            {childComponents}


            <button className="Button2" onClick={onClickFunc}>Render New Elements</button>
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


function ChildComponent(props) {
    return <div>{props.key}</div>;
}

export default Build;
