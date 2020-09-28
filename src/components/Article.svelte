<script>
  import Stories from './Stories.svelte';
</script>

<style>
  .Article {
    height: 100vh;
    width: 100%;
    grid-area: Article;
    display: grid;
    grid-template-columns: 20% 40% 40% ;
    grid-template-rows: 120px 1fr;
    grid-template-areas: "Timeline Timeline ." ;
  }

  @media screen and (max-width: 800px) {
    .Article {
      height: 100vh;
      width: 100%;
      grid-area: Article;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr ;
      grid-template-rows: 120px 1fr;
      grid-template-areas: ". Timeline ." ;
      margin: 0;
    }
  }

    @media screen and (max-width: 767px) {
    .Article {
      height: 100vh;
      width: 100%;
      grid-area: Article;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr ;
      grid-template-rows: 120px 1fr;
      grid-template-areas: ". Timeline ." ;
    }
  }

    @media screen and (max-width: 480px) {
    .Article {
      height: 100vh;
      width: 100%;
      grid-area: Article;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr ;
      grid-template-rows: 120px 1fr;
      grid-template-areas: ". Timeline ." ;
    }
  }

    @media screen and (max-width: 320px) {
    .Article {
      height: 100vh;
      width: 100%;
      grid-area: Article;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr ;
      grid-template-rows: 120px 1fr;
      grid-template-areas: ". Timeline ." ;
    }
  }
</style>



<article class="Article">
  <slot />
</article>