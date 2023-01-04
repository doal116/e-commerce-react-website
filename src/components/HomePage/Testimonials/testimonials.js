import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const TestimonyBox = ({ testimonies }) => {
    return (
        <div className='Testimonysec'>

            <div className='arrowLeft'>
                <div className='arrowBox'>
                    <FontAwesomeIcon className='arrow' icon={faChevronLeft} />
                </div>
            </div>

            <div className='Testimonies'>
                {
                    testimonies.map(elem =>
                        <div className='TestimonyBox'>
                            <div className='text'>{elem.testimony}</div>
                            <div className='nameSurname'>{elem.nameSurname} </div>
                            <div className='img'></div>
                        </div>
                    )
                }
            </div>

            <div className='arrowRight'>
                <div className='arrowBox'>
                    <FontAwesomeIcon className='arrow' icon={faChevronRight} />
                </div>

            </div>

        </div>


    );
}
const Testimonials = ({ testimonies }) => {
    return (
        <div className="Testimonials">

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
    );
}

export default Testimonials;