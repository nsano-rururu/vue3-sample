<template>
  <span class="elastalert-timepicker">
    <!-- native modifier has been removed, please confirm whether the function has been affected  -->
    <el-input-number
      v-model="currentAmount"
      :min="allowZero ? 0 : 1"
      @keyup="emitNumKeyup"
      @update:modelValue="emitValue"
    />

    <el-select v-model="currentUnit" @update:modelValue="emitValue">
      <el-option :label="`Second${plural()}`" value="seconds" />
      <el-option :label="`Minute${plural()}`" value="minutes" />
      <el-option :label="`Hour${plural()}`" value="hours" />
      <el-option :label="`Day${plural()}`" value="days" />
      <el-option :label="`Week${plural()}`" value="weeks" />
    </el-select>
  </span>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useElastalertTimePicker } from '../composables/useElastalertTimePicker';

const props = defineProps({
  unit: {
    type: String,
    default: 'minutes',
  },
  amount: {
    type: Number,
    default: 888,
  },
  allowZero: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Object,
    default: () => ({ unit: 'minutes', amount: 888 }),
  },
});
const emit = defineEmits(['update:modelValue']);

const { currentUnit, currentAmount, plural, emitNumKeyup, emitValue } =
  useElastalertTimePicker(props, emit);
</script>
<style scoped>
.el-input-number {
  margin-right: 10px;
  width: 110px;
}

.el-select {
  width: 110px;
}
</style>
