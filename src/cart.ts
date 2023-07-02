// React Context
import { writable, get } from 'svelte/store';

export const cartItems = writable<CartItem[]>([]);
// [ { id: "1", quantity: 4 }, { id: "2", quantity: 1 } ]"}]

export const addToCart = (id: string) => {
    // cartItems is a writable, not a value
    // get(cartItems) returns the value of cartItems 
    // which is an array of CartItem objects
    const items = get(cartItems);

    // findIndex returns the index of the first element in the array
    // that satisfies the provided testing function. Otherwise, it returns -1,
    // indicating that no element passed the test.
    const itemsPosition = items.findIndex((item) => {return item.id === id});

    // if the item is already in the cart, update the quantity
    if (itemsPosition !== -1) {
        cartItems.update(() => {
            const updatedItems = items.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item;
            })
            return updatedItems;
        }
        )
    } else {
        // if the item is not in the cart, add the object to the cart
        cartItems.update((items) => {
            return [ ...items, { id: id, quantity: 1 } ]
        });
    }
}


    // remove from cart (removes one item) -> changes the value of the writable
    export const removeFromCart = (id: string) => {
        const items = get(cartItems);
        const itemPosition = items.findIndex(
            (item) => {return item.id === id} // does the current item have an id of '1'
        )

        // if the quantity of the item being removed is 1, remove the item from the cart
        if (items[itemPosition]?.quantity - 1 === 0) {
            items.splice(itemPosition, 1);
        }
        // if the quantity of the item being removed is greater than 1, decrement the quantity
        
        cartItems.update(() => {
            const updatedItems = items.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item;
            });
            return updatedItems;
        }
        )
    }



