import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const TestimonyBox = ({ testimonies }) => {
    const Testimonysec = {
        'position': 'relative',
        'height': 'inherit'
    }
    const Testimonies = {
        'height': 'inherit',
        'width': 'inherit',
        'align-items': 'center',
        'display': 'flex',
        'column-gap': '16px',
        'overflow-x': 'auto'
    }
    const TestimonyBox = {
        'position': 'relative',
        'border': '3px solid rgb(227, 227, 227)',
        'width': 'fit-content',
        'height': '160px',
        'flex': '0 0 auto',
        'border-radius': '24px'
    }
    const arrowLeft = {
        'z-index': '1',
        'position': 'absolute',
        'height': '100%',
        'width': '300px',
        'background-image': 'linear-gradient(90deg, rgb(255, 255, 255),transparent)'
    }
    const arrowBoxLeft = {
        'background-color': 'black',
        'width': '24px',
        'border-top-right-radius': '10px',
        'border-bottom-right-radius': '10px',
        'height': '48px',
        'color': 'white',
        'margin-top': '100px'
    }
    const arrowIconLeft = {
        'margin-top': '60%',
        'margin-left': '10%'
    }
    const arrowIconRight = {
        'margin-top': '60%',
        'margin-right': '10px'
    }
    const arrowRight = {
        'z-index': '1',
        'position': 'absolute',
        'height': '100%',
        'width': '300px',
        'background-image': 'linear-gradient(90deg,transparent, rgb(255, 255, 255))',
        'right': '0',
        'top': '0'
    }
    const arrowBoxRight = {
        'background-color': 'black',
        'width': '24px',
        'border-top-left-radius': '10px',
        'border-bottom-left-radius': '10px',
        'height': '48px',
        'color': 'white',
        'margin-left': 'auto',
        'margin-top': '100px'
    }
    const text ={
        'padding': '10px 16px 0px 16px',
        'width': '280px',
        'text-align': 'center'
    }
    const imgSt={
        'position': 'absolute',
        'width':'50px',
        'height': '50px',
        'border-radius': '50%',
        'background-color': 'black',
        'left': '40%',
        'bottom': '-25px'
    }
    const nameSurname = {
        'text-align': 'center'
    }
    return (
        <div style={Testimonysec}>

            <div style={arrowLeft}>
                <div style={arrowBoxLeft}>
                    <FontAwesomeIcon style={arrowIconLeft} icon={faChevronLeft} />
                </div>
            </div>

            <div style={Testimonies} className="Testimonies">
                {
                    testimonies.map(
                        elem =>
                            <div style={TestimonyBox}>
                                <div style={text}>{elem.testimony}</div>
                                <div style={nameSurname}>{elem.nameSurname} </div>
                                <div style={imgSt}></div>
                            </div>
                    )
                }
            </div>

            <div style={arrowRight}>
                <div style={arrowBoxRight}>
                    <FontAwesomeIcon style={arrowIconRight} icon={faChevronRight} />
                </div>
            </div>

        </div>


    );
}
const Testimonials = ({ testimonies }) => {
    const Testimonials = {
        'height': '250px',
        'width': '100%'
    }
    const TestimonialsUpperSec = {
        'margin-top': '24px',
        'display': 'grid',
        'grid-template-columns': 'auto auto',
        'align-items': 'center'
    }
    const btnTestimonies = {
        'justify-self': 'end',
        'margin-right': '80px'
    }
    const title ={
        'margin-left': '80px'
    }
    return (
        <div style={Testimonials}>

            <div style={TestimonialsUpperSec}>
                <p style={title}>Our customers says</p>
                <div style={btnTestimonies}>
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