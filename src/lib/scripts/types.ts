type Project = {
    id: string;
    order: number;
    name: string;
    date: string;
    tag: string;
    shortText: string;
    description: string;
    image: string;
    noImagePadding?: boolean;
    background?: string;
    icon: string;
    rounded?: boolean;
    disabled?: boolean;
    link: string;
    download?: string;
    buttonText?: string;
    categories: string[];
    tags?: Tags;
    timeline?: TimelineItem[];
    people?: People[];
    problemStatement?: Statement;
    conclusionStatement?: Statement;
    discussionStatement?: Statement;
    goalStatement?: Statement;
    techStack?: TechStack[];
};

type Tags = {
    roleTitle: string;
    role: string;
    responsibilityTitle: string;
    responsibilities: string[];
    learnTitle: string;
    learned: string;
    beta: string;
}

type People = {
    name: string;
    title: string;
    job: string;
    img: string;
    linkedin: string;
}

type TimelineItem = {
    title: string;
    time: string;
    description: string;
}

type Statement = {
    text: string;
    title: string;
}

type TechStack = {
    name: string;
    logo: string;
    description: string;
    link: string;
}

type HomepageInfo = {
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
}

export type { Project, Tags, TimelineItem, People, TechStack, HomepageInfo }