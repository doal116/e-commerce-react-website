import './homePage.css';
import Testimonials from './Testimonials/testimonials';
import BlogPost from './BlogPost/blogPost';
import CategoryMenu from './categoryBestSelling/categoryMenu';
import BestSellingProducts from './categoryBestSelling/BestSellingProducts';
import BestFromFarmers from './categoryBestSelling/BestFromFarmers';
import SectionHeadlines from './categoryBestSelling/sectionHeadlines';

import React from "react";

class HomePage extends React.Component {
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
                <BlogPost />
            </div>
        );
    }
}

export default HomePage;