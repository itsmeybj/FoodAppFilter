import React, { useEffect, useState } from "react";
import './Home.css';
import SearchBar from "../../components/SearchBar";
import FilterPanel from "../../components/FilterPanel";
import ListPanel from "../../components/ListPanel";
import { dataList } from "../../constants";
import EmptyPanel from "../../components/EmptyPanel";

const Home = () => {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);
    const [cuisines, setCuisines] = useState([
        { id: 1, checked: false, label: 'American' },
        { id: 2, checked: false, label: 'Chinese' },
        { id: 3, checked: false, label: 'Italian' },
    ]);
    const [rangePrice, setRangePrice] = useState([1, 100])
    const [list, setList] = useState(dataList)
    const [inputSearch, setInputSearch] = useState('')
    const [resultFound, setResultFound] = useState()

    //this or 
    const handleSelectToggle = (value) => !value ? null : setSelectedCategory(value)

    //this.. both are act same
    const handleSelectRating = (value) => {
        setSelectedRating(value)
    }
    const handleCheckChange = (id) => {
        const cuisinesStateList = cuisines;
        const changeCheckedCuisiness = cuisinesStateList.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        setCuisines(changeCheckedCuisiness)
    }
    //range function wont need to pass value in FilterPanel like oter send value in onclick, onchange
    const handleRanePrice = (range) => {
        setRangePrice(range)
    }

    const foodSearch = (value) => {
        setInputSearch(value)
    }

    const handleClearAll = () => {
        setSelectedCategory(null);
        setSelectedRating(null);
        setCuisines([
            { id: 1, checked: false, label: 'American' },
            { id: 2, checked: false, label: 'Chinese' },
            { id: 3, checked: false, label: 'Italian' },
        ]);
        setRangePrice([1, 100])
        setList(dataList)
        setInputSearch('')
    }

    const applyFilters = () => {
        let updatedList = dataList;

        //for category filter
        if (selectedCategory) {
            updatedList = updatedList.filter((item) => item.category === selectedCategory)
        }

        //for rating filter
        if (selectedRating) {
            updatedList = updatedList.filter((item) => parseInt(item.rating) === parseInt(selectedRating))
        }

        //cuisine filter
        //this will store['america','china']
        const cuisineChecked = cuisines.filter((item) => item.checked).map((item) => item.label.toLowerCase())

        if (cuisineChecked.length) {
            updatedList = updatedList.filter((item) => cuisineChecked.includes(item.cuisine))
        }

        //price range rating
        const minPrice = rangePrice[0]
        const maxPrice = rangePrice[1]

        updatedList = updatedList.filter((item) => item.price >= minPrice && item.price <= maxPrice)

        //search input
        if (inputSearch) {
            updatedList = updatedList.filter((item) => item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !== -1)
        }

        setList(updatedList)

        !updatedList.length ? setResultFound(false) : setResultFound(true);
    }

    useEffect(() => {
        applyFilters()
    }, [selectedCategory, selectedRating, cuisines, rangePrice, inputSearch])

    return (
        <>
            <div className="wrapper">

                <SearchBar value={inputSearch} foodSearch={foodSearch} />

                <div className="filter-wrapper">

                    <div className="filters-group">
                        <FilterPanel cuisines={cuisines} selectToggle={handleSelectToggle} selectRating={handleSelectRating} selectCheck={handleCheckChange} rangePrice={rangePrice} handleRanePrice={handleRanePrice} clearAll={handleClearAll} />
                    </div>

                    <div className="products-group">
                        {resultFound ? <ListPanel dataList={list} /> : <EmptyPanel />}
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home;