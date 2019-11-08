<script>
  import DienstBlok from "../components/DienstBlok.svelte";
  import Hero from "../components/Hero.svelte";
  import labels from "../labels.js";
</script>

<style>
  h1 {
    text-align: center;
    margin: 0 auto;
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<Hero {labels} />
<DienstBlok
  {labels}
  title={labels.ontstoppen}
  image="picture-drain.jpg"
  text={labels.ontstoppentext} />

<DienstBlok
  {labels}
  title={labels.geurdetectie}
  image="picture-toilet.jpg"
  text={labels.ontstoppentext} />
<DienstBlok
  {labels}
  title={labels.herstellingen}
  image="picture-tap.jpg"
  text={labels.ontstoppentext} />
<DienstBlok
  {labels}
  title={labels.geurdetectie}
  image="picture-toilet.jpg"
  text={labels.ontstoppentext} />
