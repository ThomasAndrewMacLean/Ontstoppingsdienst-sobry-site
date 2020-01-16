<script>
    import { onMount } from 'svelte';
    let discount;

    onMount(() => {
        setTimeout(() => {
            discount.style.left = '100px';
        }, 200);
    });
</script>

<style>
    .acties {
        font-family: GothicHeader, 'Playfair Display', serif;
        font-size: 1.7rem;
        position: absolute;
        top: 55vh;
        left: -150px;
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
        z-index: 1;
    }

    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        .acties {
            transform-origin: center;
        }
    }

    @media (max-width: 800px) {
        .acties {
            position: absolute;
            top: 15vh;
            left: 0 !important;
            height: 100px;
            width: 100px;
            font-size: 1.3rem;
        }
    }
    @media (max-width: 600px) {
        .acties {
            position: fixed;
            width: 100vw;
            border-radius: 0;
            top: 0;
        }
    }
</style>

<div bind:this={discount} class="acties hide">
    Winteractie!
    <br />
    -10% Korting
</div>
