<script>
    export let title;
    export let text;
    export let link;
    export let image;
    export let labels;
</script>

<style>
    img {
        width: 300px !important;
        height: 200px;
        margin: 0;
        object-fit: cover;
        object-position: bottom;
    }
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
</style>

<div class="dienst-blok">

    <img alt={title} src={image} height="200px" width="300px" />
    <div class="text-blok">
        <h2>{title}</h2>
        <p>{text}</p>
        <div>
            <a href={link}>{labels.leesmeer}</a>
        </div>
    </div>
</div>
