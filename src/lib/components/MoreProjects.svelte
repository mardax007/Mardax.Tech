<script>
    let show = true;
</script>

{#if show}
    <div id="more">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <h1 on:click={() => {
            dispatchEvent(new CustomEvent("ShowMoreProj"))
            show = false
        }}>Laad meer projecten</h1>
    </div>
{/if}

<style lang="scss">
    @import '$lib/variables.scss';
    #more {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $backgroundColor;
        border-radius: 30px;
        padding: 1.5%;
        margin: 3%;
        margin-top: -1.25%;
    }

    #more h1 {
        font-size: calc(3vh + 2vw);
        font-weight: 600;
        color: $fontColor;
        margin: 0;
        transition: 0.5s;
        cursor: pointer;
        user-select: none;
        text-align: center;
    }

    #more h1:hover {
        scale: 1.15;
    }

</style>