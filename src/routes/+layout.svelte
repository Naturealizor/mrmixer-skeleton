<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	let currentTile: number = 0;
</script>

<!-- create sveltekit title for seo -->
<svelte:head>
	<title>Mr. Mixer</title>
</svelte:head>


<!-- App Shell -->
<AppShell>
	<!-- Home button, Mr Mixer title -->
	<div class="flex flex-col min-h-screen">
		<AppBar>
			<svelte:fragment slot="lead">
			<main class="flex-grow">
			<a href="/" class="btn hover:variant-soft">
				<strong class="text-xl uppercase">Mr. Mixer</strong>
			</a>
		</svelte:fragment>

		<!-- Desktop Nav Menu -->
		<svelte:fragment slot="trail">
		<div class="desktop-nav  sm:hidden">
			<a class="btn btn-sm variant-ghost-surface " href="../shop" target="_self" rel="noreferrer">
				Shop
			</a>
			<a
				class="btn btn-sm variant-ghost-surface"
				href="../shipping"
				target="_self"
				rel="noreferrer"
			>
				Shipping
			</a>
			<a
				class="btn btn-sm variant-ghost-surface"
				href="https://www.tiktok.com/@mr..mixer"
				target="_blank"
				rel="noreferrer"
			>
				TikTok
			</a>
			<a
				class="btn btn-sm variant-ghost-surface"
				href="https://www.facebook.com/Mrmixer316"
				target="_blank"
				rel="noreferrer"
			>
				Facebook
			</a>
			<a
				class="btn btn-sm variant-ghost-surface"
				href="https://www.instagram.com/mr._mixer_/"
				target="_blank"
				rel="noreferrer"
			>
				Instagram
			</a>
		</svelte:fragment>
		
	</AppBar>

	<slot />
	

		<!-- <footer class="bg-gray-200 text-gray-800 py-4">
			<a
			class="btn btn-sm variant-ghost-surface"
			href="https://www.tiktok.com/@mr..mixer"
			target="_blank"
			rel="noreferrer"
			>
			TikTok
		</a>
		<a
			class="btn btn-sm variant-ghost-surface"
			href="https://www.facebook.com/Mrmixer316"
			target="_blank"
			rel="noreferrer"
			>
			Facebook
		</a>
		<a
			class="btn btn-sm variant-ghost-surface"
			href="https://www.instagram.com/mr._mixer_/"
			target="_blank"
			rel="noreferrer"
			>
			Instagram
		</a>
		</footer> -->
</AppShell>

