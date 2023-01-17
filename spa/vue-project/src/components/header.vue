<template>
  <header>
    <h1>Header</h1>
    
    <div class="nav">
      <ul>
        <li>
          <a class="waves-effect waves-light btn-small">検索(仮)</a>
        </li> 
        <li>
          <a class="waves-effect waves-light btn-small">LOG IN</a>
        </li> 
        <li>
          <a class="waves-effect waves-light btn-small">SIGN IN</a>
        </li>
      </ul>
    </div>
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