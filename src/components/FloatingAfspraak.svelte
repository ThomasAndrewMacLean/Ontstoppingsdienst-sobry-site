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
        position: absolute;
        left: -6px;
        bottom: -6px;
    }
    a {
        font-size: 2rem;
        font-family: GothicHeader, 'Playfair Display', serif;
        background: #344d9c;
        background: var(--accent-secondary);
        padding-left: 10px;
        padding-right: 15px;
        position: relative;
    }

    @media (max-width: 600px) {
        .afspraakOnder {
            bottom: 25vh;
        }
    }
</style>

<div class="afspraak afspraakOnder">
    <a onclick="return gtag_report_conversion('tel:0467005050');" href="tel:0467005050">
        <span>0467</span>
        <span>00</span>
        <span>50</span>
        <span>50</span>
        <img src="telefoon_blauw.png" alt="telefoonnummer" />
    </a>
</div>
