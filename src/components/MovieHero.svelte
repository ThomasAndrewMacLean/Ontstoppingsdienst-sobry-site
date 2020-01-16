<script>
    let movieUrl = 'https://files.ontstoppingsdienst-sobry.be/file/ontstoppingsdienst-sobry/sobry-film-2.mp4';
</script>

<style>
    video {
        background-image: url('../fallback.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
    }
</style>

<video id="videoHome" playsinline autoplay muted loop>
    <source src={movieUrl} type="video/mp4" />
</video>
