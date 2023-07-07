<script lang="ts">
	import { navState } from '$lib/scripts/state';
	import type { HomepageInfo, navData } from '$lib/scripts/types';
	import { onMount } from 'svelte';

	export let homepageInfos: HomepageInfo[] = [];

	let nav: navData;
	navState.subscribe((x) => {
		nav = x;
	});

	let defaultIndex = homepageInfos.findIndex((x: HomepageInfo) => x.default);
	defaultIndex = (defaultIndex == -1) ? 0 : defaultIndex;
	navState.set({ index: defaultIndex, id: homepageInfos[defaultIndex].id })

	let loaded = false

	let currentCategory = 0

	onMount(async () => {
		navState.subscribe((x) => {
			currentCategory = x.index
			const backgroundColor = document.getElementById("backgroundColor")
			const span = document.getElementById(`tab-${currentCategory}-span`)
			if (homepageInfos.length < 0 || !backgroundColor || !span) return

			backgroundColor.style.transform = `translateX(${6.8 * currentCategory}rem)`

			if (!loaded) {
				loaded = true;
				return
			}

			const spans = document.querySelectorAll("span") ?? [];

			spans.forEach((span) => {
				span.classList.remove("selected");
				span.style.fontWeight = "500";
			});

			span.style.transform = "scale(0.9)";
			span.style.transition = "transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)";

			span.style.fontWeight = "500";

			setTimeout(() => {
				span.style.fontWeight = "600";
			}, 100);

			setTimeout(() => {
				span.style.fontWeight = "700";
				span.style.transform = "scale(1)";
			}, 300);
		})
	})

    function response(spanId: number) {
		navState.set({ index: spanId, id: homepageInfos[spanId].id });
    }
</script>

{#if homepageInfos.length > 0}
	<div class="segmented-control">
		{#each homepageInfos as option, id}
			<input checked={homepageInfos[id]?.default} type="radio" name="tab" id="tab-{id}" on:click={() => {response(id)}} />
			<label for="tab-{id}" class="segmented-control__{id}">
				<span
					id="tab-{id}-span"
					style="font-weight: {homepageInfos[id]?.default ? 700 : 500};
					background-image: {homepageInfos[id]?.titleColor};
					-webkit-background-clip: text;
					background-clip: text;
					-webkit-text-fill-color: transparent;">
					{option.titleDisplay.charAt(0).toUpperCase() + option.titleDisplay.substring(1)}
				</span>
			</label>
		{/each}
		<div id="backgroundColor" />
	</div>
{/if}

<style lang="scss">
	@import '../../app.scss';

	.segmented-control {
		background-color: $navbarBackgroundColor;
        user-select: none;
		grid-column: 3 / 4;
		grid-row: 1 / 2;
		width: auto;
		height: $catHeight;
		box-shadow: $boxShadow;
		border-radius: $borderRadius;
		display: flex;
		align-items: center;

		input {
			display: none;
		}

		> input:checked + label {
			transition: all 0.5s ease;
			font-weight: 700;

            span {
                transition: all 1s ease;
            }
		}

		span {
			width: $catWidth;
			font-size: 1.125rem;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			color: #5e5e63;
			transition: all 0.5s ease;
			font-weight: 500;
		}

		#backgroundColor {
			position: absolute;
			height: $catColorHeight;
			width: $catColorWidth;
			margin-left: $catMargin;
			border-radius: 2.2rem;
			box-shadow: 0 4px 1rem 0 rgba(0, 0, 0, 0.12);
			pointer-events: none;
			transition: $tabTranform;
		}
	}
</style>