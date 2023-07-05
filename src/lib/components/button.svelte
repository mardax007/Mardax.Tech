<script lang="ts">
    export let text: string = "Button";
    export let link: string = "";
</script>

<a href={link} id="whiteButton" class="follow">
    <h3 id="view">{text}</h3>
    <img src="/arrow.svg" alt="Arrow Right" />
</a>

<style lang="scss">
    @import '../../app.scss';

    #whiteButton {
        text-decoration: none;
        max-width: 375px;
        grid-area: whiteButton;
        display: flex;
        align-items: center;
        margin: 0;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;

        width: fit-content;

        background-color: #ffffff;

        border-radius: calc($borderRadius / 2);
        padding: 0.5rem 0.5rem;
        border: 2px solid #eceff1;

        transition: all 100ms ease-out;

        &:hover {
            background-color: #f6f6f6;
            border: 2px solid #eceff1;

            img {
                transform: translateX(-0.5rem);
            }
        }

        #view {
            background-image: linear-gradient(107deg, #626266, #1e1e22);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 500;
            margin: 0.5rem;
            margin-left: 1rem;
        }

        img {
            width: 1.5rem;
            height: 1.5rem;
            object-fit: cover;
            margin-right: 1rem;
            transition: all 300ms ease-out;
            rotate: 180deg;
        }
    }
</style>