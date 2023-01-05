import CommonOptionSec from "./commonOptionSec";
import ProductBestSellingSection from "./ProductBestSellingSection";


const BestFromFarmers = ({ categories, products }) => {
    const BestFromFarmerSt={
       'margin-top': '48px',
        'display': 'flex',
        'column-gap': '24px'
        }
    return (
        <div style={BestFromFarmerSt}>
            <CommonOptionSec categories={categories} nameOfSecion={"Best from Farmers"} buttonMoreInfo={"More products"} />
            <ProductBestSellingSection
                product={products}
            />
        </div>
    );
}
export default BestFromFarmers;