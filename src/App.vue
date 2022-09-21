<template>
  <div>
    <div class="menu">
      <nav>
        <ul>
          <li>
            <strong>NEWS-DAY</strong>
            company
          </li>
        </ul>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/news">Noticia</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.menu {
  padding: 0 2em 0 2em;
}
</style>
