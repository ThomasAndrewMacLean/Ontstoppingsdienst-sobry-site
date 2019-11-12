<script>
    export let title;
    export let text;
    export let link;
    export let image;
    export let labels;
</script>

<style>
    .dienst-blok {
        margin: 2rem 0;
        display: flex;
        /* justify-content: space-between; */
    }
    .text-blok {
        padding: 0 2rem;
        display: flex;
        flex-direction: column;
    }

    a {
        background: var(--dark-background);
        color: var(--white-text);
        padding: 10px 15px;
        cursor: pointer;
        border-radius: var(--border-radius);
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
