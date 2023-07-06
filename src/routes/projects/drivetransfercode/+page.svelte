<script lang="ts">
	import Button from "$lib/components/button.svelte";
	import Intro from "$lib/components/intro.svelte";
	import Statement from "$lib/components/statement.svelte";
	import { getProject } from "$lib/scripts/information";

</script>

{#await getProject("22DTC") then projectInfo}
	<div id="wrapper">
		<div id="header">
			<img src="/DTClogo.png" alt="DTC logo" />
		</div>
		<Intro info={projectInfo} />
		<Statement statement={projectInfo.goalStatement?.text ?? ""} statementTitle={projectInfo.goalStatement?.title ?? ""} />

		<Button text="Ga naar de app" link="https://drivetransfercode.web.app/" />
	</div>
{/await}


<style lang="scss">
    @import '../../../app.scss';

    #wrapper {
        width: 100vw;
		padding: 0 10vw;
		margin: 0 auto;
		max-width: 750px;
		min-width: 370px;

        #header {
			width: 100%;
			margin: 0 auto;
			text-align: center;
			padding: 0 0 2rem 0;

			img {
				width: 100%;
				max-width: 500px;
                margin-top: 2rem;
                margin-bottom: -1rem;
			}
		}

		@media (max-width: 730px) {
			padding: 0;
			max-width: 90vw;
		}
    }
</style>