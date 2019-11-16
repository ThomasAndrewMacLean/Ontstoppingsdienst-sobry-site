<script>
    export let title;
    export let text;
    export let link;
    export let image;
    export let labels;
</script>

<style>
    .dienst-blok {
        margin: 2rem 0 3rem 0;
        display: flex;
        /* justify-content: space-between; */
    }
    .text-blok {
        padding: 0 2rem;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .text-blok > p {
        height: 4.5em;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    .text-blok > div {
        margin-top: 1rem;
    }
    .text-blok::after {
        content: '';
        position: absolute;
        width: calc(100% - 2rem);
        height: 1px;
        background: var(--light-text);
        bottom: 0;
        left: 0;
    }
    a {
        background: var(--dark-background);
        color: var(--white-text);
        padding: 10px 15px;
        cursor: pointer;
        border-radius: var(--border-radius);
    }
    a:hover {
        /* background: var(--accent-primary); */
        box-shadow: 0px 0px 5px 1px var(--accent-secondary);
    }
    h2 {
        margin: 0;
        color: var(--darker-text);
    }
    img {
        width: 100%;
        height: auto;
        margin: 0;
        object-fit: cover;
        object-position: bottom;
    }
    .image-wrap {
        width: 300px;
        height: 200px;
        display: inline-flex;
    }
</style>

<div class="dienst-blok">
    <div class="image-wrap">
        <img alt={title} src={image} />
    </div>
    <div class="text-blok">
        <h2>{title}</h2>
        <p>{text}</p>
        <div>
            <a rel="prefetch" href={link}>{labels.leesmeer}</a>
        </div>
    </div>
</div>
