<script>
    import NavItem from './NavItem.svelte';
    export let segment;
    export let labels;
</script>

<style>
    nav {
        padding: 0;
    }

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        height: 55px;
        align-items: center;
    }

    @media (max-width: 56em) {
        ul {
            height: 100px;
        }
        li {
            width: 33%;
            margin-right: -40px;
        }
    }
</style>

<nav>
    <ul>
        <li>
            <NavItem name={labels.ontstoppen} link="ontstoppen" icon="ONTSTOPPEN.png" />

        </li>
        <li>
            <NavItem name={labels.ontkalken} link="ontkalken" icon="ONTKALKEN.png" />
        </li>
        <li>
            <NavItem name={labels.cameradetectie} link="camera" icon="CAMERA.png" />
        </li>
        <li>
            <NavItem name={labels.geurdetectie} link="geur" icon="GEUR.png" />
        </li>
        <li>
            <NavItem name={labels.adviesaankoopwoning} link="huizen" icon="HUIZEN.png" />
        </li>
        <li>
            <NavItem name={labels.herstellingen} link="herstellingen" icon="HERSTELLINGEN.png" />
        </li>
    </ul>
</nav>
