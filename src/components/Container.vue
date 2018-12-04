<template>
  <div>
    <ul>
      <li><router-link to="/">to top</router-link></li>
      <li><router-link to="/foo">to foo</router-link></li>
      <li><router-link to="/abc">broken link</router-link></li>
    </ul>
    <router-view />
  </div>
</template>
