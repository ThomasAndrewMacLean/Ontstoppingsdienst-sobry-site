<script>
    import { onMount } from 'svelte';
    let discount;

    onMount(() => {
        setTimeout(() => {
            discount.style.left = '0';
        }, 200);
    });
</script>

<style>
    .acties {
        position: fixed;
        top: 295px;
        left: -100px;
        color: #ffffff;
        color: var(--white-text);
        background: #e43630;
        background: var(--accent-primary);
        padding: 0.5rem 2rem;
        transform: rotate(-90deg) translateY(50%);
        transform-origin: left;
        transition: left 200ms ease-in;
    }

    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        .acties {
            transform-origin: center;
        }
    }

    @media (max-width: 900px) {
        .acties {
            top: 333px;
        }
    }
    @media (max-width: 800px) {
        .acties {
            position: absolute;
            top: 65vh;
        }
    }
</style>

<div bind:this={discount} class="acties hide">Nu -10% KORTING</div>
