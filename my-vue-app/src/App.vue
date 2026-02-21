<script setup>
import { ref } from 'vue';
const termsWindowSize = ref(0);

function updateTermsWindowSize(unit, amount) {
  console.log('updateTermsWindowSize', unit, amount);
  termsWindowSize.value = { [unit]: amount };
}

// import { ref, onMounted } from 'vue';

// // リアクティブな状態
// const count = ref(0);

// // 状態を変更し更新トリガーする関数
// function increment() {
//   count.value++;
// }

// // ライフサイクルフック
// onMounted(() => {
//   console.log(`The initial count is ${count.value}.`);
// });
</script>

<template>
  <!-- <button @click="increment">Count is: {{ count }}</button> -->
  <ElastalertTimePicker
    id="termsWindowSize"
    :unit="Object.keys(termsWindowSize)[0]"
    :amount="Object.values(termsWindowSize)[0]"
    @update:modelValue="updateTermsWindowSize"
  />
</template>
