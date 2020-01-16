<script>
    // your script goes here
    export let labels;
</script>

<style>
    .afspraak {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
        color: #ffffff;
        color: var(--white-text);
        cursor: pointer;
        /* border: 2px solid var(--accent-primary); */
        border-radius: var(--border-radius);
    }
    .afspraakOnder {
        position: fixed;
        bottom: 35vh;
        bottom: var(--afspraak-height);
        right: -1rem;
        transition: bottom 200ms ease-in;
    }
    img {
        transform: translateX(10px);
    }

    @media (max-width: 600px) {
        .afspraakOnder {
            bottom: 25vh;
        }
    }
</style>

<div class="afspraak afspraakOnder">
    <a href="tel:0467005050">
        <img src="telefoonnummer.png" alt="telefoonnummer" />
    </a>
</div>
