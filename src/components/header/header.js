import profile from './profile-icon.png';
import shoppingCart from './shopping-cart.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './sass/header.css';
import { Link } from 'react-router-dom';

const BottomPart = ({ Options }) => {
    return (
        <div className="Bottom-part">
            {
                Options.map((elem,i) =>
                    <div className="elem" key={i.toString()}>
                        <Link
                            style={{ 'textDecoration': 'none', 'color': 'black' }}
                            to = "/category"
                            state= {{ name: elem.name }}
                        >{elem.name}
                        </Link>
                        <div className='dropDownNavigation'>
                            {
                                elem.section.map(
                                    (sec,i) => <Link key={i.toString()} className="dropDownLink" to={""}>{sec}</Link>
                                )
                            }
                        </div>
                        <FontAwesomeIcon icon={faChevronDown} className="Bottom-icons" />
                    </div>
                )
            }
        </div>
    )
}
const MiddlePart = () => {
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
                <img className="shoppingCartIcon" src={shoppingCart} alt='Shopping cart icon'></img>
            </div>
        </div>
    )
}
const UpperPart = ({ Options1, Options2 }) => {
    return (
        <div className="Upper-part">
            <div className="upper-part-left">
                {
                    Options1.map((elem,i) => <div key={i.toString()}className="UpperPart-elm-left">{elem}</div>)
                }
            </div>
            <div className="upper-part-right">
                {
                    Options2.map((elem,i) => <div key={i.toString()}className="UpperPart-elm-right">{elem}</div>)
                }
            </div>
        </div>
    )
}
class Header extends React.Component {

    render() {
        return (
            <header>
                <UpperPart
                    Options1={["Chat with us", "+420 336 775 664", "info@freshenescom.com"]}
                    Options2={["Blog", "About Us", "Careers"]} />
                <MiddlePart />
                <BottomPart
                    Options={[
                        {
                            name: "Bakery", section: [
                                'Gourmet', 'Bread', 'Cake', 'Wedding Cake', 'Pastry'
                            ]
                        }, {
                            name: "Fruits and Vegetables", section: [
                                'Wedding cake', 'Bread', 'Gourment', 'Cupcakery', 'Pastry'
                            ]
                        },
                        {
                            name: "Meat and fish", section: [
                                'Wedding cake', 'Bread', 'Gourment', 'Cupcakery', 'Pastry'
                            ]
                        }, {
                            name: "Drinks", section: [
                                'Wedding cake', 'Bread', 'Gourment', 'Cupcakery', 'Pastry'
                            ]
                        }, {
                            name: "Kitchen", section: [
                                'Wedding cake', 'Bread', 'Gourment', 'Cupcakery', 'Pastry'
                            ]
                        },
                        {
                            name: "Special Nutrition", section: [
                                'Wedding cake', 'Bread', 'Gourment', 'Cupcakery', 'Pastry'
                            ]
                        }, {
                            name: "Baby", section: [
                                'Wedding cake', 'Bread', 'Gourment', 'Cupcakery', 'Pastry'
                            ]
                        }, {
                            name: "Pharmacy", section: [
                                'Wedding cake', 'Bread', 'Gourment', 'Cupcakery', 'Pastry'
                            ]
                        }]}
                />
            </header>
        );
    }
}

export default Header;