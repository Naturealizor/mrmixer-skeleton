<script lang="ts">
	import { cartItems, addToCart, removeFromCart } from "../cart";
	import { get } from "svelte/store";
	export let products : Products = {
		id: "",
		name: "",
		description: "",
		price: "",
		image: "/Product_Pictures/Gallery_Pic (2).jpg"
	};
	// let id = get(Products.id);
	let cart = get(cartItems); // [ { id: "1", quantity: 1 }, { id: "2", quantity: 1 }]
	let cartItemIndex = cart.find((item) => item.id === products.id)?.quantity || 0; // Not sure if this is needed
	let cartProduct = cart[cartItemIndex]; // { id: "1", quantity: 1 }
	cartItems.subscribe((newCartValue) => {
		cart = newCartValue;
		cartItemIndex = cart.findIndex((item) => item.id === products.id);
		cartProduct = cart[cartItemIndex];
		console.log(cart);
	});
	



	

</script>



<div class="container grid col-span-5 m-5">
	<div class="card">
		<header>
			<div class="card-image">
				<img src="{products.image}" alt="KitchenAid mixer">
			</div>
		</header>
		<div class="card-content">
			<h3 class="card-title">{products.name}</h3>
			<p class="card-description">{products.description}</p>
			<p class="card-price">{products.price}</p>
			<button on:click={() => addToCart(products.id)}>Add to Cart</button>
			<button class="btn variant-filled-surface" on:click={() => removeFromCart(products.id)}>Remove from Cart</button>
		</div>
	</div>
</div>