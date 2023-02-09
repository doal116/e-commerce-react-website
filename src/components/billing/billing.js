import './billing.css';
import fedex from './fedex.svg';
import visaCard from './visaCard.svg';
import payPal from './payPal.svg';
import bitcoin from './bitcoin.svg';
import heart from './heart.svg';
import dhl from './dhl.svg';
import compareIcon from './compareIcon.svg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faX, faCircleCheck,
    faCircle, faCopy
} from "@fortawesome/free-solid-svg-icons";

import BoxChecker from '../commonComponent/BoxChecker';
import Ratings from '../commonComponent/Ratings';
import baguette from './baguette.jpg';
import { useState } from 'react';

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
    const circleStyling = {
        circle: {
            'cursor': 'pointer',
            'fontSize': '22px',
            'border': '1px solid rgb(205, 205, 205)',
            'color': 'transparent',
            'borderRadius': '50%'
        },
        circleChecked: {
            'color': 'rgb(16, 155, 109)',
            'fontSize': '22px',
            'cursor': 'pointer',
            'border': '1px solid transparent'
        }
    }
    const [shippingMethod, setShippingMethod] = useState([
        { name: 'dhl', state: true, image: dhl, addPrice: 32 },
        { name: 'fedex', state: false, image: fedex, addPrice: 24 }
    ]);
    const cardOption = (method, i) => {
        return (
            <div className='shippingOption' key={i.toString()}
                onClick={() => {
                    const newShippingState = [...shippingMethod];
                    newShippingState.forEach(elem => {
                        if (elem['name'] === method['name']) {
                            elem['state'] = !elem['state']
                        } else elem['state'] = false;
                    });

                    setShippingMethod(newShippingState);
                }}
            >
                <div className='companyName'>
                    {
                        method['state'] ?
                            <FontAwesomeIcon style={circleStyling.circleChecked} icon={faCircleCheck} /> :
                            <FontAwesomeIcon style={circleStyling.circle} icon={faCircle} />
                    }
                    <span>{method['name']}</span>
                </div>
                <div className='price'>
                    <span className='addedMoney'>{method['addPrice']} USD</span>
                    <span>Addition price</span>
                </div>
                <img src={method['image']} alt={method['name'] + 'Logo'} ></img>
            </div>
        )

    }
    return (
        <div className='shippingMethod'>
            <div className='titleSec'>
                <span className='title'>Shipping method</span>
                <span className='legend'>Please enter your payement method</span>
            </div>
            <div className='options'>

                {
                    shippingMethod.map((elem, i) => cardOption(elem, i))
                }
            </div>


        </div>
    )
}
const PayementMethod = () => {
    const circleStyling = {
        circle: {
            'cursor': 'pointer',
            'fontSize': '22px',
            'border': '1px solid rgb(205, 205, 205)',
            'color': 'transparent',
            'borderRadius': '50%'
        },
        circleChecked: {
            'color': 'rgb(16, 155, 109)',
            'fontSize': '22px',
            'cursor': 'pointer',
            'border': '1px solid transparent'
        }
    }
    const crediCardDesign = (method, i) => {
        return <div className='card' key={i.toString()}>
            <div className='upperPart'>
                <div className='textArea'>
                    {
                        method['state'] ?
                            <FontAwesomeIcon style={circleStyling.circleChecked} icon={faCircleCheck} /> :
                            <FontAwesomeIcon style={circleStyling.circle} icon={faCircle} />
                    }
                    <span>Credit card</span>
                </div>
                <img src={visaCard} alt="visacard logo" ></img>
            </div>
            <div className='cardNumberSec'>
                <label htmlFor='cardNumber'>Card Number</label>
                <input id='cardNumber' type="number" placeholder='Card number'></input>
            </div>
            <div className='bottomPart'>
                <div className='cardHolderSec'>
                    <label htmlFor='cardHolder'>Card holder</label>
                    <input id='cardHolder' type="text" placeholder="Card holder"></input>
                </div>
                <div className='expirationDateSec'>
                    <label htmlFor='expirationDate'>Expiration date</label>
                    <input id='expirationDate' type="date" ></input>
                </div>
                <div className='cvcSec'>
                    <label htmlFor='Cvc'>CVC</label>
                    <input id='Cvc' type='number' placeholder='CVC' min={0}></input>
                </div>
            </div>
        </div>
    }
    const payPalDesign = (method, i) => {
        return <div className='paypal' key={i.toString()}>
            <div className='upperPart'>
                <div className='textArea'>
                    {
                        method['state'] ?
                            <FontAwesomeIcon style={circleStyling.circleChecked} icon={faCircleCheck} /> :
                            <FontAwesomeIcon style={circleStyling.circle} icon={faCircle} />
                    }
                    <span> {method['name']}</span>
                </div>
                <img src={method['image']} alt={method['name'] + 'logo'} ></img>
            </div>
            <div className='inputSec'>
                <label htmlFor='email'>Email or phone number
                    <input type='email' id='email' placeholder='Email or phone number'></input>
                </label>
                <label htmlFor='password'>password
                    <input type='password' id='password' placeholder='password'></input>
                </label>
            </div>
            <button>Login</button>
        </div>
    }
    const bitcoinDesign = (method, i) => {
        return <div className="bitcoin" key={i.toString()}>
            <div className='upperPart'>
                <div className='textArea'>
                    {
                        method['state'] ?
                            <FontAwesomeIcon style={circleStyling.circleChecked} icon={faCircleCheck} /> :
                            <FontAwesomeIcon style={circleStyling.circle} icon={faCircle} />
                    }
                    <span> {method['name']}</span>
                </div>
                <img src={method['image']} alt="bitcoin logo"></img>
            </div>
            <div className='walletInfo'>
                <span className='title'>Amount </span>
                <div className='amounToPay'>
                    <span className='btcValue'>0.0001412 BTC</span>
                    <span className='usdValue'> (1.00 USD)</span>
                    <FontAwesomeIcon className='copyBtn' icon={faCopy} />
                </div>

                <span className='title'>Bitcoin Address</span>
                <div className='walletAddress'>
                    <span>asdf9SDf0E238nFNef8NEnf38</span>
                    <FontAwesomeIcon icon={faCopy} />
                </div>
                <div className='timer'>
                    <span className='time'>59:23</span>
                    <span className='legend'> Awaiting Payement</span>
                </div>
            </div>
        </div>
    }
    const unSelectedDesign = (method, i) => {
        return (
            <div className='barDesign' key={i.toString()}
                onClick={() => {
                    const newSelection = [...payementMethod];
                    newSelection.forEach(elem => {
                        if (elem['name'] === method['name'] && !elem['state']) {
                            elem['state'] = !elem['state'];
                        } else {
                            elem['state'] = false;
                        }
                    });
                    setPayementmethod(newSelection);
                }}
                id={method['name']}>
                <div className='textArea'>
                    {
                        method['state'] ?
                            <FontAwesomeIcon style={circleStyling.circleChecked} icon={faCircleCheck} /> :
                            <FontAwesomeIcon style={circleStyling.circle} icon={faCircle} />
                    }
                    <span>{method['name']}</span>
                </div>
                <img src={method['image']} alt={method['name'] + 'logo'}></img>
            </div>
        )
    }
    const [payementMethod, setPayementmethod] = useState(
        [
            { name: 'CreditCard', state: false, image: visaCard },
            { name: 'PayPal', state: false, image: payPal },
            { name: 'Bitcoin', state: false, image: bitcoin }
        ]
    )

    return (
        <div className='payementMethod'>
            <div className='titleSec'>
                <span className='title'>Payement Method</span>
                <span className='legend'>Please enter your payment method</span>
            </div>
            {
                payementMethod.map(
                    (elem, i) => {
                        if (elem['state']) {
                            if (elem['name'] === 'CreditCard') return crediCardDesign(elem, i);
                            else if (elem['name'] === 'PayPal') return payPalDesign(elem, i);
                            else if (elem['name'] === 'Bitcoin') return bitcoinDesign(elem, i);
                            else return unSelectedDesign(elem, i);
                        } else return unSelectedDesign(elem, i);
                    }
                )
            }
        </div>
    )
}
const AdditionalInfo = () => {
    return (
        <div className='AdditionalInfo'>
            <div className='titleSec'>
                <span className='title'>Additional informations</span>
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
                <span className='title'>Confirmation</span>
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
                <div>
                    <span>Subtotal</span>
                    <span className='numericalVal'>73.98 USD</span>
                </div>
                <div>
                    <span>Tax</span>
                    <span className='numericalVal'>17% 16.53 USD</span>
                </div>
                <div>
                    <span>Shipping</span>
                    <span className='numericalVal'>0 USD</span>
                </div>
            </div>
            <div className='applyPromo'>
                <input type="text" placeholder='Apply promo code'></input>
                <div>Apply now</div>
            </div>
            <div className='totalOrder'>

                <div>
                    <span>Total Order</span>
                    <span className='guarantee'>Guaranteed delivery day: june 12, 2020</span>
                </div>

                <span className='totalPrice'>89.84 USD</span>
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