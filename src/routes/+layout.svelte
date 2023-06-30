<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	let currentTile: number = 0;
</script>

<!-- App Shell -->
<AppShell>
	<AppBar>
		<svelte:fragment slot="lead">
			<a href="/" class="btn hover:variant-soft">
				<strong class="text-xl uppercase">Mr. Mixer</strong>
			</a>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<a class="btn btn-sm variant-ghost-surface" href="/shop" target="_self" rel="noreferrer">
				Shop
			</a>
			<a
				class="btn btn-sm variant-ghost-surface"
				href="https://www.youtube.com/@MrMixer316"
				target="_blank"
				rel="noreferrer"
			>
				YouTube
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

	<!-- <AppRail>
		<svelte:fragment slot="lead">
			<AppRailAnchor href="/">(icon)</AppRailAnchor>
		</svelte:fragment>
		<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			<span>Tile 1</span>
		</AppRailTile>
		<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			<span>Tile 2</span>
		</AppRailTile>
		<svelte:fragment slot="trail">
			<AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
		</svelte:fragment>
	</AppRail> -->
	<!-- App Rail -->

	<!-- Page Route Content -->

	<slot />
</AppShell>
