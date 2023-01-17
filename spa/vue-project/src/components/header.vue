<template>
  <header>
    <h1>Header</h1>
    
    <nav>
      <ul>
        <li>検索(仮)</li> 
        <li>Log In</li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
header {
    width: 100%;
    padding: 1rem 3rem;
    box-sizing: border-box;
    justify-content: space-between;
    background-color: aquamarine;
    display: flex;
  }

  nav {
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