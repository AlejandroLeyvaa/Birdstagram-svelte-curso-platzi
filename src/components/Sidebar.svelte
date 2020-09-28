<script>
  import Profile from './UserProfile.svelte';
  import Suggestions from './Suggestions.svelte';
  import Footer from './Footer.svelte';

  export let user;
  export let posts;
  export let results;

</script>

<style>
  .Sidebar {
    grid-area: Sidebar;
  }

  .Sidebar-container {
    position: fixed;
  }

  @media screen and (max-width: 800px) {
    .Sidebar {
      display: none;
    }
  }

  @media screen and (max-width: 767px) {
    .Sidebar {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    .Sidebar {
      display: none;
    }
  }

  @media screen and (max-width: 320px) {
    .Sidebar {
      display: none;
    }
  }

</style>

<section class="Sidebar">
  <div class="Sidebar-container">
    <Profile {...user} {posts} />
    <Suggestions {results} />
    <Footer />
  </div>
</section>