import App from './containers/App.svelte';

const app = new App({
  target: document.querySelector('body')
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .catch((error) => console.log(error.message));
};

export default app;
