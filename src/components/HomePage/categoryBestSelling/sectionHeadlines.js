import ProductBestSellingSection from "./ProductBestSellingSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const SectionHeadlines = ({products}) => {
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
                <ProductBestSellingSection product={products}/>
            </div>

        </div>
    )
}
export default SectionHeadlines;