import React from "react";
import PropTypes from "prop-types";
import Item from './item';
import myHeaderStyles from "./MyHeaderStyle";
import myItemStyles from "./itemStyle";
import flexBoxStyles from "./FlexBoxStyle";

function ItemList({ mainItemList, onAddToCart, toggleItemDetailsVisibility }) {
    return (
        <div style={{ ...flexBoxStyles.myFlex, ...myItemStyles.mainItemCont }}>
            {mainItemList.map((item) => (
                <Item
                    key={item.id} // Use item.id as the unique key
                    img={item.img}
                    name={item.name}
                    brand={item.brand}
                    price={item.price}
                    quantity={item.quantity}
                    addToCart={() => onAddToCart(item)}
                    toggleItemDetailsVisibility={() => toggleItemDetailsVisibility(item)} // Pass as a function
                />
            ))}
        </div>
    );
}

ItemList.propTypes = {
    mainItemList: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired,
    toggleItemDetailsVisibility: PropTypes.func.isRequired,
};

export default ItemList;