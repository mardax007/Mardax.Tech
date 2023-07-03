<script lang="ts">
	import Intro from '$lib/components/intro.svelte';
	import People from '$lib/components/people.svelte';
	import ProcesTimeline from '$lib/components/proces-timeline.svelte';
	import RoleLearn from '$lib/components/roleLearn.svelte';
	import Statement from '$lib/components/statement.svelte';
	import TechStack from '$lib/components/techStack.svelte';

	let projectInfo = {
		info: {
			name: 'Proliad',
			tag: 'Website',
			date: '2022',
			text: 'Proliad levert lichtoplossingen voor gebouwen en objecten. In samenwerking met (licht) architecten ontwikkelen en produceren zij binnen- en buitenverlichting voor musea, monumenten en bruggen.',
			icon: '../design.svg',
			rounded: false
		},
		roleLearn: {
			roleTitle: 'Mijn rol',
			role: 'Developer & Designer',
			responsibilityTitle: 'Mijn verantwoordelijkheden',
			responsibilities: [
					"Ontwerp (25%)",
					"Website ontwikkeling (50%)",
					"Toegankelijkheid (33%)",
					"Demo voorbereiden"
				],
			learnTitle: 'Wat ik heb geleerd',
			learned: `
			Vooraf aan dit project had ik al ervaring met het bouwen van websites maar ik had
			nog niet veel geleerd over hoe je een website ontwerpt op een manier die toegangkelijk is.
			Door ook een gedeelte van de website te ontwerpen heb ik ook geleerd hoe je een idee 
			kan omzetten tot een ontwerp en vervolgens tot een werkende website.
			`,
			beta: "Ontwerp, Productie & Wereldhandel<br>Hi-Tech & Sience<br>Energie, Water & Veiligheid"
		},
		problemStatement: {
			title: 'Probleem',
			text: "Proliad heeft geen vaste webpagina die haar clienten informeert over de duurzaamheid van LED's en wat Proliad hiermee doet. Op dit moment staat een deel van deze informatie verspreid over 2 pagina's, dit moet samengevoegd worden op één pagina en verduidelijkt worden met illustraties."
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
					'Vervolgens zijn wij begonnen met het vooronderzoek. Wij hebben onderzocht hoe wij het bericht van Proliad het beste konden overbrengen. Ook hebben wij onderzocht hoe wij de website het beste konden ontwerpen en ontwikkelen.'
			},
			{
				title: 'Ontwerpen',
				time: 'Sprint 3',
				description:
					'Na dat we hebben geleerd hoe wij het beste het design konden maken zijn wij begonnen met het maken van een aantal designs. Deze hebben we vervolgens met de opdrachtgever gefiltert tot één design.'
			},
			{
				title: 'Ontwikkeling',
				time: 'Sprint 4',
				description:
					'Na dat we het design hadden gemaakt zijn we begonnen met het ontwikkelen van de website. Hierbij hebben we ons zo veel mogelijk aan het design gehouden en hebben we de website zo toegankelijk mogelijk gemaakt.'
			},
			{
				title: 'Oplevering',
				time: 'Sprint 5',
				description:
					'Uiteindelijk hebben wij de website opgeleverd aan de opdrachtgever. Ook hebben wij een demo voorbereid voor de opdrachtgever zodat zij de website zelf kunnen aanpassen. Na deze presentatie hebben we met de expert gewerkt om onze webpagina toe te voegen aan de website.'
			}
		],
		people: [{
			img: "https://images.contactout.com/profiles/aeca68901ed03bcc4b0fdaf6a3553084",
			name: 'Wouter Verhoeven',
			title: 'Opdrachtgever',
			job: "Proliad lighting BV",
			linkedin: "https://www.proliad.com/"
		}, {
			img: "https://media.licdn.com/dms/image/C5603AQFhBJowIKbkJQ/profile-displayphoto-shrink_200_200/0/1516254506146?e=1694044800&v=beta&t=mvfctfsM9_rV1vEN63RCSRjO24_HD0XEe_bouLp0tOY",
			name: 'Eva Hammann',
			title: 'Expert',
			job: 'ie-Design',
			linkedin: 'https://www.linkedin.com/in/evahammann'
		}],
		techStack: [
			{
				name: 'Svelte',
				logo: '../svelte.svg',
				description: 'Framework',
				link: 'https://svelte.dev/'
			},
			{
				name: 'Firebase',
				logo: '../firebase.svg',
				description: 'Database',
				link: 'https://firebase.google.com/'
			},
			{
				name: 'Netlify',
				logo: '../netlify.svg',
				description: 'Hosting',
				link: 'https://netlify.com/'
			}
		]
	}
</script>

<div id="wrapper">
	<div id="header">
		<img src="../proliad.jpg" alt="Proliad header" />
		<img id="proliadLogo" src="../proliadLogo.png" alt="Proliad logo" />
	</div>
	<Intro info={projectInfo.info} />
	<RoleLearn roleLearn={projectInfo.roleLearn} />
	<Statement statement={projectInfo.problemStatement.text} statementTitle={projectInfo.problemStatement.title} />
	<People people={projectInfo.people} />

	<div id="timeline">
		<h1 class="centerTitle">Proces</h1>
		<ProcesTimeline timeline={projectInfo.timeline} />
	</div>

	<div id="techstack">
		<h1 class="centerTitle">Tech stack</h1>

		<TechStack techStack={projectInfo.techStack} />
	</div>

	<div id="website">
		<h1 class="centerTitle">Webpagina</h1>
		<iframe src="https://proliad.netlify.app/" title="Proliad designed webpage" width="100%" height="500px" />
	</div>
</div>

<style lang="scss">
	@import '../../../app.scss';

	.centerTitle {
		width: fit-content;
		margin: 1rem auto;
		margin-top: 3rem;
		text-align: center;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(141deg, #626266, #1e1e22);
		font-size: 2.5rem;
	}

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
				border-radius: $borderRadius;
				width: 110vw;
			}

			#proliadLogo {
				position: absolute;
				top: 15vw;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 50%;
				max-width: 200px;
				filter: drop-shadow(5px 10px 10px rgba(0, 0, 0, 0.5));
				border-radius: 50%;

			}
		}

		#website {
			padding-bottom: 2rem;
			iframe {
				border: none;
				border-radius: calc($borderRadius / 2);
			}
		}

		#timeline {
			min-width: 370px;
		}
	}
</style>
