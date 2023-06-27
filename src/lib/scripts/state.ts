import { writable } from "svelte/store";

const state = writable({
    categoryId: 0,
});

export default state;