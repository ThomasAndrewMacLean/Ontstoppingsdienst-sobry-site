<script>
    // your script goes here
    export let labels;
</script>

<style>
    .afspraak {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #333333;
        background: var(--dark-background);
        padding: 1rem 0.5rem;
        margin: 1rem;
        color: #ffffff;
        color: var(--white-text);
        cursor: pointer;
        /* border: 2px solid var(--accent-primary); */
        border-radius: var(--border-radius);
    }
    .afspraakOnder {
        background: #e43630;
        background: var(--accent-primary);
        position: fixed;
        bottom: 30vh;
        bottom: var(--afspraak-height);
        right: -1rem;
        transition: bottom 200ms ease-in;
    }
</style>

<div class="afspraak afspraakOnder">
    <span>{labels.telefoonnummer}</span>
</div>
