import { writable } from "svelte/store";
import { getHomepageInfo } from "./information";

const homepageInfo = getHomepageInfo();

const navState = writable({
    categoryId: Object.values(homepageInfo.categories).findIndex(category => category.default) ?? 0,
});

const homepageInfoState = writable(homepageInfo);

export { navState, homepageInfoState };