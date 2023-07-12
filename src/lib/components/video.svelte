<script lang="ts">
	import { styleState } from "$lib/scripts/state";
	import type { styleData } from "$lib/scripts/types";

    export let videoURL: string;
    export let videoTitle: string;

    let style: styleData = {
		darkMode: false,
	} as styleData;

	styleState.subscribe((x) => {
		style = x;
	})
</script>

<h3 class={style.darkMode ? "darkTitle" : "lightTitle"}>{@html videoTitle}</h3>
<div id="video" class={style.darkMode ? "dark" : "light"}>
    <iframe src={videoURL} title={videoTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<style lang="scss">
    @import '../../app.scss';

    .darkTitle {
        color: $textColor !important;
    }

    .dark {
        background-color: #2d2d2d !important;
    }

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
        background-color: $textColor;
        padding: 1.5rem;

        iframe {
            width: 100%;
            min-height: 400px;
            border-radius: calc($borderRadius / 2);
            box-shadow: $boxShadow;
        }
    }
</style>