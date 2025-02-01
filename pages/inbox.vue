<script setup lang="ts">
import { SplitterPanel, SplitterResizeHandle } from 'reka-ui';

const layout = inject('layout');
</script>

<template>
  <SplitterPanel :min-size="20" :default-size="layout[1]">
    <h1>Inbox</h1>
  </SplitterPanel>

  <SplitterResizeHandle class="w-px bg-neutral-200" />

  <SplitterPanel :min-size="20" :default-size="layout[2]">
    Panel
  </SplitterPanel>
</template>