
const ProductBestSellingSection = ({ product }) => {
    return (
        product.map(elem => <div className='ProductSect'>
            <img src={elem.img} alt={"product from mother nature"} />

            <div className='titleDescription'>
                <span className='productTitle'>{elem.title}</span>
                <span className='productDescrip'>{elem.description}</span>
            </div>
            <div className='buyingSection'>
                <div className='price'>
                    <span className='current-price'>{elem.price} USD</span>
                    <span className='old-price'>{elem.oldPrice}</span>
                </div>
                <div className='btn-buy'><span>BUY NOW</span></div>
            </div>
        </div>
        )
    )
}
export default ProductBestSellingSection;