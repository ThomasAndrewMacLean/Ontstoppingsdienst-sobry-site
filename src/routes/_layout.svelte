<script>
  import Nav from "../components/Nav.svelte";
  import BottomNav from "../components/BottomNav.svelte";
  import labels from "../labels.js";
  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 0 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
<BottomNav {labels} {segment} />
