<script>
  import Users from './Users.svelte';

  export let results = [];

</script>

<style>
  .Stories {
    display: flex;
    grid-area: Stories;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    width: 615px;
    height: 120px;
    margin: 0;
    box-sizing: border-box;
  }

  .Stories-content  {
    display: flex;
    overflow: hidden;
  }

  .Stories-content-list {
    list-style: none;
    display: flex;
    align-content: center;
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 800px) {
    .Stories {
      display: flex;
      grid-area: Stories;
      border: none;
      border-radius: 0;
      width: 100vw;
      height: 120px;
      margin: 0 auto;
      box-sizing: border-box;
    }

    .Stories-content  {
      display: flex;
      overflow: hidden;
    }

    .Stories-content-list {
      list-style: none;
      display: flex;
      align-content: center;
      margin: 0;
      padding: 0;
    }

  }

  @media screen and (max-width: 767px) {
    .Stories {
      display: flex;
      grid-area: Stories;
      border: none;
      border-radius: 0;
      width: 100vw;
      height: 120px;
      margin: 0 auto;
      box-sizing: border-box;
    }
  }

  @media screen and (max-width: 480px) {
    .Stories {
      display: flex;
      grid-area: Stories;
      border: none;
      border-radius: 0;
      width: 100vw;
      height: 120px;
      margin: 0 auto;
      box-sizing: border-box;
    }
  }

  @media screen and (max-width: 320px) {
    .Stories {
      display: flex;
      grid-area: Stories;
      border: none;
      border-radius: 0;
      width: 100vw;
      height: 120px;
      margin: 0 auto;
      box-sizing: border-box;
    }
  }
</style>

<section class="Stories">
  <div class="Stories-content">
    <ul class="Stories-content-list">
      {#each results as result}
        <Users {...result} />
      {:else}
        <p>Loading...</p>
      {/each}
    </ul>
  </div>
</section>