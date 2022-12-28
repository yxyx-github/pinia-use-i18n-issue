<template>
  <p>I18n-Test: {{ $t('success') }}</p>
  <p>I18n-Test (from store): {{ exampleStore.doSthWithI18n() }}</p>
</template>

<script setup lang="ts">
import { useExampleStore } from 'stores/example-store'

const exampleStore = useExampleStore()
</script>
