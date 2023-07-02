<!-- PARENT COMPONENT -->
<script lang="ts"> 
	import ProductCard from '$lib/ProductCard.svelte';
	import { get } from 'svelte/store';
	import { cartItems } from '../../cart';

	const products : Products[] = [{
		id: "1",
		name: "KitchenAid Mixer",
		description: "A kitchen mixer that can be used to make a variety of foods",
		price: "$300",
		image: "/Product_Pictures/Gallery_Pic (2).jpg"
	},
	{
		id: "2",
		name: "KitchenAid Mixer",
		description: "A kitchen mixer that can be used to make a variety of foods",
		price: "$300",
		image: "/Product_Pictures/Gallery_Pic (2).jpg"
	}];
	
	


</script>

<svelte:head>
	<title>Shop</title>
	<meta name="description" content="Shop page" />
</svelte:head>

<h1>Shop</h1>
<div class="container grid col-span-5">
	{#each products as products}
			<ProductCard products={products}  />
	{/each}
</div>

