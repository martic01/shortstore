import React from 'react';
import Header from './Header';
import dummyItem from './fakeApi';
import ItemList from './ItemList';
import Cart from './Cart';
import ItemDetail from './ItemDetail';
import Alert from './alert';
import AddNewItemForm from './AddNewItemForm' // Correctly import ItemDetail

class StoreControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartVisibleOnPage: false,
            itemDetailsVisible: false,
            formVisibleOnPage: false,
            selectedItem: null,
            newimage: null,
            mainItemList: [...dummyItem],
            cartItems: [],
            cartCount: 0,
            showAlert: false,
            alertMessage: '',
        };

    }

    handleImageAdd = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            this.setState({ newimage: imageUrl }); // Update state with the image URL
        }
    };

    handleAddingNewItemToStore = (newItem) => {
        const newMainItemList = [newItem].concat(this.state.mainItemList);
        this.setState({
            mainItemList: newMainItemList,
            formVisibleOnPage: false
        });
    }

    toggleFormVisibility = () => {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage
        }));
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
            // Check if the item already exists in the cart
            const itemExists = prevState.cartItems.some((cartItem) => cartItem.id === item.id);

            const updatedItem = {
                ...item,
                rating: item.rating.length < 5 ? '⭐'.concat(item.rating) : item.rating,
            };

            const updatedMainItemList = prevState.mainItemList.map((mainItem) =>
                mainItem.id === item.id ? updatedItem : mainItem
            );


            if (itemExists) {
                const updatedCartItems = prevState.cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
                console.log('Updated Cart Items (exists):', updatedCartItems); // Debugging
                return {
                    cartItems: updatedCartItems,
                    mainItemList: updatedMainItemList,
                };
            } else {
                const newItem = { ...updatedItem, quantity: 1 };
                const updatedCartItems = [...prevState.cartItems, newItem];
                console.log('Updated Cart Items (new):', updatedCartItems); // Debugging
                return {
                    cartItems: updatedCartItems,
                    mainItemList: updatedMainItemList,
                };
            }
        }, () => {
            // Update cart count after state is updated
            console.log('Final Cart Items:', this.state.cartItems); // Debugging
            this.setState({ cartCount: this.state.cartItems.length });
        });
    };
    // Remove item from cart
    removeFromCart = (id) => {
        this.setState((prevState) => {
            // Find the item in the mainItemList
            const itemToUpdate = prevState.mainItemList.find((item) => item.id === id);
    
            // If the item exists, reduce its rating by removing the last character
            if (itemToUpdate) {
                const updatedItem = {
                    ...itemToUpdate,
                    rating: itemToUpdate.rating.length > 0 ? itemToUpdate.rating.slice(0, -1) : itemToUpdate.rating,
                };
    
                const updatedMainItemList = prevState.mainItemList.map((mainItem) =>
                    mainItem.id === id ? updatedItem : mainItem
                );
    
                const updatedCartItems = prevState.cartItems.filter((cartItem) => cartItem.id !== id);
                const updatedCartCount = updatedCartItems.length;
    
                return {
                    mainItemList: updatedMainItemList,
                    cartItems: updatedCartItems,
                    cartCount: updatedCartCount,
                };
            }
    
            const updatedCartItems = prevState.cartItems.filter((cartItem) => cartItem.id !== id);
            const updatedCartCount = updatedCartItems.length;
    
            return {
                cartItems: updatedCartItems,
                cartCount: updatedCartCount,
            };
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
                    toggleFormVisibility={this.toggleFormVisibility}
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
                {this.state.formVisibleOnPage && (
                    <AddNewItemForm
                        onNewItemCreation={this.handleAddingNewItemToStore}
                        handleImageAdd={this.handleImageAdd}
                        onCloseForm={this.toggleFormVisibility}
                        imagePreview={this.state.newimage}
                    />
                )}
            </React.Fragment>
        );
    }

}

export default StoreControl;
