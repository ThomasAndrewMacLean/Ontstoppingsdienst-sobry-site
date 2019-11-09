<script>
  export let link;
  export let icon;
  export let name;
</script>

<style>
  img {
    height: 25px;
  }
  h4 {
    margin: 0 0 0 8px;
    padding-left: 8px;
    border-left: 4px dotted var(--accent-secondary);
    font-weight: 100;
    font-size: 14px;
    position: relative;
  }
  h4:hover::after {
    content: "";
    position: absolute;
    background: var(--accent-primary);
    width: calc(100% - 8px);
    height: 3px;
    left: 8px;
    bottom: 0;
  }
  a {
    display: flex;
  }
</style>

<!-- markup (zero or more items) goes here -->
<div>
  <a href={link}>
    <img src={icon} alt={name} />
    <h4>{name}</h4>
  </a>
</div>
