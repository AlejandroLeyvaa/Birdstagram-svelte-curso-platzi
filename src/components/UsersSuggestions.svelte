<script>
  export let alt_description;
  export let urls;
  export let user;

  let following = false;

  function handleFollow(event) {
    event.preventDefault();
    following = !following;
  };
</script>

<style>
    .UsersSuggestions {
    margin: .8rem 0;
    display: grid;
    grid-template-columns: 40px 200px 1fr;
    grid-template-areas: "Image Data Follow";
  }

  .UsersSuggestions-user-img {
    margin: 0;
    padding: 0;
    grid-area: Image;
  }

  .UsersSuggestions-user-img img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin: 0;
    padding: 0;
  }

  .UsersSuggestions-user-data {
    grid-area: Data;
  }

  .UsersSuggestions-user-data h3 {
    color: #262626;
    font-size: 14px;
  }

  .UsersSuggestions-user-data h4 {
    color: #8e8e8e;
    font-size: 12px;
  }

  .UsersSuggestions-user-follow {
    grid-area: Follow;
  }

  .UsersSuggestions-user-follow button {
    background-color: transparent;
    border: none;
    color: #0095f6;
    font-size: 12px;
  }

  .UsersSuggestions-user-follow button:hover {
    cursor: pointer;
  }

  .UsersSuggestions-user-follow button:focus {
    outline: none;
  }

  #following {
    color: #262626;
  }

</style>

<li class="UsersSuggestions">
  <figure class="UsersSuggestions-user-img">
    <img src={urls.raw} alt={alt_description} />
  </figure>
  <div class="UsersSuggestions-user-data">
    <h3>{user.name}</h3>
    <h4>Sugerencias para tí</h4>
  </div>
  <form class="UsersSuggestions-user-follow">
    {#if following}
      <button id="following" on:click={handleFollow}>Siguiendo</button>
    {:else}
      <button on:click={handleFollow}>Seguir</button>
    {/if}
  </form>
</li>