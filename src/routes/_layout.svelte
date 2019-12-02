<script>
    import Nav from '../components/Nav.svelte';
    import Acties from '../components/Acties.svelte';
    import MobileNav from '../components/MobileNav.svelte';
    import TopNav from '../components/TopNav.svelte';
    import Logo from '../components/Logo.svelte';
    import BottomNav from '../components/BottomNav.svelte';
    import labels from '../labels.js';
    export let segment;
</script>

<style>
    main {
        display: block;

        position: relative;
        width: 100%;

        max-width: 1000px;
        background: #f8f8f8;
        background-color: var(--white-background);
        padding: 0;
        margin: 0 auto;
        box-sizing: border-box;
        padding-top: 127px;
    }

    .sticky-nav {
        position: fixed;
        top: 0;
        z-index: 1000;
        width: 100vw;
        left: 0;
        right: 0;
        /* display: grid; */
        grid-template-columns: 75px auto;
        box-shadow: 0px -3px 7px 1px #00000040;
    }

    /* at 900px we put top nav in two rows */
    @media (max-width: 900px) {
        main {
            padding-top: 172px;
        }

        .sticky-nav {
            grid-template-columns: 105px auto;
        }
    }
    @media (max-width: 800px) {
        .sticky-nav {
            display: none !important;
        }
        main {
            padding-top: 0em;
            overflow: hidden;
            /* margin-top: 2em; */
        }
    }
</style>

<MobileNav {segment} {labels} />
<div class="sticky-nav">
    <TopNav {segment} />
    <Nav {segment} {labels} />
</div>

<main>
    <slot />
</main>
<Acties />
<BottomNav {labels} {segment} />
