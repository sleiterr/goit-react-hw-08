import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // це вказує на те, що зібрані файли будуть у директорії dist
    sourcemap: true,
  },
});
