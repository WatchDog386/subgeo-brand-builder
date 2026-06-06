import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [react(), tailwindcss(), tsconfigPaths()],
	server: {
		host: "0.0.0.0",
<<<<<<< HEAD
		port: 5173,
=======
		port: 8080,
		strictPort: false,
	},
	preview: {
		host: "0.0.0.0",
		port: 8080,
		strictPort: false,
>>>>>>> a5a45ed9d2c87926bfbef2ac01c730ed6ad25396
	},
});
