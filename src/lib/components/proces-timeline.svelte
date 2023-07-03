<script lang="ts">
	import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "svelte-vertical-timeline";

    export let timeline: {
        time: string,
        title: string,
        description: string
    }[];
</script>

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

<style lang="scss">
    h3 {
        margin: 0;
    }

    .time {
        font-weight: 400;
        font-size: 1rem;
        line-height: 150%;
    }
</style>