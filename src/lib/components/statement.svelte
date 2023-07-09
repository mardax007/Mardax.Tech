<script lang="ts">
    export let statement: string;
    export let statementTitle: string;
</script>

<div id="statement">
    <h2>{@html statementTitle}</h2>
    <p>{@html statement}</p>
</div>

<style lang="scss">
    @import '../../app.scss';

    #statement {
        max-width: calc($maxWidth * 0.85);
        margin: 0 auto;
        border-radius: calc($borderRadius / 2);
        background-color: $textColor;
        padding: 1rem 1rem 1rem 2rem;

        color: #323235;

        margin-top: 4rem;

        h2 {
            font-size: 1.5rem;
            margin: 0;
            line-height: 160%;
        }

        p {
            font-size: 1.2rem;
            margin: 0;
            font-weight: 400;
            line-height: 150%;
        }
    }
</style>