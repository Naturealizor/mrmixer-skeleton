<script lang="ts">
	// Import cartItems, addToCart and removeFromCart from the cart module 
	import { cartItems, addToCart, removeFromCart } from "../cart";
	// Import get from svelte/store
	import { get } from "svelte/store";
	// Export products as an object with properties id, name, description, price and image
	export let products : Products = {
		id: "",
		name: "",
		description: "",
		price: 0,
		image: ""
	};
	// Get the value of the product's id from the store
	// let id = get(Products.id);
	// Get the value of cartItems from the store
	// insert jsdoc for cart = get(cartItems) comment here

/**
 * Retrieves the cart items from a data source.
 *
 * @param {Array} cartItems - An array of cart items.
 * @returns {Array} The cart items retrieved from the data source.
 */

	let cart = get(cartItems); // [ { id: "1", quantity: 1 }, { id: "2", quantity: 1 }]
	// Find the quantity of the product in the cart
	let cartItemIndex = cart.find((item) => item.id === products.id)?.quantity || 0; // Not sure if this is needed
	// Get the product from the cart
	let cartProduct = cart[cartItemIndex]; // { id: "1", quantity: 1 }
	// Subscribe to changes in the cartItems store
	cartItems.subscribe((newCartValue) => {
		// Set the new value of cart to the new value of cartItems
		cart = newCartValue;
		// Find the index of the product in the cart
		cartItemIndex = cart.findIndex((item) => item.id === products.id);
		// Get the product from the cart
		cartProduct = cart[cartItemIndex];
		// Log the cart to the console
		console.log(cart);
	});

	// Log something to the console
	console.log
</script>

	<div class="">
		<div class=" card-hover card flex m-5 p-5">
			<header>
				<div class="card-image p-2">
					<!-- create a new img the same as below, but with a small image -->
					
					<img src="{products.image}" alt="KitchenAid mixer" style="max-width: 500px; max-height: 300px;">
				</div>
			</header>
			<div class="card-content">
				<h3 class="card-title">{products.name}</h3>
				<p class="card-description">{products.description}</p>
				<p class="card-price">${products.price}</p>
				<button class="btn variant-filled-surface m-4" on:click={() => addToCart(products.id)}>Add to Cart</button>
				<button class="btn variant-filled-surface" on:click={() => removeFromCart(products.id)}>Remove from Cart</button>
			</div>
		</div>
	</div>