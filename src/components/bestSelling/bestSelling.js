import './bestSelling.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
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
            <div className="CategorySec">
                <div className='title'>
                    <span>Category menu</span>
                </div>

                <div className="categories">
                    {
                        categories.map(elem => <a href={`www.google.com`}>{elem}</a>)
                    }
                </div>
                <button>
                    <span>More categories</span>
                    <FontAwesomeIcon className='icon' icon={faChevronRight} />
                </button>
            </div>
            <BannerSubFocus banner={[{ subText: "Banner subfocus", heading: "Space for heading", path: "/receipies" }, { subText: "Banner subfocus", heading: "Space for heading", path: "/receipies" }]} />
        </div>

    );
}
const BestSellingProducts = () => {
    return (
        <div className="BestSellingProducts">

        </div>
    );
}
const BestFromFarmers = () => {
    return (
        <div className="BestFromFarmers">

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
                <BestSellingProducts />
                <BestFromFarmers />
                <Testimonials />
                <SectionHeadlines />
            </div>
        );
    }
}

export default BestSelling;