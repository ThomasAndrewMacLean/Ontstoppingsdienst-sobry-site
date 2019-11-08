<script>
  export let segment;
  export let labels;
</script>

<style>
  #bottom-nav {
    background: var(--dark-background);
    color: var(--white-text);
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
  }
  .contact {
    text-align: right;
    margin-right: 40px;
  }
</style>

<div id="bottom-nav">
  <nav>
    <ul>
      <li>
        <a rel="prefetch" href="ontstoppen">{labels.ontstoppen}</a>
      </li>
      <li>
        <a rel="prefetch" href="cameradetectie">{labels.cameradetectie}</a>
      </li>
      <li>
        <a rel="prefetch" href="geurdetectie">{labels.geurdetectie}</a>
      </li>
      <li>
        <a rel="prefetch" href="adviesaankoopwoning">
          {labels.adviesaankoopwoning}
        </a>
      </li>
      <li>
        <a rel="prefetch" href="ontkalken">{labels.ontkalken}</a>
      </li>
      <li>
        <a rel="prefetch" href="herstellingen">{labels.herstellingen}</a>
      </li>
    </ul>
  </nav>
  <div class="contact">
    <ul>
      <li>{labels.telefoonnummer}: 0497/28.65.11</li>
      <li>{labels.email}: thomas.maclean@gmail.com</li>
    </ul>
  </div>
</div>
