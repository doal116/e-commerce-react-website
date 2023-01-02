import CommonOptionSec from "./commonOptionSec";
import ProductBestSellingSection from "./ProductBestSellingSection";

import productIm2 from '../bonelessRibeyes.jpg';

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
export default BestFromFarmers;