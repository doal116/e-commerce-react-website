import CommonOptionSec from "../../commonComponent/CategoryMore";
import ProductBlock from "../../commonComponent/ProductBlock";

const BestSellingProducts = ({ categories, products }) => {
    return (
        <div className="BestSellingProducts">
            <CommonOptionSec categories={categories} nameOfSecion={"Best selling products"} buttonMoreInfo={"More products"} />
            <ProductBlock products={products}/>
        </div>
    );
}
export default BestSellingProducts;