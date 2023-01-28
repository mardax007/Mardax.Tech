import type { Project, Introduction } from "./interfaces";

const projects: Project[] = [
    {
        title: "Rollingsticks",
        textDate: "2022",
        date: new Date("January 1, 2021"),
        description: "Wij kregen de opdacht van muziek fabriek rollingsticks om een online muziek les applicatie te ontwikkelen. Het doel was om een app te maken die leerlingen kunnen gebruiken om bladmuziek af te spelen die hun docent hen heeft toegewezen. Dit project valt in de beta werelden: Hi-Tech & Sience, Digitaal Media & Entertainment en Ontwerp, Productie & Wereldhandel.",
        media: "https://p.mardax.tech/images/Muziekfabriek-Rollingsticks-favicon-wit1.png",
        mediaType: "img",
        links: [
            {
                name: "GitHub",
                icon: "icons/github.svg",
                url: "https://github.com/MauritsWilke/rollingSticks"
            }
        ],
        projectInfo: {
            headerImage: "/Projects/Rollingsticks/header.png",
            hideTitle: true,
            texts: [
                {
                    type: "imageText",
                    title: "Rollingsticks",
                    text: "Wij kregen de opdacht van muziek fabriek rollingsticks om een online muziek les applicatie te ontwikkelen. Het doel was om een app te maken die leerlingen kunnen gebruiken om bladmuziek af te spelen die hun docent hen heeft toegewezen. Dit project valt in de beta werelden:<br>Hi-Tech & Sience, Digitaal Media & Entertainment en Ontwerp, Productie & Wereldhandel.<h2>Mijn bijdrage</h2>Ik heb voornamelijk backend code geschreven en aan de muziek speler. Backend is de kant van de applicatie die de gebruiker niet ziet. Hieronder valt niet alleen alles rond de server (beveiliging, connectie, opslag, authenticatie) maar ook dingen die op de client gebeuren als, laad snelheid en audio (gedeeltelijk).",
                    image: "/Projects/Rollingsticks/Signin.png"

                },
                {
                    type: "textImage",
                    title: "Technologiën",
                    text: "Om de app simpel te houden wilde we één platform gebruiken voor alle infrastructuur. Daarnaast wilde we ook voorkomen dat we onze eigen server moesten gebruiken omdat dit extra veel kosten en onderhoud teweeg brengt.<br><br>Daarom hebben we gekozen voor Firebase. Firebase is een platform van Google die alles heeft voor het bouwen van een app. Het is simpel maar nog steeds zeer krachtig. Firebase regelt alle backend voor ons, authenticatie, opslag van muziek en gebruikers data, analytics en beveiliging. Ze laten je app ook bij hun hosten alleen deze feature was nog in beta toen we begonnen met bouwen dus hiervoor hebben we een andere service gebruikt genaamt netlify. We waren al best bekend met netlify (ik host er al mijn websites op) en met firebase heb ik al een paar jaar ervaring. Dat is ook de reden waarom ik vooral alles rond firebase regelde.<br><br>Voor het maken van de website zelf hebben zij gekozen voor het framework svelte. Svelte betekent letterlijk slender en de naam is passend. Svelte is zeer licht waardoor websites razend snel laden. Daarnaast is het makkelijk om te leren wat fijn is voor de team leden die het nooit gebruikt hebben. Daarnaast is het schaalbaar dus als we later onze eigen server eraan willen toevoegen is dat heel simpel.",
                    image: "/Projects/Rollingsticks/stack.png"
                },
                {
                    type: "imageText",
                    title: "Muziek speler",
                    text: "De muziek speler was een van de lastigste. Omdat we niet 6 jaar hebben om de website te bouwen hebben we OpenSheetMusicDisplay gepakt en die aangepast naar onze wensen. OSMD is een opensource project om een muziek speler te maken die makkelijk is om te intergreren maar nog steeds zeer flexibel is.",
                    image: "/Projects/Rollingsticks/OSMD.png"
                },
                {
                    type: "textImage",
                    title: "Mijn leerdoel",
                    text: "Mijn leerdoel voor dit project was een goede planning voor mezelf en het team maken zodat ik wist wat er aan zat te komen. De planning voor het gehele project is door omstandigheden vaak veranderd maar mijn eigen korte termijn planning daar in tegen was zeer stabiel.",
                    image: "/Projects/Rollingsticks/Goal.jpg"
                }
            ]
        }
    },
    {
        title: "Tiny Cabin",
        textDate: "2021",
        date: new Date(2022, 0, 1),
        description: "Voor dit project kregen wij de opdracht om een tiny cabin te bouwen. Het doel was om een opslagplaats voor fietsen te bouwen die ook gebruikt kon worden als slaapkamer.",
        mediaType: "img",
        media: "/Projects/Huiz/huizFull.png",
        projectInfo: {
            headerImage: "/Projects/Huiz/huiz.png",
            hideTitle: true,
            bottomVideo: "https://www.youtube-nocookie.com/embed/ezScvCkMqSY",
            texts: [
                {
                    type: "imageText",
                    title: "Tiny cabin",
                    text: "Voor dit project kregen wij de opdracht om een tiny cabin te bouwen. Het doel was om een opslagplaats voor fietsen te bouwen die ook gebruikt kon worden als slaapkamer.<br><br>Maar er was een klein probleem, het huis mocht niet groter zijn dan 2x2 Daarom moesten wij gebruik maken van een uiklapbaar bed en bureau. Maar wanneer er mensen in slapen heb je ook verwarming, verlichting en een tafel nodig. Ook vonden wij het belangrijk om een computer aan dit huis toe te voegen zodat de kleinkinderen zich konden vermaken op een regenachtige dag. Maar dit vereist wel veel stroom. Daarom zijn wij gegaan voor een Jackery 1500 powerbank met zonnepanelen. Hiermee kan alles worden voorzien van stroom. <br><br>Mijn leerdoel voor dit project was om een goede planning te maken zodat ik wist wat er aan zat te komen. De planning voor het gehele project is door omstandigheden vaak veranderd maar mijn eigen korte termijn planning daar in tegen was zeer stabiel.",
                    image: "/Projects/Huiz/Poster.png"
                },
                {
                    type: "textImage",
                    title: "Mijn bijdrage",
                    text: "<ul><li>Ik heb onderzocht hoe je een modulaire accomedatie maakt.</li><li>Ik heb manieren onderzocht om een accomedatie van stroom te voorzien.</li><li>Ik heb de videopresentatie gemaakt en beeldmateriaal verzamelt</li><li>Ik heb 2 schetsen en 3D modellen gemaakt, ook heb ik het eindmodel gemaakt en geprint.</li><li>En ik heb tenslotte ook de taakverdeling op me genomen.</li></ul>",
                    image: "/Projects/Me.svg"
                }
            ]
        }
    },
    {
        title: "Gouda Go",
        textDate: "2021",
        date: new Date(2021, 2, 15),
        description: "Gouda Go is een spel dat we gemaakt hebben om het 750 jarige bestaan van gouda te vieren. In de app ga je op zoek naar interesante plekken in Gouda. Van kerken tot scholen. Je kan punten verdienen door vragen over deze plekken te beantwoorden. Er zijn meer dan 30 interesante locaties om te ontdekken in Gouda Go!",
        mediaType: "img",
        media: "/Projects/GoudaGo/GoudaGo.png",
        links: [
            {
                name: "Play store",
                icon: "icons/play.svg",
                url: "https://play.google.com/store/apps/details?id=com.MardaxTech.GoudaGo&gl=NL"
            },
        ],
        projectInfo: {
            hideTitle: true,
            headerImage: "/Projects/GoudaGo/Unity.webp",
            texts: [
                {
                    type: "videoText",
                    title: "Wat is Gouda Go?",
                    video: "https://www.youtube-nocookie.com/embed/ypOe9NaGOc0",
                    text: "Gouda Go is een spel dat we gemaakt hebben om het 750 jarige bestaan van gouda te vieren. In de app ga je op zoek naar interesante plekken in Gouda. Van kerken tot scholen. Je kan punten verdienen door vragen over deze plekken te beantwoorden. Er zijn meer dan 30 interesante locaties om te ontdekken in Gouda Go!"
                },
                {
                    type: "imageText",
                    title: "Hoe werkt het?",
                    image: "/Projects/GoudaGo/GoudaGo.png",
                    text: "In de app Gouda GO! ga je op zoek naar interessante gebouwen van Gouda.<br><br>Zodra je in de app komt zie je een personage op de kaart staan. Zodra je dichter naar een gebouw komt, zul je een marker zien, als je daar op drukt komen er 2 vragen per marker in beeld. Per goed antwoord krijg je een coin, desde meer coins je hebt, desde meer plaatsen je hebt bezocht en vragen goed beantwoord hebt.<br><br>Naast dat de app een superleuke ervaring is, je kennis op de proef stelt, is het dus ook nog eens interactief, daardoor heb je het extra leuk tijdens het wandelen of fietsen. (Natuurlijk niet op je telefoon tijdens het fietsen 😊.<br><br>Mijn leerdoel voor dit project was hoe je een leerzaam spel maakt gebaseerd op GPS en map data"
                }
            ]
        }
    },
    {
        title: "Video game bouwen",
        textDate: "2021",
        date: new Date(2021, 1, 1),
        description: "Bij dit project waren de opdrachtgevers dpg, gemeente Gouda en gemeente Krimpenerwaard. Zij gaven ons de opdracht om een duurzaam en circulair product te ontwikkelen. Wij kozen voor een duurzame en circulaire etui. We moesten aan het einde van het project een fysiek of digitaal eindmodel hebben, Een marketing plan die ons product presenteerd, wat het kost, waar het gemaakt word en hoe we het gaan promoten. Ook hebben we de markt verkent en in kaart gebracht hoe het er op dit moment uit ziet.",
        mediaType: "img",
        media: "/Projects/Game/Unity.jpg",
        links: [
            {
                name: "Download",
                icon: "icons/download.svg",
                url: "https://mardax.tech/downloads/Game.zip"
            },
        ],
        projectInfo: {
            headerImage: "/Projects/Game/Unity2.jpg",
            texts: [
                {
                    type: "imageText",
                    title: "Vooronderzoek",
                    image: "/Projects/Game/Unity3.jpg",
                    text: "In de eerste weken kregen we uitleg over hoe we een game konden maken. We kregen een introductie tot appinventor en als oefening heb ik een kleine app mee gemaakt. Daarna gingen we een volledige game maken waarbij je zelf mocht kiezen welke game development software je wilde gebruiken. Ik heb ervoor gekozen om de game in unity te maken. Ik koos hiervoor omdat ik unity al redelijk goed kende. Ook wist ik dat unity een sterke tool is waarmee je vrijwel alles kan maken."
                },
                {
                    type: "textImage",
                    title: "Development",
                    image: "/Projects/Game/csharp.png",
                    text: "De app die ik gemaakt heb is een multiplayer First Person Shooter. Ik koos hiervoor omdat ik graag wilde weten hoe je een multiplayer spel kan maken. Eerst moest ik een manier hebben om 2 spelers in 1 wereld te krijgen. Ik kwam langs een tutorial van Tom Weiland waarin hij zelf de client en de server bouwde. Het probleem hiermee was dat het heel complex was en ik een plek moest gaan vinden om de server te hosten. Daarnaast was zijn video veroudert waardoor zijn uitleg geleeltelijk niet meer werkte. Toen kwam ik langs een tutorial van Rugbug Redfern waarin hij van een engine gebruikt genaamd Photon. Hiermee kon ik heel makkelijk een multiplayer spel maken. Je kon gratis 50 spelers tegelijkertijd in je server hebben en de performance was top. Nadat ik dit werkend had voegte ik speler beweging toe en heb ik met wat assets van de Unity Asset Store een map er omheen gemaken. Ten slotte voegde ik een TDM modus toe aan het spel enn toen was het af. Het spel kunt u hieronder downloaden."
                }
            ]
        }
    },
    {
        title: "Duurzaam product",
        textDate: "2021",
        date: new Date(2021, 1, 1),
        description: "Bij dit project waren de opdrachtgevers dpg, gemeente Gouda en gemeente Krimpenerwaard. Zij gaven ons de opdracht om een duurzaam en circulair product te ontwikkelen. Wij kozen voor een duurzame en circulaire etui. We moesten aan het einde van het project een fysiek of digitaal eindmodel hebben, Een marketing plan die ons product presenteerd, wat het kost, waar het gemaakt word en hoe we het gaan promoten. Ook hebben we de markt verkent en in kaart gebracht hoe het er op dit moment uit ziet.",
        mediaType: "img",
        media: "/Projects/Duurzaam/etui.jpg",
        projectInfo: {
            hideTitle: true,
            headerImage: "/Projects/Duurzaam/span.png",
            texts: [
                {
                    type: "imageText",
                    title: "Duurzame en circulaire etui",
                    image: "/Projects/Duurzaam/etui.jpg",
                    text: "Bij dit project waren de opdrachtgevers dpg, gemeente Gouda en gemeente Krimpenerwaard. Zij gaven ons de opdracht om een duurzaam en circulair product te ontwikkelen. Wij kozen voor een duurzame en circulaire etui. We moesten aan het einde van het project een fysiek of digitaal eindmodel hebben, Een marketing plan die ons product presenteerd, wat het kost, waar het gemaakt word en hoe we het gaan promoten. Ook hebben we de markt verkent en in kaart gebracht hoe het er op dit moment uit ziet."
                },
                {
                    type: "textImage",
                    title: "Mijn bijdrage aan dit project",
                    image: "/Projects/Me.svg",
                    text: "<ul> <li>Ik heb 30% van het marketing plan geschreven.</li> <li>Onze 5 3D prototypes heb ik in Tinkercad gemaakt.</li> <li>Onderzocht wie ons product zou willen kopen en waar we onze materialen vandaan zouden kunnen halen.</li> </ul><br>Ik heb bij dit project geleerd hoe je een marketing plan schrijft en hoe je een 3D model maakt. Ook heb ik geleerd hoe je een markt onderzoekt en hoe je een product moet promoten."
                }
            ]
        }
    },
    {
        title: "Energie uit water",
        textDate: "2020",
        date: new Date(2020, 1, 1),
        description: "Voor dit project gingen we onderzoeken hoe we energie konden opwekken zonder het milleu negatief te beïnvloeden. We hebben meerdere basis ontwerpen onderzocht en hun voor en nadelen geïndexeerd. Met deze informatie hebben we één ontwerp uitgekozen en verder uitgewerkt door middel van een 3D model. Na het digitaal uitwerken van het ontwerpen hebben we het in de echte wereld gemaakt. Na het uitbouwen van ons plan hebben kleine aanpassingen gedaan om het te verbeteren. Helaas konden we deze aanpassingen niet testen vanwege tijdsgebrek. Ten slotte hebben we een video presentatie gemaakt over ons eind ontwerp.",
        mediaType: "img",
        media: "/Projects/EnergieUitWater/Waterkracht-stuwdam.png",
        links: [
            {
                name: "Video",
                icon: "icons/yticon.svg",
                url: "https://www.youtube-nocookie.com/embed/8CbyJ-3atiA"
            }
        ],
        projectInfo: {
            headerImage: "/Projects/EnergieUitWater/Waterkracht-stuwdam.png",
            texts: [
                {
                    type: "videoText",
                    title: "Videopresentatie",
                    text: "Voor dit project gingen we onderzoeken hoe we energie konden opwekken zonder het milleu negatief te beïnvloeden. We hebben meerdere basis ontwerpen onderzocht en hun voor en nadelen geïndexeerd. Met deze informatie hebben we één ontwerp uitgekozen en verder uitgewerkt door middel van een 3D model. Na het digitaal uitwerken van het ontwerpen hebben we het in de echte wereld gemaakt. Na het uitbouwen van ons plan hebben kleine aanpassingen gedaan om het te verbeteren. Helaas konden we deze aanpassingen niet testen vanwege tijdsgebrek. Ten slotte hebben we een video presentatie gemaakt over ons eind ontwerp.<br><br>Ik heb bij dit project geleerd hoe we energie halen uit water.",
                    video: "https://www.youtube-nocookie.com/embed/8CbyJ-3atiA"
                }
            ]
        }
    },
    {
        title: "De Goudse Creatie",
        textDate: "2020",
        date: new Date(2020, 1, 1),
        description: "Voor dit project was de opdracht om een Gouds product te nemen en het te verbeteren door er een biologische versie van te maken. Wij hebben biologische stroopwafel ijs gekozen omdat het nog best onbekent is. We hebben het recept van Laurasbakery gebruikt. We hebben de biologische en niet biologische versie van het ijs gebakken en beoordeelt of er verschil was tussen de twee varianten. Hier hebben we vervolgens verslag van gelegd.",
        mediaType: "img",
        media: "/Projects/GoudseCreatie/Ijs.jpg",
        links: [
            {
                name: "Video",
                icon: "icons/yticon.svg",
                url: "https://www.youtube-nocookie.com/embed/4_tbO5xqmJs"
            }
        ],
        projectInfo: {
            headerImage: "/Projects/GoudseCreatie/stroopwafel.jpg",
            texts: [
                {
                    type: "videoText",
                    title: "Biologische stroopwafel ijs",
                    text: "Voor dit project was de opdracht om een gouds product te nemen en het te verbeteren door er een biologische versie van te maken. Wij hebben biologische stroopwafel ijs gekozen omdat het nog best onbekent is. We hebben het recept van Laurasbakery gebruikt. We hebben de biologische en niet biologische versie van het ijs gebakken en beoordeelt of er verschil was tussen de twee varianten. We hebben hier ook een verslag over gemaakt. Wat we over het algemeen zagen was dat de biologische versie minder smaak had. Dit konden we compenseren door er meer van de smaak toevoegende ingrediënten erbij te doen. <br>In deze video laten wij het procces zien van het maken van biologische stroopwafel ijs. Dit heb ik gemaakt in in Adobe Premiere Pro.<br><br>Mijn leerdoel voor dit project was om meer te leren hoe biologisch eten word gemaakt.",
                    video: "https://www.youtube-nocookie.com/embed/4_tbO5xqmJs"
                }
            ]
        }
    },
    {
        title: "Escape room",
        textDate: "2020",
        date: new Date(2020, 1, 1),
        description: "We hebben een escape room gebouwd met een mini computer erin verwerkt. Wij hebben voor onze escape room de Raspberry Pi gekozen. We hebben de Raspberry Pi gekozen omdat het de programeer taal python gebruik in plaats van Processing. De pi is ook veel uitgebreider dan een Arduino met maarliefst 38 pins.",
        mediaType: "img",
        media: "/Projects/EscapeRoom/EscapeRoom.webp",
        links: [
            {
                name: "Video",
                icon: "/Projects/EscapeRoom/key.png",
                url: "https://mardax.tech/old_projects/FlappyCode/"
            }
        ],
        projectInfo: {
            headerImage: "/Projects/EscapeRoom/Escape.jpeg",
            texts: [
                {
                    type: "imageText",
                    title: "De opdracht",
                    text: "We hebben een escape room gebouwd met een mini computer erin verwerkt. Wij hebben voor onze escape room de Raspberry Pi gekozen. We hebben de Raspberry Pi gekozen omdat het de programeer taal python gebruik in plaats van processing (arduino taal). De pi is ook veel uitgebreider dan een Arduino. Onze Raspberry pi had maar liefst 38 bruikbare pins die je kunt onder verdelen in 5 categorieën:<ul><li>General Purpose Input/Output(GPIO) pins: deze pins kan je aan of uitzetten.</li><li>Normale 3V pins: constante 3V pins.</li><li>Normale 6V pins: constante 6V pins.</li><li>Ground pins: Ground pins ook wel bekend als de min</li></ul>",
                    image: "/Projects/EscapeRoom/EscapeRoom.webp"
                },
                {
                    type: "textImage",
                    title: "Wat we gemaakt hebben",
                    text: "<ul><li>We hebben een deurbel gemaakt.</li> <li>Als je op deze deurbel klikt gaan de ledjes onder de voetstappen aan.</li> <li>Deze voetstappen je leiden naar een beeldscherm in een kippenhok.</li> <li>In het kippenhok zit een digitaal spel genaamd Flappy Code.</li> </ul><br>Ik heb bij dit project geleerd over electrische circuits en ",
                    image: "/Projects/EscapeRoom/Raspi.jpg"
                }
            ]
        }
    },
    {
        title: "Veilige fiets route",
        textDate: "2019",
        date: new Date(2019, 8, 1),
        description: "We kregen de opdracht om een fietsroute uit te stippelen en daar 3 gevaarlijke verkeers situaties te vinden en mogelijke oplossingen voor te bedenken. De opdrachtgevers van Veilig Verkeer Gouda kozen 1 knooppunt die veiliger en over het algemeen verbeterd kon worden. Het eindresultaat is een 3D ontwerp en een machete van de gekozen klooppunt en een powerpoint presentatie die we aan de opdrachtgevers hebben gepresenteerd.",
        mediaType: "img",
        media: "/Projects/VeiligeFietsRoute/3Dontwerp.png",
        projectInfo: {
            hideTitle: true,
            headerImage: "/Projects/VeiligeFietsRoute/vvn.png",
            texts: [
                {
                    type: "imageText",
                    title: "De opdracht",
                    text: "We kregen de opdracht om een fietsroute uit te stippelen en daar 3 gevaarlijke verkeers situaties te vinden en mogelijke oplossingen voor te bedenken. De opdrachtgever(s) van Veilig Verkeer Gouda kozen 1 knooppunt die veiliger en over het algemeen verbeterd kon worden. Het eindresultaat is een 3D ontwerp en een machete van de gekozen klooppunt en een powerpoint presentatie die we aan de opdrachtgever(s) hebben gepresenteerd. Het 3D ontwerp kunt u hiernaast zien.<br><br>Mijn leerdoel voor dit project was om meer te leren over 3D ontwerpen en hoe je wegen veilig maakt.",
                    image: "/Projects/VeiligeFietsRoute/3Dontwerp.png"
                },
                {
                    type: "textImage",
                    title: "Mijn bijdrage",
                    text: "<ul><li>Ik heb één fietsroute uitgestippeld en de helft van de gevaarlijke situaties met de mogelijke verbeteringen beschreven.</li><li>Een 3D model van de verkeers situatie gemaakt in Tinkercad.</li><li>De powerpoint gemaakt die we als afsluiting van het project aan de opdrachtgever(s) werd gepresenteerd.</li><li>En ik heb tenslotte ook de taakverdeling op me genomen.</li></ul>",
                    image: "/Projects/Me.svg"
                }
            ]
        }
    },
    {
        title: "Domino Day",
        textDate: "2019",
        date: new Date(2019, 1, 1),
        description: "Wij kregen de opdracht om een dominobaan ontwerpen voor Stichting Domino voor het jaarlijkse evenement: Domino Day! Dit was mijn aller eerste O&O project en ik heb veel geleerd over hoe je in een team samenwerkt.",
        mediaType: "img",
        media: "/Projects/Domino/DD.png",
        projectInfo: {
            headerImage: "/Projects/Domino/dominoday.webp",
            tagline: "Get ready for game day",
            texts: [
                {
                    type: "imageText",
                    title: "De opdracht",
                    text: "Wij kregen de opdracht om een dominobaan ontwerpen voor Stichting Domino voor het jaarlijkse evenement: <font style='color:red'>Domino Day!</font><br>Dit was mijn aller eerste O&O project en ik heb veel geleerd over hoe je in een team samenwerkt.<h2>Mijn bijdrage</h2><ul><li>Ik heb een digitaal ontwerp gemaakt van de dominobaan.</li><li>Ik heb geholpen bij het maken van de physieke dominobaan.</li><li>Ik heb onderzoek gedaan over het wat Domino Day precies is.</li></ul>",
                    image: "/Projects/Domino/DD.png",
                }
            ]
        }
    },
];

const introduction: Introduction = {
    title: "Introductie",
    icon: "icons/laptop.svg",
    name: "Martijn Vriesman",
    tag: "Webdeveloper",
    text: `
    Welkom op mijn portfolio!
    Mijn naam is [INSERTNAME] en ik heb <span class='excludeHover'>[INSERTTIME]</span> ervaring met software ontwikkeling.
    Momenteel zit ik in 5VWO op het <a href="https://www.antoniuscollegegouda.nl/"><span style="color: #00afd3;">Antoniuscollege</span></a>
    in <span class='excludeHover' style="color: #ffca27;">Gouda,&nbsp;&#x1F1F3;&#x1F1F1;</span> waar ik het N&T profiel volg.
    Naast softwareontwikkeling ben ik ook geinteresseerd in computer science en ik hoop in de toekomst deze studie te gaan doen.
    <br>Ik heb ervaring met het ontwikkelen van websites en applicaties met de volgende talen, frameworks en services:
    <br>[INSERTLANGUAGES].
    `,
    languages: [
        {
            name: "HTML",
            color: "#dd4b25",
            url: "https://www.w3schools.com/html/"
        },
        {
            name: "CSS",
            color: "#2449d8",
            url: "https://www.w3schools.com/css/"
        },
        {
            name: "Typescript",
            color: "#2e72bc",
            url: "https://www.typescriptlang.org/"
        },
        {
            name: "Svelte(kit)",
            color: "#f23b00",
            url: "https://svelte.dev/"
        },
        {
            name: "Python",
            color: "#f2cb40",
            url: "https://www.python.org/"
        },
        {
            name: "NodeJS",
            color: "#549453",
            url: "https://nodejs.org/"
        },
        {
            name: "C#",
            color: "#651471",
            url: "https://learn.microsoft.com/dotnet/csharp/"
        },
        {
            name: "Netlify",
            color: "#4ad0c6",
            url: "https://www.netlify.com/"
        },
        {
            name: "Firebase",
            color: "#eeb205",
            url: "https://firebase.google.com/"
        }
    ],
    startDate: 1472319999999
}

function getProjects(): Project[] {
    return projects;
}

function getIntroduction(): Introduction {
    let languages = "";
    introduction.languages.forEach(language => {
        languages = `${languages}${introduction.languages.indexOf(language) == introduction.languages.length - 1 ? " en " : introduction.languages.indexOf(language) != 0 ? ", " : ""}<a href='${language.url}'><span class='language' style='color: ${language.color}'>${language.name}</span></a>`;
    });
    introduction.text = introduction.text.replace("[INSERTLANGUAGES]", languages);
    return introduction;
}

export { getProjects, getIntroduction };