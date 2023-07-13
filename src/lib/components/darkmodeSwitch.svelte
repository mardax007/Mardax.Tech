<script lang="ts">
	import { styleState } from '$lib/scripts/state';
	import type { styleData } from '$lib/scripts/types';

	let style: styleData = {
		darkMode: false
	} as styleData;

	styleState.subscribe((x) => {
		style = x;
	});

	function toggleDarkMode() {
		const overlay = document.createElement("div");
		overlay.style.position = "fixed";
		overlay.style.top = "0";
		overlay.style.left = "0";
		overlay.style.width = "100vw";
		overlay.style.height = "100vh";
		overlay.style.backgroundColor = !style.darkMode ? "#090909" : "#f6f6f6";
		overlay.style.zIndex = "1000";
		overlay.style.opacity = "0";
		overlay.style.transition = "opacity 0.5s ease-in-out";
		document.body.appendChild(overlay);

		overlay.animate([
			{ opacity: 0 },
			{ opacity: 1 },
			{ opacity: 0 }
		], {
			duration: 1500,
			easing: "linear",
			fill: "forwards"
		})

		setTimeout(() => {
			localStorage.setItem("style", JSON.stringify({
				darkMode: !style.darkMode
			}));
			styleState.update((x) => {
				x.darkMode = !x.darkMode;
				return x;
			});
		}, 750);

		setTimeout(() => {
			overlay.remove();
		}, 1500);
	};
</script>

<div id="darkmode">
	<label>
		<input type="checkbox" on:click={toggleDarkMode} checked={style.darkMode} />
		<div class="planet" />
		<div class="elements">
			<svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
				<circle cx="250" cy="250" r="200" />
			</svg>
			<svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
				<circle cx="250" cy="250" r="200" />
			</svg>
			<svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
				<circle cx="250" cy="250" r="200" />
			</svg>
			<svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
				<circle cx="250" cy="250" r="200" />
			</svg>
			<svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
				<circle cx="250" cy="250" r="200" />
			</svg>
			<svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
				<circle cx="250" cy="250" r="200" />
			</svg>
			<svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
				<circle cx="250" cy="250" r="200" />
			</svg>
			<svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
				<circle cx="250" cy="250" r="200" />
			</svg>
		</div>
	</label>
</div>

<style lang="scss">
	$bg-planet-shadow: #828894;
	$bg-planet-lightshadow: #d7d7d820;

	:root {
		--bg-planet-bright: #f2c94c;
		--bg-color: #2c3144;
	}

	#darkmode {
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: background-color 400ms ease;
		z-index: 100;
	}

	label {
		cursor: pointer;
		padding: 1rem;
		position: relative;
		-webkit-tap-highlight-color: transparent;
	}

	input[type='checkbox'] {
		height: 0;
		width: 0;
		visibility: hidden;
		position: absolute;
	}

	.planet {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		overflow: hidden;
		background: radial-gradient(3.75em, 99%, transparent 100%);
		background-color: var(--bg-planet-bright);
		background-repeat: no-repeat;
		position: relative;
		will-change: background;
		transition: all 400ms ease;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		transform: translate3d(0, 0, 0);

		&::after {
			content: '';
			background-color: $bg-planet-shadow;
			width: 2rem;
			height: 2rem;
			position: absolute;
			border-radius: 50%;
			will-change: opacity, transform, background-color;
			opacity: 0;
			transform: translate(2em, -2em);
			transition: opacity 400ms ease, transform 400ms ease, background-color 400ms ease;
		}
	}

	.elements {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		transition: transform 400ms ease;

		svg {
			position: absolute;
			width: 7px;
			height: 7px;
			opacity: 1;
			transition: transform 400ms ease, opacity 200ms ease, width 200ms ease, height 200ms ease;

			circle {
				fill: var(--bg-planet-bright);
				transition: fill 400ms ease;
			}
		}

		svg:first-child {
			transform: translate(1.8em, 0.35em);
		}

		svg:nth-child(2) {
			transform: translate(2.8em, 0.7em);
		}

		svg:nth-child(3) {
			transform: translate(3.2em, 1.8em);
		}

		svg:nth-child(4) {
			transform: translate(2.8em, 2.8em);
		}

		svg:nth-child(5) {
			transform: translate(1.8em, 3.2em);
		}

		svg:nth-child(6) {
			transform: translate(0.7em, 2.8em);
		}

		svg:nth-child(7) {
			transform: translate(0.35em, 1.8em);
		}

		svg:nth-child(8) {
			transform: translate(0.7em, 0.7em);
		}
	}

	input:checked + .planet {
		--bg-planet-bright: #d7d7d8;

		&::after {
			opacity: 1;
			transform: translate(0.6em, -0.5em);
		}
	}

	input:checked ~ .elements {
		transform: rotate(180deg);
	}

	input:checked ~ .elements svg:first-child {
		transform: translate(2em, 1em);
		opacity: 0;
	}

	input:checked ~ .elements svg:nth-child(2) {
		transform: translate(3em, 1.5em);
		opacity: 0;
	}

	input:checked ~ .elements svg:nth-child(3) {
		transform: translate(3em, 2em);
		opacity: 0;
	}

	input:checked ~ .elements svg:nth-child(4) {
		transform: translate(3em, 2em);
		opacity: 0;
	}

	input:checked ~ .elements svg:nth-child(5) {
		transform: translate(1.9em, 2.6em);
		width: 0.3em;
		height: 0.3em;

		circle {
			fill: $bg-planet-lightshadow;
		}
	}

	input:checked ~ .elements svg:nth-child(6) {
		transform: translate(1.4em, 2.5em);
		width: 0.3em;
		height: 0.3em;

		circle {
			fill: $bg-planet-lightshadow;
		}
	}

	input:checked ~ .elements svg:nth-child(7) {
		transform: translate(1.1em, 1.6em);
		width: 0.7em;
		height: 0.7em;

		circle {
			fill: $bg-planet-lightshadow;
		}
	}

	input:checked ~ .elements svg:nth-child(8) {
		width: 0.45em;
		height: 0.45em;
		transform: translate(1.7em, 2.1em);

		circle {
			fill: $bg-planet-lightshadow;
		}
	}
</style>
