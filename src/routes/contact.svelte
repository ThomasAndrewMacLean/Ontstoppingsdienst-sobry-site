<script>
    // your script goes here
</script>

<style>
    .page {
        padding-bottom: 8rem;
    }
    form {
        /* border: 2px solid var(--dark-background); */
        display: inline-flex;
        flex-direction: column;
    }
    .form-item {
        padding-right: 1rem;
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
    }
    label {
        display: block;
    }
    #submit {
        background: var(--dark-background);
        color: var(--white-text);
        padding: 10px 15px;
        cursor: pointer;
        border-radius: var(--border-radius);
    }
</style>

<div class="page">
    <h1>Contact</h1>

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
            <input id="submit" type="submit" value="Verstuur" />
        </div>
    </form>
</div>
