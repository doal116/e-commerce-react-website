import './billing.css';

import fedex from './fedex.png';
import visaCard from './visaCard.svg';
import payPal from './payPal.svg';
import bitcoin from './bitcoin.svg';
import heart from './heart.svg';
import compareIcon from './compareIcon.svg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faX
} from "@fortawesome/free-solid-svg-icons";

import BoxChecker from '../commonComponent/BoxChecker';
import CircleChecker from '../commonComponent/circleChecker';
import Ratings from '../commonComponent/Ratings';
import baguette from './baguette.jpg';
const BillingInfo = () => {
    return (
        <div className='billingInfo'>
            <div className='titleSec'>
                <span className='title'>Billing info</span>
                <span className='legend'>Please enter your billing info</span>
            </div>

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
            <div className='titleSec'>
                <span className='title'>Shipping method</span><br></br>
                <span className='legend'>Please enter your payement method</span>
            </div>
            <div className='options'>
                <div className='shippingOption'>
                    <div className='companyName'>
                        <CircleChecker />
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
                        <CircleChecker />
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
            <div className='titleSec'>
                <span className='title'>Payement Method</span><br></br>
                <span className='legend'>Please enter your payment method</span>
            </div>


            <div className='card'>
                <div className='upperPart'>
                    <div className='textArea'>
                        <CircleChecker />
                        <span>Credit card</span>
                    </div>
                    <img src={visaCard} alt="visacard logo" ></img>
                </div>
                <div className='cardNumberSec'>
                    <label for='cardNumber'>Card Number</label>
                    <input id='cardNumber' placeholder='Card number'></input>
                </div>
                <div className='bottomPart'>
                    <div className='cardHolderSec'>
                        <label for='cardHolder'>Card holder</label>
                        <input id='cardHolder' type="text" placeholder="Card holder"></input>
                    </div>
                    <div className='expirationDateSec'>
                        <label for='expirationDate'>Expiration date</label>
                        <input id='expirationDate' type="date" ></input>
                    </div>
                    <div className='cvcSec'>
                        <label for='Cvc'>CVC</label>
                        <input id='Cvc' type='number' placeholder='CVC'></input>
                    </div>
                </div>
            </div>

            <div className='payPal'>
                <div className='textArea'>
                    <CircleChecker />
                    <span>PayPal</span>
                </div>
                <img src={payPal} alt="Paypal logo"></img>
            </div>
            <div className='bitcoin'>
                <div className='textArea'>
                    <CircleChecker />
                    <span>Bitcoin</span>
                </div>
                <img src={bitcoin} alt="Bitcoin logo"></img>
            </div>
        </div>
    )
}
const AdditionalInfo = () => {
    return (
        <div className='AdditionalInfo'>
            <div className='titleSec'>
                <span className='title'>Additional informations</span><br></br>
                <span className='legend'>Need something else? We will make it for you!</span>
            </div>

            <textarea placeholder="Need a specific deliver day? send a gift? Let's say ..."></textarea>
        </div>
    )
}
const Confirmation = () => {
    return (
        <div className='confirmation'>
            <div className='titleSec'>
                <span className='title'>Confirmation</span><br></br>
                <span className='legend'>We are getting to the end. just a few clicks and your order is ready!</span>
            </div>
            <div className='termsToCheck'>
                <div className='marketingEmails'><BoxChecker /><span>I agree with sending an Marketing and newsletter emails. No spam, promissed!</span></div>
                <div className='termCondition'><BoxChecker /><span>I agree with our terms and conditions and privacy policy.</span></div>
            </div>
        </div>

    )
}
const ProductsInBasket = () => {
    return (
        <div className='products'>

            <div className='leftSec'>
                <img src={baguette} alt="product in basket" className='baguette'></img>
                <div className='controlBtns'>
                    <div><img src={heart} alt="heart icon"></img><span>Wishlist</span></div>
                    <div><img src={compareIcon} alt="comparison icon" ></img><span>Compare</span></div>
                    <div><FontAwesomeIcon icon={faX} className='xIcon' /><span >Remove</span></div>
                </div>
            </div>

            <div className='rightSec'>
                <span className='title'>Product title</span>
                <div className='extraDetails'>
                    <span>Farm: Tharamis Farm</span>
                    <span>Freshness: 1 day old</span>
                </div>
                <Ratings stars={[4]} />
                <div className='pricingPieces'>
                    <div className='price'>
                        <span className='currentPrice'>39.98 USD</span>
                        <span className='oldPrice'>100.98 USD</span>
                    </div>
                    <div className='pieces'>
                        <span className='numPieces'>1pcs</span>
                        <div className='line'></div>
                        <div>
                            <span className='pcs'>Pcs</span>
                            <i><FontAwesomeIcon icon={faChevronDown} className="arrowIcon" /></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
const OrderSummary = () => {
    return (
        <div className='orderSummary'>
            <div className='titleSec'>
                <span className='title'>Order Summary</span>
                <span className='legend'>Price can change depending on shipping method and taxes of your state.</span>
            </div>
            <ProductsInBasket />
            <div className='subTotal'>
                <div><span>Subtotal</span><span className='numericalVal'>73.98 USD</span></div>
                <div><span>Tax</span><span className='numericalVal'>17% 16.53 USD</span></div>
                <div><span>Shipping</span><span className='numericalVal'>0 USD</span></div>
            </div>
            <div className='applyPromo'>
                <input type="text" placeholder='Apply promo code'></input>
                <div>Apply now</div>
            </div>
            <div className='totalOrder'>
                
                <div>
                    <span>Total Order</span>
                    <span>Guaranteed delivery day: june 12, 2020</span>
                </div>

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
            <button className='btncompleted'>Complete order</button>
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