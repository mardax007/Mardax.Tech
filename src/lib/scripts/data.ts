import { doc, getDoc } from "firebase/firestore";
import { firestore } from "./firebase";

async function getProjects(max: number | undefined) {
    const local = localStorage.getItem("projects")
    if (local != null && JSON.parse(local).time + 1000 * 60 < new Date().getTime()) {
        return JSON.parse(localStorage.getItem("projects") ?? "[]").projects;
    } else {
        const projects = ((await getDoc(doc(firestore, "projects", "school"))).data() ?? []).projects.slice(0, max == undefined ? 9999 : max);
        localStorage.setItem("projects", JSON.stringify({"projects": projects, time: new Date().getTime()}));
        return projects;
    }
}

async function getIntroduction() {
    const local = localStorage.getItem("introduction")
    if (local != null && JSON.parse(local).time + 1000 * 60 < new Date().getTime()) {
        return JSON.parse(localStorage.getItem("introduction") ?? "{}").introduction;
    } else {
        const introduction = (await getDoc(doc(firestore, "introduction", "school"))).data()?.intro ?? {}
        let languages = "";
        introduction.languages.forEach((language: { url: string; color: string; name: string; }) => {
            languages = `${languages}${introduction.languages.indexOf(language) == introduction.languages.length - 1 ? " en " : introduction.languages.indexOf(language) != 0 ? " " : ""}<a href='${language.url}'><span class='language' style='color: ${language.color}'>${language.name}</span></a>`;
        });
        introduction.text = introduction.text.replace("[INSERTLANGUAGES]", languages);
        localStorage.setItem("introduction", JSON.stringify({"introduction": introduction, time: new Date().getTime()}));
        return introduction;
    }
}

export { getProjects, getIntroduction };