<script>
    import FloatingAfspraak from '../components/FloatingAfspraak.svelte';
    import labels from '../labels.js';
</script>

<style>
    .page {
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4rem;
        padding-bottom: 8rem;
        background: #e9eaeb;
    }
    h1 {
        margin-bottom: 0;
        color: #333333;
        color: var(--darker-text);
    }

    h2 {
        color: #333333;
        color: var(--darker-text);
    }
    form {
        width: 100%;
        padding-top: 3rem;
        max-width: 750px;
    }

    input,
    textarea {
        font-size: inherit;
        font-family: inherit;
        line-height: 2;
        padding-left: 5px;
        width: 100%;
        border: none;
        margin-bottom: 0.6rem;
    }
    textarea {
        resize: none;
    }
    .double {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .double > .form-item {
        width: 30%;
    }
    label {
        text-transform: uppercase;
        display: block;
    }

    h3 {
        font-size: 3rem;
        color: var(--accent-primary);
    }
    input[type='submit'] {
        background: var(--accent-primary);
        color: white;
        text-transform: uppercase;
        width: 150px;
        padding: 5px 0;
    }
    .werkgebied {
        width: 100%;
        max-width: 750px;
    }
    ul {
        list-style: none;
    }
    li {
        padding: 6px 0;
    }
    .provincie {
        text-decoration: underline;
    }
    @media (max-width: 800px) {
        form,
        p,
        .werkgebied {
            width: 90%;
            max-width: 500px;
        }
        .page {
            padding-top: 6em;
        }
        .double > .form-item {
            width: 100%;
        }
    }
</style>

<svelte:head>
    <script
        defer
        async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBgvHuij3rX9Ulc5ho0bN3fNLczsX_QbqY&callback=initMap">

    </script>
    <style>
        body {
            background: #e9eaeb !important;
        }
    </style>


    <title>Ontstoppingsdienst Sobry | Contact</title>
    <meta name="description" content="Contacteer Onstoppingsdienst Sobry" />
    <meta name="keywords" content="Ontstoppingsdienst Sobry, Contact, Werkgebied" />
    
</svelte:head>
<div class="page">
    <h1>{labels.contacttitle}</h1>
    <img src="logo-contact.png" alt="sobry logo" class="logo-img" />
        <h3>Bedankt voor uw bericht!</h3>
</div>
<FloatingAfspraak {labels} />
