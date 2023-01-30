import ProductBlock from "../../commonComponent/ProductBlock";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const SectionHeadlines = ({ products }) => {
    const sectionHeadlinesCalc = (products) => {
        return products.slice(0, 5);
    }
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
                <ProductBlock products={sectionHeadlinesCalc(products)} />
            </div>

        </div>
    )
}
export default SectionHeadlines;