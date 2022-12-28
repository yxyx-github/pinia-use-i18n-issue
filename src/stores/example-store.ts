import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n'

export const useExampleStore = defineStore('example', () => {
  const i18n = useI18n()

  function doSthWithI18n() {
    return i18n.t('failed')
  }

  return {
    doSthWithI18n,
  }
});
