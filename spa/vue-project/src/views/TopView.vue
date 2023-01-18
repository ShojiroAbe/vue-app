<template>
  <main>
    <div class="cards">
      <div v-for="(n, index) in 12" key="index" class="item">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">タイトルが入ります</span>
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
            <ul class="card-action meta_data">
              <li>作成日：00/00/00/00</li>
              <li>作成者：作成者が入ります</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
main {
  padding-top: 5rem;
}
.cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

.item {
  width: 33%;
  max-width: 350px;
}

.meta_data {
  color: #fff;
  font-size: 0.8rem;
}
</style>
