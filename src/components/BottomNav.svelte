<script>
    export let segment;
    export let labels;
</script>

<style>
    #bottom-nav {
        background: #333333;
        background: var(--dark-background);
        color: #ffffff;
        color: var(--white-text);
        font-size: 14px;
        width: 100vw;
    }

    li {
        padding: 0.1rem 0;
    }
    ul {
        padding: 0;
    }

    .social-media-icon {
        width: 40px;
        height: 40px;
        position: relative;
        z-index: 1;
    }
    .social-media-background {
        position: absolute;
        width: 35px;
        border-radius: 50%;
        transform: translate(-38px, 2px);
        height: 35px;
        background: white;
        z-index: 0;
    }

    .privacylink {
        text-decoration: underline;
    }

    ul {
        margin: 0;
        list-style: none;
    }
    .logo {
        display: flex;
    }
    .social-media {
        display: flex;
        flex-direction: column;
    }
    .blue-links {
        font-family: GothicHeader, 'Playfair Display', serif;
        text-transform: uppercase;
        font-weight: 100;
        font-size: 1.2rem;
        background: var(--accent-secondary);
        text-transform: uppercase;

        margin: 0;
        padding: 2rem 0;
    }
    .wide-wrapper {
        justify-content: space-between;
        display: flex;
        width: 95%;
        max-width: 1000px;
        margin: auto;
    }
    .ptb {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
    .logo-img {
        margin-right: 2rem;
        width: 90px;
    }
    @media (max-width: 800px) {
        .wide-wrapper {
            flex-direction: column;
            width: 100%;
            padding-left: 3rem;
        }
    }
</style>

<div id="bottom-nav">
    <div class="wide-wrapper ptb">
        <div class="logo">
            <img src="logo-border.png" alt="sobry logo" class="logo-img" />
            <ul>
                <li>Ontstoppingsdienst Sobry</li>
                <!-- <li>Hillarestraat 175, 9160 Lokeren</li> -->
                <li>{labels.telefoonnummer}</li>
                <li>info@ontstoppingsdienst-sobry.be</li>
                <li>BTW:0630.666.383</li>
                <li>
                    <a class="privacylink" rel="prefetch" href="privacybeleid">privacybeleid</a>

                </li>
            </ul>
        </div>
        <div class="social-media">
            <a class="social-link" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img class="social-media-icon" src="facebook_footer.png" alt="" />
                <span class="social-media-background" />
            </a>
            <a class="social-link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img class="social-media-icon" src="instagram_footer.png" alt="" />
                <span class="social-media-background" />
            </a>
            <a class="social-link" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img class="social-media-icon" src="youtube_footer.png" alt="" />
                <span class="social-media-background" />
            </a>
        </div>
    </div>

    <div class="blue-links">
        <ul class="wide-wrapper">
            <li>
                <a class="hoverball" rel="prefetch" href="ontstoppen">{labels.ontstoppen}</a>
            </li>
            <li>
                <a class="hoverball" rel="prefetch" href="cameradetectie">{labels.cameradetectie}</a>
            </li>
            <li>
                <a class="hoverball" rel="prefetch" href="geurdetectie">{labels.geurdetectie}</a>
            </li>
            <li>
                <a class="hoverball" rel="prefetch" href="ontkalken">{labels.ontkalken}</a>
            </li>
            <li>
                <a class="hoverball" rel="prefetch" href="adviesaankoopwoning">{labels.adviesaankoopwoning}</a>
            </li>
            <li>
                <a class="hoverball" rel="prefetch" href="herstellingen">{labels.herstellingen}</a>
            </li>
        </ul>
    </div>

</div>
