<template>
  <main>
    <div class="article">
      <div class="article_header">
        <div class="titele">タイトルが入ります</div>
        <div class="meta_data">
          <ul>
            <li>作成日：00/00/00/00</li>
            <li>作成者：作成者が入ります</li>
          </ul>
        </div>
      </div>
      <div class="article_content">
        <div class="text">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </div>
      </div>
      <div class="login_only">
        <ul class="buttons">
          <li>
            <a class="waves-effect waves-light btn">編集</a>
          </li>
          <li>
            <a class="waves-effect waves-light btn">記事の削除</a>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.article {
  width: 60%;
  max-width: 1030px;
  border: 0.1rem solid #9e9e9e;
  border-radius: 2rem;
  margin: 10rem auto;
  padding: 2rem;
}

.article_header {
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  border-bottom: 0.1rem solid #9e9e9e;
}

.titele {
  text-align: center;
  font-size: 1.5rem;
}

.meta_data {
  display: flex;
  justify-content: end;
}

.meta_data ul {
  width: 400px;
  display: flex;
  justify-content: space-around;
}

/* ログイン時のみ適用 */
.login_only {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 0.1rem solid #9e9e9e;
}

.buttons {
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
}

.buttons a {
  width: 120px;
}
</style>
