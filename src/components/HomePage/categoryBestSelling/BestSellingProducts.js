import CommonOptionSec from "./commonOptionSec";
import ProductBestSellingSection from "./ProductBestSellingSection";

const BestSellingProducts = ({ categories, products }) => {
    return (
        <div className="BestSellingProducts">
            <CommonOptionSec categories={categories} nameOfSecion={"Best selling products"} buttonMoreInfo={"More products"} />
            <ProductBestSellingSection product={products}/>
        </div>
    );
}
export default BestSellingProducts;