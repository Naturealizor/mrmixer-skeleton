<!-- PARENT COMPONENT -->
<script lang="ts"> 
	// Import the ProductCard component from the library
	import ProductCard from '$lib/ProductCard.svelte';
	// Import the get function from svelte store
	import { get } from 'svelte/store';
	// Import the cartItems from the cart module
	import { cartItems } from '../../cart';

	// Create an array of products
	/**
 * Represents a product.
 *
 * @typedef {Object} Product
 * @property {string} id - The id of the product.
 * @property {string} name - The name of the product.
 * @property {string} description - The description of the product.
 * @property {number} price - The price of the product.
 * @property {string} image_url - The image_url of the product.
 */
	const products : Products[] = [{
		id: "1",
		name: "Power Cord",
		description: "Power Cord for all solid state (post 1978) tilt head style mixer, as well as bowl raise models with a removable back cap, similar to the K5SS. This cord can be retrofitted to replace vintage machines with proper instruction!",
		price: 25,
		image_url: "/Product_Pictures/Gallery_Pic (2).jpg"
	},
	{
		// Factory Replacement Worm Gear for Artisan/Tilt-head Models (Fits K5A/K5SS)	<p class="">Plastic gear that fits all tilt head versions and bowl raise mixers with removeable back caps!</p>	25
		id: "2",
		name: "Worm Gear",
		description: "Plastic gear that fits all tilt head versions and bowl raise mixers with removeable back caps!",
		price: 25,
		image_url: "/Product_Pictures/Gallery_Pic (2).jpg"
	},
	{
		// Bearing Bracket	<p class="">The bearing bracket is used on all tilt head mixers as well as all bowl raise mixers with a removable back cap, such as the K5SS!</p>	25
		id: "3",
		name: "Bearing Bracket",
		description: "The bearing bracket is used on all tilt head mixers as well as all bowl raise mixers with a removable back cap, such as the K5SS!",
		price: 25,
		image_url: "/Product_Pictures/Gallery_Pic (2).jpg"
		
	},
	// Professional 600 & Pro 5 Plus Rubber Feet	<p class="">If youâ€™re missing a rubber foot make, sure to replace the set as this can cause your machine to get off balance and fall off the counter! The rubber feet should be replaced every 5 years to ensure they donâ€™t harden, flatten and allow excess vibrations into the system</p>	24.99
	{
		id: "4",
		name: "Rubber Feet",
		description: "If youâ€™re missing a rubber foot make, sure to replace the set as this can cause your machine to get off balance and fall off the counter! The rubber feet should be replaced every 5 years to ensure they donâ€™t harden, flatten and allow excess vibrations into the system",
		price: 24.99,
		image_url: "/Product_Pictures/Gallery_Pic (2).jpg"
	},
	// Speed Control Plate	<p class="">The speed control plate is designed to help set and regulate speeds, this part fits all solid state tilt head models and bowl raise models with removable back caps (post 1978)</p>	25
	{
		id: "5",
		name: "Speed Control Plate",
		description: "The speed control plate is designed to help set and regulate speeds, this part fits all solid state tilt head models and bowl raise models with removable back caps (post 1978)",
		price: 25,
		image_url: "/Product_Pictures/Gallery_Pic (2).jpg"
	},
	// Phase Control Board	<p class="">The phase control board fits all solide state (post 1978) tilt head machines as well as bowl raise machines with a removable back cap such as the K5SS.</p>	25
	{
		id: "6",
		name: "Phase Control Board",
		description: "The phase control board fits all solide state (post 1978) tilt head machines as well as bowl raise machines with a removable back cap such as the K5SS.",
		price: 25,
		image_url: "/Product_Pictures/Gallery_Pic (2).jpg"
	},
	// Governor	<p class="">The governor helps to maintain speeds under a load by adding counter balance, if your machine has a vibration sound from the back end its beneficial to replace this part! The governor fits all tilt head versions and bowl raise mixers with removeable back caps!</p>	25
	{
		id: "7",
		name: "Governor",
		description: "The governor helps to maintain speeds under a load by adding counter balance, if your machine has a vibration sound from the back end its beneficial to replace this part! The governor fits all tilt head versions and bowl raise mixers with removeable back caps!",
		price: 25,
		image_url: "/Product_Pictures/Gallery_Pic (2).jpg"
	},
	// Hub & Bevel Gear For Pro 600 / Pro 5 Plus Models	<p class="">The hub and bevel gear pair together to create rotation to the attachment hub port. They come as a pair. The hub and bevel gears fits all Professional 600, Pro 5 plus and any other bowl raise machine with a fully enclosed case, without a removable back cap. Any time gears are replaced, the old grease should be removed, the transmission cleaned and new grease and gasket applied!</p>	45
	{
		id: "8",
		name: "Hub & Bevel Gear",
		description: "The hub and bevel gear pair together to create rotation to the attachment hub port. They come as a pair. The hub and bevel gears fits all Professional 600, Pro 5 plus and any other bowl raise machine with a fully enclosed case, without a removable back cap. Any time gears are replaced, the old grease should be removed, the transmission cleaned and new grease and gasket applied!",
		price: 45,
		image_url: "/Product_Pictures/Gallery_Pic (2).jpg"
	},
	// NSF H1 NLGI 2 Food Safe Grease	<p class="">We offer the best grease available, the cheaper greases you find on other webpages donâ€™t specify their NLGI rating, they are all NLGI 1 which measures the viscosity of the grease. NLGI 1 is thin compared to NLGI2 so it immediately gets thrown from the gears and leaves your machine susceptible to damage! You should always replace your gasket when re-greasing your machine, if you need one we have them available!</p><p class="">Orders come with 4.6 ounces for grease for artisan/tilt-head machines and 3.6 ounces of grease for the professional, plenty to regrease any KitchenAid mixer!</p>	20
	{
		id: "9",
		name: "Grease",
		description: "We offer the best grease available, the cheaper greases you find on other webpages donâ€™t specify their NLGI rating, they are all NLGI 1 which measures the viscosity of the grease. NLGI 1 is thin compared to NLGI2 so it immediately gets thrown from the gears and leaves your machine susceptible to damage! You should always replace your gasket when re-greasing your machine, if you need one we have them available!",
		price: 20,
		image_url: "/Product_Pictures/Gallery_Pic (2).jpg"
	},
	// Speed Control Board	<p class="">The speed control board fits all professional 600, and Pro 5 Plus models, as well as any bowl raise mixer with a fully enclosed case that doesnt include a back cap! If your mixer wont power on, after trying a different outlet and resetting the gfci function on the outlet then youâ€™ll need a new control board and or power cord. If your mixer is slow to start or you have to wiggle the switch to get your machine to engage , its time for a new control board!</p>	85
	{
		id: "10",
		name: "Speed Control Board",
		description: "The speed control board fits all professional 600, and Pro 5 Plus models, as well as any bowl raise mixer with a fully enclosed case that doesnt include a back cap! If your mixer wont power on, after trying a different outlet and resetting the gfci function on the outlet then youâ€™ll need a new control board and or power cord. If your mixer is slow to start or you have to wiggle the switch to get your machine to engage , its time for a new control board!",
		price: 85,
		image_url: "/Product_Pictures/Gallery_Pic (2).jpg"
	},
	// Pro 600/Pro 5 Plus Worm Follower Gear	<p class="">This anodized brass worm follower gear is a factory replacement! If your machine turn on and spins but then the planetary gets stuck and starts clicking or it wont mix under a load the worm follower gear will need replaced. Every time this gear is replaced the gearbox should be thoroughly cleaned and regreased!</p>	25
	{
		id: "11",
		name: "Worm Follower Gear",
		description: "This anodized brass worm follower gear is a factory replacement! If your machine turn on and spins but then the planetary gets stuck and starts clicking or it wont mix under a load the worm follower gear will need replaced. Every time this gear is replaced the gearbox should be thoroughly cleaned and regreased!",
		price: 25,
		image_url: "/Product_Pictures/Gallery_Pic (2).jpg"
	},
	// Complete Repair Tool Kit	<p class="">This tool kit contains everything you need to work on your machine! Whether you donâ€™t have tools, or only have indoor tools that you donâ€™t want covered in grease, we have you covered. Never look for the tools you need for the job again, as they will all be in a centralized location in the box provided! If you dont need the complete set, but need the snap ring pliers, punches or rubber mallets, we offer them as standalone products!</p>	60
	{
		id: "12",
		name: "Complete Repair Tool Kit",
		description: "This tool kit contains everything you need to work on your machine! Whether you donâ€™t have tools, or only have indoor tools that you donâ€™t want covered in grease, we have you covered. Never look for the tools you need for the job again, as they will all be in a centralized location in the box provided! If you dont need the complete set, but need the snap ring pliers, punches or rubber mallets, we offer them as standalone products!",
		price: 60,
		image_url: "/Product_Pictures/Gallery_Pic (2).jpg"
	},
	// Rubber Mallet	<p class="">12 oz rubber mallet, perfect for helping to remove pins and planetary shafts. Your machine may require a claw hammer do drive out more stubborn pins, however the rubber mallet usually suffices and is needed to gently tap out the planetary shaft from the gears!</p>	10
	{
		id: "13",
		name: "Rubber Mallet",
		description: "12 oz rubber mallet, perfect for helping to remove pins and planetary shafts. Your machine may require a claw hammer do drive out more stubborn pins, however the rubber mallet usually suffices and is needed to gently tap out the planetary shaft from the gears!",
		price: 10,
		image_url: "/Product_Pictures/Gallery_Pic (2).jpg"
	},
	// Pin Punches	<p class="">The perfect sized pin punches to drive all necessary pins from the machine, to remove the planetary pin as well as the pin that holds the plastic worm gear in place. These punches are essential to the mixer repair process!</p>	15
	{
		id: "14",
		name: "Pin Punches",
		description: "The perfect sized pin punches to drive all necessary pins from the machine, to remove the planetary pin as well as the pin that holds the plastic worm gear in place. These punches are essential to the mixer repair process!",
		price: 15,
		image_url: "/Product_Pictures/Gallery_Pic (2).jpg"
	},
	// Lock Lever For Tilt-Head Models (Fits K5A/K5SS)	<p class="">Has the plastic knob on the lock lever of your tilt head machine broke off? If so its a perfect time to replace while doing a re-grease and service to your machine as you will have the transmission exposed! So make sure to add grease and a gasket to your cart with this purchase!</p>	15
	{
		id: "15",
		name: "Lock Lever For Tilt-Head Models (Fits K5A/K5SS)",
		description: "Has the plastic knob on the lock lever of your tilt head machine broke off? If so its a perfect time to replace while doing a re-grease and service to your machine as you will have the transmission exposed! So make sure to add grease and a gasket to your cart with this purchase!",
		price: 15,
		image_url: "/Product_Pictures/Gallery_Pic (2).jpg"
	},
	// Tilt-Head Replacement Rubber Feet (Button Style)	<p class="">These replacement rubber feet fit the Classic and Artisan style of the KitchenAid Mixer. Comes in a set of 5 for a full replacement of the feet. The artisan tilt head comes with a flat style of foot from factory but can be replaced with the button style. We also have the flat style available under another listing on the site! There is no advantage to one or the other!</p>	20
	{
		id: "16",
		name: "Tilt-Head Replacement Rubber Feet (Button Style)",
		description: "These replacement rubber feet fit the Classic and Artisan style of the KitchenAid Mixer. Comes in a set of 5 for a full replacement of the feet. The artisan tilt head comes with a flat style of foot from factory but can be replaced with the button style. We also have the flat style available under another listing on the site! There is no advantage to one or the other!",
		price: 20,
		image_url: "/Product_Pictures/Gallery_Pic (2).jpg"
	},
	


	];

</script>

<svelte:head>
	<title>Shop</title>
	<!-- Meta description for the shop page -->
	<meta name="description" content="Shop page" />
</svelte:head>

<h1>Shop</h1>
<!-- Container div with grid layout -->
<div class="grid grid-cols-3">
	{#each products as products}
			<!-- Render the ProductCard component for each product in the products array -->
			<ProductCard products={products}  />
	{/each}
</div>
