import CommonOptionSec from "../../commonComponent/CategoryMore";
import ProductBlock from "../../commonComponent/ProductBlock";

const BestSellingProducts = ({ categories, products }) => {
    const bestSellingCalc = (products) => {
        return products.slice(0, 4);
    }
    return (
        <div className="BestSellingProducts">
            <CommonOptionSec categories={categories} nameOfSecion={"Best selling products"} buttonMoreInfo={"More products"} />
            <ProductBlock products={bestSellingCalc(products)} />
        </div>
    );
}
export default BestSellingProducts;