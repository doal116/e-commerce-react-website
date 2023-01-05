
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const CommonOptionSec = ({ nameOfSecion, categories, buttonMoreInfo }) => {
    return (
        <div className="CommonOptionSec">
            <div className='title'>
                <span>{nameOfSecion}</span>
            </div>
            <div className="categories">
                {
                    categories.map(elem => <a href={`www.google.com`}>{elem}</a>)
                }
            </div>
            <button>
                <span>{buttonMoreInfo}</span>
                <FontAwesomeIcon className='icon' icon={faChevronRight} />
            </button>
        </div>
    )
}
export default CommonOptionSec;