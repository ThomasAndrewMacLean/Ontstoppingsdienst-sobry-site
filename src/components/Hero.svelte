<script>
    import MovieHero from './MovieHero.svelte';
    export let labels;
</script>

<style>
    @media (max-width: 800px) {
        .right {
            display: none !important;
        }
        #hero {
            overflow: hidden;
            padding-top: 1rem;
        }
    }
    #hero {
        background: #ffffff;
        width: 100vw;
        margin-left: calc(-50vw + 500px);

        left: 0;
        right: 0;
    }

    @media (max-width: 1000px) {
        #hero {
            margin-left: 0;
            width: 100%;
            overflow: hidden;
        }
    }
    .center {
        position: relative;
        margin: 0 auto;
        box-sizing: border-box;
        z-index: 1;
        display: flex;
        justify-content: space-between;
    }

    .logo {
        height: 250px;
        padding: 1rem;
    }
    .left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;
    }
    .left-content {
        display: grid;
        justify-content: center;
    }
    .right {
        width: 100%;
        display: flex;
    }

    @media (min-width: 800px) {
        .left {
            display: none;
        }
    }
    @media (max-width: 800px) {
        .wide-wrapper {
            width: 102%;
        }
    }
</style>

<div id="hero">
    <div class="wide-wrapper">
        <div class="center">
            <div class="left">
                <div class="left-content">
                    <img class="logo" src="logo_transparant.png" alt="logo Sobry ontstoppingsdienst" />
                </div>
            </div>
            <div class="right">
                <MovieHero />
            </div>
        </div>
    </div>

</div>
