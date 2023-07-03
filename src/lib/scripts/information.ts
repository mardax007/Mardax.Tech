

function getHomepageInfo() {
    return {
        title: "Hi, I'm Martijn",
        location: "The Netherlands",
        categories: {
            school: {
                description: "I am currently enrolled in 5VWO at Antoniuscollege Gouda, following the N&T profile.",
                titleColor: "linear-gradient(90deg, #626266, #1e1e22, #626266)",
                locationColor: "linear-gradient(90deg, #626266, #1e1e22, #626266)",
                descriptionColor: "linear-gradient(90deg, #1e1e22, #1e1e22)",
                default: true,
                mapPin: "./MapPin.svg",
            },
            play: {
                description: "I like building things, and playing around with new technologies.",
                titleColor: "linear-gradient(90deg, #adf1e0, #8075ff 28%, #ff7171, #adf1e0 98%)",
                locationColor: "linear-gradient(90deg, #626266, #626266)",
                descriptionColor: "linear-gradient(90deg, #626266, #1e1e22, #626266)",
                mapPin: "./MapPin-colored.svg",
            }
        }
    }
}

function getProjectsInfo() {
    return [
        {
            name: "Metabole ziekte",
            date: "2023",
            tag: "Competatief onderzoek",
            description: `Voor nutrcia hebben wij een competitief onderzoek gedaan naar hun producten voor mensen met metabole ziekte.`,
            image: "./nutricia.svg",
            icon: "./research.svg",
            rounded: false,
            link: "./projects/metabole-ziekte",
            categories: ["school"]
        },
        {
            name: "Proliad",
            date: "2022",
            tag: "UX/UI Design",
            description: `Wij kregen de opdracht om een milleupagina voor proliad B.V. te ontwerpen en de ontwikkelen.`,
            image: "./blaadje.svg",
            icon: "./design.svg",
            link: "http://localhost:5173/projects/proliad",
            categories: ["school"]
        },
        {
            name: "Rollingsticks",
            date: "2022",
            tag: "Applicatie ontwikkeling",
            description: `Wij kregen de opdacht van muziek fabriek rollingsticks om een online muziek les applicatie te ontwikkelen. Het doel was om een app te maken die leerlingen kunnen gebruiken om bladmuziek af te spelen die hun docent hen heeft toegewezen.`,
            image: "./rollingsticks.png",
            icon: "./development.svg",
            link: "./projects/rollingsticks",
            categories: ["school"]
        },
        {
            name: "Tiny Cabin",
            date: "2021",
            tag: "UX/UI Design",
            description: `Redesigning job recommendations based on job seeker activity.`,
            image: "./Huiz.png",
            icon: "./architecture.svg",
            link: "https://www.google.com",
            categories: ["school"],
            disable: true
        },
    ]
}

export { getProjectsInfo, getHomepageInfo };