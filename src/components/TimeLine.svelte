<script>
  import Card from './Card.svelte';

  export let results = [];
  export let userPosts = [];
</script>

<style>
  .TimeLine {
    width: 615px;
    margin: 1rem 0 0 0;
    grid-area: Timeline;
  }

  @media screen and (max-width: 800px) {
    .TimeLine {
      width: 100vw;
    }
  }

  @media screen and (max-width: 767px) {
    .TimeLine {
      width: 100vw;
    }
  }

  @media screen and (max-width: 480px) {
    .TimeLine {
      width: 100vw;
    }
  }

  @media screen and (max-width: 320px) {
    .TimeLine {
      width: 100vw;
    }
  }
</style>

<section class="TimeLine" id="timeLine">
  <div class="TimeLine-container">
    {#each results as result}
      <Card {...result} {userPosts} />
    {:else}
      <p>Loading...</p>
    {/each}
  </div>
</section>