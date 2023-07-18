<script lang="ts">
	import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "svelte-vertical-timeline";
    import type { TimelineItem as TimelineItemType } from "$lib/scripts/types"

    export let timeline: TimelineItemType[];
    export let title: string = "Proces";
</script>

<div>
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
    h3 {
        margin: 0;
    }


    .centerTitle {
        width: fit-content;
        margin: 1rem auto;
        margin-top: 3rem;
        text-align: center;
        color: var(--text-color);
        font-size: 2rem;
    }

    .time {
        font-weight: 400;
        font-size: 1rem;
        line-height: 150%;
    }
</style>