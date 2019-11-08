<script>
  export let link;
  export let icon;
  export let name;
</script>

<style>
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<a href={link}>
  <img src={icon} alt={name} />
  <h4>{name}</h4>
</a>
