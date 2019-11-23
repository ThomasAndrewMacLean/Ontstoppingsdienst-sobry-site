<script>
    // your script goes here
</script>

<style>
    nav {
        background: var(--dark-background);
        margin: 0;
        font-size: 16px;
        padding: 1.5rem 0;
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
        background: var(--light-background);
        width: 0;
        height: 1px;
        left: 0;
        bottom: 0;
    }
    .nav-item:hover::after {
        width: 100%;
    }
</style>

<nav>
    <div class="wide-wrapper">
        <!-- <img src="logo-small-filled.png" alt="" /> -->
        <ul>
            <li>

                <a class="nav-item" href="/">Home</a>
            </li>
            <li>
                <a class="nav-item" href="/overmij">Over mij</a>
            </li>
            <li>
                <a class="nav-item" href="/prijzen">Prijzen</a>
            </li>
            <li>
                <a class="nav-item" href="/tips">Tips</a>
            </li>
            <li>
                <a class="nav-item" href="/contact">Contact</a>
            </li>
        </ul>
    </div>
</nav>
