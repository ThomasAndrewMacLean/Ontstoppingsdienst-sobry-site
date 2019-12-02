<script>
    import NavItem from './NavItem.svelte';
    export let segment;
    export let labels;
</script>

<style>
    nav {
        /* padding: 0 2.5rem; */
        background: #f8f8f8;
        background: var(--white-background);
    }

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        height: 55px;
        align-items: center;
    }

    @media (max-width: 900px) {
        ul {
            height: 100px;
        }
        li {
            width: 33%;
            display: flex;
            justify-content: center;
        }
    }
    ul {
        list-style: none;
    }
</style>

<nav>
    <div class="wide-wrapper">
        <ul>
            <li>
                <NavItem name={labels.ontstoppen} {segment} link="ontstoppen" icon="ONTSTOPPEN.png" />

            </li>
            <li>
                <NavItem name={labels.ontkalken} {segment} link="ontkalken" icon="ONTKALKEN.png" />
            </li>
            <li>
                <NavItem name={labels.cameradetectie} {segment} link="cameradetectie" icon="CAMERA.png" />
            </li>
            <li>
                <NavItem name={labels.geurdetectie} {segment} link="geurdetectie" icon="GEUR.png" />
            </li>
            <li>
                <NavItem name={labels.adviesaankoopwoning} {segment} link="adviesaankoopwoning" icon="HUIZEN.png" />
            </li>
            <li>
                <NavItem name={labels.herstellingen} {segment} link="herstellingen" icon="HERSTELLINGEN.png" />
            </li>
        </ul>
    </div>
</nav>
