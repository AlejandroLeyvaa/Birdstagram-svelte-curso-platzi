<script>
  import Modal from './Modal.svelte';
  import Share from './Share.svelte';

  import { blur } from 'svelte/transition';
  import { likeCount } from '../store/store';

  export let alt_description;
  export let user;
  export let userPosts = [];

  let isModal = false;
  let like = false;
  let bookmark = false;

  function handleLike() {
    like = !like;
    if(like){
      likeCount.update((n) => n + 1)
    } else {
      likeCount.update((n) => n - 1)
    };
  };

  function handleClick() {
    isModal = !isModal;
  };

  function addComment(event) {
    const msg = event.target.text.value;
    if (msg.length > 0) {
      const message = {
        id: Date.now(),
        text: msg,
        username: "AlejandroLeyvaa",
      };

      userPosts = [...userPosts, message];
      event.target.text.value = '';
      console.log(userPosts)
    };
  };
</script>

<style>
  .Comments-list-icons {
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }


  .far {
    margin: 0 .5rem;
    font-size: 2rem;
  }

  .Comments-users-likes {
    padding: 0 20px;
  }

  .Comments-list-comments {
    padding: 0 10px;
    list-style: none;
  }

  .Comments-comment-container {
    display: flex;
    margin: .5rem .5rem;
    justify-content: space-between;
  }

  .Comments-comment-container a {
    color: #262626;;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    margin: 0 5px 0 0;
    padding: 0;
  }

  .Comments-comment-container i {
    font-size: 12px;
  }

  .Comments-create-comment {
    display: flex;
    border-top: 1px solid #dbdbdb;
    padding: 0 0 0 20px;
  }

  .active-like {
    color: #bc1888;
    animation: bounce linear 0.8s;
    animation-iteration-count: 1;
    transform-origin: 20% 20%;
  }

  .active-bookmark {
    color: #f09433;
  }

  #text {
    border: none;
    resize: none;
    overflow: none;
    width: 100%;
    height: 60px;
    margin: 0;
    padding: 1rem 0;
    box-sizing: border-box;
  }

  #text:focus {
    outline: none;
  }

  #button {
    border: none;
    background-color: #fafafa;
    color: #0095f6;
  }

  #button:hover {
    cursor: pointer;
  }

  #button:focus {
    outline: none;
  }

  @keyframes bounce {
    0% {
      transform: translate(0px, 0px);
    }
    15% {
      transform: translate(0px, -25px);
    }
    30% {
      transform: translate(0px, 0px);
    }
    45% {
      transform: translate(0px, -15px);
    }
    60% {
      transform: translate(0px, 0px);
    }
    75% {
      transform: translate(0px, -5px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }

  @media screen and (max-width: 800px) {
    .Comments-create-comment {
      display: flex;
      border-top: 1px solid #dbdbdb;
      padding: 0 20px;
    }
  }

  @media screen and (max-width: 767px) {
    .Comments-create-comment {
      display: flex;
      border-top: 1px solid #dbdbdb;
      padding: 0 20px;
    }
  }

  @media screen and (max-width: 480px) {
    .Comments-create-comment {
      display: flex;
      border-top: 1px solid #dbdbdb;
      padding: 0 20px;
    }
  }

  @media screen and (max-width: 320px) {
    .Comments-create-comment {
      display: flex;
      border-top: 1px solid #dbdbdb;
      padding: 0 20px;
    }
  }

</style>

<div class="Comments">
  {#if isModal}
    <div transition:blur>
      <Modal>
        <Share on:click={handleClick} />
      </Modal>
    </div>
  {/if}
  <div class="Comments-content">
    <div class="Comments-content-icons">
      <ul class="Comments-list-icons">
        <li>
          <i
            class="far fa-heart"
            class:active-like={like}
            on:click={handleLike}
          />
          <i class="far fa-comment" />
          <i class="far fa-paper-plane" on:click={handleClick} />
        </li>
        <li>
          <i
            class="far fa-bookmark"
            class:active-bookmark={bookmark}
            on:click={() => (bookmark = !bookmark)}
          />
        </li>
      </ul>
      <div class="Comments-users-likes">
        <h4>Les gusta a {user.first_name} y <strong> otras aves </strong></h4>
      </div>
    </div>
    <div>
      <ul class="Comments-list-comments">
        <li class="Comments-comment-container">
          <span>
            <a href="/">{user.first_name}</a>
            {alt_description}
          </span>
          <div>
            <i class="far fa-heart"></i>
          </div>
        </li>
        {#each userPosts as post (post.id)}
          <li class="Comments-comment-container">
            <span>
              <a href="/">{post.username}</a>
              {post.text}
            </span>
            <div>
              <i
                class="far fa-heart"
                class:active-like={like}
                on:click={handleLike}
              />
            </div>
          </li>
        {/each}
      </ul>
    </div>
    <form class="Comments-create-comment" id="form" on:submit|preventDefault={addComment}>
      <input type="text" id="text" placeholder="Agrega un comentario"/>
      <button id="button" type="submit">Publicar</button>
    </form>
  </div>
</div>