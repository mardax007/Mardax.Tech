import { writable } from "svelte/store";

const navState = writable({
    index: -1,
    id: "",
});

const styleState = writable({
    darkMode: false,
});

export { navState, styleState };