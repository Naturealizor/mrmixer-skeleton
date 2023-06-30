<script>
	import { each } from 'svelte/internal';

	let products = [
		{
			name: 'product Name',
			description: 'product Description',
			price: 'product Price',
			image: 'product Image'
		},
		{
			name: 'product Name 2',
			description: 'product Description 2',
			price: 'product Price 2',
			image: 'product Image 2'
		}
	];
</script>

<!-- each loop -->
{#each products as product}
	<div class="grid">
		<div class="card col-span-3">
			<header class="card-header">
				<h2 class="card-header-title">
					{product.name}
				</h2>
			</header>
			<div class="card-body px-4">
				<div class="card-image">
					<img src={product.image} alt={product.name} />
				</div>
				<div class="card-content">
					<p class="card-text">{product.description}</p>
					<p class="card-text">Price: {product.price}</p>
				</div>
			</div>
		</div>
	</div>
{/each}
