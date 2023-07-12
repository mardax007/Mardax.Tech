<script lang="ts">
	import Intro from "$lib/components/intro.svelte";
	import Tags from "$lib/components/tags.svelte";
	import Statement from "$lib/components/statement.svelte";
	import Video from "$lib/components/video.svelte";
	import { getProject, getSRC } from "$lib/scripts/information";
    import type { styleData } from "$lib/scripts/types";
    import { styleState } from "$lib/scripts/state";

    let style: styleData = {
        darkMode: false,
    };

    styleState.subscribe((x) => {
        style = x;
    })
</script>

<div class={style.darkMode ? "dark" : "light"}>
    {#await getProject("21Huiz") then projectInfo}
        <div id="wrapper">
            <div id="header">
                <img loading="lazy" src={getSRC("/Huiz.png")} alt="Huiz logo" />
            </div>
            <Intro info={projectInfo} />
            <Tags version={2} tags={projectInfo.tags} />
            <Statement statement={projectInfo.problemStatement?.text ?? ""} statementTitle={projectInfo.problemStatement?.title ?? ""} />

            <div id="poster">
                <h3>Ontwerp</h3>
                <img loading="lazy" src={getSRC("/Huiz-Poster.png")} alt="Huiz poster" />
            </div>
            <Video videoURL="https://www.youtube.com/embed/ezScvCkMqSY" videoTitle="Huiz" />
        </div>
    {/await}
</div>

<style lang="scss">
    @import '../../../app.scss';

    .dark {
        h3 {
            color: $textColor !important;
        }
    }

    #wrapper {
        max-width: ($maxWidth * 0.75);
        width: 100vw;
		padding: 0 10vw;
		margin: 0 auto;

        #header {
			width: 100%;
			margin: 0 auto;
			text-align: center;
			padding: 0 0 2rem 0;

			img {
				width: 100%;
				max-width: calc($maxWidth * 0.5);
                margin-top: 2rem;
                margin-bottom: -1rem;
			}
		}

        #poster {
            h3 {
                font-size: 3rem;
                margin: 0;
                line-height: 160%;
                text-align: center;
                margin-top: 2rem;
                color: invert($color: $textColor)
            }

            img {
                width: 100%;
                border-radius: $borderRadius;
                margin: 0.5rem 0;
                box-shadow: $boxShadow;
            }
        }

		@media (max-width: $maxWidth) {
			padding: 0;
			max-width: 90vw;
		}
    }
</style>