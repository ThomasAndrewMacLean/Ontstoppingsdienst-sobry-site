<script>
    // your script goes here
</script>

<style>
    .page {
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 8rem;
        z-index: 1;
    }
    img {
        height: 500px;
        margin: 0;
        z-index: 0;
        object-fit: cover;
        /* position: absolute; */
        object-position: bottom;
        width: 102vw;
        margin-left: calc(-50vw + 26em);
        top: 0;
    }
    h1 {
        color: var(--light-texts);
    }
    @media (max-width: 56em) {
        img {
            margin-left: -32px;
        }
    }
    @media (max-width: 800px) {
        .page {
            padding-top: 6em;
        }
    }
</style>

<img src="picture-drain.jpg" alt="" />
<div class="page">
    <h1>Over mij</h1>
</div>
