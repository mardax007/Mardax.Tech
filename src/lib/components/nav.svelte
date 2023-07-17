<script lang="ts">
	import { navState } from '$lib/scripts/state';
	import type { HomepageInfo, navData } from '$lib/scripts/types';
	import { onMount } from 'svelte';
	import DarkmodeSwitch from './darkmodeSwitch.svelte';
	import BackButton from './backButton.svelte';

	export let homepageInfos: HomepageInfo[];
	export let backButton: boolean = false;

	const style = {
		darkMode: false
	}

	let currentCategory = 0;
	let nav: navData;

	if (homepageInfos) {
		navState.subscribe((x) => {
			nav = x;
		});

		let defaultIndex = homepageInfos.findIndex((x: HomepageInfo) => x.default);
		defaultIndex = defaultIndex == -1 ? 0 : defaultIndex;
		navState.set({ index: defaultIndex, id: homepageInfos[defaultIndex].id });
	}

	onMount(async () => {
		style.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (homepageInfos) {
			navState.subscribe((x) => {
				currentCategory = x.index;
				const backgroundColor = document.getElementById('backgroundColor');
				const span = document.getElementById(`tab-${currentCategory}-span`);
				if (homepageInfos.length < 0 || !backgroundColor || !span) return;

				backgroundColor.style.transform = `translateX(${6.8 * currentCategory}rem)`;

				const spans = document.querySelectorAll('span');

				spans.forEach((span) => {
					span.classList.remove('selected');
					span.style.fontWeight = '500';
				});

				span.style.transform = 'scale(0.9)';
				span.style.transition = 'transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)';

				span.style.fontWeight = '500';

				setTimeout(() => {
					span.style.fontWeight = '600';
				}, 100);

				setTimeout(() => {
					span.style.fontWeight = '700';
					span.style.transform = 'scale(1)';
				}, 300);
			});

			const segmentedControl = document.querySelector('.segmented-control');
			if (!segmentedControl) return;

			segmentedControl.addEventListener('mousemove', (e) => {
				const distanceX = (e.clientX - segmentedControl.getBoundingClientRect().left - segmentedControl.clientWidth / 2);
				const distanceY = (e.clientY - segmentedControl.getBoundingClientRect().top - segmentedControl.clientHeight / 2);


				segmentedControl.animate(
					[
						{ transform: `translate(${distanceX / 20}px, ${distanceY / 10}px)` },
					],
					{
						duration: 500,
						easing: 'ease-in-out',
						fill: 'forwards',
					}
				);
			});

			segmentedControl.addEventListener('mouseleave', () => {
				segmentedControl.animate(
					[
						{ transform: `translate(0)` },
					],
					{
						duration: 500,
						easing: 'ease-in-out',
						fill: 'forwards',
					}
				);
			});
		}

		addEventListener("styleUpdated", () => {
			style.darkMode = document.documentElement.getAttribute("data-theme") == "dark";
		});
	});
</script>

<div id="navbar">
	<div id="leftItem">
		{#if backButton}
			<BackButton />
		{/if}
	</div>
	{#if homepageInfos}
		<div id="center">
			{#if homepageInfos.length > 0}
				<div class="segmented-control">
					{#each homepageInfos as option, id}
						<input
							checked={homepageInfos[id].default}
							type="radio"
							name="tab"
							id="tab-{id}"
							on:click={() => navState.set({ index: id, id: homepageInfos[id].id })}
						/>
						<label for="tab-{id}" class="segmented-control__{id} {style.darkMode ? "dark" : "light"}">
							<span
								id="tab-{id}-span"
								style="background-image: {homepageInfos[id].colors[style.darkMode ? 'dark' : 'light'].titleColor};"
							>{option.titleDisplay}</span>
						</label>
					{/each}
					<div id="backgroundColor" class={style.darkMode ? "dark" : ""} />
				</div>
			{/if}
		</div>
	{/if}
	<div id="rightItem">
		<DarkmodeSwitch />
	</div>
</div>

<style lang="scss">
	#navbar {
		height: 4rem;
		position: fixed;
		top: -8rem;
		will-change: transform, opacity;
		animation: moveInFromTop 0.65s 0.5s ease-in-out forwards;
		z-index: 100;

		display: flex;
		justify-content: space-between;
		align-items: center;

		left: 50%;
		transform: translateX(-50%);
		width: 90%;
		min-width: 330px;
		max-width: calc($maxWidth * 0.9);
	}

	.segmented-control {
		will-change: transform;
		background-color: var(--border-color);
		user-select: none;
		grid-column: 3 / 4;
		grid-row: 1 / 2;
		width: auto;
		height: 4rem;
		box-shadow: var(--box-shadow);
		border-radius: $borderRadius;
		display: flex;
		align-items: center;

		transition: all 0.1s ease;

		span {
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		input {
			display: none;
		}

		> input:checked + label {
			transition: all 0.5s ease;

			span {
				font-weight: 700;
				transition: all 1s ease;
			}
		}

		span {
			width: 6.8rem;
			font-size: 1.125rem;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			transition: all 0.5s ease;
			font-weight: 500;
		}

		#backgroundColor {
			position: absolute;
			height: 3.2rem;
			width: 6rem;
			margin-left: 0.4rem;
			border-radius: 2.2rem;
			box-shadow: 0 4px 1rem 0 rgba(0, 0, 0, 0.12);
			pointer-events: none;
			transition: transform 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);;
		}

		#backgroundColor.dark {
			box-shadow: 0 0 2rem 4px rgba(255, 255, 255, 0.12);
		}
	}

	@keyframes moveInFromTop {
        0% {
            top: -4rem;
            opacity: 0;
        }

        80% {
            top: 2.5rem;
        }

        100% {
            top: 2rem;
            opacity: 1;
        }
    }
</style>
