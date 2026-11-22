import type { Config } from "tailwindcss";
import { THEMES } from "./design-tokens/themes.ts";
import { buildTokens } from "./design-tokens/build.ts";
// Só cores semânticas: a paleta padrão do Tailwind não existe, então cor fixa não compila.
const keys = Object.keys(buildTokens(THEMES[0].dark!, "dark"));
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { colors: { ...Object.fromEntries(keys.map(k => [k, `var(--${k})`])), transparent: "transparent", current: "currentColor" } },
  plugins: []
} satisfies Config;
