import React from "react";
import PropTypes from "prop-types";
import myItemStyles from "./itemStyle";
import flexBoxStyles from "./FlexBoxStyle";
import myHeaderStyles from "./MyHeaderStyle";
import myCartStyles from "./MyCartStyle";


function ItemDetail({ item, onClose }) {
    return (
        <div style={{ ...myItemStyles.overlay }}>
            <div style={{ ...flexBoxStyles.myFlex, ...myItemStyles.modal }}>
                <button style={{ ...myItemStyles.closeButton }} onClick={onClose}>×</button>
                <div style={{ ...flexBoxStyles.myFlex, ...myItemStyles.content }} >
                    <div style={{ ...flexBoxStyles.myFlex,  ...myItemStyles.itemDetailImgDiv }}>
                        <img style={{...myHeaderStyles.myImg }} src={item.img} alt={item.name} />
                    </div>
                    <div style={{ ...flexBoxStyles.myFlex2, ...myItemStyles.itemDetailsDiv }}>
                        <h2 style={{ ...flexBoxStyles.myFlex,  ...myItemStyles.h2, ...myItemStyles.itemDetailDiv }}>{item.name}</h2>
                        <p style={{...myItemStyles.h2}}><strong>Brand:</strong> {item.brand}</p>
                        <p style={{...myItemStyles.h2}}><strong>Color:</strong> {item.color}</p>
                        <p style={{...myItemStyles.h2}}><strong>Size:</strong> {item.size}</p>
                        <p style={{...myItemStyles.h2}}><strong>Price:</strong> &#8358;{item.price}</p>
                        <div style={{ ...flexBoxStyles.myFlex,...myItemStyles.smallDiv,...myItemStyles.marginTop}}>
                            <h3>Description</h3>
                            <p><strong></strong> {item.description}</p>
                            <p style={{...myItemStyles.marginTop}}><strong>Rating:</strong> {item.rating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ItemDetail.propTypes = {
    item: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};


export default ItemDetail;