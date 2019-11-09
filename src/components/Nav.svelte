<script>
  import NavItem from "./NavItem.svelte";
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
    height: 55px;
    align-items: center;
  }

  li {
    display: block;
    float: left;
  }
</style>

<nav>
  <ul>
    <li>
      <NavItem
        name={labels.ontstoppen}
        link={labels.ontstoppen}
        icon="ONTSTOPPEN.png" />

    </li>
    <li>
      <NavItem
        name={labels.ontkalken}
        link={labels.ontkalken}
        icon="ONTKALKEN.png" />
    </li>
    <li>
      <NavItem
        name={labels.cameradetectie}
        link={labels.cameradetectie}
        icon="CAMERA.png" />
    </li>
    <li>
      <NavItem
        name={labels.geurdetectie}
        link={labels.geurdetectie}
        icon="GEUR.png" />
    </li>
    <li>
      <NavItem
        name={labels.adviesaankoopwoning}
        link={labels.adviesaankoopwoning}
        icon="HUIZEN.png" />
    </li>
    <li>
      <NavItem
        name={labels.herstellingen}
        link={labels.herstellingen}
        icon="HERSTELLINGEN.png" />
    </li>
  </ul>
</nav>
