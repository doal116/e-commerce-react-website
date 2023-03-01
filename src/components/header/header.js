import profile from '../svg/accountIcon.svg';
import shoppingCart from '../svg/shoppingCart.svg';
import numberCartObject from '../svg/numberCartObject.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import './sass/header.css';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { cartItems } from '../../cartItemsContext';

const BottomPart = ({ Options }) => {
    const pathName = (category) => {
        return '/category/' + category
    }
    return (
        <div className="Bottom-part">
            {
                Options.map((elem, i) =>
                    <div className="elem" key={i.toString()}>
                        <Link
                            style={{ 'textDecoration': 'none', 'color': 'black' }}
                            to={{
                                pathname: pathName(elem['category']),
                            }}
                            state={{
                                name: elem['name'],
                                category: elem['category']
                            }}
                        >{elem.name}
                        </Link>
                        <div className='dropDownNavigation'>
                            {
                                elem.section.map(
                                    (sec, i) => <Link key={i.toString()} className="dropDownLink" to={""}>{sec}</Link>
                                )
                            }
                        </div>
                        <FontAwesomeIcon icon={faChevronDown} className="Bottom-icons" />
                    </div>
                )
            }
        </div >
    )
}
const MiddlePart = ({ itemsCart }) => {
    return (
        <div className="Middle-part">
            <div className="Name">
                <h1><Link style={{ 'textDecoration': 'none', 'color': 'black' }} to={"/"}>freshenesecom</Link></h1>
            </div>

            <div className="search-tool">
                <div className="category">
                    <span>All Category</span>
                    <FontAwesomeIcon icon={faChevronDown} className="all-category-icon" />
                </div>
                <input type="text" placeholder="Search products, categories..."></input>
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>

            <div className="middlepart-icons">
                <img className="profileIcon" src={profile} alt='Account profile icon'></img>
                <div className='cartSec'>
                    <img className="shoppingCartIcon" src={shoppingCart} alt='Shopping cart icon'></img>
                    {
                        itemsCart !== 0 ? <><img className="numItems" src={numberCartObject} alt="number of elements in cart"></img>
                            <span className='num'>{itemsCart}</span></> : <></>}
                </div>

            </div>
        </div>
    )
}
const UpperPart = ({ Options1, Options2 }) => {
    return (
        <div className="Upper-part">
            <div className="upper-part-left">
                {
                    Options1.map((elem, i) => <div key={i.toString()} className="UpperPart-elm-left">{elem}</div>)
                }
            </div>
            <div className="upper-part-right">
                {
                    Options2.map((elem, i) => <div key={i.toString()} className="UpperPart-elm-right">{elem}</div>)
                }
            </div>
        </div>
    )
}


function Header() {
    
    const { cartItemsValue } = useContext(cartItems);
    
    return (
        <header>
            <UpperPart
                Options1={["Chat with us", "+420 336 775 664", "info@freshenescom.com"]}
                Options2={["Blog", "About Us", "Careers"]} />
            <MiddlePart itemsCart={cartItemsValue} />
            <BottomPart
                Options={[
                    {
                        name: "Bakery", category: 'Bakery',
                        section: [
                            'Gourmet', 'Bread', 'Cake', 'Wedding Cake', 'Pastry'
                        ]
                    }, {
                        name: "Fruits and Vegetables", category: 'FruitsAndVegetables',
                        section: [
                            'Wedding cake', 'Bread', 'Gourment', 'Cupcakery', 'Pastry'
                        ]
                    },
                    {
                        name: "Meat and fish", category: 'MeatAndFish',
                        section: [
                            'Wedding cake', 'Bread', 'Gourment', 'Cupcakery', 'Pastry'
                        ]
                    }, {
                        name: "Drinks", category: 'Drinks'
                        , section: [
                            'Wedding cake', 'Bread', 'Gourment', 'Cupcakery', 'Pastry'
                        ]
                    }, {
                        name: "Kitchen", category: 'Kitchen'
                        , section: [
                            'Wedding cake', 'Bread', 'Gourment', 'Cupcakery', 'Pastry'
                        ]
                    },
                    {
                        name: "Special Nutrition", category: 'SpecialNutrition'
                        , section: [
                            'Wedding cake', 'Bread', 'Gourment', 'Cupcakery', 'Pastry'
                        ]
                    }, {
                        name: "Baby", category: 'Baby'
                        , section: [
                            'Wedding cake', 'Bread', 'Gourment', 'Cupcakery', 'Pastry'
                        ]
                    }, {
                        name: "Pharmacy", category: 'Pharmacy'
                        , section: [
                            'Wedding cake', 'Bread', 'Gourment', 'Cupcakery', 'Pastry'
                        ]
                    }]}
            />
        </header>
    );
}

export default Header;