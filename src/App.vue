<script setup lang="ts">
import ChangeMoneyCard from "./components/changeMoney/components/changeMoneyCard/changeMoneyCard.vue";
import ChangeMoneyTitle from "./components/changeMoney/components/changeMoneyTitle.vue";
import { onMounted } from "vue";
import { getRatesTest } from "@/components/changeMoney/actions/getRates.ts";

onMounted(async () => {
  await getRatesTest();
});
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
