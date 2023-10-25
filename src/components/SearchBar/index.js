import React from "react";
import './style.css'

const SearchBar=({value,foodSearch})=>{
    return (
        <div className="input-wrap">
            <input value={value} onChange={(e)=>foodSearch(e.target.value)} type="text" placeholder="Search....  Woodland Hills"/>
        </div>
    )
}

export default SearchBar;