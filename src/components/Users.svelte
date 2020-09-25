<script>
  export let alt_description;
  export let urls;
  export let user;
</script>

<style>
  .Users-user-container {
    margin: .5rem;
    box-sizing: border-box;
  }

  .Users-user-name {
    color:black;
    font-size: 12px;
    line-height: 28px;
    text-align: center;
  }

  .Users-user-box {
    background-image: linear-gradient(#fff, #fff),
      radial-gradient(circle at top left, #f09433, #bc1888);
    background-origin: border-box;
    background-clip: content-box, border-box;
    border: double 2px transparent;
    border-radius: 100%;
    width: 66px;
    height: 66px;
    margin: 0;
  }

  .Users-user-box img {
    border-radius: 50%;
    width: 66px;
    height: 66px;
    margin: 0;
  }
</style>

<li class="Users">
  <div class="Users-user-container">
    <div>
      <figure class="Users-user-box">
        <img src={urls.raw} alt={alt_description}>
      </figure>
      <h3 class="Users-user-name">{user.first_name}</h3>
    </div>
  </div>
</li>