import './bestSelling.css';
import productIm from './naturalProduct.jpg';
import productIm2 from './bonelessRibeyes.jpg';
import productIm3 from './essentialOils.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
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
            <img src={elem.img} alt={"product from mother nature"} />

            <div className='titleDescription'>
                <span className='productTitle'>{elem.title}</span>
                <span className='productDescrip'>{elem.description}</span>
            </div>
            <div className='buyingSection'>
                <div className='price'>
                    <span className='current-price'>{elem.price} USD</span>
                    <span className='old-price'>{elem.oldPrice}</span>
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
                product={[{ title: "Butter", description: "very tasty you wanna have more", price: 1.48, oldPrice: 131.2, img: productIm },
                { title: "Butter", description: "very tasty you wanna have more", price: 1.48, oldPrice: 131.2, img: productIm },
                { title: "Butter", description: "very tasty you wanna have more", price: 1.48, oldPrice: 131.2, img: productIm },
                { title: "Butter", description: "very tasty you wanna have more", price: 1.48, oldPrice: 131.2, img: productIm }]}
            />
        </div>
    );
}
const BestFromFarmers = ({ categories }) => {
    return (
        <div className="BestFromFarmers">
            <CommonOptionSec categories={categories} nameOfSecion={"Best from Farmers"} buttonMoreInfo={"More products"} />
            <ProductBestSellingSection
                product={[{ title: "Ribs", description: "very tasty you wanna have more", price: 10.48, oldPrice: 131.2, img: productIm2 },
                { title: "Butter", description: "very tasty you wanna have more", price: 10.48, oldPrice: 131.2, img: productIm2 },
                { title: "Butter", description: "very tasty you wanna have more", price: 10.48, oldPrice: 131.2, img: productIm2 },
                { title: "Butter", description: "very tasty you wanna have more", price: 10.48, oldPrice: 131.2, img: productIm2 }]}
            />
        </div>
    );
}
const TestimonyBox = ({ testimonies }) => {
    return (
        <div className='Testimonysec'>
            <div className='arrowLeft'>
                <div className='arrowBox'>
                    <div className='icon' >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                </div>
            </div>
            {
                testimonies.map(elem =>
                    <div className='TestimonyBox'>
                        <div className='text'>{elem.testimony}</div>
                        <div className='nameSurname'>{elem.nameSurname} </div>
                        <div className='img'></div>
                    </div>
                )}
            <div className='arrowRight'>
                <div className='arrowBox'>
                    <div className='icon' >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>

            </div>
        </div>


    );
}
const Testimonials = () => {
    return (
        <div className="Testimonials">

            <div className='TestimonialsUpperSec'>
                <p>Our customers says</p>
                <div className='btnTestimonies'>
                    <span>
                        Button
                    </span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
            <TestimonyBox
                testimonies={[{
                    testimony: `“ This is an super space for your customers qoute.
                Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “`, nameSurname: `Name and Surname`
                }, {
                    testimony: `“ This is an super space for your customers qoute.
                Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “`, nameSurname: `Name and Surname`
                }, {
                    testimony: `“ This is an super space for your customers qoute.
                Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “`, nameSurname: `Name and Surname`
                }, {
                    testimony: `“ This is an super space for your customers qoute.
                Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “`, nameSurname: `Name and Surname`
                }, {
                    testimony: `“ This is an super space for your customers qoute.
                Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “`, nameSurname: `Name and Surname`
                }]} />
        </div>
    );
}
const SectionHeadlines = () => {
    return (
        <div className="SectionHeadlines">
            <div className='smallHeader'>
                <p>Section Headline</p>
                <div className='btn-SectionHeadline'>
                    <p>Button</p>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
            <div className='productSec'>
                <ProductBestSellingSection
                    product={[{ title: "Essential oil", description: "very tasty you wanna have more", price: 1.48, oldPrice: 131.2, img: productIm3 },
                    { title: "MGD Oil", description: "very tasty you wanna have more", price: 1.48, oldPrice: 231.2, img: productIm3 },
                    { title: "Best Oil", description: "very tasty you wanna have more", price: 1.48, oldPrice: 431.2, img: productIm3 },
                    { title: "Good Oil", description: "very tasty you wanna have more", price: 1.48, oldPrice: 531.2, img: productIm3 },
                    { title: "Good Oil", description: "very tasty you wanna have more", price: 1.48, oldPrice: 531.2, img: productIm3 }]}
                />
            </div>

        </div>
    )
}
const BlogPostSec1 = () => {
    return (
        <div className='BlgP1'>

            <div className='Tag'>
                Dinner tips
            </div>

            <div className='videoInfo'>
                <div className='description'>Our chef tips for a great and tasty dinner ready in 20 minutes</div>
                <div className='userInfo'>
                    <div className='profile'></div>
                    <p>author date</p>
                </div>
            </div>

        </div>
    );
}
const BlogPostSec2 = ({popularPost}) => {
    return (
        <div className='BlgP2'>
            <div className='video'>

            </div>
            <div className='vidInfo'>
                <div className='vidTag'>{popularPost.tag}</div>
                <p>{popularPost.description}</p>
                <span className='authorDate'>{popularPost.author}  {popularPost.date}</span>
            </div>
        </div>
    )
}
const BlogPostSec3 = ({ post }) => {
    return (
        <div className='BlogPostSec3'>
            {post.map(elem =>
                <div className='BlgP3'>
                    <div className='videos'>
                        <div className='videoInfo'>
                            <p>{elem.title}</p>
                            <span className='authorDate'>{elem.author} {elem.date}</span>
                        </div>
                        <div className='video'></div>
                    </div>
                </div>
            )}
        </div>
    );
}
const BlogPost = () => {
    return (
        <div className='BlogPost'>
            <BlogPostSec1 />
            <BlogPostSec2
                popularPost={
                    {
                        tag: "Vegetable",
                        description: "Which vegetable your family will love and want’s eat each day",
                        author:"author",
                        date:"15.6.2020"
                    }
                }
            />
            <BlogPostSec3
                post={[
                    {
                        title: "Salat is kinda good start to your morning routines",
                        author: "author",
                        date: "15.6.2020"
                    },
                    {
                        title: "Salat is kinda good start to your morning routines",
                        author: "author",
                        date: "15.6.2020"
                    },
                    {
                        title: "Salat is kinda good start to your morning routines",
                        author: "author",
                        date: "15.6.2020"
                    }
                ]}
            />
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
                <BlogPost />
            </div>
        );
    }
}

export default BestSelling;