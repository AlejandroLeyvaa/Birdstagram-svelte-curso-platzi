<script>
  import Profile from './Profile.svelte';
  import Suggestions from './Suggestions.svelte';
  import Footer from './Footer.svelte';

  export let user;
  export let results;
</script>

<style>
  .Sidebar {
    grid-area: Sidebar;
  }

  .Sidebar-container {
    position: fixed;
  }
</style>

<section class="Sidebar">
  <div class="Sidebar-container">
    <Profile {...user} />
    <Suggestions {results} />
    <Footer />
  </div>
</section>