<template>
  <main>
    <div class="editor">
      <div class="titele">記事作成</div>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input v-model="edit_title" type="text" class="validate">
              <label for="title">タイトル</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input v-model="edit_text" type="text" class="validate">
              <label for="text">本文</label>
            </div>
          </div>
        </form>
      </div>
      <!-- タイトルと本文のどちらかが空の場合はエラーを出す -->
      <div v-if="!edit_title || !edit_text">
        エラー：タイトル、本文を入力してください。
      </div>
      <ul class="buttons">
        <li>
          <!-- クリック後、「この内容で記事を作成しますか」というアラート？モーダル？を出す -->
          <div @click="upLoad" class="waves-effect waves-light btn">
            記事の登録
          </div>
        </li>
        <li>
          <div @click="resetInput" class="waves-effect waves-light btn">
            取り消し
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const edit_title = ref('')
const edit_text = ref('')

const upLoad = () => {
  // アップロードする
  console.log(edit_title.value);
  console.log(edit_text.value);
}

const resetInput = () => {
  edit_title.value = ''
  edit_text.value = ''
}

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
