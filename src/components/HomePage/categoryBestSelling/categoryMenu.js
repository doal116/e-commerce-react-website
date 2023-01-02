import CommonOptionSec from "./commonOptionSec";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const BannerSubFocus = ({ banner }) => {
    return (
        banner.map(elem =>
            <div className='BannerSubFocus'>
                <div className='txt-area'>
                    <span className='secondary-txt'>{elem.subText}</span>
                    <span className='primary-txt'>{elem.heading}</span>
                </div>
                <button>
                    <a href={elem.path}>Read recepies</a>
                    <FontAwesomeIcon className="icon" icon={faChevronRight} />
                </button>
            </div>
        )
    )
}
const CategoryMenu = ({ categories }) => {
    return (
        <div className="CategoryMenu">
            <CommonOptionSec categories={categories} nameOfSecion={"Category menu"} buttonMoreInfo={"More categories"} />
            <BannerSubFocus banner={[{ subText: "Banner subfocus", heading: "Space for heading", path: "/receipies" },
            { subText: "Banner subfocus", heading: "Space for heading", path: "/receipies" },
            { subText: "Banner subfocus", heading: "Space for heading", path: "/receipies" }]} />
        </div>

    );
}
export default CategoryMenu;