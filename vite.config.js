import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: "loader.js",
        formats: ["iife"],
        name: "pixelperfect",
      },
      rollupOptions: {
        output: {
          entryFileNames: "pixelperfect.min.js",
        },
      },
    },
    publicDir: false,
  };
});
