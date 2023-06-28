<script>
    let isClicked = false;
</script>

<section class="ham" on:click={() => isClicked = !isClicked} on:keydown={() => isClicked = !isClicked} class:clicked={isClicked}>
    <div class="burger">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
</section>

<style lang="scss">
    @import '../../app.scss';
    .ham {
        height: 4rem;
        width: 4rem;

        background-color: #fdfdfd;
        border-radius: 50%;

        position: absolute;
        right: 0;

        box-shadow: 0 4px 48px 0 rgba(0, 0, 0, 0.12);
    }

    .burger {
        height: 4rem;
        width: 4rem;
        transition: 0.3s;
        cursor: pointer;
    }

    .bar {
        height: 2px;
        width: 1.5rem;
        background-color: black;
        border-radius: 20px;
        transition: 0.4s;

        position: absolute;
        left: 1.25rem
    }

    .ham .bar {
        position: absolute;
    }

    .ham .bar:nth-of-type(1) {
        top: 22px;
        transition-delay: 0.3s, 0.1s;
        transition: top 0.3s ease 0.3s, transform 0.3s ease-out 0.1s;
        animation: mrotr 2s cubic-bezier(0.5, 0.2, 0.2, 1.01);
    }

    .ham .bar:nth-of-type(2) {
        top: 31px;
        transition-delay: 0.3s;
        transition: ease 0.3s 0.3s;
        animation: fade 2s cubic-bezier(0.5, 0.2, 0.2, 1.01);
    }

    .ham .bar:nth-of-type(3) {
        top: 40px;
        transition-delay: 0.3s, 0.1s;
        transition: top 0.3s ease 0.3s, transform 0.3s ease-out 0.1s;
        animation: mrotl 2s cubic-bezier(0.5, 0.2, 0.2, 1.01);
    }

    .ham.clicked .bar:nth-of-type(1) {
        top: 31px;
        transform: rotate(45deg);
        transition-delay: 0.1s, 0.5s;
        transition: top 0.3s ease 0.1s, transform 0.3s ease-out 0.5s;
    }

    .ham.clicked .bar:nth-of-type(2) {
        opacity: 0;
    }

    .ham.clicked .bar:nth-of-type(3) {
        top: 31px;
        transform: rotate(-45deg);
        transition-delay: 0.1s, 0.5s;
        transition: top 0.3s ease 0.1s, transform 0.3s ease-out 0.5s;
    }
</style>