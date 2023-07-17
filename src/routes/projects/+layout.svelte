<script lang="ts">
	import BackButton from "$lib/components/backButton.svelte";
    import Nav from "$lib/components/nav.svelte";
</script>

<Nav backButton={true} />
<slot></slot>