<script>
    import ShareSocialMedia from './ShareSocialMedia.svelte';

    let images = ['review1.jpg', 'review2.jpg', 'review3.png'];

    let text = [
        'Onlangs deed ik beroep op firma Sobry betreffende een steeds terugkerende verstopping. De snelle en professionele aanpak van Sobry zorgde ervoor dat de oorzaak van mijn probleem grondig werd onderzocht en definitief van de baan is. Dank u',
        'Heel tevreden van snelle service, stipte uitvoering. Een tevreden klant!',
        'Bij de aankoop van ons nieuwe huis heeft Ontstoppingsdienst- Sobry ons super goed begeleid voor de renovatie van ons rioolnetwerk.Bedankt!!!',
    ];
    let bollen = ['', '', ''];
    let selected = 0;

    setInterval(() => {
        selected = (selected + 1) % 3;
    }, 7500);
</script>

<style>
    #reviews {
        background: #e9eaec;
        background: var(--white-background);
        width: 100vw;
        margin-left: calc(-50vw + 500px);
        margin-top: 2rem;
    }

    .review {
        /* background: lightcoral; */
        width: 75%;
        max-width: 750px;
        margin: auto;
        display: flex;
        height: 500px;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        padding: 4rem 0;
        position: relative;
    }
    .quote {
        position: absolute;
        font-size: 9rem;
        opacity: 0.4;
        color: #333333;
        color: var(--darker-text);
        font-family: auto;
        left: 0;
        transform: translateY(50px);
    }
    img {
        height: 75px;
        width: 75px;
        border-radius: 50%;
        /* margin-top: 2rem; */
    }
    p {
        font-size: 14px;
        width: 100%;
        text-align: center;
    }
    .counter {
        display: flex;
    }
    .bol {
        height: 8px;
        width: 8px;
        border-radius: 50%;
        margin: 3px;
        border: 2px solid #666666;
        border: 2px solid var(--dark-text);
        cursor: pointer;
    }
    .selected {
        background: #666666;
        background: var(--dark-text);
    }

    hr {
        border: none;
        height: 20px;
        width: 50%;
        height: 50px;
        margin-top: 0;
        position: relative;
        box-shadow: 0 20px 20px -20px #333;
        margin: -50px auto 10px;
    }
    hr::after {
        content: '';
        position: absolute;
        box-shadow: 0 20px 20px -20px #333;
    }
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        .quote {
            transform: translateY(-50px);
        }
    }

    @media (max-width: 1000px) {
        #reviews {
            margin-left: 0;
        }
        /* .review {
         
        } */
    }
    .show {
        display: block;
    }
    .hide {
        display: none;
    }
</style>

<ShareSocialMedia />
<div id="reviews">
    <hr />
    <div class="review">
        <img class={selected === 0 ? 'show' : 'hide'} src={images[0]} alt="social" />
        <img class={selected === 1 ? 'show' : 'hide'} src={images[1]} alt="social" />
        <img class={selected === 2 ? 'show' : 'hide'} src={images[2]} alt="social" />

        <div class="quote">&rdquo;</div>
        <p>{text[selected]}</p>
        <div class="counter">

            {#each bollen as bol, index}
                <div class={selected === index ? 'bol selected' : 'bol'} on:click={() => (selected = index)} />
            {/each}

        </div>
    </div>
</div>
