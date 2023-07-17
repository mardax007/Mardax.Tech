import type { HomepageInfo, Project } from "./types";

import { navState } from "./state";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";
import { getAnalytics  } from "firebase/analytics";

let nav = {
    id: "",
    index: 0
}

navState.subscribe((value) => {
    nav = value;
})

const firebaseConfig = {
    apiKey: "AIzaSyCqCP5q49myvdH9bIhRbRHanrGx3_Cqh6c",
    authDomain: "portfoliomardaxtech.firebaseapp.com",
    projectId: "portfoliomardaxtech",
    storageBucket: "portfoliomardaxtech.appspot.com",
    messagingSenderId: "676798927189",
    appId: "1:676798927189:web:56e154879a44e652339fdc",
    measurementId: "G-N9LDECY12C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let projects: Project[] = [];

function getFirebaseApp () {
    return app;
}

async function getHomepageInfo(): Promise<HomepageInfo[]> {
    // if (sessionStorage.getItem("homepage")) return JSON.parse(sessionStorage.getItem("homepage"));

    const temp = (await getDoc(doc(db, "data", "homepage"))).data();
    if (!temp) return [];

    const data = Object.keys(temp).map(key => temp[key]).sort((a, b) => a.order - b.order) as HomepageInfo[]

    if (nav.id === "") {
        const defaultPage = data.find(page => page.default);

        if (defaultPage) navState.set({ id: defaultPage.id, index: data.indexOf(defaultPage) });
    }

    // sessionStorage.setItem("homepage", JSON.stringify(data));

    return data
}

async function getProjectsInfo(noCache = false): Promise<Project[]> {
    // if (sessionStorage.getItem("projects") && !noCache) return JSON.parse(sessionStorage.getItem("projects") ?? JSON.stringify(getProjectsInfo(true)));

    const temp = (await getDoc(doc(db, "data", "projects"))).data() ?? {};
    projects = Object.keys(temp).map(key => temp[key]);
    projects.sort((a, b) => b.order - a.order);

    // sessionStorage.setItem("projects", JSON.stringify(projects));

    return projects;
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

export { getProjectsInfo, getHomepageInfo, getProject, getSRC, getFirebaseApp }