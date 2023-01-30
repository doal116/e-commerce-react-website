import CommonOptionSec from "../../commonComponent/CategoryMore";
import ProductBlock from "../../commonComponent/ProductBlock";


const BestFromFarmers = ({ categories, products }) => {
    const bestFromFarmersCalc = (products) => {
        return products.slice(0, 4);
    }
    return (
        <div className="BestFromFarmers">
            <CommonOptionSec categories={categories} nameOfSecion={"Best from Farmers"} buttonMoreInfo={"More products"} />
            <ProductBlock products={bestFromFarmersCalc(products)} />
        </div>
    );
}
export default BestFromFarmers;