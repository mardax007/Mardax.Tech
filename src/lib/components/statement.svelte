<script lang="ts">
	import { styleState } from "$lib/scripts/state";
	import type { styleData } from "$lib/scripts/types";

    export let statement: string;
    export let statementTitle: string;

    let style: styleData = {
		darkMode: false,
	} as styleData;

	styleState.subscribe((x) => {
		style = x;
	})
</script>

<div id="statement" class={style.darkMode ? "dark" : "light"}>
    <h2>{@html statementTitle}</h2>
    <p>{@html statement}</p>
</div>

<style lang="scss">
    @import '../../app.scss';

    .dark {
        background-color: #2d2d2d !important;
        * {
            color: $textColor !important;
        }
    }

    #statement {
        max-width: calc($maxWidth * 0.85);
        margin: 0 auto;
        border-radius: calc($borderRadius / 2);
        background-color: $textColor;
        padding: 1rem 1rem 1rem 2rem;

        color: #323235;

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