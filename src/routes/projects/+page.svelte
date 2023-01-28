<script>
	import Projects from "$lib/components/Projects.svelte";
</script>

<h1>Projecten</h1>
<Projects max={undefined} />

<style lang="scss">
	@import '$lib/variables.scss';
	h1 {
		text-align: center;
		color: $fontColor;
		font-size: calc(2vw + 3vh);
	}
</style>