<template>
  <main>
    <div class="form">
      <div class="titele">SIGN UP</div>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <!-- 各項目にバリデーションをかける -->
            <div class="input-field col s12">
              <input v-model="edit_username" type="text" class="validate">
              <label for="username">ユーザーネーム</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input v-model="edit_email" type="email" class="validate">
              <label for="email">メールアドレス</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input v-model="edit_password" type="password" class="validate">
              <label for="password">パスワード</label>
            </div>
          </div>
          <ul class="buttons">
            <li>
              <a @click="upLoad" class="waves-effect waves-light btn">
                新規作成</a>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const edit_username = ref('')
const edit_email = ref('')
const edit_password = ref('')

const upLoad = () => {
  // アップロードする
  console.log(edit_username.value);
  console.log(edit_email.value);
  console.log(edit_password.value);
}

</script>

<style scoped>
.titele {
  text-align: center;
  font-size: 1.5rem;
}

.form {
  width: 30%;
  max-width: 800px;
  border: 0.1rem solid #9e9e9e;
  border-radius: 2rem;
  margin: 10rem auto 0;
  padding: 2rem;
}

.buttons {
  display: flex;
  justify-content: space-around;
}

.buttons a{
  width: 95px;
}

.reset {
  text-align: center;
}

.reset p{
  width: fit-content;
  margin: 0 auto;
}

.reset p:hover{
  cursor: pointer;
  border-bottom: 0.1rem solid #9e9e9e;
}
</style>
