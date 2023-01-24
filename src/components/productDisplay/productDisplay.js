import React, { Component, useState } from "react";
import './sass/productDisplay.css';
import {
    faStar, faPlus
    , faChevronDown,
    faListSquares,
    faChevronRight

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heart from './heart.png';
import carrot from './carrots.png';
import ribs  from './bonelessRibeyes.jpg';
import profilePic from './profilePic.png';
import ProductBlock from "../commonComponent/ProductBlock";
import ExtraDetails from "../commonComponent/ProductExtraDetails";


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

const AddToCart = () => {
    const [pieces, setPieces] = useState(1);
    const availablePieces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const line = {
        'width': '2px',
        'height': '16px',
        'background-color': 'black',
        'opacity': '0.4',
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
                            availablePieces.map(
                                (elem, i) => {
                                    if (i > 0) return <div className="num" onClick={() => setPieces(old => i)}>{i}</div>
                                    return <></>
                                }

                            )
                        }
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
                <img className="heartIcon" alt="icon" src={heart}></img>
                <span> Add to my wish list</span>
            </div>
            <div className="compare">
                <FontAwesomeIcon className="listSqure" icon={faListSquares} />
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
const Review = ({ usersInfo }) => {
    return (
        <div className="reviews">
            {
                usersInfo.map(
                    user =>
                        <div className="userInfo">
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
const DescriptionSec = () => {
    return (
        <div className="descriptionSec">

            <h1>Carrots from Tomissy Farm</h1>
            <div style={{ display: 'flex', columnGap: '10px' }}>
                <Ratings stars={[4]} />
                <span style={{ opacity: '0.4', textDecoration: 'underline' }}>(1 customer review)</span>
            </div>

            <div className="shortDescription">
                <p>Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s carrots are growing on the fields naturally.</p>
            </div>

            <div className="moreDescription">
                <ExtraDetails info={{ left: ['SKU', 'Category', 'Stock', 'Farm'], right: ['76645', 'Vegetables', 'In Stock', 'Grocery Tarm Fields'] }} />
                <ExtraDetails info={{ left: ['Freshness', 'Buy by', 'Delivery', 'Delivery area'], right: ['1 days old', 'pcs,kgs,box,pack', 'In 2 days', 'Czech republic'] }} />
            </div>

            <AddToCart />
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
    const [selectImg, setSelectImg] =useState(0);

    return (
        <div className="pictureSec">
            <div className="productPic">
                <img src={images[selectImg]} alt=""></img>
            </div>
            <div className="grid">
                {
                    images.map(
                        (image, i) => <img src={image} alt="" onClick={()=>setSelectImg(val=>i)}></img>
                    )
                }
            </div>

        </div>
    )
}
const RelatedProducts = () => {
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
                <ProductBlock products={[{ name: "Ribs", description: "very tasty you wanna have more", price:{currentPrice: 10.48, previousPrice: 131.2}, image: carrot },
                { name: "Butter", description: "very tasty you wanna have more", price:{currentPrice: 10.48, previousPrice: 131.2}, image: carrot },
                { name: "Butter", description: "very tasty you wanna have more", price:{currentPrice: 10.48, previousPrice: 131.2}, image: carrot },
                { name: "Butter", description: "very tasty you wanna have more", price:{currentPrice: 10.48, previousPrice: 131.2}, image: carrot },
                { name: "Butter", description: "very tasty you wanna have more", price:{currentPrice: 10.48, previousPrice: 131.2}, image: carrot }]} />
            </div>
        </div>
    )
}
class ProductDisplay extends Component {
    render() {
        return (
            <div >
                <div style={{ 'margin-top': '180px', 'margin-left': '80px' }}>
                    <span style={{ 'opacity': '0.4' }}>Homepage</span>
                    <span style={{ 'opacity': '0.4' }}> / Fruit and vegetables / </span>
                    <span>Carrots from Tomissy Farm</span>
                </div>
                <div className="productDisplay">
                    <PictureSec images={[carrot, carrot, carrot, carrot, carrot, ribs]} />
                    <DescriptionSec />
                </div>
                <RelatedProducts />
            </div>
        )
    }
}

export default ProductDisplay;