import React from 'react';
import PropTypes from 'prop-types';
import myCartStyles from './MyCartStyle';
import myHeaderStyles from './MyHeaderStyle';
import flexBoxStyles from './FlexBoxStyle';

function Cart(props) {
    const { cartItems, onRemoveFromCart, onIncrementQuantity, onDecrementQuantity, onCheckout, onCloseCart, toggleItemDetailsVisibility } = props
    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.replace(/,/g, '')) * item.quantity, 0);

    return (
        <div style={{ ...myCartStyles.myCartBody }}>
            <h2 style={{ ...myCartStyles.h2 }}>Your Cart</h2>

            {cartItems.length === 0 ? (
                <p style={{ ...myCartStyles.h2 }}>Your cart is empty.</p>
            ) : (
                <div style={{ ...myCartStyles.overflow }}>
                    {cartItems.map((item) => (
                        <div style={{...flexBoxStyles.myFlex, ...myCartStyles.myCartItemCont }} key={item.id}>
                            <div style={{ ...myCartStyles.myCartImgDiv }}>
                                <img onClick={() => toggleItemDetailsVisibility(item)} style={{...myCartStyles.myCartImg}} src={item.img} alt={item.name} />
                            </div>
                            <div style={{ ...flexBoxStyles.myFlex2, ...myCartStyles.myCartItemDetails }} >
                                <p><h3>{item.name}</h3>{item.brand} (&#8358;{item.price})</p>
                                <div style={{ ...flexBoxStyles.myFlex, ...myCartStyles.mygap }}>
                                    <p style={{ ...myCartStyles.myCartItemQuantity }} onClick={() => onIncrementQuantity(item.id)}>+</p>
                                    <p style={{ ...myCartStyles.myCartItemQuantity }}><span>{item.quantity}</span></p>
                                    <p style={{ ...myCartStyles.myCartItemQuantity }} onClick={() => onDecrementQuantity(item.id)}>-</p>
                                </div>
                                <button style={{ ...myHeaderStyles.myButton }} onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <p><strong>Total: &#8358;{totalPrice.toLocaleString()}</strong></p>
                    <button style={{ ...myHeaderStyles.myButton }} onClick={onCheckout}>Proceed to Checkout</button>
                </div>
            )}
            <button style={{ ...myHeaderStyles.myButton }} onClick={onCloseCart}>Close</button> {/* Close Cart Button */}
        </div>
    );
}

Cart.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            brand: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
    onRemoveFromCart: PropTypes.func.isRequired,
    onIncrementQuantity: PropTypes.func.isRequired,
    onDecrementQuantity: PropTypes.func.isRequired,
    onCheckout: PropTypes.func.isRequired,
    onCloseCart: PropTypes.func.isRequired, // Add prop type for close cart function
};

export default Cart;