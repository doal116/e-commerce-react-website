import CommonOptionSec from "../../commonComponent/CategoryMore";
import ProductBlock from "../../commonComponent/ProductBlock";


const BestFromFarmers = ({ categories, products }) => {
    return (
        <div className="BestFromFarmers">
            <CommonOptionSec categories={categories} nameOfSecion={"Best from Farmers"} buttonMoreInfo={"More products"} />
            <ProductBlock products={products}/>
        </div>
    );
}
export default BestFromFarmers;