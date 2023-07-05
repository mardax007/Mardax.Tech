<script lang="ts">
	import Intro from "$lib/components/intro.svelte";
	import Tags from "$lib/components/tags.svelte";
	import Statement from "$lib/components/statement.svelte";
	import Video from "$lib/components/video.svelte";
	import { getProject } from "$lib/scripts/information";

    const projectInfox = {
        info: {
            name: 'Huiz',
			tag: 'Ontwerp',
			date: '2020',
			text: `
            Voor dit project kregen wij de opdracht om een tiny cabin te bouwen voor een klant.
            De klant wilde een tiny cabin die makkelijk te verplaatsen was en ruimte had voor fietsen
            of 2 gasten. Het moest ook ruimte bieden voor kleinkinderen om te spelen.
            `,
			icon: '../architecture.svg',
			rounded: false
        },
        problemStatement: {
            title: 'Opdracht',
            text: `Bouw een duurzame, modulaire accomedatie van 2x2 meter, die kan dienen als gastkamer of omgezet kan worden tot een fietsenhok.
            Er moeten ook opties zijn voor het vermaak van de kleinkinderen.`
        },
        tags: {
			roleTitle: 'Mijn rol',
			role: 'Designer & Planner',
			responsibilityTitle: 'Mijn verantwoordelijkheden',
			responsibilities: [
					"Onderzoek modulariteit",
                    "Stroomvoorziening",
                    "videopresentatie",
                    "Schetsen en 3D moddelen",
                    "Eindmodel maken en printen",
                    "Taakverdeling",
				],
			learnTitle: 'Wat ik heb geleerd',
			learned: `
			Mijn leerdoel voor dit project was om een goede planning te maken zodat ik wist wat er aan zat te komen. De planning voor het gehele project is door omstandigheden vaak veranderd maar mijn eigen korte termijn planning daar in tegen was zeer stabiel.
			`,
            beta: "Ontwerp, Productie & Wereldhandel"
		},
    }

    const projectInfo = getProject("21Huiz")
</script>

<div id="wrapper">
    <div id="header">
		<img src="/Huiz.png" alt="Huiz logo" />
	</div>
    <Intro info={projectInfo} />
    <Tags version={2} tags={projectInfo.tags} />
    <Statement statement={projectInfo.problemStatement?.text ?? ""} statementTitle={projectInfo.problemStatement?.title ?? ""} />

    <div id="poster">
        <h3>Ontwerp</h3>
        <img src="/Huiz-Poster.png" alt="Huiz poster" />
    </div>
    <Video videoURL="https://www.youtube.com/embed/ezScvCkMqSY" videoTitle="Huiz" />

</div>

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

		@media (max-width: 730px) {
			padding: 0;
			max-width: 90vw;
		}
    }
</style>