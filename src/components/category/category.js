
import React from "react";
import './category.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faList } from "@fortawesome/free-solid-svg-icons";
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
                   <span>Filter text </span> 
                    <span>Filter Text</span>
                </div>
                <div className="filter2">Filter</div>
                <div className="filter3">Filter</div>
                <div className="filter4">
                    <span>Filter</span>
                    <span>select</span>
                </div>
                <p></p>
            </div>
        </div>
    )
}
class Category extends React.Component {
    render() {
        return (
            <div>
                <Title categoryName={"Fruit and vegetables"} />
            </div>
        );
    };
}

export default Category;