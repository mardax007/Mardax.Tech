<script lang="ts">
	import Project from "./Project.svelte";

    interface Project {
        id?: string;
        title: string;
        textDate: string;
        date: Date;
        description: string;
        image: string;
        links: link[];
    }

    interface link {
        name: string;
        icon: string;
        url: string;
    }

    export let projects: Project[] = [
        {
            title: "Rollingsticks",
            textDate: "January 1, 2021",
            date: new Date("January 1, 2021"),
            description: "Wij kregen de opdacht van muziek fabriek rollingsticks om een online muziek les applicatie te ontwikkelen. Het doel was om een app te maken die leerlingen kunnen gebruiken om bladmuziek af te spelen die hun docent hen heeft toegewezen. Dit project valt in de beta werelden: Hi-Tech & Sience, Digitaal Media & Entertainment en Ontwerp, Productie & Wereldhandel.",
            image: "https://p.mardax.tech/images/Muziekfabriek-Rollingsticks-favicon-wit1.png",
            links: [
                {
                    name: "GitHub",
                    icon: "https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg",
                    url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                }
            ]
        },
        {
    title: "Sample Project",
    textDate: "January 1, 2022",
    date: new Date(2022, 0, 1),
    description: "This is a sample project used for demonstration purposes.",
    image: "https://via.placeholder.com/150",
    links: [
        {
            name: "GitHub",
            icon: "https://cdn.iconscout.com/icon/free/png-512/github-153-675523.png",
            url: "https://github.com/sample-project"
        },
        {
            name: "Live Demo",
            icon: "https://image.flaticon.com/icons/svg/565/565580.svg",
            url: "https://demo.sample-project.com"
        }
    ]
},
{
    title: "My Awesome Project",
    textDate: "March 15, 2021",
    date: new Date(2021, 2, 15),
    description: "This project is an example of how to use the Project interface",
    image: "https://via.placeholder.com/150",
    links: [
        {
            name: "Project Website",
            icon: "https://image.flaticon.com/icons/svg/565/565580.svg",
            url: "https://myawesomeproject.com"
        },
        {
            name: "Source Code",
            icon: "https://image.flaticon.com/icons/svg/565/565580.svg",
            url: "https://github.com/myawesomeproject"
        }
    ]
}, 
{
    title: "Weather App",
    textDate: "December 5, 2020",
    date: new Date(2020,11, 5),
    description: "A simple weather app that shows current weather conditions and forecast for the next 5 days",
    image: "https://via.placeholder.com/150",
    links: [
        {
            name: "App Store",
            icon: "https://image.flaticon.com/icons/svg/565/565580.svg",
            url: "https://itunes.apple.com/us/app/weather-app/id1234567890"
        },
        {
            name: "Google Play",
            icon: "https://image.flaticon.com/icons/svg/565/565580.svg",
            url: "https://play.google.com/store/apps/details?id=com.weatherapp"
        }
    ]
}
    ];
</script>

<div id="projects">
    {#each projects as project}
        <Project {project} />
    {/each}
</div>

<style lang="scss">
</style>