import Vue from 'vue';
import App from './components/App.vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    render: h => h(App),
  }).$mount('#app');
});
