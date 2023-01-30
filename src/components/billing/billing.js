import './billing.css';



const BillingInfo = () => {
    return (
        <div className='billingInfo'>
            <span className='title'>Billing info</span><br></br>
            <span className='legend'>Please enter your billing info</span>
            <div className='info'>
                <label for="firstName">First name</label>
                <input type="text" placeholder="First name" id="firstName"></input>
                <label for="lastName">Last name</label>
                <input type="text" placeholder="Last name" id="lastName"></input>
                <label for="emailAddress">Email address</label>
                <input type="text" placeholder="Email address" id="emailAddress"></input>
                <label for="phoneNumber">Phone Number</label>
                <input type="text" placeholder="Phone Number" id="phoneNumber"></input>
                <label for="address">Address</label>
                <input type="text" placeholder="Address" id="address"></input>
                <label for="townCity">Town / City</label>
                <input type="text" placeholder="Town or city" id="townCity"></input>
                <label for="stateCountry">State / Country</label>
                <input placeholder="Choose a state or country" id="stateCountry"></input>
                <label for="zipPostalcode">Zip/Postal code</label>
                <input type="text" placeholder="Postal code or ZIP" id="zipPostalcode"></input>
            </div>
            <button>Ship to a different address</button>
        </div>
    )
}
const ShippingMethod = () => {
    return (
        <div className='billingMethod'>
            <h3>shipping method</h3>
            <span>Please enter your payement method</span>
            <div>
                <div>FedEx</div>
                <div>Addition price</div>
                <div>Logo</div>
            </div>
        </div>
    )
}
const PayementMethod = () => {
    return (
        <div className='payementMethod'>
            <h3>Payement Method</h3>
            <span>Please enter your payment method</span>
            <div className='visaCard'>
                <div>
                    <div>Credit card</div>
                    <div> Logo</div>
                </div>
                <input className='cardNumber'></input>
                <div>
                    <input className='Card Holder'></input>
                    <input className='expirationDate'></input>
                    <input className='Cvc'></input>
                </div>
            </div>
            <div className='payPal'></div>
            <div className='bitcoin'></div>
        </div>
    )
}
const AdditionalInfo = () => {
    return(
        <div className='AdditionalInfo'>
            <h3>Additional informations</h3>
            <span>Need something else? We will make it for you!</span>
            <input id="orderNotes" type="text" placeholder="Need a specific deliver day? send a gift? Let's say ..."></input>
        </div>
    )
}
const Confirmation = () => {
    return(
        <div className='confirmation'>
            <h3>Confirmation</h3>
            <span>We are getting to the end. just a few clicks and your order is ready!</span>
            <div>I agree with sending an Marketing and newsletter emails. No spam, promissed!</div>
            <div>I agree with our terms and conditions and privacy policy.</div>
        </div>
    )
}
const ProductsInBasket = ()=>{
    return(
        <div className='products'>

        </div>
    )
}
const OrderSummary = () => {
    return(
        <div className='orderSummary'>
            <ProductsInBasket />
            <div className='subTotal'>
                <div>Subtotal</div>
                <div>Tax</div>
                <div>Shipping</div>
            </div>
            <div className='applyPromo'>
                <input type="text"></input>
            </div>
            <div className='totalOrder'>
                <span>Total Order</span>
                <span>Guaranteed delivery day: june 12, 2020</span>
                <span>89.84</span>
            </div>
        </div>
    )
}

const BillingSec = () => {
    return (
        <div className='billingSec'>
            <BillingInfo />
            <ShippingMethod />
            <PayementMethod />
            <AdditionalInfo />
            <Confirmation />
            <OrderSummary />
            <button>Complete order</button>
        </div>
    )
}
function Billing() {

    return (
        <div className='Checkout'>
            <BillingSec />
            <OrderSummary />
        </div>
    )
}

export default Billing;