<script lang="ts">
	import { navState } from '$lib/scripts/state';
	import { onMount } from 'svelte';

	export let homepageInfo: any;

	let nav: any;
	navState.subscribe((x) => {
		nav = x;
	})

	let options: { key: string, titleDisplay: string }[] = Object.keys(homepageInfo.categories)
		.map((key) => {
			return {
				key: key,
				titleDisplay: homepageInfo.categories[key].titleDisplay ?? key,
				order: homepageInfo.categories[key].order ?? 0
			}
		})
		.sort((a, b) => a.order - b.order);

	let loaded = false

	let currentCategory = 0

	onMount(async () => {
		navState.subscribe((x) => {
			x.categoryId = 0
			if(x.categoryId == -1) {
				const defaultCategory = Object.keys(homepageInfo.categories).find((key) => homepageInfo.categories[key].default)
				if(defaultCategory) x.categoryId = options.findIndex((option) => option.key == defaultCategory)
			}

			currentCategory = x.categoryId

			document.getElementById("backgroundColor")!.style.transform = "translateX(" + (6.8 * currentCategory) + "rem)"
			const span = document.getElementById("tab-" + (currentCategory + 1) + "-span")
			if (loaded) {
				const spans = document.querySelectorAll("span");
				spans.forEach((span) => {
					span.classList.remove("selected");
					span.style.fontWeight = "500";
				});

				span!.style.transform = "scale(0.9)";
				span!.style.transition = "transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)";

				span!.style.fontWeight = "500";

				setTimeout(() => {
					span!.style.fontWeight = "600";
				}, 100);

				setTimeout(() => {
					span!.style.fontWeight = "700";
					span!.style.transform = "scale(1)";
				}, 300);
			} else {
				loaded = true;
			}
		})
	})

    function response(spanId: number) {
		navState.set({ categoryId: spanId - 1 });
    }
</script>

{#if options.length > 0}
	<div class="segmented-control">
		{#each options as option, id}
			<input checked={homepageInfo.categories[option.key].default} type="radio" name="tab" id="tab-{id+1}" on:click={() => {response(id+1)}} />
			<label for="tab-{id+1}" class="segmented-control__{id+1}">
				<span id="tab-{id+1}-span" style="font-weight: {homepageInfo.categories[option.key].default ? 700 : 500}; background-image: {homepageInfo.categories[option.key].titleColor}; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">{option.titleDisplay.charAt(0).toUpperCase() + option.titleDisplay.substring(1)}</span>
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
