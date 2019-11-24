<script>
    // your script goes here
    export let labels;
</script>

<style>
    .afspraak {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--dark-background);
        padding: 1rem 0.5rem;
        margin: 1rem;
        color: var(--white-text);
        cursor: pointer;
        /* border: 2px solid var(--accent-primary); */
        border-radius: var(--border-radius);
    }
    .afspraakOnder {
        background: var(--accent-secondary);
        position: fixed;
        bottom: var(--afspraak-height);
        right: -1rem;
        transition: bottom 200ms ease-in;
    }
  
</style>


<div class="afspraak afspraakOnder">
    <span>{labels.afspraak}</span>
    <span>{labels.telefoonnummer}</span>
</div>
