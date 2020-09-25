<script>
  import Stories from './Stories.svelte'
</script>

<style>
  .Main {
    height: 100vh;
    width: 100vw;
    grid-area: Main;
    display: grid;
    grid-template-columns: 20% 40% 40% ;
    grid-template-rows: 120px 1fr;
    grid-template-areas: ". Timeline ." ;
  }
</style>

<main class="Main">
  <slot />
</main>