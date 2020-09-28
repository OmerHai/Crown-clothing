/* This is file for extra method for cart redux */

/* This function add new item to the cart */
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(//Check if item is already exist
        cartItem => cartItem.id === cartItemToAdd.id
    );
    if(existingCartItem){ //If yes it is return the previous array with the new quantity
        return cartItems.map(//Adds one to the specific cart item quantity
            cartItem => cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            );
    }
    return [ ...cartItems, { ...cartItemToAdd, quantity:1 }]; // If no it is return the precious array with the new item when the quntity is one
};

/* This function remove item from cart */
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(//Check if item is already exist
        cartItem => cartItem.id === cartItemToRemove.id
    );
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    } 
    
    return cartItems.map(//Adds one to the specific cart item quantity
        cartItem => cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    );
};