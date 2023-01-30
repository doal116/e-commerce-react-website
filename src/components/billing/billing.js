import './billing.css';
import fedex from './fedex.png';
import visaCard from './visaCard.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircle
} from "@fortawesome/free-solid-svg-icons";

import BoxChecker from '../commonComponent/BoxChecker';

const BillingInfo = () => {
    return (
        <div className='billingInfo'>
            <span className='title'>Billing info</span>
            <br></br>
            <span className='legend'>Please enter your billing info</span>
            <div className='info'>

                <div className='inputFields'>
                    <span>First name</span>
                    <input type="text" placeholder="First name" id="firstName"></input>
                </div>

                <div className='inputFields'>
                    <span>Last name</span>
                    <input type="text" placeholder="Last name" id="lastName"></input>
                </div>

                <div className='inputFields'>
                    <span>Email address</span>
                    <input type="text" placeholder="Email address" id="emailAddress"></input>
                </div>

                <div className='inputFields'>
                    <span>Phone Number</span>
                    <input type="text" placeholder="Phone Number" id="phoneNumber"></input>
                </div>

                <div className='inputFields'>
                    <span>Address</span>
                    <input type="text" placeholder="Address" id="address"></input>
                </div>

                <div className='inputFields'>
                    <span>Town / City</span>
                    <input type="text" placeholder="Town or city" id="townCity"></input>
                </div>

                <div className='inputFields'>
                    <span>State / Country</span>
                    <input type="text" placeholder="Choose a state or country" id="stateCountry"></input>
                </div>

                <div className='inputFields'>
                    <span>Zip / Postal code</span>
                    <input type="text" placeholder="Postal code or ZIP" id="zipPostalcode"></input>
                </div>

            </div>
            <button>
                <BoxChecker />
                <span> Ship to a different address?</span>
            </button>
        </div>
    )
}
const ShippingMethod = () => {
    return (
        <div className='shippingMethod'>
            <span className='title'>Shipping method</span><br></br>
            <span className='legend'>Please enter your payement method</span>
            <div className='options'>
                <div className='shippingOption'>
                    <div className='companyName'>
                        <FontAwesomeIcon className="circle" icon={faCircle} />
                        <span>FedEx</span>
                    </div>
                    <div className='price'>
                        <span className='addedMoney'>+32 USD</span>
                        <span>Addition price</span>
                    </div>
                    <img src={fedex} alt="fedex Logo"></img>
                </div>
                <div className='shippingOption'>
                    <div className='companyName'>
                        <FontAwesomeIcon className="circle" icon={faCircle} />
                        <span>FedEx</span>
                    </div>
                    <div className='price'>
                        <span className='addedMoney'>+32 USD</span>
                        <span>Addition price</span>
                    </div>
                    <img src={fedex} alt="fedex Logo"></img>
                </div>
            </div>


        </div>
    )
}
const PayementMethod = () => {
    return (
        <div className='payementMethod'>
            <span className='title'>Payement Method</span><br></br>
            <span className='legend'>Please enter your payment method</span>

            <div className='card'>
                <div className='upperPart'>
                    <div className='textArea'><FontAwesomeIcon icon={faCircle} className="circle" />Credit card</div>
                    <img src={visaCard} alt="visacard logo" ></img>
                </div>
                <div className='cardNumberSec'>
                    <span>Card Number</span><br></br>
                    <input className='cardNumber' placeholder='Card number'></input>
                </div>
                <div className='bottomPart'>
                    <div className='cardHolderSec'>
                        <span>Card holder</span>
                        <br></br>
                        <input className='cardHolder'></input>
                    </div>
                    <div className='expirationDateSec'>
                        <span>Expiration date</span>
                        <br></br>
                        <input className='expirationDate' type="date"></input>
                    </div>
                    <div className='cvcSec'>
                        <span>Cvc</span>
                        <br></br>
                        <input className='Cvc' type='number'></input>
                    </div>
                </div>
            </div>

            <div className='payPal'></div>
            <div className='bitcoin'></div>
        </div>
    )
}
const AdditionalInfo = () => {
    return (
        <div className='AdditionalInfo'>
            <h3>Additional informations</h3>
            <span>Need something else? We will make it for you!</span>
            <input id="orderNotes" type="text" placeholder="Need a specific deliver day? send a gift? Let's say ..."></input>
        </div>
    )
}
const Confirmation = () => {
    return (
        <div className='confirmation'>
            <h3>Confirmation</h3>
            <span>We are getting to the end. just a few clicks and your order is ready!</span>
            <div>I agree with sending an Marketing and newsletter emails. No spam, promissed!</div>
            <div>I agree with our terms and conditions and privacy policy.</div>
        </div>
    )
}
const ProductsInBasket = () => {
    return (
        <div className='products'>

        </div>
    )
}
const OrderSummary = () => {
    return (
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