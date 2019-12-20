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

    .feather-facebook {
        background: #92a2c382;
        border-radius: 100%;
        padding: 3px;
        transition: background-color 200ms ease-in;
        cursor: pointer;
        margin-top: 5px;
        margin-right: 5px;
    }
    .feather-facebook:hover {
        background: #4267b2;
    }
    .feather-linkedin {
        background: #92a2c382;
        border-radius: 25%;
        padding: 3px;
        transition: background-color 200ms ease-in;
        cursor: pointer;
        margin-top: 5px;
    }
    .privacylink {
        text-decoration: underline;
    }

    .feather-linkedin:hover {
        background: #2673b1;
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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-facebook">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
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
