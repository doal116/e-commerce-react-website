
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CommonOptionSec = ({ nameOfSecion, categories, buttonMoreInfo }) => {

    const CommonOptionSecStyling = {
        'width': '300px',
        'height': '280px',
        'margin-left': '80px'
    }
    const title = {
        'margin': '16px 0px 16px 0px',
        'font-weight': 'bold',
        'font-size': '20px'
    }
    const categoriesSt = {
        'display': 'flex',
        'flex-direction': 'column',
        'row-gap': '10px'
    }
    const link = {
        'color': 'rgb(0, 165, 110)'
    }
    const buttonSt = {
        'border': 'none',
        'height': '40px',
        'border-radius': '10px',
        'margin-top': '32px'
    }
    const text = {
        'font-size': '16px',
        'font-weight': 'bold',
        'margin-left': '8px'
    }
    const btnIcon ={
        'margin':'0px 8px 0px 8px'
    }
    
    return (
        <div style={CommonOptionSecStyling}>
            <div style={title}>
                {nameOfSecion}
            </div>
            <div style={categoriesSt}>
                {
                    categories.map(elem => <a href={`www.google.com`} style={link} >{elem}</a>)
                }
            </div>
            <button style={buttonSt}>
                <span style={text}>{buttonMoreInfo}</span>
                <FontAwesomeIcon style={btnIcon} icon={faChevronRight} />
            </button>
        </div>
    )
}
export default CommonOptionSec;