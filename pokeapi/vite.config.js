import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Asegúrate de incluir dependencias críticas aquí
  },
});

