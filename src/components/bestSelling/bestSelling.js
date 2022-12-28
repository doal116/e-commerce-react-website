import './bestSelling.css';
import productIm from './naturalProduct.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
const CommonOptionSec = ({ nameOfSecion, categories, buttonMoreInfo }) => {
    return (
        <div className="CommonOptionSec">
            <div className='title'>
                <span>{nameOfSecion}</span>
            </div>
            <div className="categories">
                {
                    categories.map(elem => <a href={`www.google.com`}>{elem}</a>)
                }
            </div>
            <button>
                <span>{buttonMoreInfo}</span>
                <FontAwesomeIcon className='icon' icon={faChevronRight} />
            </button>
        </div>
    )
}
const BannerSubFocus = ({ banner }) => {
    return (
        banner.map(elem =>
            <div className='BannerSubFocus'>
                <div className='txt-area'>
                    <span className='secondary-txt'>{elem.subText}</span>
                    <span className='primary-txt'>{elem.heading}</span>
                </div>
                <button>
                    <a href={elem.path}>Read recepies</a>
                    <FontAwesomeIcon className="icon" icon={faChevronRight} />
                </button>
            </div>
        )
    )
}
const CategoryMenu = ({ categories }) => {
    return (
        <div className="CategoryMenu">
            <CommonOptionSec categories={categories} nameOfSecion={"Category menu"} buttonMoreInfo={"More categories"} />
            <BannerSubFocus banner={[{ subText: "Banner subfocus", heading: "Space for heading", path: "/receipies" },
            { subText: "Banner subfocus", heading: "Space for heading", path: "/receipies" },
            { subText: "Banner subfocus", heading: "Space for heading", path: "/receipies" }]} />
        </div>

    );
}
const ProductBestSellingSection = ({ product }) => {
    return (
        product.map(elem => <div className='ProductSect'>
            <img src={productIm} alt={"product from mother nature"} />
            <div className='titleDescription'>
                <span className='productTitle'>{elem.title}</span>
                <span className='productDescrip'>{elem.description}</span>
            </div>
            <div className='buyingSection'>
                <div className='price'>
                    <span>{elem.price} USD</span>
                </div>
                <div className='btn-buy'><span>BUY NOW</span></div>
            </div>
        </div>
        )
    )
}
const BestSellingProducts = ({ categories }) => {
    return (
        <div className="BestSellingProducts">
            <CommonOptionSec categories={categories} nameOfSecion={"Best selling products"} buttonMoreInfo={"More products"} />
            <ProductBestSellingSection
                product={[{ title: "Butter", description: "very tasty you wanna have more", price: 1.48 },
                { title: "Butter", description: "very tasty you wanna have more", price: 1.48 },
                { title: "Butter", description: "very tasty you wanna have more", price: 1.48 },
                { title: "Butter", description: "very tasty you wanna have more", price: 1.48 }]}
            />
        </div>
    );
}
const BestFromFarmers = ({categories}) => {
    return (
        <div className="BestFromFarmers">
            <CommonOptionSec categories={categories} nameOfSecion={"Best from Farmers"} buttonMoreInfo={"More products"} />
        </div>
    );
}
const Testimonials = () => {
    return (
        <div className="Testimonials">

        </div>
    );
}
const SectionHeadlines = () => {
    return (
        <div className="SectionHeadlines">

        </div>
    )
}
class BestSelling extends React.Component {
    render() {
        return (
            <div className="BestSelling">
                <CategoryMenu
                    categories={["Bakery", "Fruits and Vegetables",
                        "Meat and fish", "Drinks", "Kitchen"]} />
                <BestSellingProducts
                    categories={["Kitchen", "Meat and Fish",
                        "Special nutrition", "Pharmacy", "Kitchen"]} />
                <BestFromFarmers
                    categories={["Carrots", "Tommatoes",
                        "Potatoes", "Chicken", "Pork"]} />
                <Testimonials />
                <SectionHeadlines />
            </div>
        );
    }
}

export default BestSelling;