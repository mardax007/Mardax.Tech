<script lang="ts">
	import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "svelte-vertical-timeline";
    import type { TimelineItem as TimelineItemType, styleData } from "$lib/scripts/types"
	import { styleState } from "$lib/scripts/state";

    export let timeline: TimelineItemType[];
    export let title: string = "Proces";

    let style: styleData = {
		darkMode: false,
	} as styleData;

	styleState.subscribe((x) => {
		style = x;
	})
</script>

<div class={style.darkMode ? "dark" : "light"}>
    <h1 class="centerTitle">{title}</h1>
    {#if timeline}
        <Timeline position="alternate">
            {#each timeline as item, i}
                <TimelineItem>
                    <TimelineOppositeContent slot="opposite-content">
                        <h3 class="time">{item.time}</h3>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        {#if i < timeline.length - 1}
                            <TimelineConnector />
                        {/if}
                    </TimelineSeparator>
                    <TimelineContent>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </TimelineContent>
                </TimelineItem>
            {/each}
        </Timeline>
    {/if}
</div>

<style lang="scss">
    @import '../../app.scss';

    .dark p, .dark h3, .dark h1 {
        color: $textColor !important;
    }

    h3 {
        margin: 0;
    }


    .centerTitle {
        width: fit-content;
        margin: 1rem auto;
        margin-top: 3rem;
        text-align: center;
        color: invert($color: $textColor);
        font-size: 2rem;
    }

    .time {
        font-weight: 400;
        font-size: 1rem;
        line-height: 150%;
    }
</style>