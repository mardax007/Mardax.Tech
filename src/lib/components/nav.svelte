<script lang="ts">
	import { navState, styleState } from '$lib/scripts/state';
	import type { HomepageInfo, navData, styleData } from '$lib/scripts/types';
	import { onMount } from 'svelte';

	export let homepageInfos: HomepageInfo[] = [];

	let nav: navData;
	navState.subscribe((x) => {
		nav = x;
	});

	let style: styleData = {
		darkMode: false,
	} as styleData;

	styleState.subscribe((x) => {
		style = x;
	})

	let defaultIndex = homepageInfos.findIndex((x: HomepageInfo) => x.default);
	defaultIndex = defaultIndex == -1 ? 0 : defaultIndex;
	navState.set({ index: defaultIndex, id: homepageInfos[defaultIndex].id });

	let currentCategory = 0;

	onMount(async () => {
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
	});
</script>

<div id="navbar" class={style.darkMode ? "dark" : ""}>
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
				<label for="tab-{id}" class="segmented-control__{id}">
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

<style lang="scss">
	@import '../../app.scss';

	#navbar {
		height: 4rem;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5vw;

		position: fixed;
		top: -4rem;
		left: 50%;
		transform: translateX(-50%);
		will-change: transform, opacity;

		animation: moveInFromTop 0.65s 0.5s ease-in-out forwards;
		z-index: 100;
		max-width: calc($maxWidth * 0.75);

		.segmented-control {
			will-change: transform;
			background-color: $navbarBackgroundColor;
			user-select: none;
			grid-column: 3 / 4;
			grid-row: 1 / 2;
			width: auto;
			height: 4rem;
			box-shadow: $boxShadow;
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
				color: #5e5e63;
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
	}

	.dark {
		.segmented-control {
			background-color: $navbarBackgroundColorDark !important;
			box-shadow: 0 4px 1rem 0px #e4e4e440 !important;
			box-shadow: none;
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
