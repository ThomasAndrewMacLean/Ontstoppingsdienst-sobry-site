<script>
  export let labels;
</script>

<style>
  #hero {
    background: var(--light-background);
    width: 100vw;
    /* position: absolute; */
    margin-left: calc(-50vw + 26em);

    left: 0;
    right: 0;
  }
  .center {
    position: relative;
    /* max-width: 56em; */
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;

    display: flex;
    justify-content: space-around;
  }
  .afspraak {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--dark-background);
    padding: 1rem 0.5rem;
    color: var(--white-text);
    cursor: pointer;
    /* border: 2px solid var(--accent-primary); */
    border-radius: var(--border-radius);
  }
  img {
    height: 100%;
  }
  .logo {
    padding: 2rem;
  }
  .left {
    display: flex;
    flex-direction: column;
    /* width: 40vw; */
  }
  .right {
    width: 60vw;
  }
</style>

<div id="hero">
  <div class="center">
    <div class="left">
      <img class="logo" src="logo.png" alt="logo Sobry ontstoppingsdienst" />
      <div class="afspraak">
        <span>{labels.afspraak}</span>
        <span>{labels.telefoonnummer}</span>
      </div>
    </div>
    <div class="right">
      <img src="house.png" alt="image of a houseand a plumber" />
    </div>
  </div>
</div>
