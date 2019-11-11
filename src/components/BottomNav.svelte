<script>
    export let segment;
    export let labels;
</script>

<style>
    #bottom-nav {
        background: var(--dark-background);
        color: var(--white-text);
        display: flex;
        font-size: 14px;
        justify-content: space-between;
        padding: 2rem 0;
    }
    .contact {
        text-align: right;
        margin-right: 40px;
    }
</style>

<div id="bottom-nav">
    <nav>
        <ul>
            <li>
                <a rel="prefetch" href="ontstoppen">{labels.ontstoppen}</a>
            </li>
            <li>
                <a rel="prefetch" href="cameradetectie">{labels.cameradetectie}</a>
            </li>
            <li>
                <a rel="prefetch" href="geurdetectie">{labels.geurdetectie}</a>
            </li>
            <li>
                <a rel="prefetch" href="adviesaankoopwoning">{labels.adviesaankoopwoning}</a>
            </li>
            <li>
                <a rel="prefetch" href="ontkalken">{labels.ontkalken}</a>
            </li>
            <li>
                <a rel="prefetch" href="herstellingen">{labels.herstellingen}</a>
            </li>
        </ul>
    </nav>
    <div class="contact">
        <ul>
            <li>{labels.telefoonnummerlabel}: {labels.telefoonnummer}</li>
            <li>{labels.emaillabel}: {labels.email}</li>
        </ul>
    </div>
</div>
