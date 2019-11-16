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
        padding: 3rem 0 4rem 0;
    }
    .center {
        width: 80%;
        max-width: 1000px;
        display: flex;
        justify-content: space-between;
        margin: auto;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--white-background);
    }
    .contact {
        text-align: right;
        margin-right: 40px;
    }
    @media (max-width: 800px) {
        .center {
            flex-direction: column;
        }
        .contact {
            text-align: left;
            margin-right: 0;
        }
    }
</style>

<div id="bottom-nav">
    <div class="center">
        <div>
            <ul>
                <li>
                    <a rel="prefetch" href="ontstoppen">{labels.ontstoppen}</a>
                </li>
                <li>
                    <a rel="prefetch" href="ontkalken">{labels.ontkalken}</a>
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
                    <a rel="prefetch" href="herstellingen">{labels.herstellingen}</a>
                </li>
            </ul>
        </div>
        <div class="contact">
            <ul>
                <li>{labels.telefoonnummerlabel}: {labels.telefoonnummer}</li>
                <li>{labels.emaillabel}: {labels.email}</li>
            </ul>
        </div>
    </div>
</div>
