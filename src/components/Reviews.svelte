<script>
    let images = [
        'https://randomuser.me/api/portraits/men/3.jpg',
        'https://randomuser.me/api/portraits/women/68.jpg',
        'https://randomuser.me/api/portraits/lego/6.jpg',
    ];

    let text = [
        '  Lorem ipsum dolor, sit amet consectetur adipisicing elit.simus omnis ipsa officia deleniti fugiat totam natus invento Asperiores autem sit recusandae ipsam delectus',
        'neque at veniam, voluptates earum expedita possimus omnis ipsa officia deleniti fugiat totam natus inventore',
        'deserunt? simus omnis ipsa officia deleniti fugiat totam natus inventosimus omnis ipsa officia deleniti fugiat totam natus invento',
    ];
    let bollen = ['', '', ''];
    let selected = 0;

    setInterval(() => {
        selected = (selected + 1) % 3;
    }, 5000);
</script>

<style>
    #reviews {
        background: var(--light-background);
        width: 100vw;
        /* position: absolute; */
        margin-left: calc(-50vw + 26em);
        margin-top: 2rem;
        /* left: 0;
    right: 0; */
    }

    .review {
        /* background: lightcoral; */
        width: 90%;
        max-width: 350px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 2rem;
        position: relative;
    }
    .quote {
        position: absolute;
        font-size: 9rem;
        color: var(--darker-text);
        font-family: auto;
        left: 0;
        transform: translateY(-10px);
    }
    img {
        height: 75px;
        width: 75px;
        border-radius: 50%;
        margin-top: 2rem;
    }
    p {
        font-size: 14px;
        height: 100px;
        padding: 2rem;
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
    @media (max-width: 56em) {
        #reviews {
            margin-left: -32px;
        }
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
