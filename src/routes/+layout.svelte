<script>
	import Header from '$lib/component/Header.svelte';
	import { writable } from 'svelte/store';
	import {page} from '$app/stores';
	import Hero from '$lib/component/Hero.svelte';
	import Footer from '$lib/component/Footer.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Hero />
<Footer />
