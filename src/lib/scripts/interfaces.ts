

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

export type { Project, link };