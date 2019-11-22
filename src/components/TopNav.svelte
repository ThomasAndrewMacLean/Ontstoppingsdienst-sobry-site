<script>
    // your script goes here
</script>

<style>
    nav {
        background: var(--dark-background);
        margin: 0;
        font-size: 16px;
        padding: 1.5rem;
        color: var(--white-text);
    }
    ul {
        margin: 0;
        display: flex;
        justify-content: space-around;
    }
    li {
        margin-right: 1rem;
    }
    a {
        border-bottom: 2px solid var(--dark-background);
        transition: border-color 200ms ease-in;
    }
    a:hover {
        border-bottom: 2px solid var(--light-background);
    }
</style>

<nav>
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/overmij">Over mij</a>
        </li>
        <li>
            <a href="/prijzen">Prijzen</a>
        </li>
        <li>
            <a href="/tips">Tips</a>
        </li>
        <li>
            <a href="/contact">Contact</a>
        </li>
    </ul>
</nav>
<!-- markup (zero or more items) goes here -->
