<script>
    let show = true

</script>

{#if show}
    <div id="more">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <h1 on:click={() => {
            dispatchEvent(new CustomEvent("ShowMoreProj"))
            show = false
        }}>Meer projecten</h1>
    </div>
{/if}

<style lang="scss">
    @import '$lib/variables.scss';
    #more {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #more h1 {
        font-size: 300%;
        font-weight: 600;
        color: $fontColor;
        margin: 0;
        margin-bottom: 5%;
        margin-top: -7.5%;
        transition: 0.5s;
        cursor: pointer;
        user-select: none;
        
    }

    #more h1:hover {
        scale: 1.15;
    }

</style>