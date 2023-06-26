import { writable } from "svelte/store";

const state = writable({
    category: "work",
});

export default state;