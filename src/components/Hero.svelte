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
                    afspraakOnder.style.bottom = '50px';
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
            background: var(--accent-primary);
            height: 80px;
            z-index: 0;
            transform: skew(0deg, -25deg) translateY(80px);
            transform-origin: left;
        }
        .askew-white {
            position: absolute;
            background: var(--white-background);
            height: 50vw;
            width: 120vw;
            z-index: 0;
            transform: skew(0deg, -25deg) translateY(80px);
            transform-origin: left;
        }
        #hero {
            padding-top: 3rem;
            padding-bottom: 80px;
        }
    }
    #hero {
        background: var(--light-background);
        width: 102vw;
        /* position: absolute; */
        margin-left: calc(-50vw + 26em);

        left: 0;
        right: 0;
    }

    @media (max-width: 56em) {
        #hero {
            margin-left: -32px;
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
        background: var(--accent-secondary);
        padding: 1rem 0.5rem;
        margin: 1rem;
        color: var(--white-text);
        cursor: pointer;
        /* border: 2px solid var(--accent-primary); */
        border-radius: var(--border-radius);
        /* transition: background-color 200ms ease-in; */
    }
    .afspraak:hover {
        background: var(--accent-primary);
        box-shadow: 0px 0px 8px 2px var(--accent-secondary);
    }
    /* img {
        height: 100%;
    } */
    .logo {
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
        display: flex;
    }

    .afspraakOnder {
        background: var(--accent-secondary);
        position: fixed;
        bottom: -100px;
        right: 50px;
        transition: bottom 200ms ease-in;
    }
</style>

<div id="hero">
    <div class="center">
        <div class="left">
            <div class="left-content">
                <img class="logo" src="logo.png" alt="logo Sobry ontstoppingsdienst" />
                <div class="afspraak" bind:this={afspraakHero}>
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
