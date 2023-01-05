import CommonOptionSec from "./commonOptionSec";
import ProductBestSellingSection from "./ProductBestSellingSection";


const BestFromFarmers = ({ categories, products }) => {
    return (
        <div className="BestFromFarmers">
            <CommonOptionSec categories={categories} nameOfSecion={"Best from Farmers"} buttonMoreInfo={"More products"} />
            <ProductBestSellingSection
                product={products}
            />
        </div>
    );
}
export default BestFromFarmers;