
<div id="more">
    <a href="/projects#3">
        <h1>Meer projecten</h1>
    </a>
</div>

<style lang="scss">
    @import '$lib/variables.scss';
    #more {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a {
        text-decoration: none;
    }

    #more h1 {
        font-size: 300%;
        font-weight: 600;
        color: $fontColor;
        margin: 0;
        margin-bottom: calc(2vh + 1vw);
        transition: 0.5s;
    }

    #more h1:hover {
        scale: 1.15;
    }

</style>