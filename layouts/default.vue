<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui';

const layout = useCookie<number[]>('splitter:layout', { default: () => [] });

provide('layout', layout);
</script>

<template>
  <SplitterGroup
    direction="horizontal"
    class="fixed inset-0"
    @layout="layout = $event"
  >
    <SplitterPanel
      v-slot="{ isCollapsed }"
      :min-size="10"
      collapsible
      :collapsed-size="0"
      :default-size="layout[0]"
      class="min-w-16"
    >
      {{ isCollapsed }}

      <div class="flex flex-col gap-2">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/inbox">Inbox</NuxtLink>
      </div>
    </SplitterPanel>

    <SplitterResizeHandle class="w-px bg-neutral-200" />

    <slot />
  </SplitterGroup>
</template>
