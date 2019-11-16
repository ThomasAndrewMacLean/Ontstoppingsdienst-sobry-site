<script>
    import Nav from '../components/Nav.svelte';
    import MobileNav from '../components/MobileNav.svelte';
    import TopNav from '../components/TopNav.svelte';
    import Logo from '../components/Logo.svelte';
    import BottomNav from '../components/BottomNav.svelte';
    import labels from '../labels.js';
    export let segment;
</script>

<style>
    main {
        position: relative;
        max-width: 56em;
        background-color: var(--white-background);
        padding: 0 2em;
        margin: 0 auto;
        box-sizing: border-box;
        padding-top: 26px;
    }

    .sticky-nav {
        position: fixed;
        top: 0;
        z-index: 9;
        /* background: white; */
        left: 0;
        right: 0;
        display: grid;
        grid-template-columns: 75px auto;
        box-shadow: 0px -3px 7px 1px #00000040;
    }
    .logo {
        background: var(--light-background);
        grid-column: 1;
        grid-row: 1/3;
        height: 96px;
        display: flex;
        justify-content: center;
    }
    .second {
        grid-column: 2;
    }

    @media (max-width: 56em) {
        main {
            padding-top: 131px;
        }
        .logo {
            height: 131px;
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
            /* margin-top: 2em; */
        }
    }
</style>

<MobileNav {segment} {labels} />
<div class="sticky-nav">
    <div class="logo">
        <Logo />
    </div>
    <div class="second">
        <TopNav />
        <Nav {segment} {labels} />
    </div>
</div>

<main>
    <slot />
</main>
<BottomNav {labels} {segment} />
