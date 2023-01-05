import './homePage.css';
import Testimonials from './Testimonials/testimonials';
import BlogPost from './BlogPost/blogPost';
import CategoryMenu from './categoryBestSelling/categoryMenu';
import BestSellingProducts from './categoryBestSelling/BestSellingProducts';
import BestFromFarmers from './categoryBestSelling/BestFromFarmers';
import SectionHeadlines from './categoryBestSelling/sectionHeadlines';

import productIm2 from './bonelessRibeyes.jpg';
import productIm from './naturalProduct.jpg';
import productIm3 from './essentialOils.jpg';
import React from "react";

class HomePage extends React.Component {
    render() {
        return (
            <div className='homepage'>
                <CategoryMenu
                    categories={["Bakery", "Fruits and Vegetables",
                        "Meat and fish", "Drinks", "Kitchen"]} />
                <BestSellingProducts
                    categories={["Kitchen", "Meat and Fish",
                        "Special nutrition", "Pharmacy", "Kitchen"]}
                    products={[{ title: "Butter", description: "very tasty you wanna have more", price: 1.48, oldPrice: 131.2, img: productIm },
                    { title: "Butter", description: "very tasty you wanna have more", price: 1.48, oldPrice: 131.2, img: productIm },
                    { title: "Butter", description: "very tasty you wanna have more", price: 1.48, oldPrice: 131.2, img: productIm },
                    { title: "Butter", description: "very tasty you wanna have more", price: 1.48, oldPrice: 131.2, img: productIm }]}
                />
                <BestFromFarmers
                    categories={["Carrots", "Tommatoes",
                        "Potatoes", "Chicken", "Pork"]}
                    products={[{ title: "Ribs", description: "very tasty you wanna have more", price: 10.48, oldPrice: 131.2, img: productIm2 },
                    { title: "Butter", description: "very tasty you wanna have more", price: 10.48, oldPrice: 131.2, img: productIm2 },
                    { title: "Butter", description: "very tasty you wanna have more", price: 10.48, oldPrice: 131.2, img: productIm2 },
                    { title: "Butter", description: "very tasty you wanna have more", price: 10.48, oldPrice: 131.2, img: productIm2 }]}
                />
                <Testimonials
                    testimonies={[
                        {
                            testimony: `“ This is an super space for your customers qoute.
                                Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “`,
                            nameSurname: `Name and Surname`
                        }, {
                            testimony: `“ This is an super space for your customers qoute.
                                Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “`,
                            nameSurname: `Name and Surname`
                        }, {
                            testimony: `“ This is an super space for your customers qoute.
                                Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “`,
                            nameSurname: `Name and Surname`
                        }, {
                            testimony: `“ This is an super space for your customers qoute.
                                Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “`,
                            nameSurname: `Name and Surname`
                        }, {
                            testimony: `“ This is an super space for your customers qoute.
                                Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “`,
                            nameSurname: `Name and Surname`
                        }, {
                            testimony: `“ This is an super space for your customers qoute.
                                Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “`,
                            nameSurname: `Name and Surname`
                        }, {
                            testimony: `“ This is an super space for your customers qoute.
                                Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “`,
                            nameSurname: `Name and Surname`
                        }, {
                            testimony: `“ This is an super space for your customers qoute.
                                Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “`,
                            nameSurname: `Name and Surname`
                        }, {
                            testimony: `“ This is an super space for your customers qoute.
                                Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “`,
                            nameSurname: `Name and Surname`
                        }, {
                            testimony: `“ This is an super space for your customers qoute.
                                Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “`,
                            nameSurname: `Name and Surname`
                        }]}
                />
                <SectionHeadlines products={[{ title: "Essential oil", description: "very tasty you wanna have more", price: 1.48, oldPrice: 131.2, img: productIm3 },
                { title: "MGD Oil", description: "very tasty you wanna have more", price: 1.48, oldPrice: 231.2, img: productIm3 },
                { title: "Best Oil", description: "very tasty you wanna have more", price: 1.48, oldPrice: 431.2, img: productIm3 },
                { title: "Good Oil", description: "very tasty you wanna have more", price: 1.48, oldPrice: 531.2, img: productIm3 },
                { title: "Good Oil", description: "very tasty you wanna have more", price: 1.48, oldPrice: 531.2, img: productIm3 }]} />
                <BlogPost />
                
            </div>
        );
    }
}

export default HomePage;