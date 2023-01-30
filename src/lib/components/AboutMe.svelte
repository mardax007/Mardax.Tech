<script lang="ts">
	import { getIntroduction } from "$lib/scripts/data";
	import loadImage from "$lib/scripts/loadImage";
    import type { DocumentData } from "@firebase/firestore";
    import Exp from "$lib/components/Exp.svelte";

    let intro: DocumentData = {startDate: 1472319999999};

    async function loadIntroduction() {
        intro = await getIntroduction();
        return intro;
    }

    // let exp = time[6]}y ${time[5]}m ${time[4]}d ${extend(time[3], 2)}:${extend(time[2], 2)}:${extend(time[1], 2)
</script>

{#await loadIntroduction() then intro}
    <div id="aboutMe">
        <div id="tag">
            {#await loadImage(intro.icon ?? "") then image}
                <img loading="lazy" src={image} alt="laptop">
            {/await}
            <h1>{@html intro.title}</h1>
        </div>
        <p id="introText">
            {@html (intro.text.replace("[INSERTNAME]", `<span>${intro.name}</span>`).replace("[INSERTSCHOOL]", `<a href="${intro.schoolInfo.ul}"><span style="color: ${intro.schoolInfo.color};">${intro.schoolInfo.name}</span></a>`).replace("[INSERTSCHOOLYEAR]", `<span class='excludeHover'>${intro.schoolInfo.yearName}</span>`).replace("[INSERTLOCATION]", `<span class='excludeHover' style="color: ${intro.schoolInfo.locationColor};">${intro.schoolInfo.location}</span>`).replace("[INSERTSTUDIE]", `<span class='excludeHover'>${intro.schoolInfo.studie}</span>`)).split("[INSERTTIME]")[0]}
            <Exp startDate={intro.startDate} />
            {@html (intro.text.replace("[INSERTNAME]", `<span>${intro.name}</span>`).replace("[INSERTSCHOOL]", `<a href="${intro.schoolInfo.ul}"><span style="color: ${intro.schoolInfo.color};">${intro.schoolInfo.name}</span></a>`).replace("[INSERTSCHOOLYEAR]", `<span class='excludeHover'>${intro.schoolInfo.yearName}</span>`).replace("[INSERTLOCATION]", `<span class='excludeHover' style="color: ${intro.schoolInfo.locationColor};">${intro.schoolInfo.location}</span>`).replace("[INSERTSTUDIE]", `<span class='excludeHover'>${intro.schoolInfo.studie}</span>`)).split("[INSERTTIME]")[1]}
        </p>
    </div>
{/await}