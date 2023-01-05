import CommonOptionSec from "./commonOptionSec";
import ProductBestSellingSection from "./ProductBestSellingSection";

const BestSellingProducts = ({ categories, products }) => {
    const bestSellingPSt = {
        'margin-top': '48px',
        'display': 'flex',
        'column-gap': '24px'
    }
    return (
        <div style={bestSellingPSt}>
            <CommonOptionSec categories={categories} nameOfSecion={"Best selling products"} buttonMoreInfo={"More products"} />
            <ProductBestSellingSection product={products} />
        </div>
    );
}
export default BestSellingProducts;