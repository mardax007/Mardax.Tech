<script lang="ts">
	import state from '$lib/scripts/state'
	import { onMount } from 'svelte';

	let options: string[] = []

	onMount(() => {
		state.subscribe((x) => {
			const span = document.getElementById("tab-" + (x.categoryId + 1) + "-span")

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
		})
	})

    function response(spanId: number) {
		state.set({ categoryId: spanId - 1 });
    }
</script>

<div class="segmented-control">
	<input type="radio" name="tab" id="tab-1" on:click={() => {response(1)}} />
	<label for="tab-1" class="segmented-control__1"> <span id="tab-1-span">Work</span></label>

	<input type="radio" name="tab" id="tab-2" on:click={() => {response(2)}} />
	<label for="tab-2" class="segmented-control__2"> <span id="tab-2-span">Play</span></label>

	<div class="segmented-control__color" />
</div>

<style lang="scss">
    $catAmount: 2;
    $catWidth: 6.8rem;
    $catHeight: 4rem;
    $catMargin: 0.4rem;
    $catColorHeight: 3.2rem;
    $catColorWidth: 6rem;
    $borderRadius: 2rem;
    $borderShadow: 0 4px 3rem 0 rgba(0, 0, 0, 0.12);
    $tabTranform: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

	.segmented-control {
        user-select: none;
		grid-column: 3 / 4;
		grid-row: 1 / 2;
		width: $catAmount * $catWidth;
		height: $catHeight;
		box-shadow: $borderShadow;
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
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                transition: all 1s ease;
            }

            #tab-1-span {
                background-image: linear-gradient(117deg, #5d5d5f, #030303);
            }

            #tab-2-span {
                background-image: linear-gradient(117deg, #8080ff, #f85392);
            }
		}

		&__1,
		&__2 {
			width: $catWidth;
			font-size: 1.125rem;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			color: #5e5e63;
			transition: all 0.5s ease;
		}

		&__color {
			position: absolute;
			height: $catColorHeight;
			width: $catColorWidth;
			margin-left: $catMargin;
			border-radius: 2.2rem;
			box-shadow: 0 4px 1rem 0 rgba(0, 0, 0, 0.12);
			pointer-events: none;
		}
	}

	#tab-1:checked ~ .segmented-control__color {
		transform: translateX(0);
		transition: $tabTranform;
	}

	#tab-2:checked ~ .segmented-control__color {
		transform: translateX(6.8rem);
		transition: $tabTranform;
	}
</style>
