import React from "react";
import DataList from "../DataList";
import './style.css'

const ListPanel=({dataList})=>{
    return (
       <div className="list-wrap">
        {
            dataList.map((food)=><DataList key={food.id} data={food}/>)
        }
       </div>
    )
}

export default ListPanel;