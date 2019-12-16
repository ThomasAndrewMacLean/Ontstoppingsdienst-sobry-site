<script>
    import { onMount } from 'svelte';
    import MovieHero from './MovieHero.svelte';
    let afspraakHero;
    let afspraakOnder;
    export let labels;
    onMount(() => {
        const obsOptions = { rootMargin: '-200px 0px 0px 0px' };

        const afspraakObserver = new IntersectionObserver(function(entries, afspraakObserver) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    afspraakOnder.style.bottom = getComputedStyle(document.documentElement).getPropertyValue(
                        '--afspraak-height',
                    );
                } else {
                    afspraakOnder.style.bottom = '-100px';
                }
            });
        }, obsOptions);

        afspraakObserver.observe(afspraakHero);
    });
</script>

<style>
    @media (max-width: 800px) {
        .right {
            display: none !important;
        }

        .askew {
            background: #e43630;
            background: var(--accent-primary);
            height: 80px;
            z-index: 0;
            transform: skew(0deg, -25deg) translateY(80px);
            transform-origin: left;
        }
        .askew-white {
            position: absolute;
            background: #f8f8f8;
            background: var(--white-background);
            height: 50vw;
            width: 105%;
            z-index: 0;
            transform: skew(0deg, -25deg) translateY(80px);
            transform-origin: left;
        }
        #hero {
            overflow: hidden;
            padding-top: 3rem;
            padding-bottom: 80px;
        }
    }
    #hero {
        background: #ffffff;
        /* background: var(--white-background); */
        width: 100vw;
        /* position: absolute; */
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
        /* max-width: 56em; */
        /* padding: 2em; */
        margin: 0 auto;
        box-sizing: border-box;
        z-index: 1;
        display: flex;
        justify-content: space-between;
    }
    .afspraak {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #e43630;
        background: var(--accent-secondary);
        padding: 1rem 0.5rem;
        margin: 1rem;
        color: #ffffff;
        color: var(--white-text);
        cursor: pointer;
        /* border: 2px solid var(--accent-primary); */
        border-radius: var(--border-radius);
        /* transition: background-color 200ms ease-in; */
    }
    .afspraak:hover {
        background: #e43630;
        background: var(--accent-primary);
        box-shadow: 0px 0px 8px 2px #344d9c;
        box-shadow: 0px 0px 8px 2px var(--accent-secondary);
    }
    /* img {
        height: 100%;
    } */
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

    .afspraakOnder {
        background: #344d9c;
        background: var(--accent-secondary);
        position: fixed;
        bottom: -100px;
        right: -1rem;
        transition: bottom 200ms ease-in;
    }

    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        .afspraakOnder {
            bottom: 30vh;
        }
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
                    <div class="afspraak afspraak-hero" bind:this={afspraakHero}>
                        <span>{labels.afspraak}</span>
                        <span>{labels.telefoonnummer}</span>
                    </div>
                </div>

                <div class="afspraak afspraakOnder" bind:this={afspraakOnder}>
                    <span>{labels.afspraak}</span>
                    <span>{labels.telefoonnummer}</span>
                </div>

            </div>
            <div class="right">
                <MovieHero />
                <!-- <img src="house.png" alt="image of a houseand a plumber" /> -->
            </div>
        </div>
        <div class="askew" />
        <div class="askew-white" />
    </div>

</div>
