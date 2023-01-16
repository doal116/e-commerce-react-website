
const ProductBestSellingSection = ({ product }) => {
    return (
        product.map((elem,i) => 
        <div key={i.toString()} className='ProductSect'>
            <img src={elem.img} alt={"product from mother nature"} />

            <div className='titleDescription'>
                <a href={'hey'} className='productTitle'>{elem.title}</a>
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