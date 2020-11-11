import { reactive, toRefs } from "vue";

export default function store() {
  const state = reactive({
    message: "Hello",
    startFlag: false,
  });

  const updateMessage = (message) => {
    state.message = message;
  };

  const updateStart = () => {
    startFlag.value = true;
  };

  return { ...toRefs(state), updateMessage, updateStart };
}
