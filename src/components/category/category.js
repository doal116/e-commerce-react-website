
import React from "react";
import './category.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faList, faDotCircle, faCircle, faSquare, faSquareCheck, faChevronDown, faGripLinesVertical, faX } from "@fortawesome/free-solid-svg-icons";

const LeftSideFilters =()=>{
    return(
        <div>

        </div>
    )
}
const ProductSearchResults = ()=>{
    return(
        <div>                                                                                  
        </div>
    )
}
const SearchSection =()=>{
    return(
        <div className="SearchSection">

        </div>
    )
}
const Title = ({ categoryName }) => {
    return (
        <div className="Title">
            <div className="CategoryPath">
                <p><span>Homepage</span> / {categoryName}</p>
            </div>
            <div className="choosenCategory">
                <h2>{categoryName}</h2>
                <div className="ViewStyle">
                    <p className="gridView"><FontAwesomeIcon icon={faTh} /> Gird view</p>
                    <p className="listView"><FontAwesomeIcon icon={faList} /> List View</p>
                    <p className="productAvailable"><span>123</span> Products</p>
                </div>
            </div>

            <div className="filters">
                <div className="filter1">
                    <FontAwesomeIcon className="circle" icon={faCircle} />
                    <span>Filter text </span>
                    <FontAwesomeIcon icon={faDotCircle} />
                    <span>Filter Text</span>
                </div>
                <div className="filter2">
                    <FontAwesomeIcon className="square" icon={faSquare} />
                    <span>Filter</span>
                    <span className="nbm">Nbm</span>
                </div>
                <div className="filter2">
                    <FontAwesomeIcon className="square" icon={faSquare} />
                    <span>Filter</span>
                    <span className="nbm">Nbm</span>
                </div>

                <div className="filter3">
                    <div className="leftSide">
                        <FontAwesomeIcon className="squareCheck"icon={faSquareCheck} />
                        <span>Filter</span>
                        <span>12</span>
                    </div>
                    <FontAwesomeIcon icon={faGripLinesVertical} />
                    <div className="selectSection">
                        <span>select</span>
                        <FontAwesomeIcon className="selectArrow" icon={faChevronDown} />
                    </div>
                </div>

            </div>
            <div className="appliedFilters">
                <span>Applied filters: </span>
                <div className="selectedFilters">
                    <span>selected Filter </span>
                    <i><FontAwesomeIcon icon={faX} /></i>
                </div>
            </div>
        </div>
    )
}
class Category extends React.Component {
    render() {
        return (
            <div>
                <Title categoryName={"Fruit and vegetables"} />
                <SearchSection />
            </div>
        );
    };
}

export default Category;