import { defineComponent, onMounted } from "vue";

import loadPixelperfect from "../index.js";

export default defineComponent({
  name: "PixelperfectTool",
  props: {
    options: {
      default: () => ({}),
      type: Object,
    },
  },
  setup(props, { slots }) {
    if (import.meta.dev) {
      onMounted(() => {
        loadPixelperfect(props.options);
      });
    }
    return () => slots.default?.();
  },
});
