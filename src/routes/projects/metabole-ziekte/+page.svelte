<script lang="ts">
	import Statement from '$lib/components/statement.svelte';
	import Tags from '$lib/components/tags.svelte';
	import People from '$lib/components/people.svelte';
	import Intro from '$lib/components/intro.svelte';
	import ProcesTimeline from '$lib/components/proces-timeline.svelte';
	import { getProject, getSRC } from '$lib/scripts/information';
	import { onMount } from 'svelte';

	const style = {
        darkMode: false,
    };

    onMount(() => {
        addEventListener("styleUpdated", () => {
			style.darkMode = document.documentElement.getAttribute("data-theme") == "dark";
		})
        style.darkMode = localStorage.getItem("darkMode") ? localStorage.getItem("darkMode") == "true" : window.matchMedia('(prefers-color-scheme: dark)').matches;;
    })
</script>

<div>
{#await getProject("23Nutricia") then projectInfo}
	<div id="wrapper" class="{style.darkMode ? "dark" : ""}">
		<div id="header">
			<img loading="lazy" src={getSRC("/PKU Lophlex.webp")} alt="Nutricia logo" />
		</div>
		<Intro info={projectInfo} />
		<div id="content">
			<Tags tags={projectInfo.tags} />
			<Statement
				statementTitle={projectInfo.problemStatement?.title ?? ""}
				statement={projectInfo.problemStatement?.text ?? ""}
			/>
			<People people={projectInfo.people} />
			<div id="timeline">
				<ProcesTimeline title="Proces" timeline={projectInfo.timeline ?? []} />
			</div>
			<div id="results">
				<h1 class="centerTitle">Resultaten</h1>
				<table class="table table-bordered table-hover table-condensed">
					<thead>
						<tr>
							<th title="Field #1">Product</th>
							<th title="Field #2">Lophlex Water</th>
							<th title="Field #3">Lophlex Juicy</th>
							<th title="Field #4">Loplex Select</th>
							<th title="Field #5">GMPro LQ</th>
							<th title="Field #6">Vitaflo Air</th>
							<th title="Field #7">Vitaflo Sphere (expired)</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Colour</td>
							<td>Orange</td>
							<td>Brown</td>
							<td>Beige</td>
							<td>White</td>
							<td>Brown</td>
							<td>White</td>
						</tr>
						<tr>
							<td>Smell</td>
							<td>Orange</td>
							<td>Orange</td>
							<td>Orange</td>
							<td>Milk vanilla</td>
							<td>Coconut </td>
							<td>Milk vanilla</td>
						</tr>
						<tr>
							<td>Taste</td>
							<td>Intense orange</td>
							<td>Intense orange</td>
							<td>Milk orange</td>
							<td>Sweet milk</td>
							<td>Fruity</td>
							<td>N/A</td>
						</tr>
						<tr>
							<td>Ph</td>
							<td>4.55</td>
							<td>4.40</td>
							<td>4.49</td>
							<td>6.98</td>
							<td>4.49</td>
							<td>7.19</td>
						</tr>
						<tr>
							<td>Visco (15ml)</td>
							<td>N/A</td>
							<td>2:16</td>
							<td>N/A</td>
							<td>4:36</td>
							<td>5:05</td>
							<td>4:49</td>
						</tr>
					</tbody>
				</table>

				<h3>Highlights</h3>
				<ul>
					<li>
						De kleur van de producten van Nutricia en die van Vitaflo verschillen niet heel erg van
						elkaar. De producten van beide bedrijven zijn oranje of een andere tint daarvan (bruin of
						beige).<br />De kleur van de GMP-producten verschilt ook niet; beide producten zijn wit.
					</li>
					<br />
					<li>
						De producten van Nutricia ruiken naar sinaasappel, terwijl die van Vitaflo naar kokos
						ruikt.<br />De geur van de GMP-producten is wel hetzelfde, dit is namelijk melk vanille.
					</li>
					<br />
					<li>
						De textuur van de producten is bij beide bedrijven hetzelfde: waterig. Ook bij de GMP is
						de textuur van beide producten waterig.
					</li>
					<br />
					<li>
						De pH van de producten van de twee bedrijven ligt rond de 4,50 en is dus hetzelfde.<br
						/>De pH van de GMP-producten is ook vergelijkbaar maar wel duidelijk hoger dan die van de
						normale producten. Deze ligt namelijk ronde de 7,00.
					</li>
					<br />
					<li>
						Hoe langer het duurt voordat een product de buret uitgelopen is, hoe hoger de viscositeit.
						Bij het product van Vitaflo duurde dit veel langer dan die van Nutricia. De viscositeit
						van het product van Nutricia is dus veel hoger.<br />Bij de GMP-producten is de tijd
						redelijk vergelijkbaar. De viscositeit zal bij deze producten dus ongeveer hetzelfde zijn.
					</li>
					<br />
					<li>
						Bij de producten van Nutricia ontstaan er bij allemaal (bij Lophlex Select echter niet
						heel duidelijk) een tweelagensysteem. Bij het product van Vitaflo is dit niet het geval,
						maar wat hierbij opvalt is dat het erg troebel is geworden. Wat wel overeenkomt, is dat
						alle producten nog steeds redelijk vloeibaar blijven.<br />Bij de GMP-producten ontstaat
						er bij beide geen tweelagensysteem, maar wel samenklonteringen. Het product van Nutricia
						is echter duidelijk minder vloeibaar geworden, terwijl dat bij het product van Vitaflo
						niet het geval is.
					</li>
				</ul>
			</div>
			<Statement
				statementTitle={projectInfo.conclusionStatement?.title ?? ""}
				statement={projectInfo.conclusionStatement?.text ?? ""}
			/>
			<a id="presentation" href={getSRC("/Eindpresentatie Nutricia.pptx")}>
				<h1 class="centerTitle">Presentatie</h1>
				<img loading="lazy" id="presentationMedia" src={getSRC("/NutriciaPresentation.gif")} alt="presentation" />
			</a>
			<Statement
				statementTitle={projectInfo.discussionStatement?.title ?? ""}
				statement={projectInfo.discussionStatement?.text ?? ""}
			/>
			<div id="media">
				<h1 class="centerTitle">Media</h1>
				<div id="mediaList">
					<a href="../Eindverslag KP3.docx" download>
						<div class="media">
							<img loading="lazy" src={getSRC("/word.svg")} alt="word" />
							<p>Download Verslag</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
{/await}
</div>

<style lang="scss">
	
	
	.dark {

		.table {
			tr:nth-child(even) {
				background-color: #444 !important;;
			}

			tr:nth-child(odd) {
				color: #fff !important;
			}
		}

		#results {
			color: #fff !important;;
		}
	}

	#wrapper {
		max-width: ($maxWidth * 0.75);
		height: 100vh;
		padding: 0 10vw;
		margin: 0 auto;

		#header {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			img {
				height: 10rem;
				margin-top: 2vh;
			}
		}

		#timeline {
			min-width: 370px;
		}

		h3,
		h1 {
			color: var(--text-color);
		}

		.centerTitle {
			width: fit-content;
			margin: 1rem auto;
			margin-top: 3rem;
			text-align: center;
			font-size: 2rem;
		}

		#presentation {
			text-decoration: none;

			&:hover {
				text-decoration: underline;

				transition: all 0.5s ease-in-out;
			}

			#presentationMedia {
				transition: all 0.2s ease-in-out;
				width: 100%;

				&:hover {
					transform: scale(1.05);
				}
			}

		}

		#mediaList {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			margin-top: 1rem;

			a {
				text-decoration: none;

				img {
					transition: all 0.2s ease-in-out;
				}

				&:hover {
					img {
						transform: scale(1.1);
					}
				}
			}

			.media {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin: 1rem;
				max-width: calc($maxWidth * 0.5);
				color: var(--text-color);

				img {
					width: 5rem;
					height: 5rem;
					object-fit: contain;
				}

				p {
					font-size: 1.5rem;
					font-weight: 700;
					margin: 0;
					margin-top: 0.5rem;
					text-align: center;

					&:hover {
						text-decoration: underline;
					}
				}
			}
		}

		.table {
			width: 100%;
			border-collapse: collapse;
			border-spacing: 0;
			border: 1px solid #ddd;
			margin: 0 auto;
			margin-top: 2rem;
			margin-bottom: 2rem;

			th,
			td {
				text-align: left;
				padding: 16px;
			}

			tr:nth-child(even) {
				background-color: #f2f2f2;
			}

			th {
				background-color: #4472c4;
				color: var(--text-color);
			}
		}

		@media (max-width: $maxWidth) {
			padding: 0;
			max-width: 90vw;
		}
	}
</style>
