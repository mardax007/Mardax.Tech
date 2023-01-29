<script lang="ts">
    import "../app.scss"
</script>

<div class="overlay-black" />
<slot />

<style lang="scss">
    .overlay-black {
        animation: fadeInAnimation ease 3s;
    }

    @keyframes fadeInAnimation {
        0% {
            opacity: 1;
        }

        20% {
            opacity: 1;
            z-index: 99;
        }

        80% {
            z-index: -1;
        }

        100% {
            opacity: 0;
            z-index: -1;
        }
    }
</style>