import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const gotToRight = () => {
    document.getElementById(
        'Testimonies'
    ).scrollLeft += 350;
}
const gotToLeft = () => {
    document.getElementById(
        'Testimonies'
    ).scrollLeft -= 350;
}

const TestimonyBox = ({ testimonies }) => {
    return (
        <div className='Testimonysec' >

            <div className='arrowLeft'>
                <div className='arrowBox' onClick={gotToLeft}>
                    <FontAwesomeIcon className='arrow' icon={faChevronLeft} />
                </div>
            </div>

            <div className='Testimonies' id="Testimonies" >
                {
                    testimonies.map((elem, i) =>
                        <div className='TestimonyBox' >
                            <div className='text'>{elem.testimony}</div>
                            <div className='nameSurname'>{elem.nameSurname} </div>
                            <div className='img'></div>
                        </div>
                    )
                }
            </div>

            <div className='arrowRight'>
                <div className='arrowBox' onClick={gotToRight}>
                    <FontAwesomeIcon className='arrow' icon={faChevronRight} />
                </div>

            </div>

        </div>


    );
}
const Testimonials = ({ testimonies }) => {
    

    return (
        <div className="Testimonials" >

            <div className='TestimonialsUpperSec'>
                <p>Our customers says</p>
                <div className='btnTestimonies'>
                    <span>
                        Button
                    </span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>

            <TestimonyBox
                testimonies={testimonies}
            />
        </div>
    )

}

export default Testimonials;