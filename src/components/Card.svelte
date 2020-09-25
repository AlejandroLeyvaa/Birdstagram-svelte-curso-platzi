<script>
  import Comments from './Comments.svelte';

  // UnplashData
  export let alt_description;
  export let urls;
  export let user;
  export let userPosts = [];


</script>

<style>
  .Card {
    width: inherit;
    margin: 2rem 0 4rem 0;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
  }

  .Card-container {
    width: inherit;
  }

  .Card-header {
    border-bottom: 1px solid #dbdbdb;
    height: 60px;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
  }

  .Card-user-data {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .Card-user-data figure {
    margin: 0;
    padding: 0;
  }

  .Card-user-data h2 {
    color: #262626;
    font-size: 16px;
    margin-left: 1rem;
    padding: 0;
  }

  .Card-user-img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin: 0;
    padding: 0;
  }

  .Card-post-img {
    width: 100%;
    height: 600px;
    margin: 0;
    padding: 0;
  }

  .Card-post-img img {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>

<div class="Card">
  <div class="Card-container">
    <div class="Card-header">
      <div class="Card-user-data">
        <figure>
          <img class="Card-user-img" src={urls.small} alt={alt_description} sizes='600px' style='object-fit: cover;'/>
        </figure>
        <h2>{user.first_name}</h2>
      </div>
      <div>
        <i>...</i>
      </div>
    </div>
    <figure class="Card-post-img">
      <img src={urls.raw} alt='birds'>
    </figure>
    <Comments {alt_description} {user} {userPosts} />
  </div>
</div>