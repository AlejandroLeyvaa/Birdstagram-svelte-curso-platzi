<script>
  import user from '../assets/statics/user.png';
  import { likeCount } from '../store/store';
  import { goto } from '@sapper/app';
  export let segment;

  const navigateHome = async () => {
    await goto('/');

  };

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
    grid-template-areas: " Logo Search Icons";
  }

  .Header-logo-container {
    margin: auto 0;
    grid-area: Logo;
  }

  .Header-logo-container h1:hover  {
    cursor: pointer;
  }

  .Header-content-search {
    grid-area: Search;
    margin: auto;
  }

  #header-input {
    width: 200px;
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
    padding: 1rem 0;
    list-style: none;
    grid-area: Icons;
  }

  .Header-content-icons i {
    font-size: 1.5rem;
    margin: 0 10px;
  }

  .Header-user-container {
      margin:  0 .5rem;
      padding: 0 0 1 0 ;
  }

  [aria-current] figure {
    background-image: linear-gradient(#fff, #fff),
      radial-gradient(circle at top left, #f09433, #bc1888);
    background-origin: border-box;
    background-clip: content-box, border-box;
    border: double 2px transparent;
    border-radius: 100%;
    width: 36px;
    height: 36px;
  }

  .Header-user-container img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 800px) {
    .Header-content {
      display: grid;
      grid-template-columns:   33.3% 33.3% 33.3%;
      grid-template-rows: 55px;
      grid-template-areas: " Cam Logo Share";
    }

    .Header-logo-container {
      grid-area: Logo;
      margin: auto 1rem;
    }

    .Header-logo-container h1 {
      font-size: 1rem;
    }

    .Header-content-search {
      grid-area: Search;
      margin: auto;
    }

    .Header-content-icons {
      display: flex;
      margin: auto 0;
      padding: .5rem 0;
      list-style: none;
      grid-area: Icons;
      box-sizing: border-box;
    }

    .Header-content-icons i {
      font-size: 1.5rem;
      margin: .5rem .5rem;
    }

    .Header-user-container {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin: .5rem 0 0 0;
      padding: 0;
    }

    .Header-user-container img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin: 0;
      padding: 0;
    }

  }


  @media screen and (max-width: 767px) {
    .Header-content {
      display: grid;
      grid-template-columns:   33.3% 33.3% 33.3%;
      grid-template-rows: 55px;
      grid-template-areas: " Cam Logo Share";
    }

    .Header-logo-container {
      grid-area: Logo;
      margin: auto 1rem;
    }

    .Header-logo-container h1 {
      font-size: 1rem;
    }

    .Header-content-search {
      display: none;
      grid-area: Search;
      margin: auto;
    }

    .Header-content-icons {
      display: none;
      margin: auto 0;
      padding: .5rem 0;
      list-style: none;
      grid-area: Icons;
      box-sizing: border-box;
    }

    .Header-content-icons i {
      font-size: 1.5rem;
      margin: .5rem .5rem;
    }

    .Header-user-container {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin: .5rem 0 0 0;
      padding: 0;
    }

    .Header-user-container img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin: 0;
      padding: 0;
    }

  }

  @media screen and (max-width: 480px) {
    .Header-content {
      display: grid;
      grid-template-columns:   33.3% 33.3% 33.3%;
      grid-template-rows: 55px;
      grid-template-areas: " Cam Logo Share";
    }

    .Header-logo-container {
      grid-area: Logo;
      margin: auto 1rem;
    }

    .Header-logo-container h1 {
      font-size: 1rem;
    }

    .Header-content-search {
      display: none;
      grid-area: Search;
      margin: auto;
    }

    .Header-content-icons {
      display: none;
      margin: auto 0;
      padding: .5rem 0;
      list-style: none;
      grid-area: Icons;
      box-sizing: border-box;
    }

    .Header-content-icons i {
      font-size: 1.5rem;
      margin: .5rem .5rem;
    }

    .Header-user-container {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin: .5rem 0 0 0;
      padding: 0;
    }

    .Header-user-container img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin: 0;
      padding: 0;
    }

  }

  @media screen and (max-width: 320px) {
    .Header-content {
      display: grid;
      grid-template-columns:   33.3% 33.3% 33.3%;
      grid-template-rows: 55px;
      grid-template-areas: " Cam Logo Share";
    }

    .Header-logo-container {
      grid-area: Logo;
      margin: auto 1rem;
    }

    .Header-logo-container h1 {
      font-size: 1rem;
    }

    .Header-content-search {
      display: none;
      grid-area: Search;
      margin: auto;
    }

    .Header-content-icons {
      display: none;
      margin: auto 0;
      padding: .5rem 0;
      list-style: none;
      grid-area: Icons;
      box-sizing: border-box;
    }

    .Header-content-icons i {
      font-size: 1.5rem;
      margin: .5rem .5rem;
    }

    .Header-user-container {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin: .5rem 0 0 0;
      padding: 0;
    }


    .Header-user-container img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin: 0;
      padding: 0;
    }

  }



</style>

<header class="Header">
    <div class="Header-content">
      <div class="Header-logo-container">
        <h1 on:click={navigateHome} rel='prefetch' >Birdstagram</h1>
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
          <a
            aria-current={segment === 'profile' ? 'page' : undefined}
            rel="prefetch"
            href="profile">
          <figure class="Header-user-container">
            <img src={user} alt='Alejandro Leyva' />
          </figure>
        </a>
        </li>
      </ul>
    </div>
</header>
