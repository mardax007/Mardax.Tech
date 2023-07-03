<script lang="ts">
	import Statement from '$lib/components/statement.svelte';
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';
	import RoleLearn from '$lib/components/roleLearn.svelte';
	import People from '$lib/components/people.svelte';
	import Intro from '$lib/components/intro.svelte';
	import ProcesTimeline from '$lib/components/proces-timeline.svelte';

	const project = {
		name: 'Metabole ziekte',
		date: '2023',
		tag: 'Competitief onderzoek',
		icon: '../research.svg',
		text: `Danone Nutricia is gespecialiseerd in voeding voor baby's, jonge kinderen, ouderen en patiënten
	met specifieke ziektes en aandoeningen. Ze leveren voedingsoplossingen die afgestemd zijn op de
	behoeften van deze doelgroepen in de zorgsector sinds 2007.`,
		rounded: false
	};

	const options = [
		{
			title: 'Opzet',
			time: 'Sprint 1',
			description:
				'Allereerst zijn wij begonnen met het maken van een PVA, hierin hebben wij de opdracht en de eisen van de opdrachtgever opgeschreven. Ook hebben wij een planning gemaakt voor de komende sprints.'
		},
		{
			title: 'Vooronderzoek',
			time: 'Sprint 2',
			description:
				'Vervolgens zijn wij begonnen met het vooronderzoek. Wij hebben concurerende producten van Nutricia geïnventariseerd en samen met onze opdrachtgever hebben wij gekeken of wij deze konden verkrijgen. Ook hebben wij onderzocht op welke manieren wij de eigenschappen van deze producten konden testen.'
		},
		{
			title: 'Onderzoek',
			time: 'Sprint 3',
			description:
				'Na dat wij de producten binnen hebben gekregen zijn wij begonnen met testen. We hebben getest op geur, kleur, smaak, structuur, viscociteit, bederfbaarheid en pH. pH hebben we gemeten met een pH meter en de geur, kleur, smaak en textuur hebben we beoordeeld met een sensorisch onderzoek. Bederfbaarheid hebben we getest door de producten in een broedoven te zetten. Helaas hadden wij geen toegang tot een viscositeitsmeter dus hebben wij ervoor gekozen om de voeding door een burret te laten lopen en vergeleken we de producten met elkaar op hoe lang het duurde om 15ml te doorlopen.'
		},
		{
			title: 'Conclusie',
			time: 'Sprint 4',
			description:
				'Uit onze resultaten hebben wij samen met onze expert een conclusie getrokken en deze vervolgens gepresenteerd aan onze opdachtgever samen met ons complete verslag.'
		}
	];

	const projectInfo = {
		info: {
			name: 'Metabole ziekte',
			date: '2023',
			tag: 'Competitief onderzoek',
			icon: '../research.svg',
			text: `Danone Nutricia is gespecialiseerd in voeding voor baby's, jonge kinderen, ouderen en patiënten
		met specifieke ziektes en aandoeningen. Ze leveren voedingsoplossingen die afgestemd zijn op de
		behoeften van deze doelgroepen in de zorgsector sinds 2007.`,
			rounded: false
		},
		roleLearn: {
			roleTitle: 'Mijn rol',
			role: 'Teamleider',
			responsibilityTitle: 'Mijn verantwoordelijkheden',
			responsibilities: [
				'Centraal aanspreekpunt',
				'Teamleden deblokkeren',
				'Taakverdeling',
				'Interne communicatie'
			],
			learnTitle: 'Wat ik heb geleerd',
			learned: `Voor dit project heb ik de rol van teamleider op me genomen. Ik heb deze taak nooit aan het begin van het project al op me genomen, maar ik merkte bij veel projecten is dat ik toch vaak bepaalde aspecten van deze rol op mij nam wanneer nodig. Ik vind het belangrijk dat iedereen weet wat er van hen verwacht wordt en ik heb geleerd hoe dit het beste gedaan kan worden.`,
			beta: "Mens en gezondheid<br>Ontwerp, Productie & Wereldhandel<br>Voeding & Natuur"
		},
		timeline: [
			{
				title: 'Opzet',
				time: 'Sprint 1',
				description:
					'Allereerst zijn wij begonnen met het maken van een PVA, hierin hebben wij de opdracht en de eisen van de opdrachtgever opgeschreven. Ook hebben wij een planning gemaakt voor de komende sprints.'
			},
			{
				title: 'Vooronderzoek',
				time: 'Sprint 2',
				description:
					'Vervolgens zijn wij begonnen met het vooronderzoek. Wij hebben concurerende producten van Nutricia geïnventariseerd en samen met onze opdrachtgever hebben wij gekeken of wij deze konden verkrijgen. Ook hebben wij onderzocht op welke manieren wij de eigenschappen van deze producten konden testen.'
			},
			{
				title: 'Onderzoek',
				time: 'Sprint 3',
				description:
					'Na dat wij de producten binnen hebben gekregen zijn wij begonnen met testen. We hebben getest op geur, kleur, smaak, structuur, viscociteit, bederfbaarheid en pH. pH hebben we gemeten met een pH meter en de geur, kleur, smaak en textuur hebben we beoordeeld met een sensorisch onderzoek. Bederfbaarheid hebben we getest door de producten in een broedoven te zetten. Helaas hadden wij geen toegang tot een viscositeitsmeter dus hebben wij ervoor gekozen om de voeding door een burret te laten lopen en vergeleken we de producten met elkaar op hoe lang het duurde om 15ml te doorlopen.'
			},
			{
				title: 'Conclusie',
				time: 'Sprint 4',
				description:
					'Uit onze resultaten hebben wij samen met onze expert een conclusie getrokken en deze vervolgens gepresenteerd aan onze opdachtgever samen met ons complete verslag.'
			}
		],
		people: [
			{
				name: 'Anne Swart',
				title: 'Expert',
				job: 'Sr Team Leader Product Development',
				img: 'https://media.licdn.com/dms/image/D4E03AQHd3we1nc9iig/profile-displayphoto-shrink_200_200/0/1685198072540?e=1694044800&v=beta&t=CdXNb7ycTqEddoyPUzIWjs6VVYN-iy_v5iNaPAwof2Y',
				linkedin: 'https://www.linkedin.com/in/annedeswart/'
			},
			{
				name: 'Hanaa El Hilali',
				title: 'Opdrachtgever',
				job: 'Product Design & Development Team leader',
				img: 'https://media.licdn.com/dms/image/C4D03AQGg8sJb20gU0A/profile-displayphoto-shrink_200_200/0/1602488833417?e=1694044800&v=beta&t=jjEM3x0pb3C4uXWlCeMhf3k6GnyOkjUoBuSLZhv5uHI',
				linkedin: 'https://www.linkedin.com/in/hanaa-el-hilali-45a20915/'
			}
		],
		problemStatement: {
			text: "Nutricia heeft een groot assortiment aan producten voor verschillende doelgroepen. Het is voor hen belangrijk om te weten wat hun competitie aanbiedt zodat ze hun producten hierop kunnen aanpassen.<br>Wij hebben onderzoek gedaan naar de competitie van hun PKU producten.",
			title: 'Probleem'
		}
	}
</script>

<div id="wrapper">
	<div id="header">
		<img src="../PKU Lophlex.png" alt="Nutricia logo" />
	</div>
	<Intro info={projectInfo.info} />
	<div id="content">
		<RoleLearn roleLearn={projectInfo.roleLearn} />
		<Statement
			statementTitle={projectInfo.problemStatement.title}
			statement={projectInfo.problemStatement.text}
		/>
		<People people={projectInfo.people} />
		<div id="timeline">
			<h1 class="centerTitle">Proces</h1>
			<ProcesTimeline timeline={projectInfo.timeline} />
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
			statementTitle={'Conclusie'}
			statement={"Er is weinig verschil in geur, kleur, textuur, smaak en pH, ook bij de GMP producten. Wel hebben de GMP producten andere eigenschappen dan de niet GMP producten. Beide producten blijven vloeibaar als ze bederven maar bij Nutricia's ontstaat een 2 lagen systeem.<br>De viscositeit van Nutricia's product is veel hoger vergeleken met die van Nestlé."}
		/>
		<div id="presentation">
			<h1 class="centerTitle">Presentatie</h1>
			<img id="presentationMedia" src="../NutriciaPresentation.gif" alt="presentation" />
		</div>
		<Statement
			statementTitle={'Discussie'}
			statement={'In onze resulaten missen er een aantal waardes. Loplex Water en Juicy hebben geen visco waardes omdat deze de burret verstoppen. De smaak van Vitaflo Sphere hebben we niet kunnen testen omdat deze overdatum was. Dit heeft mogelijk ook invloed gehad op de waardes die we wel hebben kunnen meten. '}
		/>
		<div id="media">
			<h1 class="centerTitle">Media</h1>
			<div id="mediaList">
				<a href="../Eindverslag KP3.docx" download>
					<div class="media">
						<img src="../word.svg" alt="word" />
						<p>Download Verslag</p>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../../app.scss';

	#wrapper {
		height: 100vh;
		padding: 0 10vw;
		margin: 0 auto;
		max-width: 750px;

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

		h3,
		h1 {
			color: invert($color: $textColor);
		}

		.centerTitle {
			width: fit-content;
			margin: 1rem auto;
			margin-top: 3rem;
			text-align: center;
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
			background-image: linear-gradient(141deg, #626266, #1e1e22);
			font-size: 2rem;
		}

		#presentationMedia {
			width: 100%;
		}

		#mediaList {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			margin-top: 1rem;

			a {
				text-decoration: none;
			}

			.media {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin: 1rem;
				max-width: 15rem;
				color: invert($color: $textColor);

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

		#timeline {
			min-width: 370px;
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
				color: $textColor;
			}
		}

		@media (max-width: 730px) {
			padding: 0;
		}
	}
</style>
