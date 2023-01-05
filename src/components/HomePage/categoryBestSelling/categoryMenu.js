import CommonOptionSec from "./commonOptionSec";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const BannerSubFocus = ({ banner }) => {
    const BannerStyling = {
        'border-radius': '16px',
        'background-color': 'aquamarine',
        'width': '360px',
        'height': '280px',
        'display': ' grid',
        'grid-template-rows': 'auto auto'
    }
    const buttonStyling = {
        'align-self': 'end',
        'background-color': 'transparent',
        'border': '3px solid rgb(56, 56, 56)',
        'height': '40px',
        'border-radius': '10px',
        'margin': '16px 0px 32px 16px',
        'width': 'fit-content'
    }
    const buttonLinkStyling = {
        'text-decoration': 'none',
        'color': 'rgb(56, 56, 56)',
        'font-weight': 'bold'
    }
    const buttonIconsStyling = {
        'margin': '0px 8px 0px 8px'
    }
    const textAreaStyling = {
        'display': 'flex',
        'flex-direction': 'column',
        'row-gap': '6px',
        'margin': '40px 0px 0px 16px'
    }
    const primaryTextStyling = {
        'font-weight': 'bold',
        'font-size': '20px'
    }
    return (
        banner.map(elem =>
            <div style={BannerStyling}>
                <div style={textAreaStyling}>
                    <span>{elem.subText}</span>
                    <span style={primaryTextStyling}>{elem.heading}</span>
                </div>
                <button style={buttonStyling}>
                    <a href={elem.path} style={buttonLinkStyling}>Read recepies</a>
                    <FontAwesomeIcon style={buttonIconsStyling} icon={faChevronRight} />
                </button>
            </div>
        )
    )
}
const CategoryMenu = ({ categories }) => {
    const CategoryMenuStyling = {
        "margin-top": '32px',
        'display': 'flex',
        "column-gap": '24px'
    }
    return (
        <div style={CategoryMenuStyling}>
            <CommonOptionSec categories={categories} nameOfSecion={"Category menu"} buttonMoreInfo={"More categories"} />
            <BannerSubFocus banner={[{ subText: "Banner subfocus", heading: "Space for heading", path: "/receipies" },
            { subText: "Banner subfocus", heading: "Space for heading", path: "/receipies" },
            { subText: "Banner subfocus", heading: "Space for heading", path: "/receipies" }]} />
        </div>

    );
}
export default CategoryMenu;