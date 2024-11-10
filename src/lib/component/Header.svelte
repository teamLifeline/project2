<script>
	let activeLink = 'home';

	export const tabs = [
    { name: "Request", link: "/project2/request" },
    { name: "Contact Us", link: "/project2/contact" },
  ];
</script>

<style>
	/* Resetting body margins and padding */
	:global(body) {
		margin: 0;
		padding: 0;
	}

	/* Full-width Header Styling */
	header {
		width: 100%;
		background-color: #8B0000; /* Dark red background */
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #fff;
		box-sizing: border-box;
		font-family: poppins;
	}

	nav a {
		margin-left: 1.5rem;
		color: #fff;
		text-decoration: none;
		font-weight: normal;
	}

	nav a.active {
		font-weight: bold;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: bold;
		font-family: bebas neue;
		letter-spacing: 0.25em;
	}

	nav a:hover {
		color: #ffcccc; /* Light red for hover effect */
	}
</style>

<header>
	<div class="logo">LifelineWeb</div>
	<nav>
		<a href="/project2" class:active={activeLink === 'home'} on:click={() => activeLink = 'home'}>Home</a>
		<a href="/project2/request" class:active={activeLink === 'request'} on:click={() => activeLink = 'request'}>Request</a>
		<a href="/project2/contact" class:active={activeLink === 'contact'} on:click={() => activeLink = 'contact'}>Contact us</a>
	</nav>
</header>
