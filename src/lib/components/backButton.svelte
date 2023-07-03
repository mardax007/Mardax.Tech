<script>
</script>

<a href="../">
    <img id="backButton" src="../arrow.svg" alt="Back arrow" />
</a>

<style lang="scss">
    @import '../../page-variables.scss';

    a {
        text-decoration: none;
        margin: 0;
        height: 100%;
        width: 100%;
    }

    #backButton {
        padding: 1rem;
        left: 5vw;

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #fff;

        position: fixed;

        box-shadow: $boxShadow;

        cursor: pointer;

        transition: all 200ms ease-out;

        &:hover {
            transform: scale(0.9);
        }
    }
</style>