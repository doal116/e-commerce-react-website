import ProductBestSellingSection from "./ProductBestSellingSection";

import productIm3 from '../essentialOils.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const SectionHeadlines = () => {
    return (
        <div className="SectionHeadlines">
            <div className='smallHeader'>
                <p>Section Headline</p>
                <div className='btn-SectionHeadline'>
                    <p>Button</p>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
            <div className='productSec'>
                <ProductBestSellingSection
                    product={[{ title: "Essential oil", description: "very tasty you wanna have more", price: 1.48, oldPrice: 131.2, img: productIm3 },
                    { title: "MGD Oil", description: "very tasty you wanna have more", price: 1.48, oldPrice: 231.2, img: productIm3 },
                    { title: "Best Oil", description: "very tasty you wanna have more", price: 1.48, oldPrice: 431.2, img: productIm3 },
                    { title: "Good Oil", description: "very tasty you wanna have more", price: 1.48, oldPrice: 531.2, img: productIm3 },
                    { title: "Good Oil", description: "very tasty you wanna have more", price: 1.48, oldPrice: 531.2, img: productIm3 }]}
                />
            </div>

        </div>
    )
}
export default SectionHeadlines;