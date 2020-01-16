<script>
    export let title;
    export let text;
    export let link;
    export let image;
    export let labels;
    export let last;
</script>

<style>
    .dienst-blok {
        margin: 2rem 0 3rem 0;
        /* display: flex; */
        /* justify-content: space-between; */
    }
    .text-blok {
        padding: 0 0 0 2rem;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .text-blok p {
        height: 4.5em;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        .text-blok p {
            position: relative;
        }
        .text-blok p::before {
            content: '...';
            position: absolute;
            bottom: 0;
            right: 0;
            display: block;
        }
    }

    .text-blok div {
        margin-top: 1rem;
    }
    .text-blok::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background: #e9eaec;
        background: var(--light-text);
        bottom: -25px;
    }
    .text-blok.last::after {
        width: 0;
    }
    h2 {
        margin: 0;
        color: #333333;
        color: var(--darker-text);
    }
    img {
        width: 100%;
        height: auto;
        margin: 0;
        z-index: 0;
        object-fit: cover;
        object-position: bottom;
        filter: brightness(0.9) grayscale(1);
        transition: transform 200ms ease-in, filter 200ms ease-in;
    }
    img:hover {
        filter: brightness(1);
        transform: scale(1.1);
    }
    .image-wrap {
        width: 300px;
        height: 200px;
        display: inline-flex;
        overflow: hidden;
    }
    @media (max-width: 800px) {
        .dienst-blok > a {
            /* display: inline-flex;
            flex-wrap: wrap; */
        }
        .image-wrap {
            width: 100%;
        }
        .text-blok {
            flex-shrink: 2;
            padding: 0;
        }
    }
    @media (min-width: 800px) {
        .dienst-blok {
            width: 30%;
            display: inline-block;
        }
        .image-wrap {
            width: 100%;
        }
        .text-blok {
            padding: 0;
        }
        .text-blok::after {
            display: none;
        }
    }
</style>

<div class="dienst-blok">
    <a href={link}>

        <div class="image-wrap">
            <img alt={title} data-src={'https://files.ontstoppingsdienst-sobry.be/file/ontstoppingsdienst-sobry/' +image} class="lazyload" loading="lazy" />
        </div>
        <div class={last ? 'last text-blok' : 'text-blok'}>
            <h2>{title}</h2>
            <p>{text}</p>
            <div>
                <a class="button-dark" rel="prefetch" href={link}>{labels.leesmeer}</a>
            </div>
        </div>

    </a>
</div>
