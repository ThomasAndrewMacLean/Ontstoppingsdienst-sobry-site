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
        background: #344d9c;
        background: var(--accent-secondary);
        padding: 0.5rem 2rem;
        height: 150px;
        width: 150px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
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
            top: 40vh;
        }
    }
</style>

<div bind:this={discount} class="acties hide">
    Winteractie!
    <br />
    -10% Korting
</div>
