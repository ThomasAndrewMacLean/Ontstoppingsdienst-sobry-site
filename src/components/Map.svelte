<script>
    //  import mapStyles from './map-styles'; // optional

    let container;
    let map;
    let zoom = 9;

    let center = { lat: 51.0913579, lng: 3.9622289 };

    import { onMount } from 'svelte';

    onMount(async () => {
        map = new google.maps.Map(container, {
            zoom,
            center,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            //styles: mapStyles, // optional
        });

        // LOKEREN
        // APEN
        // BRUGGE
        // GENT
        // DENDERMONDE
        const positions = [
            { lat: 51.1128025, lng: 4.007561 },
            { lat: 51.2223201, lng: 4.4194679 },
            { lat: 51.0601364, lng: 3.7127616 },
            { lat: 51.2043834, lng: 3.2130284 },
            { lat: 51.0191541, lng: 4.1083724 },
        ];

        positions.forEach(position => {
            new google.maps.Marker({
                position,
                map,
                icon: 'https://ontstoppingsdienst-sobry.be/logo-small-filled.png',
            });
        });
    });
</script>

<style>
    .full-width-picture {
        height: 450px;
        margin: 0;
        object-fit: cover;
        /* object-position: bottom;  */
        width: 100vw;
        margin-left: calc(-50vw + 500px);
        filter: grayscale(0.4);
    }
    @media (max-width: 1000px) {
        .full-width-picture {
            margin-left: 0;
            width: 100%;
        }
    }
</style>

<div class="full-width-picture" bind:this={container} />
