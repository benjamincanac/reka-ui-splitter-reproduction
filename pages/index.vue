<script setup lang="ts">
import { SplitterPanel } from 'reka-ui';

const layout = inject('layout');
</script>

<template>
  <SplitterPanel :min-size="20" :default-size="layout[1]">
    <h1>Home</h1>
  </SplitterPanel>
</template>