import CommonOptionSec from "./commonOptionSec";
import ProductBestSellingSection from "./ProductBestSellingSection";

import productIm from '../naturalProduct.jpg';
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
export default BestSellingProducts;