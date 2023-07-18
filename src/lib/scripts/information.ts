import type { HomepageInfo, Project } from "./types";

import { navState } from "./state";

let nav = {
    id: "",
    index: 0
}

navState.subscribe((value) => {
    nav = value;
})

let projects: Project[] = [];

async function getHomepageInfo() {
    const response = await fetch("https://firestore.googleapis.com/v1/projects/portfoliomardaxtech/databases/(default)/documents/data/homepage?alt=json");
    const data = await response.json();

    const temp = parseDocumentData(data);
    const homepage = Object.keys(temp).map(key => temp[key]).sort((a, b) => a.order - b.order) as HomepageInfo[]


    const defaultPage = homepage.find(page => page.default);

    if (defaultPage) navState.set({ id: defaultPage.id, index: homepage.indexOf(defaultPage) });

    return homepage;
}

async function getProjectsInfo(): Promise<Project[]> {
    const response = await fetch("https://firestore.googleapis.com/v1/projects/portfoliomardaxtech/databases/(default)/documents/data/projects?alt=json");
    const data = parseDocumentData(await response.json());

    projects = Object.keys(data).map(key => data[key]);
    projects.sort((a, b) => b.order - a.order);

    return projects;
}

function parseDocumentData(data: any): any {
    const documentData: any = {};
    const fields = data.fields;

    for (const key in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, key)) {
            const value = fields[key];

            if ("stringValue" in value) {
                documentData[key] = value.stringValue;
            } else if ("integerValue" in value) {
                documentData[key] = parseInt(value.integerValue);
            } else if ("doubleValue" in value) {
                documentData[key] = parseFloat(value.doubleValue);
            } else if ("booleanValue" in value) {
                documentData[key] = value.booleanValue;
            } else if ("timestampValue" in value) {
                documentData[key] = new Date(value.timestampValue);
            } else if ("arrayValue" in value) {
                documentData[key] = parseArrayValue(value.arrayValue);
            } else if ("mapValue" in value) {
                documentData[key] = parseMapValue(value.mapValue);
            }
        }
    }

    return documentData;
}

function parseArrayValue(arrayValue: any): any[] {
    const arrayData: any[] = [];

    for (const value of arrayValue.values) {
        if (value.hasOwnProperty("stringValue")) {
            arrayData.push(value.stringValue);
        } else if (value.hasOwnProperty("integerValue")) {
            arrayData.push(parseInt(value.integerValue));
        } else if (value.hasOwnProperty("doubleValue")) {
            arrayData.push(parseFloat(value.doubleValue));
        } else if (value.hasOwnProperty("booleanValue")) {
            arrayData.push(value.booleanValue);
        } else if (value.hasOwnProperty("timestampValue")) {
            arrayData.push(new Date(value.timestampValue));
        } else if (value.hasOwnProperty("arrayValue")) {
            arrayData.push(parseArrayValue(value.arrayValue));
        } else if (value.hasOwnProperty("mapValue")) {
            arrayData.push(parseMapValue(value.mapValue));
        }
    }

    return arrayData;
}

function parseMapValue(mapValue: any): any {
    return parseDocumentData(mapValue);
}

async function getProject(id: string): Promise<Project> {
    if (projects.length === 0) projects = await getProjectsInfo()
    return projects.find(project => project.id === id) ?? {} as Project;
}

function getSRC(file = "") {
    if (file === "") {
        console.error("No file specified");
        return "";
    }
    if (file.startsWith("http")) return file;
    if (!file.startsWith("/")) file = "/" + file;
    return "https://firebasestorage.googleapis.com/v0/b/portfoliomardaxtech.appspot.com/o" + file + "?alt=media";
}

export { getProjectsInfo, getHomepageInfo, getProject, getSRC }