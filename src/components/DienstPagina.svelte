<script>
    export let title;
    export let text;
    export let link;
    export let image;
    export let labels;
</script>

<style>
    img {
        /* width: 100%; */
        height: 200px;
        margin: 0;
        object-fit: cover;
        object-position: bottom;
        width: 100vw;
        /* position: absolute; */
        margin-left: calc(-50vw + 26em);
    }
    @media (max-width: 56em) {
        img {
            margin-left: -32px;
        }
    }

    .text-blok {
        padding: 2rem;
        display: flex;
        flex-direction: column;
    }
    h2 {
        margin: 0;
        color: var(--darker-text);
    }
</style>

<img alt={title} src={image} />
<div class="text-blok">
    <h2>{title}</h2>
    <p>{text}</p>

</div>
