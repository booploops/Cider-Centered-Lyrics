<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';

const centeredLyricsTopOffset = useLocalStorage('centered-lyrics-top-offset', 45);
const opened = defineModel<boolean>();

const settingsActive = ref(false);
</script>

<template>
  <transition name="idrawer-transition">
    <div
      class="idrawer-container"
      v-if="opened"
      @click.self="opened = false"
    >
      <div class="idrawer-popout plugin-base">
        <button
          label="Settings"
          class="config-button passive-button"
          icon="fa fa-cogs"
          @click="settingsActive = !settingsActive"
          :class="{
            'bg-primary text-white': settingsActive,
          }"
        >
          <cider-qicon
            name="settings"
            size="18px"
          ></cider-qicon>
        </button>
        <div
          class="full-height"
          v-if="!settingsActive"
        >
          <cider-amqueue></cider-amqueue>
        </div>
        <div
          class="settings-content q-px-md"
          v-else
        >
          <div class="text-h5 text-bold q-mb-md">Settings</div>

          <label>
            Lyrics Top Offset
            <input
              class="full-width"
              placeholder="Size"
              type="number"
              v-model="centeredLyricsTopOffset"
            />
          </label>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.idrawer-container {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 999;
  background: rgb(0 0 0 / 25%);
}

.idrawer-transition-enter-active,
.idrawer-transition-leave-active {
  transition: opacity 0.3s var(--ease_appleSpring);
}

.idrawer-transition-enter-from,
.idrawer-transition-leave-to {
  opacity: 0;
}

.idrawer-transition-enter-active .idrawer-popout,
.idrawer-transition-leave-active .idrawer-popout {
  transition: transform 0.3s var(--ease_appleSpring), opacity 0.3s var(--ease_appleSpring);
}

.idrawer-transition-enter-from .idrawer-popout,
.idrawer-transition-leave-to .idrawer-popout {
  transform: translateX(100%);
  opacity: 0.8;
}

.settings-content {
  overflow-y: scroll;
  height: 100%;
}

.config-button {
  align-self: flex-end;
  margin-right: 1em;
  display: grid;
  place-items: center;
}

.idrawer-popout {
  overflow: hidden;
  width: 300px;
  background: rgb(0 0 0 / 80%);
  padding: 1em 0 1em 0;
  margin: 2em;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 50%), 0 0 0px 1px rgb(255 255 255 / 30%);
  backdrop-filter: blur(16px) saturate(180%);
  display: flex;
  flex-direction: column;
}
</style>
