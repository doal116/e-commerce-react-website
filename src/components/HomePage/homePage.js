import './homePage.css';
import Testimonials from './Testimonials/testimonials';
import BlogPost from './BlogPost/blogPost';
import CategoryMenu from './BestSelling/categoryMenu';
import BestSellingProducts from './BestSelling/BestSellingProducts';
import BestFromFarmers from './BestSelling/BestFromFarmers';
import SectionHeadlines from './BestSelling/sectionHeadlines';
import React from "react";
import products from '../products';
import testimonies from '../testimonies';
const scrollUp = () => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
}
class HomePage extends React.Component {

    render() {
        return (
            <div className='homepage'>
                {scrollUp()}
                <CategoryMenu
                    categories={["Bakery", "Fruits and Vegetables",
                        "Meat and fish", "Drinks", "Kitchen"]} />
                <BestSellingProducts
                    categories={["Kitchen", "Meat and Fish",
                        "Special nutrition", "Pharmacy", "Kitchen"]}
                    products={products}
                />
                <BestFromFarmers
                    categories={["Carrots", "Tommatoes",
                        "Potatoes", "Chicken", "Pork"]}
                    products={products}
                />
                <Testimonials
                    testimonies={testimonies}
                />
                <SectionHeadlines products={products} />
                <BlogPost />

            </div>
        );
    }
}

export default HomePage;