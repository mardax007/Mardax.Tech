import { doc, getDoc } from "firebase/firestore";
import { firestore } from "./firebase";

async function getProjects(max: number | undefined) {
    return ((await getDoc(doc(firestore, "projects", "school"))).data() ?? []).projects.slice(0, max == undefined ? 9999 : max);
}

async function getIntroduction() {
    const introduction = (await getDoc(doc(firestore, "introduction", "school"))).data()?.intro ?? {}
    let languages = "";
    introduction.languages.forEach((language: { url: string; color: string; name: string; }) => {
        languages = `${languages}${introduction.languages.indexOf(language) == introduction.languages.length - 1 ? " en " : introduction.languages.indexOf(language) != 0 ? ", " : ""}<a href='${language.url}'><span class='language' style='color: ${language.color}'>${language.name}</span></a>`;
    });
    introduction.text = introduction.text.replace("[INSERTLANGUAGES]", languages);
    return introduction;
}

export { getProjects, getIntroduction };