<script>
    let images = ['review1.jpg', 'review2.jpg', 'https://randomuser.me/api/portraits/lego/6.jpg'];

    let text = [
        'Onlangs deed ik beroep op firma Sobry betreffende een steeds terugkerende verstopping. De snelle en professionele aanpak van Sobry zorgde ervoor dat de oorzaak van mijn probleem grondig werd onderzocht en definitief van de baan is. Dank u',
        'Heel tevreden van snelle service, stipte uitvoering. Een tevreden klant!',
        'deserunt? simus omnis ipsa officia deleniti fugiat totam natus inventosimus omnis ipsa officia deleniti fugiat totam natus invento',
    ];
    let bollen = ['', '', ''];
    let selected = 0;

    setInterval(() => {
        selected = (selected + 1) % 3;
    }, 7500);
</script>

<style>
    #reviews {
        background: var(--light-background);
        width: 102vw;
        margin-left: calc(-50vw + 485px);
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
        /* height: 200px; */
        /* padding-top: 2rem; */
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
        border: 2px solid var(--dark-text);
        cursor: pointer;
    }
    .selected {
        background: var(--dark-text);
    }
    @media (max-width: 1000px) {
        #reviews {
            margin-left: -3%;
        }
        /* .review {
         
        } */
    }
</style>

<div id="reviews">
    <div class="review">
        <img src={images[selected]} alt="social" />

        <div class="quote">&rdquo;</div>
        <p>{text[selected]}</p>
        <div class="counter">

            {#each bollen as bol, index}
                <div class={selected === index ? 'bol selected' : 'bol'} on:click={() => (selected = index)} />
            {/each}

        </div>
    </div>
</div>
