

interface Project {
    id?: string;
    title: string;
    textDate: string;
    date: Date;
    description: string;
    mediaType: "yt" | "img";
    media: string;
    links: link[];
    projectInfo: ProjectInfo;
}

interface ProjectInfo {
    type?: string;
    texts: TextElement[];
    headerImage?: string;
    tagline?: string;
    hideTitle?: boolean;
}

interface TextElement {
    type: string;
    title: string;
    text: string;
    image?: string;
    video?: string;
}

interface link {
    name: string;
    icon: string;
    url: string;
}

export type { Project, ProjectInfo, TextElement, link };