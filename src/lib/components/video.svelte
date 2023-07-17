<script lang="ts">
    export let videoURL: string;
    export let videoTitle: string;
</script>

<h3>{@html videoTitle}</h3>
<div id="video">
    <iframe src={videoURL} title={videoTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<style lang="scss">
    h3 {
        font-size: 3rem;
        margin: 0;
        line-height: 160%;
        text-align: center;
        margin-top: 2rem;
    }

    #video {
        max-width: calc($maxWidth * 0.75);
        margin: 0 auto;
        border-radius: calc($borderRadius / 2);
        background-color: var(--text-color);
        padding: 1.5rem;

        iframe {
            width: 100%;
            min-height: 400px;
            border-radius: calc($borderRadius / 2);
            box-shadow: $boxShadow;
        }
    }
</style>