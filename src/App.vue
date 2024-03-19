<template>
  <div class="login">
    <h1>登录</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">登 录</button>
    </form>
    <div style="margin-top: 20px;">
      <button @click="showModal = true">模态框</button>
      <Modal :showModal="showModal" :modalTitle="modalTitle" :modalMessage="modalMessage"
        :confirmBtnShow="confirmBtnShow" :cancelBtnShow="cancelBtnShow" @confirm="handleConfirm"
        @cancel="handleCancel" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
// import { http } from './utils/http'
import { loginApiCtl } from './api/login';
import Modal from './components/Modal.vue';

const showModal = ref(false);
const modalTitle = ref('标题');
const modalMessage = ref('内容');
const confirmBtnShow = ref(true);
const cancelBtnShow = ref(true);

const handleConfirm = () => {
  console.log('Confirmed');
  showModal.value = false;
};

const handleCancel = () => {
  console.log('Canceled');
  showModal.value = false;
};

interface FormState {
  username: string;
  password: string;
}

const formInline = reactive({
  username: 'admin',
  password: '123456',
});

const { username, password } = formInline;

const params: FormState = {
  username,
  password,
};

const login = () => {
  // http.request({
  //   url: '/login',
  //   method: 'POST',
  //   params,
  // }).then((res) => { console.log(res) })

  
  loginApiCtl(params).then(res=>{
    console.log("res====>",res)
  })

};


</script>

<style>

.login {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border-radius: 3px;
  border: 1px solid #ccc;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
