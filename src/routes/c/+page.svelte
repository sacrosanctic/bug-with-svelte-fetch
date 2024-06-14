<script lang="ts">
	export let data;
	const values = data.values;

	console.log(data.values);
</script>

{#each values as value, index}
	<h1>{index}: {value}</h1>
{/each}
