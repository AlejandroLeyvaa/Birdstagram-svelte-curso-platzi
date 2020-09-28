<style>
  .Main {
    display: grid;
    grid-template-columns: 20% 40% 40% ;
    grid-template-rows: 90px 1fr;
    grid-template-areas:  "Header Header Header"
                          ". Stories Sidebar"
                          "Articel Article Article" ;
  }

  @media screen and (max-width: 800px) {
    .Main {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 90px 1fr;
      grid-template-areas:  "Header Header Header"
                            "Stories Stories Stories"
                            "Article Article Article" ;
   }
  }

  @media screen and (max-width: 767px) {
    .Main {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 90px 1fr;
      grid-template-areas:  "Header Header Header"
                            "Stories Stories Stories"
                            "Article Article Article" ;
   }
  }
  @media screen and (max-width: 480px) {
    .Main {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 90px 1fr;
      grid-template-areas:  "Header Header Header"
                            "Stories Stories Stories"
                            "Article Article Article" ;
   }
  }
  @media screen and (max-width: 320px) {
    .Main {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 90px 1fr;
      grid-template-areas:  "Header Header Header"
                            "Stories Stories Stories"
                            "Article Article Article" ;
   }
  }


</style>

<main class="Main">
  <slot />
</main>