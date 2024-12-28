import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/https://msharizal.github.io/OpsTenang/', // Add this line
  plugins: [react()],
});
