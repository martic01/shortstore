import React from 'react';
import Header from './Header';
import dummyItem from './fakeApi';
import ItemList from './ItemList';
import Cart from './Cart';
import ItemDetail from './ItemDetail';
import Alert from './alert'; // Correctly import ItemDetail

class StoreControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartVisibleOnPage: false,
            itemDetailsVisible: false,
            selectedItem: null,
            mainItemList: [...dummyItem],
            cartItems: [],
            cartCount: 0,
            showAlert: false, 
            alertMessage: '', 
        };
    }


    toggleItemDetailsVisibility = (item) => {
        this.setState((prevState) => ({
            itemDetailsVisible: !prevState.itemDetailsVisible,
            selectedItem: item || null, // Set the selected item or null if hiding details
        }));
    };


    toggleCartVisibility = () => {
        this.setState((prevState) => ({
            cartVisibleOnPage: !prevState.cartVisibleOnPage,
        }));
    };

    // Add item to cart
    addToCart = (item) => {
        this.setState((prevState) => {
            const itemExists = prevState.cartItems.some((cartItem) => cartItem.id === item.id);

            if (itemExists) {
                const updatedCartItems = prevState.cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
                return { cartItems: updatedCartItems };
            } else {
                const newItem = { ...item, quantity: 1 };
                return { cartItems: [...prevState.cartItems, newItem] };
            }
        }, () => {
            // Update cart count after state is updated
            this.setState({ cartCount: this.state.cartItems.length });
        });
    };

    // Remove item from cart
    removeFromCart = (id) => {
        this.setState((prevState) => ({
            cartItems: prevState.cartItems.filter((cartItem) => cartItem.id !== id),
        }), () => {
            this.setState({ cartCount: this.state.cartItems.length });
        });
    };

    incrementQuantity = (id) => {
        this.setState((prevState) => {
            const cartItems = [...prevState.cartItems];
            const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === id);
            if (itemIndex !== -1) {
                cartItems[itemIndex] = { ...cartItems[itemIndex], quantity: cartItems[itemIndex].quantity + 1 };
            }
            return { cartItems };
        });
    };

    decrementQuantity = (id) => {
        this.setState((prevState) => {
            const cartItems = [...prevState.cartItems];
            const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === id);
            if (itemIndex !== -1) {
                if (cartItems[itemIndex].quantity > 0) {
                    cartItems[itemIndex] = { ...cartItems[itemIndex], quantity: cartItems[itemIndex].quantity - 1 };
                } 
                 if (cartItems[itemIndex].quantity === 0) {
                    setTimeout(() => {
                        this.removeFromCart(id);
                    }, 700);
                }
            }
            return { cartItems };
        });
    };

    // Handle checkout
    handleCheckout = () => {
        this.setState({
            showAlert: true,
            alertMessage: 'Thank you for your purchase!',
            cartItems: [],
            cartCount: 0,
        });

        // Hide the alert after 3 seconds
        setTimeout(() => {
            this.setState({ showAlert: false })
        }, 3000);
    };

    render() {
        return (
            <React.Fragment>
                <Header
                    toggleCartVisibility={this.toggleCartVisibility}
                    count={this.state.cartCount}
                />
                <ItemList
                    mainItemList={this.state.mainItemList}
                    onAddToCart={this.addToCart}
                    toggleItemDetailsVisibility={this.toggleItemDetailsVisibility} // Pass toggleItemDetailsVisibility to ItemList
                />
                {this.state.cartVisibleOnPage && (
                    <Cart
                        cartItems={this.state.cartItems}
                        onRemoveFromCart={this.removeFromCart}
                        onIncrementQuantity={this.incrementQuantity}
                        onDecrementQuantity={this.decrementQuantity}
                        onCheckout={this.handleCheckout}
                        onCloseCart={this.toggleCartVisibility}
                        toggleItemDetailsVisibility={this.toggleItemDetailsVisibility} // Pass toggleCartVisibility to Cart
                    />
                )}
                {this.state.itemDetailsVisible && this.state.selectedItem && ( // Check if selectedItem is defined
                    <ItemDetail
                        item={this.state.selectedItem} // Pass the selected item
                        onClose={this.toggleItemDetailsVisibility} // Pass the close function
                    />
                )}
                 {this.state.showAlert && (
                    <Alert
                        message={this.state.alertMessage}
                        onClose={() => this.setState({ showAlert: false })}
                    />
                )}
            </React.Fragment>
        );
    }

}

export default StoreControl;
