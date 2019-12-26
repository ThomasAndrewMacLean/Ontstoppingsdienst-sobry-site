<script>
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import labels from '../labels.js';

    import HeroImage from '../components/Hero-Image.svelte';
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

    h1 {
        color: #333333;
        color: var(--darker-text);
    }
    h2 {
        text-align: center;
    }
    .text {
        column-count: 2;
        column-gap: 2rem;
        padding-top: 3rem;
    }
    p {
        margin-top: 0;
    }
    @media (max-width: 1000px) {
        .page {
            padding: 3rem;
        }
    }
    @media (max-width: 800px) {
        .page {
            padding-top: 6em;
        }
    }

    @media (max-width: 600px) {
        .text {
            column-count: 1;
        }
    }
</style>

<HeroImage image="auto.jpg" />
<div class="page">
    <h1>Over mij</h1>

    <h2>
        Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis
        velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque
        lorem tortor.
    </h2>
    <div class="text">
        <p>
            <b>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum vitae blanditiis est officiis
                accusantium cupiditate error impedit minima doloremque consequuntur magnam dolorum, dolore asperiores
                porro quaerat sunt eius reprehenderit.
            </b>
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deleniti distinctio eum fugiat incidunt
            labore odio id nam ipsum. Minima fugiat quas delectus? Odio asperiores sint dicta molestias. Eligendi,
            alias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio saepe recusandae deleniti,
            perferendis cum a, ut quam eligendi possimus quidem vero natus quas tenetur laborum consequatur excepturi.
            Nihil, facere obcaecati?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deleniti distinctio eum fugiat incidunt
            labore odio id nam ipsum. Minima fugiat quas delectus? Odio asperiores sint dicta molestias. Eligendi,
            alias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio saepe recusandae deleniti,
            perferendis cum a, ut quam eligendi possimus quidem vero natus quas tenetur laborum consequatur excepturi.
            Nihil, facere obcaecati?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deleniti distinctio eum fugiat incidunt
            labore odio id nam ipsum.
            <em>Minima fugiat quas delectus? Odio asperiores sint dicta molestias.</em>
            Eligendi, alias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio saepe recusandae deleniti,
            perferendis cum a, ut quam eligendi possimus quidem vero natus quas tenetur laborum consequatur excepturi.
            Nihil, facere obcaecati?
        </p>
    </div>
</div>
<FloatingAfspraak {labels} />
