import React from "react";

const EmptyPanel=()=>{
    const imageNotFound = "/images/result_not_found.jpg"
    return(
        <div style={{display:"flex",justifyContent:"center"}}>
            <img src={imageNotFound} alt="imagenotfound"/>
        </div>
    )
}

export default EmptyPanel;