import { ref, onMounted } from 'vue';

export function useElastalertTimePicker(props, emit) {
  const currentUnit = ref('minutes');
  const currentAmount = ref(888);

  onMounted(() => {
    console.log('ElastalertTimePicker mounted');
    currentUnit.value = props.unit;
    currentAmount.value = props.amount;
  });

  const plural = () => {
    console.log('plural', currentAmount.value);
    return currentAmount.value !== 1 ? 's' : '';
  };

  const emitNumKeyup = (ev) => {
    if (ev.target) {
      console.log('emitNumKeyup', ev.target.value);
      currentAmount.value = parseInt(ev.target.value);
      emitValue();
    }
  };

  const emitValue = () => {
    emit('update:modelValue', {
      unit: currentUnit.value,
      amount: currentAmount.value,
    });
  };

  return {
    currentUnit,
    currentAmount,
    plural,
    emitNumKeyup,
    emitValue,
  };
}
