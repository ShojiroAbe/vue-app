<template>
  <main>
    <h2>TopView</h2>

    <div class="cards">
      <div v-for="(n, index) in 12" key="index" class="item">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
.cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

.item {
  width: 33%;
  max-width: 350px;
}
</style>
