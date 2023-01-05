import ProductBestSellingSection from "./ProductBestSellingSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


const SectionHeadlines = ({products}) => {
    const SectionHeadlineSt = {
        'height': '300px',
        'margin-top': '80px'
    }
    const header = {
        'width': '100%',
        'display': 'grid',
        'grid-template-columns': 'auto auto'
    }
    const btnSec = {
        'margin-right': '80px',
        'justify-self': 'end',
        'display': 'flex',
        'align-items': 'center'
    }
    const productSec = {
        'margin-left': '80px',
        'display': 'flex',
        'column-gap': '24px'
    }
    const title = {
        'margin-left': '80px'
    }
    return (
        <div style={SectionHeadlineSt}>
            <div style={header}>
                <p style={title}>Section Headline</p>
                <div style={btnSec}>
                    <p style={{'margin-left': '80px'}}>Button</p>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
            <div style={productSec}>
                <ProductBestSellingSection product={products}/>
            </div>

        </div>
    )
}
export default SectionHeadlines;