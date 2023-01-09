import React, { Component } from "react";
import './productDisplay.css';
import {
    faStar, faPlus
    , faChevronDown,
    faListSquares
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heart from './heart.png'

const Ratings = ({ stars }) => {
    const yellowStarStyling = {
        color: 'rgb(255, 162, 0)'
    };
    const grayStarStyling = {
        color: 'rgb(207, 207, 207)'
    };
    return (
        stars.map(
            star =>
                <div className="level">
                    <div className="box"></div>
                    <div className="stars">
                        {
                            [...Array(star)].map(
                                () => <i style={yellowStarStyling}><FontAwesomeIcon icon={faStar} /></i>
                            )
                        }
                        {
                            [...Array(5 - star)].map(
                                () => <i style={grayStarStyling}><FontAwesomeIcon icon={faStar} /></i>
                            )
                        }
                    </div>
                </div>
        )
    )
}
const PictureSec = ({ images }) => {
    return (
        <div className="pictureSec">
            Hello
        </div>
    )
}
const ExtraDetails = ({ info }) => {
    return (
        <div className="extraDetails">

            <div className="leftSec">
                {
                    info.left.map(inf => <span>{inf}:</span>)
                }
            </div>
            <div className="rightSec">
                {
                    info.right.map(inf => <span>{inf}</span>)
                }
            </div>

        </div>
    )
}
const AddToCart = () => {
    const line = {
        'width': '2px',
        'height': '16px',
        'background-color': 'black',
        'opacity': '0.5',
        'border-radius': '10px',
        'align-self': 'center'
    }
    return (
        <div className="addToCart">

            <div className="price">
                <span className="currentPrice">36.23 USD</span>
                <span className="oldPrice">48.56 USD</span>
            </div>

            <div className="addToCartOptions">
                <div className="piecesToAdd">
                    <span>1</span>
                    <div style={line}></div>
                    <div className="pieces">
                        <span>Pcs</span>
                        <FontAwesomeIcon className="arrowDown" icon={faChevronDown} />
                    </div>
                </div>

                <div className="btnAddToCart">
                    <FontAwesomeIcon className="plus" icon={faPlus} />
                    <span> Add to Cart</span>
                </div>
            </div>

        </div>
    )
}
const AddToWishList = () => {
    return (
        <div className="addToWishList">
            <div className="wishList">
                <img className="heartIcon" alt="icon"src={heart}></img>
                <span> Add to my wish list</span>
            </div>
            <div className="compare">
                <FontAwesomeIcon className="listSqure" icon={faListSquares} />
                <span> Compare</span>
            </div>
        </div>
    )
}
const ReviewDescripQuestion = ({ table }) => {
    return (
        <div className="ReviewDescripQuestion">
            <div className="nav">
                <div>Description</div>
                <div>Reviews</div>
                <div>Questions</div>
            </div>
            <div className="origins">
                <h4>Origins</h4>
                <p>We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.
                </p>
            </div>
            <div className="Howtocook">
                <h4>How to cook?</h4>
                <p>From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.
                </p>
            </div>

            <div className="vitamins">
                <h4>Full of Vitamins</h4>
                <table>
                    <tr>
                        <th>Vitamins</th>
                        <th>Quantity</th>
                        <th>% DV</th>
                    </tr>
                    {
                        table.map(
                            row =>
                                <tr>
                                    <td>{row.vitamin}</td>
                                    <td>{row.quantity}</td>
                                    <td>{row.dv}</td>
                                </tr>
                        )
                    }
                </table>
            </div>
        </div>
    )
}
const DescriptionSec = () => {
    return (
        <div className="descriptionSec">

            <h1>Carrots from Tomissy Farm</h1>
            <Ratings stars={[4]} />

            <div className="shortDescription">
                <p>Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s carrots are growing on the fields naturally.</p>
            </div>

            <div className="moreDescription">
                <ExtraDetails info={{ left: ['SKU', 'Category', 'Stock', 'Farm'], right: ['76645', 'Vegetables', 'In Stock', 'Grocery Tarm Fields'] }} />
                <ExtraDetails info={{ left: ['SKU', 'Category', 'Stock', 'Farm'], right: ['76645', 'Vegetables', 'In Stock', 'Grocery Tarm Fields'] }} />
            </div>

            <AddToCart />
            <AddToWishList />
            <ReviewDescripQuestion 
                table={[{vitamin:"Vitamin A equiv.",quantity:"735 μg",dv:"104 %"},
                {vitamin:"Vitamin A equiv.",quantity:"735 μg",dv:"104 %"},
                {vitamin:"Vitamin A equiv.",quantity:"735 μg",dv:"104 %"},
                {vitamin:"Vitamin A equiv.",quantity:"735 μg",dv:"104 %"},
                {vitamin:"Vitamin A equiv.",quantity:"735 μg",dv:"104 %"},
                {vitamin:"Vitamin A equiv.",quantity:"735 μg",dv:"104 %"}]}/>
        </div>
    )
}
class ProductDisplay extends Component {
    render() {
        return (
            <div className="productDisplay">
                <PictureSec />
                <DescriptionSec />
            </div>
        )
    }
}

export default ProductDisplay;