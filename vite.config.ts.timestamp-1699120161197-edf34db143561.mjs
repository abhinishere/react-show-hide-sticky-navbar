// vite.config.ts
import { defineConfig } from "file:///Users/abhin/react-show-hide-sticky-navbar/node_modules/vite/dist/node/index.js";
import react from "file:///Users/abhin/react-show-hide-sticky-navbar/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///Users/abhin/react-show-hide-sticky-navbar/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///Users/abhin/react-show-hide-sticky-navbar/node_modules/vite-plugin-lib-inject-css/dist/index.mjs";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "file:///Users/abhin/react-show-hide-sticky-navbar/node_modules/glob/dist/esm/index.js";
var __vite_injected_original_dirname = "/Users/abhin/react-show-hide-sticky-navbar";
var __vite_injected_original_import_meta_url = "file:///Users/abhin/react-show-hide-sticky-navbar/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ["lib"] })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/main.ts"),
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(
        glob.sync("lib/**/*.{ts,tsx}").map((file) => [
          relative("lib", file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYWJoaW4vcmVhY3Qtc2hvdy1oaWRlLXN0aWNreS1uYXZiYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9hYmhpbi9yZWFjdC1zaG93LWhpZGUtc3RpY2t5LW5hdmJhci92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYWJoaW4vcmVhY3Qtc2hvdy1oaWRlLXN0aWNreS1uYXZiYXIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5pbXBvcnQgeyBsaWJJbmplY3RDc3MgfSBmcm9tIFwidml0ZS1wbHVnaW4tbGliLWluamVjdC1jc3NcIjtcbmltcG9ydCB7IGV4dG5hbWUsIHJlbGF0aXZlLCByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tIFwibm9kZTp1cmxcIjtcbmltcG9ydCB7IGdsb2IgfSBmcm9tIFwiZ2xvYlwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIGxpYkluamVjdENzcygpLCBkdHMoeyBpbmNsdWRlOiBbXCJsaWJcIl0gfSldLFxuICBidWlsZDoge1xuICAgIGNvcHlQdWJsaWNEaXI6IGZhbHNlLFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBcImxpYi9tYWluLnRzXCIpLFxuICAgICAgZm9ybWF0czogW1wiZXNcIl0sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1wicmVhY3RcIiwgXCJyZWFjdC9qc3gtcnVudGltZVwiXSxcbiAgICAgIGlucHV0OiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgIGdsb2JcbiAgICAgICAgICAuc3luYyhcImxpYi8qKi8qLnt0cyx0c3h9XCIpXG4gICAgICAgICAgLm1hcCgoZmlsZSkgPT4gW1xuICAgICAgICAgICAgcmVsYXRpdmUoXCJsaWJcIiwgZmlsZS5zbGljZSgwLCBmaWxlLmxlbmd0aCAtIGV4dG5hbWUoZmlsZSkubGVuZ3RoKSksXG5cbiAgICAgICAgICAgIGZpbGVVUkxUb1BhdGgobmV3IFVSTChmaWxlLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICAgICBdKVxuICAgICAgKSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBhc3NldEZpbGVOYW1lczogXCJhc3NldHMvW25hbWVdW2V4dG5hbWVdXCIsXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcIltuYW1lXS5qc1wiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdULFNBQVMsb0JBQW9CO0FBQzdVLE9BQU8sV0FBVztBQUNsQixPQUFPLFNBQVM7QUFDaEIsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxTQUFTLFVBQVUsZUFBZTtBQUMzQyxTQUFTLHFCQUFxQjtBQUM5QixTQUFTLFlBQVk7QUFOckIsSUFBTSxtQ0FBbUM7QUFBbUosSUFBTSwyQ0FBMkM7QUFTN08sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxhQUFhLEdBQUcsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUEsRUFDNUQsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLElBQ2YsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUN2QyxTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2hCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxtQkFBbUI7QUFBQSxNQUN2QyxPQUFPLE9BQU87QUFBQSxRQUNaLEtBQ0csS0FBSyxtQkFBbUIsRUFDeEIsSUFBSSxDQUFDLFNBQVM7QUFBQSxVQUNiLFNBQVMsT0FBTyxLQUFLLE1BQU0sR0FBRyxLQUFLLFNBQVMsUUFBUSxJQUFJLEVBQUUsTUFBTSxDQUFDO0FBQUEsVUFFakUsY0FBYyxJQUFJLElBQUksTUFBTSx3Q0FBZSxDQUFDO0FBQUEsUUFDOUMsQ0FBQztBQUFBLE1BQ0w7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
