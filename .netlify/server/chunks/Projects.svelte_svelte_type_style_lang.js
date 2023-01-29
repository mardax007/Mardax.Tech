import { getDoc, doc } from "firebase/firestore";
import { f as firestore } from "./loadImage.js";
async function getProjects(max) {
  return ((await getDoc(doc(firestore, "projects", "school"))).data() ?? []).projects.slice(0, max == void 0 ? 9999 : max);
}
async function getIntroduction() {
  const introduction = (await getDoc(doc(firestore, "introduction", "school"))).data()?.intro ?? {};
  let languages = "";
  introduction.languages.forEach((language) => {
    languages = `${languages}${introduction.languages.indexOf(language) == introduction.languages.length - 1 ? " en " : introduction.languages.indexOf(language) != 0 ? ", " : ""}<a href='${language.url}'><span class='language' style='color: ${language.color}'>${language.name}</span></a>`;
  });
  introduction.text = introduction.text.replace("[INSERTLANGUAGES]", languages);
  return introduction;
}
const ProjectItem_svelte_svelte_type_style_lang = "";
const Projects_svelte_svelte_type_style_lang = "";
export {
  getProjects as a,
  getIntroduction as g
};
