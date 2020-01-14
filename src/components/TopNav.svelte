<script>
    export let segment;
    // setInterval(() => {
    //     console.log(segment);
    // }, 1000);
</script>

<style>
    nav {
        background: #333333;
        background: var(--dark-background);
        margin: 0;
        font-size: 16px;
        padding: 12.5px 0;
        color: #ffffff;
        color: var(--white-text);
    }

    ul {
        margin: 0;
        display: flex;
        justify-content: flex-end;
    }
    li {
        margin-left: 1rem;
    }
    a {
        display: block;
        position: relative;
    }
    /* a {
        border-bottom: 2px solid var(--dark-background);
        transition: border-color 200ms ease-in;
    }
    a:hover {
        border-bottom: 2px solid var(--light-background);
    } */
    .nav-item::after {
        transition: 200ms width ease-in-out;
        content: '';
        position: absolute;
        /* background: var(--accent-primary); */
        background: #e9eaec;
        background: var(--light-background);
        width: 0;
        height: 1px;
        left: 0;
        bottom: 0;
    }
    .nav-item:hover::after {
        width: 100%;
    }

    .active {
        cursor: default;
    }
    .nav-item.active::after {
        width: 100%;
    }

    ul {
        list-style: none;
    }

    .wide-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo-img {
        transform: scale(1.5);
        transform-origin: left;
    }
</style>

<nav>
    <div class="wide-wrapper">
        <!-- <img src="logo-small-filled.png" alt="" /> -->
        <a class="pointer flex" href="/">
            <img src="logo-header.png" alt="sobry logo" class="logo-img" />
        </a>
        <ul>
            <li>
                <a class={segment === undefined ? 'nav-item active' : 'nav-item'} href="/">Home</a>
            </li>
            <li>
                <a class={segment === 'overmij' ? 'nav-item active' : 'nav-item'} href="/overmij">Over mij</a>
            </li>
            <li>
                <a class={segment === 'prijzen' ? 'nav-item active' : 'nav-item'} href="/prijzen">Prijzen</a>
            </li>
            <li>
                <a class={segment === 'tips' ? 'nav-item active' : 'nav-item'} href="/tips">Tips</a>
            </li>
            <li>
                <a class={segment === 'contact' ? 'nav-item active' : 'nav-item'} href="/contact">Contact</a>
            </li>
        </ul>
    </div>
</nav>
