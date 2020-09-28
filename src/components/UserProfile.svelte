<script>
  import user from '../assets/statics/user.png';
  export let nickname;
  export let name;
</script>

<style>
  .UserProfile-content {
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-template-areas: "Image Data";
  }

  .UserProfile-user-img {
    margin: 0.5rem 1rem 0px 1rem;
    box-sizing: border-box;
    grid-area: Image;
  }

  .UserProfile-user-img img {
    border-radius: 50%;
    width: 66px;
    height: 66px;
  }

  .UserProfile-user-data {
    grid-area: Data;
    margin: 1rem;
  }

  .UserProfile-user-data h2 {
    color: #262626;
    font-size: 12px;
    grid-area: Data;
    margin-bottom: .5rem;
  }

  .UserProfile-user-data h3 {
    font-size: 12px;
    margin-top: .5rem;
  }

</style>
<div class="UserProfile">
  <div class="UserProfile-content">
    <figure class="UserProfile-user-img">
      <img src={user} alt={name}>
    </figure>
    <div class="UserProfile-user-data">
      <h2>{nickname}</h2>
      <h3>{name}</h3>
    </div>
  </div>
</div>