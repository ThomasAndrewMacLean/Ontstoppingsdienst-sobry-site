<script>
    export let image;
</script>

<style>
    .full-width-picture {
        height: 450px;
        margin: 0;
        object-fit: cover;
        object-position: bottom;
        width: 100vw;
        margin-left: calc(-50vw + 500px);
        filter: grayscale(0.9);
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .image-wrap {
        position: relative;
    }

    /* .image-wrap::before {
        height: 450px;
        margin: 0;
        object-fit: cover;
        object-position: bottom;
        width: 100vw;
        margin-left: calc(-50vw + 500px);
        filter: grayscale(0.9);
    } */

    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        .full-width-picture {
            height: auto;
        }
        .image-wrap {
            height: 450px;
            overflow: hidden;
        }
    }

    .logo {
        position: absolute;
        top: 5%;
        height: 80%;
        left: 50%;
        transform: translateX(-50%);
    }

    @media (max-width: 1000px) {
        .full-width-picture {
            margin-left: 0;
            width: 100%;
        }
    }

    @media (max-width: 900px) {
        .full-width-picture {
            background-attachment: scroll;
        }
    }
</style>

<div class="image-wrap">
    <div class="full-width-picture" style="background-image:url({image})" />
    <img class="logo" src="logo_transparant.png" alt="sobry logo overlay" />
</div>
