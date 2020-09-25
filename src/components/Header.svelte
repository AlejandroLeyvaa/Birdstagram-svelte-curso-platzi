<script>
  import user from '../assets/images/user.png';
  import { likeCount } from '../store/store';
</script>

<style>
  .Header {
    background-color: #fff;
    height: 55px;
    width: 100%;
    margin: 0 0 2rem 0;
    padding: 0;
    position: fixed;
    z-index: 10;
    border-bottom: 1px solid #dbdbdb;
    grid-area: Header;
  }

  .Header-content {
    display: grid;
    grid-template-columns:   20% 20% 20% 40%;
    grid-template-rows: 55px;
    grid-template-areas: " . Logo Search Icons";
  }

  .Header-logo {
    margin: auto 0;
    grid-area: Logo;
  }

  .Header-content-search {
    grid-area: Search;
    margin: auto;
  }

  #header-input {
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 5px;
  }

  #header-input::-webkit-input-placeholder {
    text-align: center;
  }

  #header-input:focus::-webkit-input-placeholder {
    text-align: start;
  }


  #header-input:focus {
    outline: none;
  }


  .Header-content-icons {
    display: flex;
    padding: 0 80px;
    list-style: none;
    grid-area: Icons;
  }

  .Header-content-icons i {
    font-size: 1.5rem;
    margin: 0 10px;
  }

  .Header-user-container {
    margin: 0 1rem;
    padding: 0;
  }

  .Header-user-container img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin: 0;
    padding: 0;
  }
</style>

<header class="Header">
    <div class="Header-content">
      <div class="Header-logo">
        <h1>Birdstagram</h1>
      </div>
      <form class="Header-content-search">
        <input id="header-input" type="text" placeholder="Buscar">
      </form>
      <ul class="Header-content-icons">
        <li>
          <i class="fas fa-home" />
        </li>
        <li><i class="far fa-paper-plane" /></li>
        <li><i class="far fa-compass" /></li>
        <li><i class="far fa-heart"/></li>
          {$likeCount === 0 ? '' : $likeCount }
        <li>
          <figure class="Header-user-container">
            <img src={user} alt="Alejandro Leyva">
          </figure>
        </li>
      </ul>
    </div>
</header>
