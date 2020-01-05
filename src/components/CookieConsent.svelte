<script>
    import { onMount } from 'svelte';
    let cookiePopup;
    onMount(() => {
        if (document.cookie.indexOf('stakoekjestoe') === -1) {
            cookiePopup.style.display = 'flex';
        }
    });

    const setCookie = cookieValue => {
        let CookieDate = new Date();
        CookieDate.setFullYear(CookieDate.getFullYear() + 1);
        document.cookie = 'stakoekjestoe=' + cookieValue + '; expires=' + CookieDate.toUTCString() + ';';

        window.location.reload(false);
    };
</script>

<style>
    .cookie-popup {
        position: fixed;
        background: #344d9c;
        background: var(--accent-secondary);
        bottom: 0rem;
        left: 0rem;
        width: 100%;
        display: none;
        color: var(--light-text);
        padding: 2rem;
        z-index: 2;
        flex-direction: column;
    }

    .button-dark {
        background-color: white;
    }
    .button-dark:hover {
        background: #333333;
        background: var(--dark-background);
    }
    .button-wrap {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
    }
    .weiger-knop {
        background: none;
        border: none;
        text-decoration: underline;
        color: white;
    }
</style>

<div bind:this={cookiePopup} class="cookie-popup">
    Deze site gebruikt cookies
    <div class="button-wrap">
        <button on:click={() => setCookie('false')} class="weiger-knop">Weiger</button>
        <button on:click={() => setCookie('true')} class="button-dark">OK</button>
    </div>

</div>
