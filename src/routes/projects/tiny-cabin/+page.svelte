<script lang="ts">
	import Intro from "$lib/components/intro.svelte";
	import Tags from "$lib/components/tags.svelte";
	import Statement from "$lib/components/statement.svelte";
	import Video from "$lib/components/video.svelte";
	import { getProject, getSRC } from "$lib/scripts/information";
</script>

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

<style lang="scss">
    @import '../../../app.scss';

    #wrapper {
        width: 100vw;
		padding: 0 10vw;
		margin: 0 auto;
		max-width: 750px;
		min-width: 370px;

        #header {
			width: 100%;
			margin: 0 auto;
			text-align: center;
			padding: 0 0 2rem 0;

			img {
				width: 100%;
				max-width: 500px;
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
                color: #323235;
            }

            img {
                width: 100%;
                border-radius: $borderRadius;
                margin: 0.5rem 0;
                box-shadow: $boxShadow;
            }
        }

		@media (max-width: 777px) {
			padding: 0;
			max-width: 90vw;
		}
    }
</style>