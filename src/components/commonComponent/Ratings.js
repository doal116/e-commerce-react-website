
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar
} from "@fortawesome/free-solid-svg-icons";
import BoxChecker from "./BoxChecker";

const Ratings = ({ stars }) => {
    const yellowStarStyling = {
        color: 'rgb(255, 162, 0)'
    };
    const grayStarStyling = {
        color: 'rgb(207, 207, 207)'
    };
    return (
        stars.map(
            (star, i) =>
                <div key={i.toString()} className="level">
                    <BoxChecker />
                    <div className="stars">
                        {
                            [...Array(star)].map(
                                (elm, i) => <i key={i.toString()} style={yellowStarStyling}><FontAwesomeIcon icon={faStar} /></i>
                            )
                        }
                        {
                            [...Array(5 - star)].map(
                                (elm, i) => <i key={i.toString()} style={grayStarStyling}><FontAwesomeIcon icon={faStar} /></i>
                            )
                        }
                    </div>
                </div>
        )
    )
}

export default Ratings;