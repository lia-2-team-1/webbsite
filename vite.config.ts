import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "process.env.SOME_KEY": JSON.stringify(env.SOME_KEY),
      "process.env.REACT_APP_RESEND_KEY": JSON.stringify(env.REACT_APP_RESEND_KEY),
    },
    plugins: [react()],
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
  };
});
