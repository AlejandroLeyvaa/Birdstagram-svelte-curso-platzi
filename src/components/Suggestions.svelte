<script>
  import UsersSuggestions from './UsersSuggestions.svelte';
  export let results = [];
</script>

<style>
  .Suggestions-content div {
    display: flex;
    justify-content: space-between;
  }

  .Suggestions-content h2 {
    margin: .5rem 0;
    font-size: 14px;
  }

  .Suggestions-content h3 {
    color: #262626;
    margin: .5rem 3rem 0 0;
    font-size: 14px;
  }

  .Suggestions-users-list {
    margin: 0 0 0 1rem;
    padding: 0;
    list-style: none;
  }


</style>

<div class="Suggestions">
  <div class="Suggestions-content">
    <div>
      <h2>Sugerencias para ti</h2>
      <h3>Ver todo</h3>
    </div>
    <div>
      <ul class="Suggestions-users-list">
        {#each results as result}
          <UsersSuggestions {...result}/>
        {:else}
          <p>Loading...</p>
        {/each}
      </ul>
    </div>
  </div>
</div>


