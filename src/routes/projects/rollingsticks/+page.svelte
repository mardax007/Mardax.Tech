<script lang="ts">
	import Intro from "$lib/components/intro.svelte";
	import People from "$lib/components/people.svelte";
	import Tags from "$lib/components/tags.svelte";
	import Statement from "$lib/components/statement.svelte";
	import TechStack from "$lib/components/techStack.svelte";
	import { getProject } from "$lib/scripts/information";

    // const projectInfo = {
    //     info: {
	// 		name: 'Rollingsticks',
	// 		tag: 'Website',
	// 		date: '2021',
	// 		text: 'Muziekfabriek Rollingsticks is een muziekschool in Gouda. Tijdens corona is de school erachter gekomen dat ze geen alternatief hadden voor lessen op afstand. Zij kwamen toen op het idee om een digitale muziek applicatie te maken waarmee leerlingen overal muziek konden oefenen. Ook kan de docent de leerling huiswerk opgeven ook buiten de lessen. Ook had deze applicatie de mogelijkheid om gebruikt te worden tijdens de lessen in plaats van bladmuziek.',
	// 		icon: '../development.svg',
	// 		rounded: false
    //     },
    //     probleemStatement: {
    //         title: 'Opdracht',
    //         text: 'Een lesapplicatie bouwen die musicXML bestanden kan inladen en afspelen. Ook moet de applicatie de mogelijkheid hebben om huiswerk op te geven en te bekijken.'
    //     },
    //     tags: {
	// 		roleTitle: 'Mijn rol',
	// 		role: 'Developer & Designer',
	// 		responsibilityTitle: 'Mijn verantwoordelijkheden',
	// 		responsibilities: [
	// 				"Ontwerp (33%)",
    //                 "Database ontwikkeling",
    //                 "Mobile support",
    //                 "Afbeelden/afspelen muziek",
    //                 "Huiswerk",
    //                 "Gebruiker authentificatie",
	// 			],
	// 		learnTitle: 'Wat ik heb geleerd',
	// 		learned: `
	// 		Vooraf aan dit project wist ik nog niet veel over het maken van les methodes.
    //         Ook had ik nog nooit een website gemaakt die muziek kon afspelen.
    //         Tijdens dit project heb ik veel geleerd over het maken van een lesmethode en het afspelen van bladmuziek.
    //         Ook heb ik veel geleerd over het maken van een website die goed werkt op mobiel en snel laad.
    //         Dit was namelijk een probleem omdat musicXML bestanden veel data bevatten en de muziek wel
    //         snel moet inladen zodat de docent door kan gaan met de les.
	// 		`,
    //         beta: "Digitaal Media & Entertainment<br>Hi-Tech & Sience<br>Ontwerp, Productie & Wereldhandel"
	// 	},
    //     techStack: [
	// 		{
	// 			name: 'Svelte',
	// 			logo: '../svelte.svg',
	// 			description: 'Framework',
	// 			link: 'https://svelte.dev/'
	// 		},
	// 		{
	// 			name: 'Firebase',
	// 			logo: '../firebase.svg',
	// 			description: 'Database',
	// 			link: 'https://firebase.google.com/'
	// 		},
	// 		{
	// 			name: 'Netlify',
	// 			logo: '../netlify.svg',
	// 			description: 'Hosting',
	// 			link: 'https://netlify.com/'
	// 		},
	// 		{
	// 			name: 'Opensheetmusicdisplay',
	// 			logo: '../osmd-logo.svg',
	// 			description: 'Muziekspeler',
	// 			link: 'https://opensheetmusicdisplay.org/'
	// 		}
	// 	],
	// 	people: [
	// 		{
	// 			img: "../patrick.jpg",
	// 			name: 'Patrick Wognum',
	// 			title: 'Opdrachtgever',
	// 			job: "Muziekfabriek rollingsticks",
	// 			linkedin: "https://muziekfabriekrollingsticks.nl/"
	// 		},
	// 	]
    // }

	const projectInfo = getProject("22Rollingsticks")
</script>

<div id="wrapper">
    <div id="header">
		<img src="../rollingsticks-header.png" alt="Rollingsticks header" />
	</div>
    <Intro info={projectInfo} />
    <Tags tags={projectInfo.tags} />
    <Statement statement={projectInfo.problemStatement?.text ?? ""} statementTitle={projectInfo.problemStatement?.title ?? ""} />
    <People people={projectInfo.people} />
	<h1 class="centerTitle">Design</h1>
	<img src="../Player.jpg" alt="Player">
	<h1 class="centerTitle">Tech stack</h1>
    <TechStack techStack={projectInfo.techStack ?? []} />
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
        width: 100vw;
		padding: 0 10vw;
		margin: 0 auto;
		max-width: 750px;
		min-width: 370px;

		img {
			width: 100%;
			object-fit: cover;
		}

		#header {
			width: 100%;
			margin: 0 auto;
			text-align: center;
			padding: 0 0 2rem 0;

			img {
				width: 100%;
				max-width: 500px;
			}
		}

		@media (max-width: 730px) {
			padding: 0;
			max-width: 90vw;
		}
	}
</style>