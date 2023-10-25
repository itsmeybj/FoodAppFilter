import React, { useState } from "react";
import ReactSlider from 'react-slider'
import './style.css'

import { categoryList, ratingList } from "../../constants";

const FilterPanel = ({ cuisines, selectToggle, selectRating, selectCheck ,rangePrice,handleRanePrice,clearAll}) => {

    return (
        <div>
            {/* Category */}
            <div className="category">
                <p>Category</p>
                {
                    categoryList.map(({ label, id, value }) => <button className="btn btn-secondary" onClick={() => selectToggle(value)} key={id}>{label}</button>)
                }
            </div>

            {/* Cusines */}
            <div className="cuisines">
                <p>cuisines</p>
                {
                    cuisines.map(({ id, checked, label }) => (
                        <div key={id} className="checkbox-group">
                            <div>
                                {label}
                            </div>
                            <div>
                                <input type="checkbox" value={label} checked={checked} onChange={() => selectCheck(id)} />
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Price Range */}

            <div className="price-range">
                <p>Price Range : ({rangePrice[0]} : {rangePrice[1]})</p>

                <ReactSlider
                    className="slider"
                    thumbClassName="thumb"
                    trackClassName="track"
                    defaultValue={rangePrice}
                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                    minDistance={10}
                    onChange={handleRanePrice}
                    value={rangePrice}
                />
            </div>

            {/* Star Rating */}
            <div >
                <p style={{ marginTop: '10px' }}>Star Rating</p>
                {
                    ratingList.map(({ label, id, value }) => <button className="btn btn-secondary" onClick={() => selectRating(value)} key={id}>{label}</button>)
                }
            </div>

             {/* Clear All Filter */}
             <div className="clear-all">
                <p style={{borderTop:"1px solid gray"}}>Clear All Filter</p>
                    <button onClick={clearAll} className="btn btn-secondary">Clear</button>
            </div>
        </div>
    )
}

export default FilterPanel;