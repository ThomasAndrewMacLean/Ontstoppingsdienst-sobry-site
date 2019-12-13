<script>
    let movieUrl = 'https://files.ontstoppingsdienst-sobry.be/file/ontstoppingsdienst-sobry/sobry-film.mp4';
</script>

<style>
    video {
        width: auto;
        height: 450px;
        /* background-color: var(--dark-background); */
        background-image: url(picture-buizen.jpg);
        /* margin-left: calc(-50vw + 26em); */
    }

    /* @media (max-width: 56em) {
        video {
            width: 100%;
            margin-left: -32px;
        }
    } */
</style>

<video id="videoHome" src={movieUrl} playsinline autoplay muted loop />
