<script>
    // your script goes here
</script>

<style>
    .page {
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 3rem;
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
        width: 100vw;
        margin-left: calc(-50vw + 500px);
        top: 0;
    }
    h1 {
        color: #333333;
        color: var(--darker-text);
    }
    @media (max-width: 1000px) {
        .page {
            padding: 3rem;
        }
        img {
            margin-left: 0;
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
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum vitae blanditiis est officiis
        accusantium cupiditate error impedit minima doloremque consequuntur magnam dolorum, dolore asperiores porro
        quaerat sunt eius reprehenderit.
    </p>
</div>
