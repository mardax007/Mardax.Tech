import { writable } from "svelte/store";

const navState = writable({
    categoryId: -1,
});

export { navState };