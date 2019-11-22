<script>
    export let segment;
    export let labels;
</script>

<style>
    #bottom-nav {
        background: var(--dark-background);
        color: var(--white-text, red);
        display: flex;
        font-size: 14px;
        justify-content: space-between;
        padding: 3rem 0 4rem 0;
        width: 101vw;
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
        /* margin-right: 40px; */
    }
    li {
        padding: 0.1rem 0;
    }
    ul {
        padding: 0;
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
    .feather-facebook {
        background: #92a2c382;
        border-radius: 100%;
        padding: 3px;
        transition: background-color 200ms ease-in;
    }
    .feather-facebook:hover {
        background: #4267b2;
    }
    .feather-linkedin {
        background: #92a2c382;
        border-radius: 25%;
        padding: 3px;
        transition: background-color 200ms ease-in;
    }
    .feather-linkedin:hover {
        background: #2673b1;
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
                <li>
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
                </li>
                <li>
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
                </li>
            </ul>
        </div>
    </div>
</div>
