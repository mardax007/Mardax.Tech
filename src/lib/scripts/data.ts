import { doc, getDoc } from "firebase/firestore";
import { firestore } from "./firebase";

async function getProjects(force = false, where = "default", max?: number) {
    const local = localStorage.getItem("projects/" + where)
    if (local == null || JSON.parse(local).time + 1000 * 60 < new Date().getTime() || force) {
        const projects = ((await getDoc(doc(firestore, "projects", where))).data() ?? []).projects.slice(0, max == undefined ? 9999 : max).sort((a,b) => b.date.seconds - a.date.seconds);

        localStorage.setItem("projects/" + where, JSON.stringify({"projects": projects, time: new Date().getTime()}));
        return projects.filter((project: { hidden: boolean; }) => project.hidden != true);
    } else {
        const projects = JSON.parse(localStorage.getItem("projects/" + where) ?? "[]").projects.sort((a,b) => b.date.seconds - a.date.seconds);
        return projects.filter((project: { hidden: boolean; }) => project.hidden != true);
    }
}

async function getIntroduction(where = "default") {
    const local = localStorage.getItem("introduction/" + where)
    if (local != null && JSON.parse(local).time + 1000 * 60 < new Date().getTime()) {
        return JSON.parse(localStorage.getItem("introduction/" + where) ?? "{}").introduction;
    } else {
        const introduction = (await getDoc(doc(firestore, "introduction", where))).data()?.intro ?? {}

        let languages = "";
        introduction.languages.forEach((language: { url: string; color: string; name: string; }) => {
            languages = `${languages}${introduction.languages.indexOf(language) == introduction.languages.length - 1 ? introduction.connectionWord ?? " en " : " "}<a href='${language.url}'><span class='language' style='color: ${language.color}'>${language.name}</span></a>`;
        });
        introduction.text = introduction.text.replace("[INSERTLANGUAGES]", languages);
        localStorage.setItem("introduction/" + where, JSON.stringify({"introduction": introduction, time: new Date().getTime()}));
        return introduction;
    }
}

export { getProjects, getIntroduction };