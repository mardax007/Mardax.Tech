import type { HomepageInfo, ProjectData, collectionData, map, array } from "./types";

import { navState } from "./state";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let nav = {
    id: "",
    index: 0
}

navState.subscribe((value) => {
    nav = value;
})

let projects: ProjectData[] = [];
let homepageInfos: HomepageInfo[] = [];

async function getData(): Promise<[HomepageInfo[], ProjectData[]]> {
    let language = navigator.language.split("-")[0];
    console.log(language);

    const supportedLanguages = ["en", "nl", "be"];

    switch (language) {
        case "be":
            language = "nl";
            break;
        default:
            if (!supportedLanguages.includes(language)) {
                language = "en";
            }
            break;
    }

    const response = await fetch("https://firestore.googleapis.com/v1/projects/portfoliomardaxtech/databases/(default)/documents/default?alt=json");
    const data = (await response.json()).documents;

    if (!data) {
        throw new Error("No data found");
    }

    const tempHomepageInfos = parseDocumentData(data[0]);
    const tempProjects = parseDocumentData(data[1]);

    projects = ((Object.keys(tempProjects).map(key => tempProjects[key])) as ProjectData[]).sort((a: ProjectData, b: ProjectData) => b.order - a.order);
    homepageInfos = (Object.keys(tempHomepageInfos).map(key => tempHomepageInfos[key]) as HomepageInfo[]).sort((a: HomepageInfo, b: HomepageInfo) => a.order - b.order)

    return [homepageInfos, projects];
}

function parseDocumentData(data: collectionData): map {
    const map: map = {};
    const fields = data.fields;

    for (const key in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, key)) {
            const value = fields[key];

            if ("stringValue" in value) {
                map[key] = value.stringValue;
            } else if ("integerValue" in value) {
                map[key] = parseInt(value.integerValue ?? "");
            } else if ("doubleValue" in value) {
                map[key] = parseFloat(value.doubleValue ?? "");
            } else if ("booleanValue" in value) {
                map[key] = value.booleanValue;
            } else if ("timestampValue" in value) {
                map[key] = new Date(value.timestampValue ?? "");
            } else if ("arrayValue" in value) {
                map[key] = parseArrayValue(value.arrayValue ?? {} as array);
            } else if ("mapValue" in value) {
                map[key] = parseDocumentData(value.mapValue ?? {} as collectionData);
            }
        }
    }

    return map;
}

function parseArrayValue(arrayValue: array): unknown[] {
    const arrayData: unknown[] = [];

    for (const value of arrayValue.values) {
        if (Object.prototype.hasOwnProperty.call(value, "stringValue")) {
            arrayData.push(value.stringValue);
        } else if (Object.prototype.hasOwnProperty.call(value, "integerValue")) {
            arrayData.push(parseInt(value.integerValue ?? ""));
        } else if (Object.prototype.hasOwnProperty.call(value, "doubleValue")) {
            arrayData.push(parseFloat(value.doubleValue ?? ""));
        } else if (Object.prototype.hasOwnProperty.call(value, "booleanValue")) {
            arrayData.push(value.booleanValue);
        } else if (Object.prototype.hasOwnProperty.call(value, "timestampValue")) {
            arrayData.push(new Date(value.timestampValue ?? ""));
        } else if (Object.prototype.hasOwnProperty.call(value, "arrayValue")) {
            arrayData.push(parseArrayValue(value.arrayValue ?? {} as array));
        } else if (Object.prototype.hasOwnProperty.call(value, "mapValue")) {
            arrayData.push(parseDocumentData(value.mapValue ?? {} as collectionData));
        }
    }

    return arrayData;
}

async function getProject(id: string): Promise<ProjectData> {
if (projects.length === 0) projects = (await getData())[1];
    return projects.find(project => project.id === id) ?? {} as ProjectData;
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

export { getProject, getSRC, getData }