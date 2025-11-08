<template>
  <div class="home-page">
    <div class="page-title">
      <TextParticleWord />
    </div>
    <p class="page-description">
      {{ t('page.home.welcome') }}
    </p>
    <p class="page-hint">
      {{ t('page.home.hint') }}
    </p>
  </div>
</template>

<script setup lang="ts">

import {computed} from 'vue'

definePageMeta({
  layout: 'default'
})

const { t } = useI18n()
</script>

<style scoped>
.home-page {
  padding: 2rem 0 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.page-title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
}

.page-description {
  font-size: var(--font-size-xl);
  color: var(--theme-text-primary);
  line-height: 1.5;
}

.page-hint {
  font-size: var(--font-size-md);
  color: var(--theme-text-secondary);
  line-height: 1.5;
}


</style>
