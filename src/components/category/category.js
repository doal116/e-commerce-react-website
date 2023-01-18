
import React, { useState } from "react";
import './category.css';
import productPicture from '../../naturalProduct.jpg';
import gridDisplay from './gridDisplaySelected.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faList,
    faDotCircle, faCircle,
    faSquare, faSquareCheck,
    faChevronDown, faGripLinesVertical,
    faX, faStar,
    faHeart, faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const BoxChecker = () => {
    const [checked, setBoxChecked] = useState(false);
    const boxCheckedStyle = {
        'color': 'rgb(0, 135, 54)',
        'fontSize': '25px',
        'cursor': 'pointer'
    }
    return (
        <>
            {
                checked ?
                    <FontAwesomeIcon icon={faSquareCheck}
                        style={boxCheckedStyle}
                        onClick={() => setBoxChecked(!checked)} />
                    : <div className="box"
                        onClick={() => setBoxChecked(!checked)}></div>
            }

        </>

    )
}
const Ratings = ({ stars }) => {
    const yellowStarStyling = {
        color: 'rgb(255, 162, 0)'
    };
    const grayStarStyling = {
        color: 'rgb(207, 207, 207)'
    };
    return (
        stars.map(
            (star, i) =>
                <div key={i.toString()} className="level">
                    <BoxChecker />
                    <div className="stars">
                        {
                            [...Array(star)].map(
                                (elm, i) => <i key={i.toString()} style={yellowStarStyling}><FontAwesomeIcon icon={faStar} /></i>
                            )
                        }
                        {
                            [...Array(5 - star)].map(
                                (elm, i) => <i key={i.toString()} style={grayStarStyling}><FontAwesomeIcon icon={faStar} /></i>
                            )
                        }
                    </div>
                </div>
        )
    )
}

const Brands = () => {
    const [selectedBrands, setSelectedBrands] = useState(
        [
            { name: 'Air Heads', active: false },
            { name: 'Betty Crocker', active: false },
            { name: 'Black Forest', active: false },
            { name: 'Dare', active: false }
        ]
    )

    function boxChecked(BoxList, i) {
        const newSelectBrands = [...BoxList];
        newSelectBrands[i].active = !newSelectBrands[i].active;
        setSelectedBrands(newSelectBrands);
    }

    return (
        selectedBrands.map(
            (brand, i) =>
                <div key={i.toString()} 
                    className="brand"
                    onClick={()=>boxChecked(selectedBrands,i)}
                >
                    <BoxChecker />
                    <span>{brand.name}</span>
                </div>
        )
    )
}
const Categories = ({ categories }) => {
    return (
        categories.map(
            (category, i) =>
                <div key={i.toString()} className="category">
                    <span className="categoryName">{category.name}</span>
                    <span className="availableElm">{category.number}</span>
                </div>
        )
    )
}
const LeftSideFilters = () => {
    return (
        <div className="LeftSideFilters">
            <h3>Categories</h3>
            <div className="categories">
                <Categories categories={
                    [
                        {
                            name: "Bakery",
                            number: 128
                        },
                        {
                            name: "Bakery",
                            number: 128
                        },
                        {
                            name: "Bakery",
                            number: 128
                        },
                        {
                            name: "Bakery",
                            number: 128
                        }
                    ]
                } />
            </div>

            <h3>Brands</h3>
            <div className="Brands">
                <Brands brands={["Filter by brand item", "Filter by brand item", "Filter by brand item", "Filter by brand item"]} />
            </div>

            <h3>Rating</h3>
            <div className="Ratings">
                <div className="rating">
                    <Ratings stars={[5, 4, 3, 2, 1]} />
                </div>
            </div>

            <h3>Price</h3>
            <div className="priceSettings">
                <div className="PriceRange">
                    <div className="minPrice">
                        <span>Min</span>
                        <input type="number"></input>
                    </div>
                    <div className="maxPrice">
                        <span>Max</span>
                        <input type="number"></input>
                    </div>
                </div>
            </div>

            <div className="submittingFilter">
                <div className="apply">Apply</div>
                <div className="reset">Reset</div>
            </div>
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

                            <img src={productPicture} alt="product sold"></img>

                            <div className="middleSection">

                                <div className="productNameRating">
                                    <span className="productTitle">
                                        <Link style={{ 'textDecoration': 'none', 'color': 'black' }} to={'/product'}>
                                            {product.name}
                                        </Link>
                                    </span>
                                    <span className="description">{product.description}</span>
                                    <Ratings stars={[2]} />

                                </div>

                                <div className="productInfo">
                                    <div className="leftSide">
                                        <div>Fresheness</div>
                                        <div>Farm</div>
                                        <div>Delivery</div>
                                        <div>Stock</div>
                                    </div>
                                    <div className="rightSide">
                                        <div>{product.extraInfo.fresheness}</div>
                                        <div>{product.extraInfo.farm}</div>
                                        <div>{product.extraInfo.delivery}</div>
                                        <div>{product.extraInfo.stock}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="buySection">
                                <div className="PriceSection">
                                    <span className="price">{product.price.currentPrice} USD</span>
                                    <span className="discount">{product.price.previousPrice}</span>
                                </div>

                                <div className="deliveryInfo">
                                    <span className="shippingStatus">{product.shipping.status}</span>
                                    <span className="shippingDelay">{product.shipping.delay}</span>
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

const ProductDisplayGrid = ({ products }) => {
    return (
        <div className="productDisplayGrid">
            {
                products.map(
                    (elem, i) =>
                        <div key={i.toString()} className='mainBox'>
                            <img src={elem.image} alt={"product from mother nature"} />

                            <div className='description'>
                                <Link to="/product" className="title">{elem.name}</Link>
                                <span className='productDescrip'>{elem.description}</span>
                                <Ratings stars={[3]} />
                            </div>

                            <div className='buyingSection'>
                                <div className='price'>
                                    <span className='current-price'>{elem.price.currentPrice} USD</span>
                                    <span className='old-price'>{elem.price.previousPrice}</span>
                                </div>
                                <div className='btn-buy'><span>BUY NOW</span></div>
                            </div>

                        </div>
                )
            }
        </div>
    )
}
const SearchSection = ({ products, listGridDisplay }) => {
    return (
        <div className="SearchSection">
            <LeftSideFilters />
            {
                listGridDisplay ? <ProductDisplayList products={products} /> :
                    <ProductDisplayGrid products={products} />
            }
        </div>
    )
}
const Title = ({ categoryName, listGridDisplay, setlistGridDisplay }) => {
    const [filterList, setFilterList] = useState([
        { name: "Price: Low to High", active: false },
        { name: "Price: High to Low", active: false },
        { name: "Newest Arrivals", active: false },
        { name: "Avg. Customer Review", active: false }
    ]);
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

            <div className="filters">
                <div className="filter1">
                    <FontAwesomeIcon className="circle" icon={faCircle} />
                    <span>Filter text </span>
                    <FontAwesomeIcon icon={faDotCircle} />
                    <span>Filter Text</span>
                </div>
                <div className="filter2">
                    <FontAwesomeIcon className="square" icon={faSquare} />
                    <span>Filter</span>
                    <span className="nbm">Nbm</span>
                </div>
                <div className="filter2">
                    <FontAwesomeIcon className="square" icon={faSquare} />
                    <span>Filter</span>
                    <span className="nbm">Nbm</span>
                </div>

                <div className="filter3">
                    <div className="leftSide">
                        <FontAwesomeIcon className="squareCheck" icon={faSquareCheck} />
                        <span>Filter</span>
                        <span>12</span>
                    </div>
                    <FontAwesomeIcon icon={faGripLinesVertical} />

                    <div className="selectSection">
                        <span>select</span>
                        <FontAwesomeIcon className="selectArrow" icon={faChevronDown} />

                        <div className="listFilters">
                            {
                                filterList.map(
                                    (elem, i) =>
                                        <div key={i.toString()}
                                            onClick={
                                                () => {
                                                    const newFilterList = [...filterList]
                                                    newFilterList[i].active = !newFilterList[i].active;
                                                    setFilterList(newFilterList);
                                                }}
                                        >{elem.name}</div>
                                )
                            }
                        </div>

                    </div>
                </div>

            </div>
            <div className="appliedFilters">
                <span>Applied filters: </span>
                {
                    filterList.map(
                        (elem, i) => {
                            if (elem.active) {
                                return (
                                    <div key={i.toString()} className="selectedFilters">
                                        <span>{elem.name} </span>
                                        <i><FontAwesomeIcon icon={faX} onClick={
                                            () => {
                                                const newFilterList = [...filterList]
                                                newFilterList[i].active = !newFilterList[i].active;
                                                setFilterList(newFilterList);
                                            }} /></i>
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
    return (
        <div>
            <Title
                categoryName={name}
                listGridDisplay={listGridDisplay}
                setlistGridDisplay={setlistGridDisplay}

            />
            <SearchSection
                listGridDisplay={listGridDisplay}
                products={[
                    {
                        name: "Product Title",
                        description: "Space for small product description",
                        extraInfo:
                        {
                            fresheness: "New(Extra fresh)",
                            farm: "Grocery Tarm Fields",
                            delivery: "Europe",
                            stock: "320 pcs"
                        }
                        , shipping: {
                            status: "free shipping",
                            delay: "Delivery in 1 day"
                        },
                        price: {
                            currentPrice: 36.99,
                            previousPrice: 48.56
                        },
                        image: productPicture
                    },
                    {
                        name: "Product Title",
                        description: "Space for small product description",
                        extraInfo:
                        {
                            fresheness: "New(Extra fresh)",
                            farm: "Grocery Tarm Fields",
                            delivery: "Europe",
                            stock: "320 pcs"
                        }
                        , shipping: {
                            status: "free shipping",
                            delay: "Delivery in 1 day"
                        },
                        price: {
                            currentPrice: 36.99,
                            previousPrice: 48.56
                        },
                        image: productPicture
                    },
                    {
                        name: "Product Title",
                        description: "Space for small product description",
                        extraInfo:
                        {
                            fresheness: "New(Extra fresh)",
                            farm: "Grocery Tarm Fields",
                            delivery: "Europe",
                            stock: "320 pcs"
                        }
                        , shipping: {
                            status: "free shipping",
                            delay: "Delivery in 1 day"
                        },
                        price: {
                            currentPrice: 36.99,
                            previousPrice: 48.56
                        },
                        image: productPicture
                    }, {
                        name: "Product Title",
                        description: "Space for small product description",
                        extraInfo:
                        {
                            fresheness: "New(Extra fresh)",
                            farm: "Grocery Tarm Fields",
                            delivery: "Europe",
                            stock: "320 pcs"
                        }
                        , shipping: {
                            status: "free shipping",
                            delay: "Delivery in 1 day"
                        },
                        price: {
                            currentPrice: 36.99,
                            previousPrice: 48.56
                        },
                        image: productPicture
                    }, {
                        name: "Product Title",
                        description: "Space for small product description",
                        extraInfo:
                        {
                            fresheness: "New(Extra fresh)",
                            farm: "Grocery Tarm Fields",
                            delivery: "Europe",
                            stock: "320 pcs"
                        }
                        , shipping: {
                            status: "free shipping",
                            delay: "Delivery in 1 day"
                        },
                        price: {
                            currentPrice: 36.99,
                            previousPrice: 48.56
                        },
                        image: productPicture
                    }
                ]} />
            <BottomNavigation />

        </div>
    );
}

export default Category;