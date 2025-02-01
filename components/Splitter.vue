<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui';

const layout = useCookie<number[]>('splitter:layout', { default: () => [] });
</script>

<template>
  <SplitterGroup
    direction="horizontal"
    style="height: 100vh"
    @layout="layout = $event"
  >
    <SplitterPanel
      v-slot="{ isCollapsed }"
      :min-size="20"
      collapsible
      :collapsed-size="10"
      :default-size="layout[0]"
    >
      Panel A: {{ isCollapsed }}
    </SplitterPanel>
    <SplitterResizeHandle style="background: red; width: 2px" />
    <SplitterPanel :min-size="20" :default-size="layout[1]">
      Panel B
    </SplitterPanel>
  </SplitterGroup>
</template>
