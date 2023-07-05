import type { Project } from "/types";


const projects: Project[] = [
    {
        id: "23PWS",
        name: "Profielwerkstuk",
        date: "2023",
        tag: "Onderzoek & Ontwikkeling",
        shortText: "Voor mijn profielwerkstuk heb ik onderzoek gedaan naar neural networks en hebben we het toegepast in een zelfrijdende auto.",
        description: "",
        image: "/PWS-frontpage.png",
        noImagePadding: true,
        background: "#fefefe",
        icon: "/pws.png",
        rounded: false,
        link: "/PWS.pdf",
        download: "Profielwerkstuk.pdf",
        categories: ["school"],
        buttonText: "Download PDF"
    },
    {
        id: "23Nutricia",
        name: "Metabole ziekte",
        date: "2023",
        tag: "Competatief onderzoek",
        shortText: "Voor nutrcia hebben wij een competitief onderzoek gedaan naar hun producten voor mensen met metabole ziekte.",
        description: "Danone Nutricia is gespecialiseerd in voeding voor baby's, jonge kinderen, ouderen en patiënten met specifieke ziektes en aandoeningen. Ze leveren voedingsoplossingen die afgestemd zijn op de behoeften van deze doelgroepen in de zorgsector sinds 2007.",
        image: "/nutricia.svg",
        icon: "/research.svg",
        rounded: false,
        link: "/projects/metabole-ziekte",
        categories: ["school"],
        tags: {
            roleTitle: "Mijn rol",
            role: "Teamleider",
            responsibilityTitle: "Mijn verantwoordelijkheden",
            responsibilities: [
                "Centraal aanspreekpunt",
                "Teamleden deblokkeren",
                "Taakverdeling",
                "Interne communicatie"
            ],
            learnTitle: "Wat ik heb geleerd",
            learned: "Voor dit project heb ik de rol van teamleider op me genomen. Ik heb deze taak nooit aan het begin van het project al op me genomen, maar ik merkte bij veel projecten is dat ik toch vaak bepaalde aspecten van deze rol op mij nam wanneer nodig. Ik vind het belangrijk dat iedereen weet wat er van hen verwacht wordt en ik heb geleerd hoe dit het beste gedaan kan worden.",
            beta: "Mens en gezondheid<br>Ontwerp, Productie & Wereldhandel<br>Voeding & Natuur"
        },
        timeline: [
            {
                title: "Opzet",
                time: "Sprint 1",
                description:
                    "Allereerst zijn wij begonnen met het maken van een PVA, hierin hebben wij de opdracht en de eisen van de opdrachtgever opgeschreven. Ook hebben wij een planning gemaakt voor de komende sprints."
            },
            {
                title: "Vooronderzoek",
                time: "Sprint 2",
                description:
                    "Vervolgens zijn wij begonnen met het vooronderzoek. Wij hebben concurerende producten van Nutricia geïnventariseerd en samen met onze opdrachtgever hebben wij gekeken of wij deze konden verkrijgen. Ook hebben wij onderzocht op welke manieren wij de eigenschappen van deze producten konden testen."
            },
            {
                title: "Onderzoek",
                time: "Sprint 3",
                description:
                    "Na dat wij de producten binnen hebben gekregen zijn wij begonnen met testen. We hebben getest op geur, kleur, smaak, structuur, viscociteit, bederfbaarheid en pH. pH hebben we gemeten met een pH meter en de geur, kleur, smaak en textuur hebben we beoordeeld met een sensorisch onderzoek. Bederfbaarheid hebben we getest door de producten in een broedoven te zetten. Helaas hadden wij geen toegang tot een viscositeitsmeter dus hebben wij ervoor gekozen om de voeding door een burret te laten lopen en vergeleken we de producten met elkaar op hoe lang het duurde om 15ml te doorlopen."
            },
            {
                title: "Conclusie",
                time: "Sprint 4",
                description:
                    "Uit onze resultaten hebben wij samen met onze expert een conclusie getrokken en deze vervolgens gepresenteerd aan onze opdachtgever samen met ons complete verslag."
            }
        ],
        people: [
            {
                name: "Anne Swart",
                title: "Expert",
                job: "Sr Team Leader Product Development",
                img: "https://media.licdn.com/dms/image/D4E03AQHd3we1nc9iig/profile-displayphoto-shrink_200_200/0/1685198072540?e=1694044800&v=beta&t=CdXNb7ycTqEddoyPUzIWjs6VVYN-iy_v5iNaPAwof2Y",
                linkedin: "https://www.linkedin.com/in/annedeswart/"
            },
            {
                name: "Hanaa El Hilali",
                title: "Opdrachtgever",
                job: "Product Design & Development Team leader",
                img: "https://media.licdn.com/dms/image/C4D03AQGg8sJb20gU0A/profile-displayphoto-shrink_200_200/0/1602488833417?e=1694044800&v=beta&t=jjEM3x0pb3C4uXWlCeMhf3k6GnyOkjUoBuSLZhv5uHI",
                linkedin: "https://www.linkedin.com/in/hanaa-el-hilali-45a20915/"
            }
        ],
        problemStatement: {
            title: "Probleem",
            text: "Nutricia heeft een groot assortiment aan producten voor verschillende doelgroepen. Het is voor hen belangrijk om te weten wat hun competitie aanbiedt zodat ze hun producten hierop kunnen aanpassen.<br>Wij hebben onderzoek gedaan naar de competitie van hun PKU producten."
        },
        conclusionStatement: {
            title: "Conclusie",
            text: "Er is weinig verschil in geur, kleur, textuur, smaak en pH, ook bij de GMP producten. Wel hebben de GMP producten andere eigenschappen dan de niet GMP producten. Beide producten blijven vloeibaar als ze bederven maar bij Nutricia's ontstaat een 2 lagen systeem.<br>De viscositeit van Nutricia's product is veel hoger vergeleken met die van Nestlé."
        },
        discussionStatement: {
            title: "Discussie",
            text: "In onze resulaten missen er een aantal waardes. Loplex Water en Juicy hebben geen visco waardes omdat deze de burret verstoppen. De smaak van Vitaflo Sphere hebben we niet kunnen testen omdat deze overdatum was. Dit heeft mogelijk ook invloed gehad op de waardes die we wel hebben kunnen meten."
        }
    },
    {
        id: "22Proliad",
        name: "Proliad",
        date: "2022",
        tag: "UX/UI Design",
        shortText: "Wij kregen de opdracht om een milleupagina voor proliad B.V. te ontwerpen en de ontwikkelen.",
        description: "Proliad levert lichtoplossingen voor gebouwen en objecten. In samenwerking met (licht) architecten ontwikkelen en produceren zij binnen- en buitenverlichting voor musea, monumenten en bruggen.",
        image: "/blaadje.svg",
        icon: "/design.svg",
        link: "http://localhost:5173/projects/proliad",
        categories: ["school"],
		tags: {
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

    },
    {
        id: "22Rollingsticks",
        name: "Rollingsticks",
        date: "2022",
        tag: "Applicatie ontwikkeling",
        shortText: "Wij kregen de opdacht van muziek fabriek rollingsticks om een online muziek les applicatie te ontwikkelen. Het doel was om een app te maken die leerlingen kunnen gebruiken om bladmuziek af te spelen die hun docent hen heeft toegewezen.",
        description: "Muziekfabriek Rollingsticks is een muziekschool in Gouda. Tijdens corona is de school erachter gekomen dat ze geen alternatief hadden voor lessen op afstand. Zij kwamen toen op het idee om een digitale muziek applicatie te maken waarmee leerlingen overal muziek konden oefenen. Ook kan de docent de leerling huiswerk opgeven ook buiten de lessen. Ook had deze applicatie de mogelijkheid om gebruikt te worden tijdens de lessen in plaats van bladmuziek.",
        image: "/rollingsticks.png",
        icon: "/development.svg",
        link: "/projects/rollingsticks",
        categories: ["school"],
        problemStatement: {
            title: 'Opdracht',
            text: 'Een lesapplicatie bouwen die musicXML bestanden kan inladen en afspelen. Ook moet de applicatie de mogelijkheid hebben om huiswerk op te geven en te bekijken.'
        },
        tags: {
			roleTitle: 'Mijn rol',
			role: 'Developer & Designer',
			responsibilityTitle: 'Mijn verantwoordelijkheden',
			responsibilities: [
					"Ontwerp (33%)",
                    "Database ontwikkeling",
                    "Mobile support",
                    "Afbeelden/afspelen muziek",
                    "Huiswerk",
                    "Gebruiker authentificatie",
				],
			learnTitle: 'Wat ik heb geleerd',
			learned: `
			Vooraf aan dit project wist ik nog niet veel over het maken van les methodes.
            Ook had ik nog nooit een website gemaakt die muziek kon afspelen.
            Tijdens dit project heb ik veel geleerd over het maken van een lesmethode en het afspelen van bladmuziek.
            Ook heb ik veel geleerd over het maken van een website die goed werkt op mobiel en snel laad.
            Dit was namelijk een probleem omdat musicXML bestanden veel data bevatten en de muziek wel
            snel moet inladen zodat de docent door kan gaan met de les.
			`,
            beta: "Digitaal Media & Entertainment<br>Hi-Tech & Sience<br>Ontwerp, Productie & Wereldhandel"
		},
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
			},
			{
				name: 'Opensheetmusicdisplay',
				logo: '../osmd-logo.svg',
				description: 'Muziekspeler',
				link: 'https://opensheetmusicdisplay.org/'
			}
		],
		people: [
			{
				img: "../patrick.jpg",
				name: 'Patrick Wognum',
				title: 'Opdrachtgever',
				job: "Muziekfabriek rollingsticks",
				linkedin: "https://muziekfabriekrollingsticks.nl/"
			},
		]
    },
    {
        id: "21Huiz",
        name: "Huiz",
        date: "2021",
        tag: "Ontwerp",
        shortText: "Wij hebben een duurzame en modulaire tiny cabin ontworpen.",
        description: "Voor dit project kregen wij de opdracht om een tiny cabin te bouwen voor een klant. De klant wilde een tiny cabin die makkelijk te verplaatsen was en ruimte had voor fietsen of 2 gasten. Het moest ook ruimte bieden voor kleinkinderen om te spelen.",
        image: "/Huiz.png",
        icon: "/architecture.svg",
        link: "/projects/tiny-cabin",
        categories: ["school"],
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
    },
];

const homepageInfo: {
    categories: {
        [key: string]: {
            title: string,
            location: string,
            description: string,
            titleColor: string,
            locationColor: string,
            descriptionColor: string,
            default?: boolean,
            mapPin: string,
            titleDisplay?: string,
        }
    }
} = {
    categories: {
        school: {
            title: "Hoi, ik ben Martijn",
            location: "Boskoop, Nederland",
            description: "Ik doe op dit moment 5VWO op het Antoniuscollege in Gouda waar ik het N&T volg op weg naar Computer Science.",
            titleColor: "linear-gradient(90deg, #626266, #1e1e22, #626266)",
            locationColor: "linear-gradient(90deg, #626266, #1e1e22, #626266)",
            descriptionColor: "linear-gradient(90deg, #1e1e22, #1e1e22)",
            default: true,
            mapPin: "/MapPin.svg",
        },
        play: {
            title: "Hi, I'm Mardax",
            location: "The Netherlands",
            description: "I like building things, and playing around with new technologies.",
            titleColor: "linear-gradient(90deg, #adf1e0, #8075ff 28%, #ff7171, #adf1e0 98%)",
            locationColor: "linear-gradient(90deg, #626266, #626266)",
            descriptionColor: "linear-gradient(90deg, #626266, #1e1e22, #626266)",
            mapPin: "/MapPin-colored.svg",
        },
    }
}

function getHomepageInfo() {
    return homepageInfo
}

function getProjectsInfo() {
    return projects
}

function getProject(id: string): Project {
    return projects.find(project => project.id === id) ?? {} as Project;
}

export { getProjectsInfo, getHomepageInfo, getProject };