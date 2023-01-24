import React, { useState } from "react";
import './sass/category.css';
import gridDisplay from './gridDisplaySelected.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faList,
    faDotCircle, faCircle,
    faSquareCheck,
    faChevronDown, faGripLinesVertical,
    faX,
    faHeart, faChevronRight,
    faSortAlphaUp, faSortAlphaDesc
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

import Ratings from "../commonComponent/Ratings";
import BoxChecker from "../commonComponent/BoxChecker";
import ProductBlock from "../commonComponent/ProductBlock";
import ExtraDetails from "../commonComponent/ProductExtraDetails";
import products from "../products";
import { filter } from "d3";

//-----------Upper Filter ------------//
const AppliedFilters = ({ filterList }) => {
    let num = 0;
    filterList.forEach((elem) => {
        if (elem.active) num += 1;
    })
    return num;
}
const Filters = ({ filterList, ascDesc, setAscDesc, additionalFilters, filterListDisplay }) => {
    const ascDescendingBtn = (ascDesc) => {
        if (ascDesc) return <FontAwesomeIcon className="dot" icon={faDotCircle} />;
        else return <FontAwesomeIcon className="circle" icon={faCircle} />;
    }

    return (
        <div className="filters">

            <div className="AscDescending">
                <div onClick={() => { if (!ascDesc) setAscDesc(!ascDesc) }}>
                    {ascDescendingBtn(ascDesc)}
                </div>
                <FontAwesomeIcon icon={faSortAlphaUp} />
                <div onClick={() => { if (ascDesc) setAscDesc(!ascDesc) }}>
                    {ascDescendingBtn(!ascDesc)}
                </div>
                <FontAwesomeIcon icon={faSortAlphaDesc} />
            </div>

            {
                additionalFilters.map((elem, i) =>
                    <div key={i.toString()} className="filter2">
                        <BoxChecker />
                        <span>{elem.name}</span>
                        <span className="nbm">{elem.number}</span>
                    </div>
                )
            }
            <div className="filter3">

                <div className="leftSide">
                    {
                        AppliedFilters({ filterList }) > 0 ?
                            <FontAwesomeIcon className="squareCheck" icon={faSquareCheck} /> :
                            <div className="box"></div>
                    }
                    <span>Filter</span>
                    <span>
                        <AppliedFilters filterList={filterList} />
                    </span>
                </div>

                <FontAwesomeIcon icon={faGripLinesVertical} />

                <div className="selectSection">
                    <span>select</span>
                    <FontAwesomeIcon className="selectArrow" icon={faChevronDown} />
                    <div className="listFilters">
                        {
                            filterList.map(
                                (elem, i) =>
                                    <div key={i.toString()} onClick={() => filterListDisplay(i)}>
                                        {elem.name}
                                    </div>
                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}
const Title = ({ categoryName,
    listGridDisplay, setlistGridDisplay,
    filterList, setFilterList
    , ascDesc, setAscDesc }) => {


    const filterListDisplay = (index) => {
        const newFilterList = [...filterList]
        newFilterList[index].active = !newFilterList[index].active;
        setFilterList(newFilterList);
    }

    return (
        <div className="Title">
            <div className="CategoryPath">
                <p><span>Homepage</span> / {categoryName}</p>
            </div>
            <div className="choosenCategory">
                <h2>{categoryName}</h2>
                <div className="ViewStyle">
                    <p className="gridView"
                        onClick={
                            () => {
                                if (listGridDisplay) return setlistGridDisplay(!listGridDisplay)
                            }
                        }>
                        {
                            !listGridDisplay ?
                                <img src={gridDisplay} style={{ 'maxWidth': '20px', 'marginRight': '6px' }} alt="Gridicon"></img> :
                                <img src={gridDisplay} style={{ 'maxWidth': '20px', 'marginRight': '6px' }} alt="Gridicon"></img>
                        }
                        Gird view</p>
                    <p className="listView" onClick={
                        () => {
                            if (!listGridDisplay) return setlistGridDisplay(!listGridDisplay)
                        }
                    } >
                        {
                            listGridDisplay ?
                                <FontAwesomeIcon icon={faList} style={{ 'color': 'rgb(0, 187, 124)' }} /> :
                                <FontAwesomeIcon icon={faList} />
                        }
                        List View</p>
                    <p className="productAvailable"><span>123</span> Products</p>
                </div>
            </div>

            <Filters
                filterList={filterList}
                setFilterList={setFilterList}
                ascDesc={ascDesc}
                setAscDesc={setAscDesc}
                additionalFilters={[
                    {
                        name: 'Trending',
                        number: 2
                    },
                    {
                        name: 'Best Selling',
                        number: 3
                    }
                ]}
                filterListDisplay={filterListDisplay}
            />

            <div className="appliedFilters">
                <span>Applied filters: </span>
                {
                    filterList.map(
                        (elem, i) => {
                            if (elem.active) {
                                return (
                                    <div key={i.toString()} className="selectedFilters">
                                        <span>{elem.name} </span>
                                        <i>
                                            <FontAwesomeIcon icon={faX} onClick={() => filterListDisplay(i)} />
                                        </i>
                                    </div>
                                )
                            } return '';
                        }
                    )

                }
            </div>
        </div>
    )
}
//------------------------------------//


//-----------Left Side filter------------//
const PriceRange = () => {
    return (
        <div className="priceSettings">
            <h3>Price</h3>
            <div className="PriceRange">
                <div className="minPrice">
                    <span>Min</span>
                    <input type="number" min={1} max={1000000000}></input>
                </div>
                <div className="maxPrice">
                    <span>Max</span>
                    <input type="number" min={1} max={1000000000}></input>
                </div>
            </div>
        </div>
    )
}
const ApplyReset = () => {
    return (
        <div className="submittingFilter">
            <div className="apply">Apply</div>
            <div className="reset">Reset</div>
        </div>
    )
}
const Rating = ({ stars, setStars }) => {

    return (
        <div className="Ratings">
            <h3>Rating</h3>
            <div className="rating">
                <div className="boxCheckSec">
                    {
                        [...Array(5)].map((elem, i) =>
                            <div key={i.toString()} onClick={() => {
                                const newStars = [...stars];
                                newStars[i]['active'] = !newStars[i]['active'];
                                setStars(newStars);
                            }
                            }><BoxChecker /></div>
                        )
                    }
                </div>
                <div className="starSec">
                    <Ratings stars={[5, 4, 3, 2, 1]} />
                </div>
            </div>
        </div>
    )
}
const Categories = ({ categories }) => {
    return (
        <div className="categories">
            <h3>Categories</h3>
            {categories.map(
                (category, i) =>
                    <div key={i.toString()} className="category">
                        <span className="categoryName">{category.name}</span>
                        <span className="availableElm">{category.number}</span>
                    </div>
            )}
        </div>
    )
}
const Brands = ({ selectedBrands, setSelectedBrands }) => {
    function boxChecked(BoxList, i) {
        const newSelectBrands = [...BoxList];
        newSelectBrands[i].active = !newSelectBrands[i].active;
        setSelectedBrands(newSelectBrands);
    }

    return (

        <div className="Brands">
            <h3>Brands</h3>
            {
                selectedBrands.map(
                    (brand, i) =>
                        <div key={i.toString()} className="brand" >
                            <div onClick={() => boxChecked(selectedBrands, i)}><BoxChecker /></div>
                            <span>{brand.name}</span>
                        </div>
                )
            }
        </div>
    )
}
const LeftSideFilters = ({ selectedBrands, setSelectedBrands, setStars, stars }) => {
    return (
        <div className="LeftSideFilters">
            <Categories categories={
                [
                    {
                        name: "Wedding Cake",
                        number: 12
                    },
                    {
                        name: "Bread",
                        number: 8
                    },
                    {
                        name: "Gourment",
                        number: 28
                    },
                    {
                        name: "Pastry",
                        number: 2
                    }
                ]
            } />
            <Brands selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands} />
            <Rating stars={stars} setStars={setStars} />
            <PriceRange />
            <ApplyReset />
        </div>
    )
}
//-------------------------------------//

//------------Product Display---------//
const ProductDisplayGrid = ({ products }) => {
    return (
        <div className="productDisplayGrid">
            <ProductBlock
                products={products}
            />
        </div>
    )
}
const ProductDisplayList = ({ products }) => {
    return (
        <div className="ProductSearchResults">
            {
                products.map(
                    (product, i) =>
                        <div key={i.toString()} className="ProductDisplay">

                            <img src={product['image']} alt="product sold"></img>
                            <div className="middleSection">
                                <div className="productNameRating">
                                    <span className="productTitle">
                                        <Link style={{ 'textDecoration': 'none', 'color': 'black' }} to={'/product'}>
                                            {product['name']}
                                        </Link>
                                    </span>
                                    <span className="description">{product['description']}</span>
                                    <Ratings stars={[product['rating']]} />
                                </div>

                                <div className="productInfo">
                                    <ExtraDetails info={{
                                        left: product['extraInfo']['right'],
                                        right: product['extraInfo']['left']
                                    }} />
                                </div>
                            </div>

                            <div className="buySection">
                                <div className="PriceSection">
                                    <span className="price">{product['price']['currentPrice']} USD</span>
                                    <span className="discount">{product['price']['previousPrice']}</span>
                                </div>

                                <div className="deliveryInfo">
                                    <span className="shippingStatus">{product['shipping']['status']}</span>
                                    <span className="shippingDelay">{product['shipping']['delay']}</span>
                                </div>

                                <div className="addToWishList">
                                    <div className="btnproductDetails">
                                        <Link className="btnProductDetailsLink" to="/product">Product Details </Link>
                                        <i><FontAwesomeIcon icon={faChevronRight} /></i></div>
                                    <div className="btnWishList"><i><FontAwesomeIcon icon={faHeart} /></i><span>Add to wish list</span></div>
                                </div>
                            </div>
                        </div>
                )
            }
        </div>

    )
}
const SearchSection = ({ products, listGridDisplay, selectedBrands, setSelectedBrands, stars, setStars }) => {
    return (
        <div className="SearchSection">
            <LeftSideFilters
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                stars={stars}
                setStars={setStars}
            />
            {
                listGridDisplay ? <ProductDisplayList products={products} /> :
                    <ProductDisplayGrid products={products} />
            }
        </div>
    )
}
//--------------------------------//


const BottomNavigation = () => {
    return (
        <div className="BottomNavigation">
            <div className="page">
                <span>Page: </span>
                <span>1</span>
            </div>

            <div className="moreProducts">
                <span>Show more products</span>
                <i><FontAwesomeIcon icon={faChevronDown} /></i>
            </div>

            <div className="allProductFound">
                <span className="num">356</span>
                <span className="product">Products</span>
            </div>
        </div>
    )
}

function Category() {

    const [listGridDisplay, setlistGridDisplay] = useState(true);

    const location = useLocation();
    const { name } = location.state;
    //-------------------------------------------------//
    //------Ascending & Descending order filters-------//
    const [ascDesc, setAscDesc] = useState(true);
    const descOrder = (products) => {

        const newArr = [...products];
        let valEschange;

        for (let j = 0; j < newArr.length; j++) {
            for (let i = 0; i < newArr.length - 1; i++) {
                if (newArr[i]['name'][0].toLowerCase() < newArr[i + 1]['name'][0].toLowerCase()) {
                    valEschange = newArr[i];
                    newArr[i] = newArr[i + 1];
                    newArr[i + 1] = valEschange;
                }
            }
        }
        return newArr;
    }
    const ascOrder = (products) => {
        const newArr = [...products];
        let valEschange;

        for (let j = 0; j < newArr.length; j++) {
            for (let i = 0; i < newArr.length - 1; i++) {
                if (newArr[i]['name'][0].toLowerCase() > newArr[i + 1]['name'][0].toLowerCase()) {
                    valEschange = newArr[i];
                    newArr[i] = newArr[i + 1];
                    newArr[i + 1] = valEschange;
                }
            }
        }
        return newArr;
    }
    //------------------------------------------------//
    //------------Brand selection filter ------------//
    const brandsList = (products) => {
        const newArr = [...products];
        const brandList = [];
        for (let i = 0; i < newArr.length; i++) {
            let elemPresence = brandList.some(brand => brand['name'] === newArr[i]['brand']);
            if (!elemPresence) {
                brandList.push(
                    { name: newArr[i]['brand'], active: false }
                );
            }
        }
        return brandList;
    }
    const [selectedBrands, setSelectedBrands] = useState(
        [...brandsList(products)]
    );
    const selectedBrandlist = (brandlist, products) => {

        const availableProducts = [];
        const selectedBrands = brandlist.filter(elem => elem.active);

        selectedBrands.forEach(
            brand => {
                products.forEach(
                    product => {
                        if (product['brand'] === brand['name']) availableProducts.push(product);
                    }
                )
            }
        );
        return availableProducts;

    }
    //------------------------------------------------//
    //---------------- stars filter ------------------//
    const [stars, setStars] = useState(
        [
            { num: 5, active: false },
            { num: 4, active: false },
            { num: 3, active: false },
            { num: 2, active: false },
            { num: 1, active: false },
        ]
    );
    const starsSelected = (stars, products) => {
        const availableProducts = [];
        const selectedStars = stars.filter(star => star['active']);

        selectedStars.forEach(
            stars => {
                products.forEach(
                    product => {
                        if (product['rating'] === stars['num']) availableProducts.push(product);
                    }
                )
            }
        );
        return availableProducts;
    }
    //------------------------------------------------//
    //------------------ price Filter ----------------//
    const [filterList, setFilterList] = useState([
        { name: "Price: Low to High", active: false },
        { name: "Price: High to Low", active: false },
        { name: "Newest Arrivals", active: false },
        { name: "Avg. Customer Review", active: false }
    ]);
    const filterSelected = (filterList, products) => {
        let result = [...products];

        filterList.forEach(
            filter => {
                if (filter['name'] === 'Price: Low to High' && filter['active']) {
                    for (let i = 0; i < result.length; i++) {
                        for (let j = 0; j < result.length - 1; j++) {
                            if (result[j]['price']['currentPrice'] > result[j + 1]['price']['currentPrice']) {
                                let valHolder = result[j]['price']['currentPrice'];
                                result[j]['price']['currentPrice'] = result[j + 1]['price']['currentPrice'];
                                result[j + 1]['price']['currentPrice'] = valHolder;
                            }
                        }
                    }
                } else if (filter['name'] === 'Price: High to Low' && filter['active']) {
                    for (let i = 0; i < result.length; i++) {
                        for (let j = 0; j < result.length - 1; j++) {
                            if (result[j]['price']['currentPrice'] < result[j + 1]['price']['currentPrice']) {
                                let valHolder = result[j]['price']['currentPrice'];
                                result[j]['price']['currentPrice'] = result[j + 1]['price']['currentPrice'];
                                result[j + 1]['price']['currentPrice'] = valHolder;
                            }
                        }
                    }
                }
            })
        return result;
    }
    //------------------------------------------------//
    //---------------- final filtration --------------//
    const finalList = (products) => {
        let newList = [];
        if (ascDesc) newList = ascOrder(
            starsSelected(stars,
                selectedBrandlist(selectedBrands,
                    filterSelected(filterList, products))));
        else newList = descOrder(
            starsSelected(stars,
                selectedBrandlist(selectedBrands,
                    filterSelected(filterList, products))));
        return newList;
    }
    //------------------------------------------------//
    return (
        <div>
            <Title
                categoryName={name}
                listGridDisplay={listGridDisplay}
                setlistGridDisplay={setlistGridDisplay}
                filterList={filterList}
                setFilterList={setFilterList}
                ascDesc={ascDesc}
                setAscDesc={setAscDesc}
            />
            <SearchSection
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                listGridDisplay={listGridDisplay}
                products={finalList(products)}
                stars={stars}
                setStars={setStars} />
            <BottomNavigation />

        </div>
    );
}

export default Category;