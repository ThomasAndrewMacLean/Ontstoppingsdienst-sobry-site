<script>
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
    }
    h1 {
        margin-bottom: 0;
        color: var(--darker-text);
    }
    form,
    p {
        width: 100%;
        max-width: 500px;
    }
    p {
        text-align: center;
    }

    input,
    textarea {
        font-size: inherit;
        font-family: inherit;
        line-height: 1.5;
        padding-left: 5px;
        width: 100%;
        border: 1px solid var(--dark-text);
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
        width: 48%;
    }
    label {
        display: block;
    }

    @media (max-width: 800px) {
        .page {
            padding-top: 6em;
        }
        .double > .form-item {
            width: 100%;
        }
    }
</style>

<div class="page">
    <h1>{labels.contacttitle}</h1>
    <p>{labels.contacttekst}</p>
    <form action="">
        <div class="double">
            <div class="form-item">
                <label for="email">Email</label>
                <input name="email" id="email" type="email" required />
            </div>

            <div class="form-item">
                <label for="name">Naam</label>
                <input name="name" id="name" type="text" required />
            </div>
        </div>
        <div class="form-item">
            <label for="subject">Onderwerp</label>
            <input name="subject" id="subject" type="text" required />
        </div>
        <div class="form-item">
            <label for="message">Bericht</label>
            <textarea name="message" id="message" type="text" required />
        </div>
        <div class="form-item">
            <input class="button-dark" id="submit" type="submit" value="Verstuur" />
        </div>
    </form>
</div>
