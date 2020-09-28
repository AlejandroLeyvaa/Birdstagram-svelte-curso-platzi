<script>
  import { onMount } from 'svelte';
  import Unsplash, { toJson } from 'unsplash-js';

  import Header from '../components/Header.svelte';
  import Stories from '../components/Stories.svelte';
  import Sidebar from '../components/Sidebar.svelte';
  import Article from '../components/Article.svelte';
  import TimeLine from '../components/TimeLine.svelte';

  let data = {};
  let unsplashBlueBirds = {};
  let unsplashRedBirds = {};

  export let userPosts = [];

  const API = 'https://api-test-dgq3yc84l.vercel.app/api/post';

  onMount (async () => {
    const response = await fetch(API);
    data = await response.json();

    const unsplash = new Unsplash({
      accessKey: process.env.ACCESS_KEY
    });

    unsplash.search.photos('birds', 1, 10, {
      orientation: 'portrait',
      color: 'blue'
    })
    .then(toJson)
    .then((json) => {
      unsplashBlueBirds = json;
    });

    unsplash.search.photos('birds', 1, 10, {
      orientation: 'portrait',
      color: 'red'
    })
    .then(toJson)
    .then((json) => {
      unsplashRedBirds = json;
      console.log(unsplashRedBirds);
    });
  });
</script>

<Stories {...unsplashBlueBirds} />
{#if data.user}
  <Sidebar {...data} posts={data.posts} {...unsplashRedBirds} />
{/if}
<Article>
  <TimeLine {...unsplashBlueBirds} {userPosts} />
</Article>