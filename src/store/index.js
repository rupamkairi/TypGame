import { ref, reactive, toRefs, onMounted, onUnmounted } from "vue";

export default function store() {
  const state = reactive({});

  return { ...toRefs(state) };
}

const timer = ref(false);
export function useTimer() {
  const toggleTimer = () => {
    if (timer.value == true) {
      timer.value = false;
    } else {
      timer.value = true;
    }
  };

  const startTimer = () => {
    timer.value = true;
  };

  const stopTimer = () => {
    timer.value = false;
  };

  return { timer, toggleTimer, startTimer, stopTimer };
}

const mistakes = ref([]);
export function useMistakes() {
  const madeMistakes = (indexValue) => {
    if (mistakes.value.includes(indexValue) == false) {
      mistakes.value.push(indexValue);
    }
  };

  return { mistakes, madeMistakes };
}
