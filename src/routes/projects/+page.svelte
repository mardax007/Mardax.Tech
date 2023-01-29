<script>
	import Projects from "$lib/components/Projects.svelte";
</script>

<Projects max={undefined} />

<style lang="scss">
	@import '$lib/variables.scss';
	h1 {
		text-align: center;
		color: $fontColor;
		font-size: calc(2vw + 3vh);
	}
</style>