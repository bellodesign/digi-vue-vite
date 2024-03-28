<script setup lang="ts">
import { CodeBlockLanguage } from '@digi/core';

const codeBlock = `
plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('digi-')
      }
    }
  })]
`;
</script>

<template>
  <digi-typography>
    <digi-layout-block>
      <h1>Digi - vue/vite</h1>
      <p>A lab that uses components created by The Swedish Public Employment Service</p>
    </digi-layout-block>
    <digi-layout-block>
      <digi-expandable-accordion af-heading="Lab information">
        <p>This is a Vue environment created with Vite</p>
        <p>To avoid warnings in console this was added to <digi-code af-code="vite.config.ts" />:</p>
        <p>
          <digi-code-block :af-code="codeBlock" :af-language="CodeBlockLanguage.JAVASCRIPT" />
        </p>
      </digi-expandable-accordion>
    </digi-layout-block>
  </digi-typography>
</template>
