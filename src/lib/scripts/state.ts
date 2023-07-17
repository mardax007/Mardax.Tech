import { writable } from "svelte/store";

const navState = writable({
    index: -1,
    id: "",
});

export { navState };