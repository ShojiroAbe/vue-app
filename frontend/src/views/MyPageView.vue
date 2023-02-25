<template>
  <main>
    <div class="form">
      <div class="titele">MY PAGE</div>
      <div class="row">
        <form class="col s12">
          <div class="row">name:{{ userDetail.username }}</div>
          <div class="row">mail:{{ userDetail.email }}</div>
          <div class="row">pass:{{ userDetail.pass }}</div>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/MyPageView/userData.store";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const userStore = useUserStore();
const userId = computed(() => route.params.id.toString());
const userDetail = computed(() => userStore.getUserModel());

console.log(userId.value);
console.log(userDetail);

// ページがマウントされたときに、getUserアクションを呼び出す
onMounted(async () => {
  try {
    const data = await userStore.getUserDetail(userId.value);
    console.log(data);
    console.log(userDetail.value.username);
    console.log(userDetail.value.email);
    console.log(userDetail.value.pass);
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped>
.titele {
  text-align: center;
  font-size: 1.5rem;
}

.form {
  /* width: 30%; */
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

.buttons a {
  width: 95px;
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
