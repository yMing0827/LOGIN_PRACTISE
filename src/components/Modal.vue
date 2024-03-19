<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <h2>{{ modalTitle }}</h2>
      <p>{{ modalMessage }}</p>
      <div class="button-group">
        <button v-if="confirmBtnShow" @click="handleConfirm">确认</button>
        <button v-if="cancelBtnShow" @click="handleCancel">取消</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['showModal', 'modalTitle', 'modalMessage', 'confirmBtnShow', 'cancelBtnShow']);
const emits = defineEmits(['confirm', 'cancel']);

const handleConfirm = () => {
  emits('confirm');
};

const handleCancel = () => {
  emits('cancel');
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 10px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

button {
  margin: 0 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;
}
</style>
