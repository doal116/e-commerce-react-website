
const ProductBestSellingSection = ({ product }) => {
    const productSec = {
        'border': '1px solid rgb(200, 200, 200)',
        'border-radius': '16px',
        'display': 'grid',
        'height': '280px',
        'width': '240px',
        'background-color': 'transparent',
        'grid-template-rows': 'auto auto auto'
    }
    const imgSt = {
        'width': '90%',
        'border-radius': '16px',
        'display': 'block',
        'margin': '10px auto 0px auto'
    }
    const descriptionSt = {
        'margin': '0px 0px 0px 16px',
        'display': 'flex',
        'flex-direction': 'column'
    }
    const productTitle={
        'font-weight': 'bold',
        'font-size': '16px'
    }
    const productDescript={
        'font-size': '12px'
    }
    const buyingSec={
        'display': 'grid',
        'grid-template-columns':' auto auto'
    }
    const price = {
        'margin': '0px 0px 0px 16px',
        'align-self': 'center',
        'display': 'flex',
        'flex-direction': 'column'
    }
    const currentPrice={
        'font-weight': 'bold',
        'font-size': '20px'
    }
    const oldPrice={
        'font-weight': 'bold',
        'font-size': '13px',
        'color':'rgb(174, 174, 174)',
        'text-decoration': 'line-through'
    }
    const btnBuy={
        'width': 'fit-content',
        'height': 'fit-content',
        'padding':'10px',
        'color': 'white',
        'font-weight': 'bold',
        'border-radius': '10px',
        'margin': '0px 0px 0px 0px',
        'border-color': 'rgb(0, 92, 61)',
        'background-color': 'rgb(0, 169, 73)',
        'align-self': 'center'
    }
    return (
        product.map(elem =>
            <div className='ProductSect' style={productSec}>
                <img src={elem.img} style={imgSt} alt={"product from mother nature"} />

                <div style={descriptionSt}>
                    <span style={productTitle}>{elem.title}</span>
                    <span style={productDescript}>{elem.description}</span>
                </div>
                <div style={buyingSec}>
                    <div style={price}>
                        <span style={currentPrice}>{elem.price} USD</span>
                        <span style={oldPrice}>{elem.oldPrice}</span>
                    </div>
                    <div style={btnBuy}><span>BUY NOW</span></div>
                </div>
            </div>
        )
    )
}
export default ProductBestSellingSection;