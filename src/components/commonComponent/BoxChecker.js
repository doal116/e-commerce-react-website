import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquareCheck
} from "@fortawesome/free-solid-svg-icons";
const BoxChecker = () => {
    const [checked, setBoxChecked] = React.useState(false);
    const boxCheckedStyle = {
        'color': 'rgb(0, 135, 54)',
        'fontSize': '25px',
        'cursor': 'pointer'
    }
    return (
        <>
            {
                checked ?
                    <FontAwesomeIcon icon={faSquareCheck}
                        style={boxCheckedStyle}
                        onClick={() => setBoxChecked(!checked)} />
                    : <div className="box"
                        onClick={() => setBoxChecked(!checked)}></div>
            }

        </>

    )
}
export default BoxChecker;