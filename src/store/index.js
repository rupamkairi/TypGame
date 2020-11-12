import { ref, reactive, toRefs, onMounted, onUnmounted } from "vue";

export default function store() {
  const state = reactive({
    message: "Hello",
  });

  const updateMessage = (message) => {
    state.message = message;
  };

  return { ...toRefs(state), updateMessage };
}

export function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  function update(e) {
    x.value = e.pageX;
    y.value = e.pageY;
  }

  onMounted(() => {
    window.addEventListener("mousemove", update);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", update);
  });

  return { x, y };
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
