<script>
	import Header from '$lib/component/Header.svelte';
	import { writable } from 'svelte/store';
	import {page} from '$app/stores';
	import Footer from '$lib/component/Footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<div style="margin-top: 135px;">
	<Footer/>
</div>