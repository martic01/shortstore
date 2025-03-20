import React from "react";
import cartIcon from '../images/carticon.png';
import myHeaderStyles from "./MyHeaderStyle";
import flexBoxStyles from "./FlexBoxStyle";

function Header({ toggleCartVisibility,count,toggleFormVisibility }) {
    return (
        <nav style={{ ...flexBoxStyles.myFlex, ...myHeaderStyles.myNav }}>
            <h1 style={{ ...myHeaderStyles.myLogo }}>ShortStore</h1>
            <div>
                <input
                    style={{ ...myHeaderStyles.myInput }}
                    type='search'
                    placeholder='Search'
                />
                <button style={{ ...myHeaderStyles.myButton }}>Search</button>
            </div>
            <ul style={{ ...flexBoxStyles.myFlex, ...myHeaderStyles.myUl }}>
                <li>Home</li>
                <li>About</li>
                <li onClick={toggleFormVisibility} style={{...myHeaderStyles.myButton}}>Add Item</li>
            </ul>
            <div
                className="checkCart"
                style={{ ...flexBoxStyles.myFlex, ...myHeaderStyles.myCartLabelDiv }}
                onClick={toggleCartVisibility} // Add onClick event here
            > 
                <p style={{ ...flexBoxStyles.myFlex, ...myHeaderStyles.myCartCount }}>
                    {count} {/* Replace with dynamic cart item count if needed */}
                </p>
                <div style={{ ...myHeaderStyles.myCartImg }}>
                <img
                    src={cartIcon}
                    alt="cart"
                    style={{ ...myHeaderStyles.myImg }}
                    /> 
                </div>
            </div>
            <div style={{ ...flexBoxStyles.myFlex, ...myHeaderStyles.myFlagDiv }}>
                <div style={{ ...myHeaderStyles.myFlagMiddle }}></div>
            </div>
        </nav>
    );
}

export default Header;