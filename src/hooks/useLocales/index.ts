import { useI18n } from 'vue-i18n';

function useLocales() {
  const { locale } = useI18n();

  const switchLocale = () => {
    locale.value = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN';
  };

  return {
    locale,
    switchLocale
  };
}

export default useLocales;
