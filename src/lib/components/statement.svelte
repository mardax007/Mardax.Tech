<script lang="ts">
    export let statement: string;
    export let statementTitle: string;
</script>

<div id="statement">
    <h2>{@html statementTitle}</h2>
    <p>{@html statement}</p>
</div>

<style lang="scss">
    #statement {
        max-width: calc($maxWidth * 0.85);
        margin: 0 auto;
        border-radius: calc($borderRadius / 2);
        background-color: var(--secondary-color);
        padding: 1rem 1rem 1rem 2rem;

        margin-top: 2rem;

        h2 {
            margin: 0;
            line-height: 160%;
        }

        p {
            font-size: 1.2rem;
            margin: 0;
            line-height: 140%;
        }
    }
</style>