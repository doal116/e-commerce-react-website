import React, { useState } from "react";
import './sass/category.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faList,
    faDotCircle, faCircle,
    faSquareCheck,
    faChevronDown, faGripLinesVertical,
    faX,
    faHeart, faChevronRight,
    faSortAlphaUp, faSortAlphaDesc, faChevronUp, faThLarge
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

import Ratings from "../commonComponent/Ratings";
import BoxChecker from "../commonComponent/BoxChecker";
import ProductBlock from "../commonComponent/ProductBlock";
import ExtraDetails from "../commonComponent/ProductExtraDetails";
import products from "../products";

//-----------Upper Filter ------------//
const AppliedFilters = ({ filterList }) => {
    let num = 0;
    filterList.forEach((elem) => {
        if (elem.active) num += 1;
    })
    return num;
}
const Filters = ({ filterList, ascDesc, setAscDesc, additionalFilters, filterListDisplay, setFilterList }) => {

    const ascDescendingBtn = (ascDesc) => {

        if (ascDesc) return <FontAwesomeIcon className="dot" icon={faDotCircle} />;
        else return <FontAwesomeIcon className="circle" icon={faCircle} />;
    }
    const unChecker = () => {
        setFilterList([
            { name: "Price: Low to High", active: false },
            { name: "Price: High to Low", active: false },
            { name: "Newest Arrivals", active: false },
            { name: "Avg. Customer Rating", active: false }
        ])
    }
    return (
        <div className="filters">

            <div className="AscDescending">
                <div onClick={() => {
                    setAscDesc({ asc: !ascDesc['asc'], desc: false });
                }}>
                    {ascDescendingBtn(ascDesc['asc'])}
                </div>
                <FontAwesomeIcon icon={faSortAlphaUp} />
                <div onClick={() => {
                    setAscDesc({ asc: false, desc: !ascDesc['desc'] });
                }}>
                    {ascDescendingBtn(ascDesc['desc'])}
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
                            <FontAwesomeIcon className="squareCheck" icon={faSquareCheck}
                                onClick={() => { unChecker() }} /> :
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
    , ascDesc, setAscDesc, numAvailableProducts }) => {


    const filterListDisplay = (index) => {
        const newFilterList = [...filterList]

        if (newFilterList[index]['name'] === 'Price: Low to High') newFilterList[index + 1]['active'] = false;
        else if (newFilterList[index]['name'] === 'Price: High to Low') newFilterList[index - 1]['active'] = false;

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
                                <FontAwesomeIcon icon={faThLarge} style={{ 'color': 'rgb(0, 187, 124)' }} /> :
                                <FontAwesomeIcon icon={faThLarge} />
                        }
                        <span> Gird view</span></p>
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
                        <span> List View</span></p>
                    <p className="productAvailable"><span>{numAvailableProducts}</span> Products</p>
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
const PriceRange = ({ priceRange, setPriceRange }) => {
    const handleChange = event => {
        if (event.target.className === 'minPriceRange') {

            setPriceRange({
                minPrice: parseInt(event.target.value)
                , maxPrice: priceRange['maxPrice']
            })
        } else {

            setPriceRange({
                minPrice: priceRange['minPrice']
                , maxPrice: parseInt(event.target.value)
            })
        }
    };
    return (
        <div className="priceSettings">
            <h3>Price</h3>
            <div className="PriceRange">
                <div className="minPrice">
                    <span>Min</span>
                    <input type="number"
                        className="minPriceRange"
                        value={priceRange['minPrice']}
                        min={1}
                        max={priceRange['maxPrice']}
                        onChange={handleChange}></input>
                </div>
                <div className="maxPrice">
                    <span>Max</span>
                    <input type="number"
                        className="maxPriceRange"
                        value={priceRange['maxPrice']}
                        min={priceRange['minPrice']}
                        max={1000000}
                        onChange={handleChange}></input>
                </div>
            </div>
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
const Categories = ({ products }) => {

    const availableTypeBakery = () => {
        let listTypes = [];
        products.forEach((product) => {
            const index = listTypes.findIndex((type) => type['type'] === product['type']);
            if (index < 0) {
                listTypes.push({ type: product['type'], num: 1 });
            } else {
                listTypes[index]['num'] += 1;
            }
        });
        return listTypes;
    }

    return (
        <div className="categories">
            <h3>Categories</h3>
            {
                availableTypeBakery().map(
                    (type, i) =>
                        <div className="category" key={i.toString()}>
                            <span className="categoryName">{type['type']}</span>
                            <span className="availableElm">{type['num']}</span>
                        </div>
                )
            }
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
const LeftSideFilters = ({ selectedBrands, setSelectedBrands, setStars, stars, priceRange, setPriceRange, products }) => {
    return (
        <div className="LeftSideFilters">
            <Categories products={products} />
            <Brands selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands} />
            <Rating stars={stars} setStars={setStars} />
            <PriceRange priceRange={priceRange} setPriceRange={setPriceRange} />
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
                            <img src={product['image']} className='imgBlurBackground' alt="product"></img>
                            <img src={product['image']} alt="product"></img>
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
const SearchSection = ({ products, listGridDisplay, selectedBrands, setSelectedBrands, stars, setStars, priceRange, setPriceRange, moreProduct }) => {

    return (
        <div className="SearchSection">
            <LeftSideFilters
                products={products}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                stars={stars}
                setStars={setStars}
                priceRange={priceRange}
                setPriceRange={setPriceRange}

            />
            {
                listGridDisplay ? <ProductDisplayList products={moreProduct ? products.slice(0, 8) : products} /> :
                    <ProductDisplayGrid products={moreProduct ? products.slice(0, 8) : products} />
            }
        </div>
    )
}
//--------------------------------//


const BottomNavigation = ({ moreProduct, setMoreProduct, numAvailableProducts }) => {
    return (
        <div className="BottomNavigation">
            <div className="page">
                <span>Page: </span>
                <span>1</span>
            </div>

            <div className="moreProducts" onClick={() => { setMoreProduct(!moreProduct) }}>
                <span>Show more products</span>
                {
                    moreProduct ?
                        <i><FontAwesomeIcon icon={faChevronDown} /></i> :
                        <i><FontAwesomeIcon icon={faChevronUp} /></i>
                }
            </div>

            <div className="allProductFound">
                <span className="num">{numAvailableProducts}</span>
                <span className="product">Products</span>
            </div>
        </div>
    )
}

function Category() {

    const location = useLocation();
    const { name } = location.state;
    const [listGridDisplay, setlistGridDisplay] = useState(false);

    //-------------------------------------------------//
    //------Ascending & Descending order filters-------//
    const [ascDesc, setAscDesc] = useState({ asc: false, desc: false });
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
        const selectedBrands = brandlist.filter(elem => elem['active']);
        if (selectedBrands.length === 0) return products;
        selectedBrands.forEach(
            brand => {
                products.forEach(
                    product => {
                        if (product['brand'] === brand['name']) availableProducts.push(product);
                    }
                )
            }
        );
        console.log(availableProducts)
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

        if (selectedStars.length === 0) return products;
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
    //----------------- upper Filter -----------------//
    const [filterList, setFilterList] = useState([
        { name: "Price: Low to High", active: false },
        { name: "Price: High to Low", active: false },
        { name: "Newest Arrivals", active: false },
        { name: "Avg. Customer Rating", active: false }
    ]);
    const upperFilterSelected = (filterList, products) => {
        let result = [...products];
        filterList.forEach(
            filter => {
                if (filter['name'] === 'Price: Low to High' && filter['active']) {
                    result.forEach(() => {
                        result.forEach((elm, j) => {
                            if (j !== result.length - 1) {
                                if (result[j]['price']['currentPrice'] > result[j + 1]['price']['currentPrice']) {
                                    let valHolder = result[j];
                                    result[j] = result[j + 1];
                                    result[j + 1] = valHolder;
                                }
                            }
                        })
                    })
                }
                if (filter['name'] === 'Price: High to Low' && filter['active']) {
                    result.forEach(() => {
                        result.forEach((elm, j) => {
                            if (j !== result.length - 1) {
                                if (result[j]['price']['currentPrice'] < result[j + 1]['price']['currentPrice']) {
                                    let valHolder = result[j];
                                    result[j] = result[j + 1];
                                    result[j + 1] = valHolder;
                                }
                            }
                        })
                    })
                }
                if (filter['name'] === 'Newest Arrivals' && filter['active']) {
                    result.forEach(() => {
                        result.forEach((elem, j) => {
                            if (j !== result.length - 1) {
                                const date1 = result[j]['arrivalDate'].split('/');
                                const day1 = parseInt(date1[0]);
                                const month1 = parseInt(date1[1]);
                                const year1 = parseInt(date1[2]);

                                const date2 = result[j + 1]['arrivalDate'].split('/');
                                const day2 = parseInt(date2[0]);
                                const month2 = parseInt(date2[1]);
                                const year2 = parseInt(date2[2]);

                                if (year1 < year2) {
                                    let valHolder = result[j];
                                    result[j] = result[j + 1];
                                    result[j + 1] = valHolder;
                                } else {
                                    if (month1 < month2 && year1 === year2) {
                                        let valHolder = result[j];
                                        result[j] = result[j + 1];
                                        result[j + 1] = valHolder;
                                    } else {
                                        if (day1 < day2 && month1 === month2 && year1 === year2) {
                                            let valHolder = result[j];
                                            result[j] = result[j + 1];
                                            result[j + 1] = valHolder;
                                        }
                                    }
                                }
                            }

                        })

                    })


                }
                if (filter['name'] === 'Avg. Customer Rating' && filter['active']) {
                    let sumOfRating = 0;
                    let avgRating = 0;
                    result.forEach((elem) => {
                        sumOfRating += elem['rating'];
                    });
                    avgRating = Math.round(sumOfRating / result.length);
                    result = result.filter(elem => elem['rating'] >= avgRating)
                }
            })
        return result;
    }
    //------------------------------------------------//
    //----------- price range Filter -----------------//
    const [priceRange, setPriceRange] = useState(
        { minPrice: 1, maxPrice: 10000 }
    );
    const priceRangeFilter = (priceRange, products) => {
        let newList = [];
        newList = products.filter(product =>
            product['price']['currentPrice'] <= priceRange['maxPrice'] && product['price']['currentPrice'] >= priceRange['minPrice']);

        return newList;
    }
    //------------------------------------------------//
    //--------------- More Product -------------------//
    const [moreProduct, setMoreProduct] = useState(true);
    //------------------------------------------------//
    //------------------------------------------------//
    //---------------- final filtration --------------//
    const finalList = (products) => {
        let newList = [];

        newList = priceRangeFilter(priceRange,
            upperFilterSelected(filterList,
                selectedBrandlist(selectedBrands,
                    starsSelected(stars, products))));

        if (ascDesc['asc']) newList = ascOrder([...newList]);
        if (ascDesc['desc']) newList = descOrder([...newList]);
        return newList;
    }


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
                numAvailableProducts={finalList(products).length}
            />
            <SearchSection
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                listGridDisplay={listGridDisplay}
                products={finalList(products)}
                stars={stars}
                setStars={setStars}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                moreProduct={moreProduct}
            />
            <BottomNavigation
                moreProduct={moreProduct}
                setMoreProduct={setMoreProduct}
                numAvailableProducts={finalList(products).length} />

        </div>
    );
}

export default Category;