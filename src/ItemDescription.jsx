import React from "react";
import {useState} from "react";

function ItemDescription ({name}) {
    
    const [msg, setMsg] = useState("please subscribe")
    const updateSub = () => {
        setMsg("subscribed!");
    }
    return (
        <>
        <div className="shop">
        <button className="shp">{name}</button>
        <h3>{msg}</h3>
        <button onClick={updateSub} className="shp">subscribe</button>
        </div>
        </>
    )
};
export default ItemDescription;