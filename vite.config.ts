import {defineConfig} from "vite";
// @ts-ignore
import path from "path";
import {svelte} from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: {
			$lib: path.resolve("./src/lib"),
			$assets: path.resolve("./src/assets"),
		},
	},
});
