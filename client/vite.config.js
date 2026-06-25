import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // any request in /api then you set your target
        target: "http://localhost:4000", // server URL
        changeOrigin:true
      },
    },
  },
});
