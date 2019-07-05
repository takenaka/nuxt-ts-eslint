<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import appStore from '@/stores/app';

@Component
export default class extends Vue {
  private appStore = appStore;

  created() {
    appStore.title = 'test';
  }
}
</script>

<template>
  <h1>{{ appStore.title }}</h1>
</template>
