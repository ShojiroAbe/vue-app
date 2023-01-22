<template>
  <main>
    <div class="form">
      <div class="titele">LOG IN</div>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input v-model="edit_email" type="email" class="validate" />
              <label for="email">メールアドレス</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input v-model="edit_password" type="password" class="validate" />
              <label for="password">パスワード</label>
            </div>
          </div>
          <ul class="buttons">
            <li>
              <router-link
                to="/signup"
                class="waves - effect waves - light btn - small"
              >
                新規登録
              </router-link>
            </li>
            <li>
              <!-- ログインが成功した場合TOP（ログイン状態を保持）に飛ばす挙動を実装、失敗した場合（パスが違う登録情報がそもそもない等）エラーメッセージを出す -->
              <router-link
                @click="upLoad"
                to="/login"
                class="waves - effect waves - light btn - small"
              >
                LOG IN
              </router-link>
            </li>
          </ul>
          <!-- ここにエラーメッセージを出す -->
          <div class="reset">
            <p>パスワードを忘れてしまった場合（仮）</p>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const edit_email = ref("");
const edit_password = ref("");

const upLoad = () => {
  // 認証（バリデーションにかける）する
  console.log(edit_email.value);
  console.log(edit_password.value);
};
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
  margin-bottom: 2rem;
}

.buttons a {
  width: 90px;
}

.reset {
  text-align: center;
}

.reset p {
  width: fit-content;
  margin: 0 auto;
}

.reset p:hover {
  cursor: pointer;
  border-bottom: 0.1rem solid #9e9e9e;
}
</style>
