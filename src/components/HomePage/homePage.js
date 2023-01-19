import './homePage.css';
import Testimonials from './Testimonials/testimonials';
import BlogPost from './BlogPost/blogPost';
import CategoryMenu from './BestSelling/categoryMenu';
import BestSellingProducts from './BestSelling/BestSellingProducts';
import BestFromFarmers from './BestSelling/BestFromFarmers';
import SectionHeadlines from './BestSelling/sectionHeadlines';

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
                    products={[{ name: "Butter", description: "very tasty you wanna have more", price:{currentPrice: 1.48, previousPrice: 131.2}, image: productIm },
                    { name: "Butter", description: "very tasty you wanna have more", price:{currentPrice: 1.48, previousPrice: 131.2} ,image: productIm },
                    { name: "Butter", description: "very tasty you wanna have more", price:{currentPrice: 1.48, previousPrice: 131.2} ,image: productIm },
                    { name: "Butter", description: "very tasty you wanna have more", price:{currentPrice: 1.48, previousPrice: 131.2}, image: productIm }]}
                />
                <BestFromFarmers
                    categories={["Carrots", "Tommatoes",
                        "Potatoes", "Chicken", "Pork"]}
                    products={[{ name: "Ribs", description: "very tasty you wanna have more", price:{currentPrice: 10.48, previousPrice: 131.2}, image: productIm2 },
                    { name: "Butter", description: "very tasty you wanna have more", price:{currentPrice: 10.48, previousPrice: 131.2}, image: productIm2 },
                    { name: "Butter", description: "very tasty you wanna have more", price:{currentPrice: 10.48, previousPrice: 131.2}, image: productIm2 },
                    { name: "Butter", description: "very tasty you wanna have more", price:{currentPrice: 10.48, previousPrice: 131.2}, image: productIm2 }]}
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
                <SectionHeadlines products={[{ name: "Essential oil", description: "very tasty you wanna have more", price:{currentPrice: 1.48, previousPrice: 131.2}, image: productIm3 },
                { name: "MGD Oil", description: "very tasty you wanna have more", price:{currentPrice: 1.48, previousPrice: 231.2}, image: productIm3 },
                { name: "Best Oil", description: "very tasty you wanna have more", price:{currentPrice: 1.48, previousPrice: 431.2},image: productIm3 },
                { name: "Good Oil", description: "very tasty you wanna have more", price:{currentPrice: 1.48, previousPrice: 531.2}, image: productIm3 },
                { name: "Good Oil", description: "very tasty you wanna have more", price:{currentPrice: 1.48, previousPrice: 531.2}, image: productIm3 }]} />
                <BlogPost />
                
            </div>
        );
    }
}

export default HomePage;