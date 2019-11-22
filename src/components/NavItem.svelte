<script>
    export let link;
    export let icon;
    export let name;
</script>

<style>
    img {
        height: 25px;
    }
    h4 {
        margin: 0;
        padding-left: 2px;

        /* border-left: 4px dotted var(--accent-secondary); */
        font-weight: 100;
        font-size: 14px;
        position: relative;
    }
    h4:hover {
        color: var(--darker-text);
    }
    h4::after {
        transition: 200ms background-color ease-in-out;
        content: '';
        position: absolute;
        /* background: var(--accent-primary); */
        width: 100%;
        height: 1px;
        left: 2px;
        bottom: 0;
    }
    h4:hover::after {
        background: var(--dark-text);
    }
    a {
        display: flex;
    }
</style>

<!-- markup (zero or more items) goes here -->
<div>
    <a rel="prefetch" href={link}>
        <img src={icon} alt={name} />
        <h4>{name}</h4>
    </a>
</div>
