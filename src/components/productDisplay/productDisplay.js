import React, { useState } from "react";
import './sass/productDisplay.css';
import {
    faPlus
    , faChevronDown,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductBlock from "../commonComponent/ProductBlock";
import ExtraDetails from "../commonComponent/ProductExtraDetails";
import Ratings from "../commonComponent/Ratings";

import heart from '../svg/heart.svg';
import compareIcon from '../svg/compareIcon.svg';
import profilePic from '../productImages/profilePic.png';

import { useLocation } from "react-router-dom";
import products from "../products.js";

import { useContext } from 'react';
import { cartItems } from "../../cartItemsContext";

const AddToCart = ({ product }) => {
    const { cartItemsValue, setCartItemsValue } = useContext(cartItems);
    const [pieces, setPieces] = useState(1);
    const availablePieces = () => {
        let numPieces = [];
        for (let i = 1; i < product['availableUnits']; i++) {
            numPieces.push(i);
        }
        return numPieces;
    }
    const line = {
        'width': '2px',
        'height': '16px',
        'backgroundColor': 'black',
        'opacity': '0.4',
        'borderRadius': '10px',
        'alignSelf': 'center'
    }
    return (
        <div className="addToCart">

            <div className="price">
                <span className="currentPrice">{product['price']['currentPrice']} USD</span>
                <span className="oldPrice">{product['price']['previousPrice']} USD</span>
            </div>

            <div className="addToCartOptions">
                <div className="piecesToAddSec">

                    <div className="piecesToAdd">

                        <span style={{ 'opacity': '0.4' }}>{pieces}</span>
                        <div style={line}></div>

                        <div className="pieces" >
                            <span>Pcs</span>
                            <FontAwesomeIcon className="arrowDown" icon={faChevronDown} />
                        </div>

                    </div>

                    <div className="numPieces" >
                        {
                            availablePieces().map(
                                (elem, i) => {
                                    if (i > 0) return <div key={i.toString()} className="num" onClick={() => setPieces(old => i)}>{i}</div>
                                    return <div key={i.toString()} ></div>
                                }

                            )
                        }
                    </div>
                </div>

                <div className="btnAddToCart" onClick={() => {
                    setCartItemsValue(cartItemsValue + 1);
                }}>
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
                <img className="heartIcon" alt="icon" src={heart}></img>
                <span> Add to my wish list</span>
            </div>
            <div className="compare">
                <img className="listSqure" src={compareIcon} alt="compare icon" />
                <span> Compare</span>
            </div>
        </div>
    )
}
const Descrip = ({ table }) => {
    return (
        <div>
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
                    <thead>
                        <tr>
                            <th>Vitamins</th>
                            <th>Quantity</th>
                            <th>% DV</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            table.map(
                                (row, i) =>
                                    <tr key={i.toString()}>
                                        <td>{row.vitamin}</td>
                                        <td>{row.quantity}</td>
                                        <td>{row.dv}</td>
                                    </tr>
                            )
                        }</tbody>
                </table>
            </div>
        </div>
    )
}
const Review = ({ usersInfo }) => {
    return (
        <div className="reviews">
            {
                usersInfo.map(
                    (user, i) =>
                        <div className="userInfo" key={i.toString()}>
                            <img src={user.profile} alt="user's profilee"></img>
                            <div className="userReview">
                                <span className="userName">{user.name}</span>
                                <Ratings stars={[user.stars]} />
                                <span className="date">{user.date}</span>
                                <p>{user.comment}</p>
                            </div>
                        </div>
                )

            }
        </div>
    )
}
const Question = ({ questions }) => {

    function click(answer, questionClass) {
        const presenceOfAnswer = document.getElementsByClassName(`${questionClass}answer`);

        if (presenceOfAnswer.length === 0) {
            const destination = document.getElementsByClassName(questionClass);
            const elem = document.createElement('p');
            elem.className = `${questionClass}answer`;
            elem.innerHTML = answer;
            destination[0].appendChild(elem)
        } else {
            presenceOfAnswer[0].remove();
        }

    }
    return (
        <div className="questions">
            {
                questions.map(
                    (elem, i) =>
                        <div
                            className={(i).toString() + " question"}
                            key={(i).toString()}
                            onClick={() => click(elem.answer, (i).toString())}
                        >
                            <p>{elem.question}</p>
                            <i><FontAwesomeIcon icon={faChevronRight} /></i>
                        </div>
                )

            }

        </div>
    )
}
const ReviewDescripQuestion = ({ table }) => {

    const [description, setDescription] = useState(true);
    const [review, setReview] = useState(false);
    const [question, setQuestion] = useState(false);

    function descriptionV() {
        setDescription(true);
        setReview(false);
        setQuestion(false);
    }
    function reviewVal() {
        setDescription(false);
        setReview(true);
        setQuestion(false);
    }
    function questionVal() {
        setDescription(false);
        setReview(false);
        setQuestion(true);
    }


    return (
        <div className="ReviewDescripQuestion">
            <nav>
                {
                    description ?
                        <div onClick={() => descriptionV()} className="greenSlider">Description</div> :
                        <div onClick={() => descriptionV()} className="graySlider">Description</div>
                }
                {
                    review ?
                        <div onClick={() => reviewVal()} className="greenSlider">Reviews</div> :
                        <div onClick={() => reviewVal()} className="graySlider">Reviews</div>
                }
                {
                    question ?
                        <div onClick={() => questionVal()} className="greenSlider">Questions</div> :
                        <div onClick={() => questionVal()} className="graySlider">Questions</div>
                }
            </nav>
            {
                description ? <Descrip table={table} /> :
                    review ? <Review usersInfo={
                        [
                            {
                                name: "Adelin Berlo",
                                date: "12.01.2020",
                                stars: 3,
                                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                                profile: profilePic
                            },
                            {
                                name: "Adelin Berlo",
                                date: "12.01.2020",
                                stars: 3,
                                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                                profile: profilePic
                            }

                        ]
                    } /> :
                        question ? <Question
                            questions={[
                                {
                                    question: "Where to store after recieving?",
                                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                                },
                                {
                                    question: "Where to store after recieving?",
                                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                                },
                                {
                                    question: "Where to store after recieving?",
                                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                                }
                                , {
                                    question: "Where to store after recieving?",
                                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                                }
                            ]}
                        /> :
                            console.log('Error')
            }
        </div>
    )
}
const DescriptionSec = ({ product }) => {
    return (
        <div className="descriptionSec">

            <h1>{product['name']}</h1>
            <div className="legend" >
                <Ratings stars={[product['rating']]} />
                <span style={{ opacity: '0.4', textDecoration: 'underline' }}>(1 customer review)</span>
            </div>

            <div className="shortDescription">
                <p>{product['description']}</p>
            </div>

            <div className="moreDescription">
                <ExtraDetails info={{ left: product['extraInfo']['left'], right: product['extraInfo']['right'] }} />
                <ExtraDetails info={{ left: ['Freshness', 'Buy by', 'Delivery', 'Delivery area'], right: ['1 days old', 'pcs,kgs,box,pack', 'In 2 days', 'Czech republic'] }} />
            </div>

            <AddToCart product={product} />
            <AddToWishList />
            <ReviewDescripQuestion
                table={[{ vitamin: "Vitamin A equiv.", quantity: "735 μg", dv: "104 %" },
                { vitamin: "Vitamin A equiv.", quantity: "735 μg", dv: "104 %" },
                { vitamin: "Vitamin A equiv.", quantity: "735 μg", dv: "104 %" },
                { vitamin: "Vitamin A equiv.", quantity: "735 μg", dv: "104 %" },
                { vitamin: "Vitamin A equiv.", quantity: "735 μg", dv: "104 %" },
                { vitamin: "Vitamin A equiv.", quantity: "735 μg", dv: "104 %" }]} />
        </div>
    )
}
const PictureSec = ({ images }) => {
    const [selectImg, setSelectImg] = useState(0);

    return (
        <div className="pictureSec">
            <div className="productPic">
                <img src={images[selectImg]} alt=""></img>
            </div>
            <div className="grid">
                {
                    images.map(
                        (image, i) => <img key={i.toString()} src={image} alt="" onClick={() => setSelectImg(val => i)}></img>
                    )
                }
            </div>

        </div>
    )
}
const RelatedProducts = ({ relatedProducts }) => {
    const styling = {
        'display': 'flex',
        'marginBottom': '48px',
        'marginLeft': '80px',
        'columnGap': '24px'
    }
    return (
        <div className="RelatedProducts">
            <div className="upperSec">
                <span >Related Products</span>
                <button>
                    More Products
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>

            </div>
            <div style={styling}>
                <ProductBlock products={relatedProducts} />
            </div>
        </div>
    )
}
const scrollUp = () => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
}


function ProductDisplay() {
    const location = useLocation();
    const { productId } = location.state;
    const product = products.filter(product => product['id'] === productId)[0];
    const relatedProducts = products.filter(elem => elem['category'] === product['category']).slice(0, 5);
    scrollUp();
    return (
        <div>
            <div style={{ 'marginTop': '180px', 'marginLeft': '80px' }}>
                <span style={{ 'opacity': '0.4' }}>Homepage</span>
                <span style={{ 'opacity': '0.4' }}> / {product['category']} / </span>
                <span>{product['name']}</span>
            </div>
            <div className="productDisplay">
                <PictureSec images={[product['image'], product['image'], product['image'], product['image'], product['image'], product['image']]} />
                <DescriptionSec product={product} />
            </div>
            <RelatedProducts relatedProducts={relatedProducts} />
        </div>
    )

}

export default ProductDisplay;