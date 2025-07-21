import { ref, watch } from 'vue';

export function useModelWrapper(props: any, emit: any, modelName = 'modelValue', eventName = 'change') {
  const modelValue = ref(props[modelName]);

  watch(
    () => props[modelName],
    (newVal) => {
      modelValue.value = newVal;
    }
  );

  const handleChange = (value: any) => {
    modelValue.value = value;
    emit(`update:${modelName}`, value);
    emit(eventName, value);
  };

  return {
    modelValue,
    handleChange
  };
}