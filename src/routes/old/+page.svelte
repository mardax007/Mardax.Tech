<script lang="ts">
	import "../../app.scss";
	

	import { getHomepageInfo } from "$lib/scripts/information";
	import { onMount } from "svelte";

	const homepageInfo = getHomepageInfo();

	let earthURL = homepageInfo.lowResEarthURL;


	onMount(() => {
		const earth = document.getElementById("earth");

		setTimeout(() => {
			// earthURL = homepageInfo.highResEarthURL;
		}, 2000);

		o
	});
</script>

<div id="wrapper">
	<section id="coverImage">
		<h1 id="title">{homepageInfo.title}</h1>
		<img id="codeBackground" src="./code.svg" alt={homepageInfo.codeAlt} />
		<img id="earth" src={earthURL} alt={homepageInfo.earthAlt} />
		<img id="earthMobile" src={earthURL} alt={homepageInfo.earthAlt} />
	</section>
	<section id="aboutMe">
		<h1>About Me</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
			quibusdam, voluptatum, quia, quod voluptatem voluptate quos
			asperiores, voluptatibus doloribus quas voluptates. Quisquam
			quibusdam, voluptatum, quia, quod voluptatem voluptate quos
			asperiores, voluptatibus doloribus quas voluptates. Quisquam
		</p>
	</section>
</div>

<style lang="scss">
	@import '$lib/variables.scss';

	#title {
		font-size: 5rem;
		font-weight: 700;
		color: $color-white;

		width: 100%;
		text-align: center;

		position: absolute;

		opacity: 0;
		animation: flyIn 2s 2.5s forwards;

		z-index: 1000;
		mix-blend-mode: luminosity;
		
		text-shadow: 0 0 1rem $color-black;
	}

	@media (max-width: $mobile) {
		@import './styling.mobile.scss';
	}

	@media (min-width: $mobile) and (max-width: $desktop) {
		@import './styling.tablet.scss';
	}

	@media (min-width: $desktop) {
		@import './styling.desktop.scss';
	}

	#aboutMe {
		color: $color-white;
		z-index: -1;
		position: relative;
		height: 20vh;
		padding-top: 5vh;

		h1 {
			
		}
	}
</style>