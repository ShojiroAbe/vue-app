<template>
  <header>
    <h1>
      <router-link to="/"> Header </router-link>
    </h1>

    <div class="nav">
      <ul>
        <li>
          <a class="waves-effect waves-light btn-small">検索(仮)</a>
        </li>
        <li>
          <router-link
            to="/edit"
            class="waves - effect waves - light btn - small"
          >
            記事作成
          </router-link>
        </li>
        <li>
          <router-link
            to="/signup"
            class="waves - effect waves - light btn - small"
          >
            SIGN UP
          </router-link>
        </li>
        <li>
          <router-link
            to="/login"
            class="waves - effect waves - light btn - small"
          >
            LOG IN
          </router-link>
        </li>
        <li>
          <router-link
            to="/mypage"
            class="waves - effect waves - light btn - small"
          >
            MY PAGE
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  width: 100%;
  padding: 1rem 3rem;
  box-sizing: border-box;
  justify-content: space-between;
  background-color: aquamarine;
  display: flex;
}

.nav {
  width: 30%;
  display: flex;
  align-items: center;
}

ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
