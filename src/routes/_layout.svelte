<style>
    .Main {
    display: grid;
    grid-template-columns: 20% 40% 40% ;
    grid-template-rows: 120px 1fr;
    grid-template-areas:  "Header Header Header"                        ". Stories Sidebar"                         "Main Main Main" ;
  }
</style>

<main class="Main">
  <slot />
</main>