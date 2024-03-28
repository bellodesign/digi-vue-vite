<script setup lang="ts">
import { ButtonVariation } from '@digi/core';
</script>

<template>
  <digi-typography>
    <digi-layout-block>
      <h1>Digi - vue/vite</h1>
      <digi-button :af-variation="ButtonVariation.FUNCTION">
        <digi-icon-copy slot="icon" />Kopiera</digi-button>
    </digi-layout-block>
  </digi-typography>
</template>
