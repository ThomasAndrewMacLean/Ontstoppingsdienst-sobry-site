<script>
    export let title;
    export let text;
    export let quote;
    export let link;
    export let image;
    export let labels;
</script>

<style>
    .full-width-picture {
        height: 450px;
        margin: 0;
        object-fit: cover;
        object-position: bottom;
        width: 102vw;
        margin-left: calc(-50vw + 485px);
    }
    .image-wrap {
        position: relative;
    }
    .logo {
        position: absolute;
        top: 5%;
        height: 80%;
        left: 50%;
        transform: translateX(-50%);
    }
    @media (max-width: 1000px) {
        .full-width-picture {
            margin-left: -3%;
            width: 106%;
        }
    }
    .text-quote-wrapper {
        display: flex;
    }
    .text {
        width: 75%;
        padding-right: 4rem;
    }

    .quote {
        width: 25%;
        font-family: 'Playfair Display', serif;
        display: flex;
        justify-content: center;
        /* align-items: center; */
    }
    .text-blok {
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
    }
    h2 {
        margin: 0;
        color: var(--darker-text);
        padding-bottom: 2rem;
    }
    em,
    b {
        color: var(--darker-text);
    }
    b{
        font-weight: 700;
    }
    ul{
        list-style: disc;
    }
    @media (max-width: 600px) {
        .quote {
            display: none;
        }
        .text {
            width: 100%;
        }
        .text-blok {
            padding: 2rem;
        }
    }
</style>

<div class="image-wrap">
    <img class="full-width-picture" alt={title} src={image} />
    <img class="logo" src="logo_transparant.png" alt="sobry logo overlay" />
</div>
<div class="text-blok">
    <h2>{title}</h2>
    <div class="text-quote-wrapper">
        <div class="text">
            {@html text}
        </div>
        <div class="quote">
            <q>{quote}</q>
        </div>
    </div>
</div>
