<script setup lang="ts">
import CComponent from "../api/CComponent.vue";
const opened = defineModel<boolean>();
</script>

<template>
  <div class="idrawer-container" v-if="opened" @click.self="opened = false">
    <div class="idrawer-popout">
      <CComponent name="AMQueue"></CComponent>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.idrawer-container {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 999;
  background: rgb(0 0 0 / 25%);
  animation: fadeIn 0.3s var(--ease_appleSpring);
}
.idrawer-popout {
  overflow: hidden;
  width: 300px;
  background: rgb(0 0 0 / 80%);
  padding: 1em 0 1em 0;
  animation: drawerIn 0.3s var(--ease_appleSpring);
  margin: 2em;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 50%), 0 0 0px 1px rgb(255 255 255 / 30%);
  backdrop-filter: blur(16px) saturate(180%);

  @keyframes drawerIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
}
</style>
