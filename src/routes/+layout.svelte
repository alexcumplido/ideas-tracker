<script>
	import { user } from '$lib/user';
</script>

<nav>
	<a href="/">Home</a>
	{#if $user}
		<div>
			<span>{$user.name}</span>
			<button type="button" on:click={user.logout}>Logout</button>
		</div>
	{:else}
		<a href="/login">Login</a>
	{/if}
</nav>

<slot />

<style>
	:global(*) {
		font-family: sans-serif;
	}

	:global(body) {
		margin: 1rem auto;
		max-width: 30rem;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
