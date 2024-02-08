<script setup lang="ts">
import ChangeMoneyCard from "./components/changeMoney/changeMoneyCard.vue";
import ChangeMoneyTitle from "./components/changeMoney/changeMoneyTitle.vue";
</script>

<template>
  <div
    class="flex flex-col lg:flex-row items-center justify-center h-screen max-w-5xl m-auto gap-5"
  >
    <div class="section-style">
      <change-money-title />
    </div>

    <div class="section-style">
      <change-money-card />
    </div>
  </div>
</template>

<style scoped>
.section-style {
  @apply lg:flex-1 flex items-center justify-center;
}
</style>
