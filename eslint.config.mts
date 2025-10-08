import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,ts}"], plugins: { js, typescript: tseslint }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,

  globalIgnores(["**/build/**", "**/node_modules/**"]),
]);
