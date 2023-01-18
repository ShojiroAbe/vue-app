<template>
  <main>
    <div class="editor">
      <div class="titele">記事作成</div>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate">
              <label for="password">タイトル</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate">
              <label for="email">本文</label>
            </div>
          </div>
        </form>
      </div>
      <ul class="buttons">
        <li>
          <a class="waves-effect waves-light btn">記事の登録</a>
        </li>
        <li>
          <a class="waves-effect waves-light btn">取り消し</a>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
.titele {
  text-align: center;
  font-size: 1.5rem;
}

.editor {
  width: 70%;
  border: 0.1rem solid #9e9e9e;
  border-radius: 2rem;
  margin: 10rem auto 0;
  padding: 2rem;
}

.buttons {
  display: flex;
  justify-content: space-around;
}

.buttons a {
  width: 120px;
}
</style>
