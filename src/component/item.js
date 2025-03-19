import React from "react";
import PropTypes from "prop-types";
import myHeaderStyles from "./MyHeaderStyle";
import myItemStyles from "./itemStyle";
import flexBoxStyles from "./FlexBoxStyle";

function Item(props) {
    const { img, name, brand, price, addToCart, toggleItemDetailsVisibility } = props;
    return (
        <div  style={{ ...flexBoxStyles.myFlex, ...myItemStyles.itemCont }}>
            <div onClick={toggleItemDetailsVisibility} style={{ ...myItemStyles.itemImgDiv }}>
                <img style={{ ...myHeaderStyles.myImg }} src={img} alt={name} />
            </div>
            <div style={{ ...flexBoxStyles.myFlex, ...myItemStyles.itemDetailDiv }}>
                <h3>{name}</h3>
                <p>{brand}</p>
                <p>&#8358;{price}</p>
            </div>
            <button style={{ ...myHeaderStyles.myButton }} onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

Item.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    addToCart: PropTypes.func.isRequired,
    toggleItemDetailsVisibility: PropTypes.func.isRequired,
};

export default Item;