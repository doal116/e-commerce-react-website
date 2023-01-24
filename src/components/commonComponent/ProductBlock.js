const ProductBlock = ({ products }) => {
    return (
        products.map((elem,i) => 
        <div key={i.toString()} className='ProductSect'>
            <img src={elem['image']} alt={"product from mother nature"} />

            <div className='titleDescription'>
                <a href={'hey'} className='productTitle'>{elem['name']}</a>
                <span className='productDescrip'>{elem['description']}</span>
            </div>
            <div className='buyingSection'>
                <div className='price'>
                    <span className='current-price'>{elem['price']['currentPrice']} USD</span>
                    <span className='old-price'>{elem['price']['previousPrice']}</span>
                </div>
                <div className='btn-buy'><span>BUY NOW</span></div>
            </div>
        </div>
        )
    )
}
export default ProductBlock;