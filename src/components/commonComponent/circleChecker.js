import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faCircle
} from "@fortawesome/free-solid-svg-icons";
import './sass/commonComp.css';

const CircleChecker = () => {
    const [checked, setCircleChecked] = React.useState(false);
    const circleCheckedStyle = {
        'color': 'rgb(16, 155, 109)',
        'fontSize': '22px',
        'cursor':'pointer',
        'border': '1px solid transparent'
    }
    return (
        <>
            {
                checked ?
                    <FontAwesomeIcon icon={faCircleCheck}
                        style={circleCheckedStyle}
                        onClick={() => setCircleChecked(!checked)} />
                    : <FontAwesomeIcon
                        icon={faCircle}
                        onClick={() => setCircleChecked(!checked)} 
                        className='circle'/>

            }

        </>

    )
}
export default CircleChecker;