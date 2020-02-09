<script>
    import NavItem from './NavItem.svelte';
    export let segment;
    export let labels;
    let navMenu;
    let showMobileNav = false;
    const toggleNav = () => {
        showMobileNav = !showMobileNav;

        navMenu.style.left = showMobileNav ? '0px' : '-100%';
    };
</script>

<style>
    nav {
        position: fixed;
        top: 0;
        left: -100%;
        height: 100%;
        bottom: 0;
        overflow: scroll;
        z-index: 999;
        background: var(--white-background);
        transition: 300ms left cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    ul {
        list-style: none;
    }
    .hamburger-nav {
        margin: 15px;
        padding: 15px;
        display: inline-block;
        cursor: pointer;
        position: fixed;
        z-index: 999;
        background: var(--white-background);
        border-radius: 50%;
        border: 5px solid var(--dark-background);
        height: 65px;
    }
    .hamburger-nav > span {
        height: 4px;
        width: 25px;
        border-radius: 50px;
        background: var(--dark-background);
        display: block;
        position: relative;
        transform: translateY(10px);
    }
    .hamburger-nav > span.close {
        height: 0px;
    }
    .hamburger-nav > span.close::before {
        top: 0px;
        transform: rotate(-45deg);
    }
    .hamburger-nav > span.close::after {
        bottom: -4px;
        transform: rotate(45deg);
    }
    .hamburger-nav > span::before {
        content: '';
        height: 4px;
        width: 25px;
        border-radius: 50px;
        background: var(--dark-background);
        display: block;
        position: absolute;
        top: 8px;
    }
    .hamburger-nav > span:after {
        content: '';
        height: 4px;
        width: 25px;
        border-radius: 50px;
        background: var(--dark-background);
        display: block;
        position: absolute;
        bottom: 8px;
    }
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: -40px;
        z-index: 998;
        opacity: 0.7;
        background: var(--dark-background);
    }
    ul {
        padding: 0;
        margin: 0;
        margin-top: 85px;
    }
    li {
        padding: 0.5rem;
        padding-left: 2rem;
    }
    a {
        padding: 0.5rem;
        display: block;
    }
    .diensten-lijst {
        margin: 10px;
        list-style: circle;
    }
    .diensten-item {
        background: var(--light-background);
    }

    ul {
        list-style: none;
    }
</style>

{#if showMobileNav}
    <div class="backdrop" on:click={toggleNav} />
{/if}
<div class="hamburger-nav" on:click={toggleNav}>
    <span />
</div>
<nav bind:this={navMenu}>
    <div class="hamburger-nav" on:click={toggleNav}>
        <span class="close" />
    </div>
    <ul>
        <li>
            <a on:click={toggleNav} href="/">Home</a>
        </li>
        <li>
            <a on:click={toggleNav} href="/overmij">Over mij</a>
        </li>
        <li>
            <a on:click={toggleNav} href="/prijzen">Prijzen</a>
        </li>
        <li>
            <a on:click={toggleNav} href="/tips">Tips</a>
        </li>
        <li>
            <a on:click={toggleNav} href="/contact">Contact</a>
        </li>
        <li class="diensten-item">
            <a on:click={toggleNav} href="/">Diensten</a>

            <ul class="diensten-lijst">
                <li>
                    <a on:click={toggleNav} href="/ontstoppen">{labels.ontstoppen}</a>

                </li>
                <li>
                    <a on:click={toggleNav} href="/camera-inspectie">{labels.cameradetectie}</a>
                </li>
                <li>
                    <a on:click={toggleNav} href="/geurdetectie">{labels.geurdetectie}</a>
                </li>
                <li>
                    <a on:click={toggleNav} href="/ontkalken">{labels.ontkalken}</a>
                </li>
                <li>
                    <a on:click={toggleNav} href="/adviesaankoopwoning">{labels.adviesaankoopwoning}</a>
                </li>
                <li>
                    <a on:click={toggleNav} href="/herstellingen">{labels.herstellingen}</a>
                </li>
            </ul>
        </li>

    </ul>
</nav>
