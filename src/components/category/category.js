
import React from "react";
import './category.css';
import productPicture from '../../naturalProduct.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTh, faList,
    faDotCircle, faCircle,
    faSquare, faSquareCheck,
    faChevronDown, faGripLinesVertical,
    faX, faStar,
    faHeart, faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const LeftSideFilters = () => {
    return (
        <div className="LeftSideFilters">
            <div>
                <h3>Categories</h3>
            </div>

            <div>
                <h3>Brands</h3>
                <div>
                    <div><i><FontAwesomeIcon icon={faSquare}/></i><span>Filter by brand item</span></div><i><FontAwesomeIcon icon={faSquare}/></i><span>Filter by brand item</span>
                    <div><i><FontAwesomeIcon icon={faSquare}/></i><span>Filter by brand item</span></div>
                    <div><i><FontAwesomeIcon icon={faSquare}/></i><span>Filter by brand item</span></div>
                    <div><i><FontAwesomeIcon icon={faSquare}/></i><span>Filter by brand item</span></div>
                    <div><i><FontAwesomeIcon icon={faSquare}/></i><span>Filter by brand item</span></div>
                    <div><i><FontAwesomeIcon icon={faSquare}/></i><span>Filter by brand item</span></div>
                </div>
            </div>

            <div>
                <h3>Rating</h3>
            </div>

            <div className="priceSettings">
                <h3>Price</h3>
                <div className="PriceRange">
                    <div className="minPrice">
                        <div>Min</div>
                        <input type="text"></input>
                    </div>
                    <div className="maxPrice">
                        <div>Max</div>
                        <input type="text"></input>
                    </div>
                </div>
            </div>
            <div>
                <div>Apply</div>
                <div>Reset</div>
            </div>
        </div>
    )
}
const ProductDisplay = ({ products }) => {
    return (
        products.map(
            product =>
                <div className="ProductDisplay">
                    <img src={productPicture} alt="product sold"></img>

                    <div className="middleSection">

                        <div className="productNameRating">
                            <span className="productTitle">{product.name}</span>
                            <span className="description">{product.description}</span>
                            <div>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>

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
                            <div className="btnproductDetails">Product Details <i><FontAwesomeIcon icon={faChevronRight} /></i></div>
                            <div className="btnWishList"><i><FontAwesomeIcon icon={faHeart} /></i><span>Add to wish list</span></div>
                        </div>
                    </div>
                </div>
        )

    )
}
const ProductSearchResults = ({ products }) => {
    return (
        <div className="ProductSearchResults">
            <ProductDisplay products={products} />
        </div>
    )
}
const SearchSection = ({ products }) => {
    return (
        <div className="SearchSection">
            <LeftSideFilters />
            <ProductSearchResults products={products} />
        </div>
    )
}
const Title = ({ categoryName }) => {
    return (
        <div className="Title">
            <div className="CategoryPath">
                <p><span>Homepage</span> / {categoryName}</p>
            </div>
            <div className="choosenCategory">
                <h2>{categoryName}</h2>
                <div className="ViewStyle">
                    <p className="gridView"><FontAwesomeIcon icon={faTh} /> Gird view</p>
                    <p className="listView"><FontAwesomeIcon icon={faList} /> List View</p>
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
                    </div>
                </div>

            </div>
            <div className="appliedFilters">
                <span>Applied filters: </span>
                <div className="selectedFilters">
                    <span>selected Filter </span>
                    <i><FontAwesomeIcon icon={faX} /></i>
                </div>
            </div>
        </div>
    )
}
class Category extends React.Component {
    render() {
        return (
            <div>
                <Title categoryName={"Fruit and vegetables"} />
                <SearchSection products={[
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
                        }
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
                        }
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
                        }
                    }
                ]} />
            </div>
        );
    };
}

export default Category;