import { ref, computed, readonly, watch } from 'vue';
import lightTheme from '@/themes/light.json';
import darkTheme from '@/themes/dark.json';

type Theme = 'light' | 'dark';

const styleEl = document.createElement('style');
styleEl.setAttribute('id', 'css-var-definition');
styleEl.setAttribute('type', 'text/css');
document.head.appendChild(styleEl);
const styleSheet = styleEl.sheet;
const idx = styleSheet?.insertRule(':root{}') || 0;
// @ts-ignore
const style = styleSheet?.cssRules?.[idx]?.style;

function useTheme() {
  const media = window.matchMedia('(prefers-color-scheme:dark)');
  const initTheme: Theme = media.matches ? 'dark' : 'light';
  const theme = ref<Theme>(initTheme);
  const isDarkTheme = computed(() => theme.value === 'dark');

  const themeToCssVars: Record<Theme, Record<string, string>> = {
    light: lightTheme,
    dark: darkTheme
  };

  const setCSSVar = (prop: string, val: string | null) => {
    if (prop) {
      style?.setProperty(`--${prop}`, val);
    }
    return `--${prop}`;
  };

  const setTheme = (value: Theme) => {
    theme.value = value;
  };

  const switchTheme = () => {
    setTheme(theme.value === 'light' ? 'dark' : 'light');
  };

  watch(
    theme,
    value => {
      const cssVars = themeToCssVars[value];
      Object.entries(cssVars).forEach(([key, cssVarValue]) => {
        setCSSVar(key, cssVarValue);
      });
    },
    { immediate: true }
  );

  return {
    theme: readonly(theme),
    isDarkTheme,
    setTheme,
    switchTheme
  };
}

export default useTheme;
