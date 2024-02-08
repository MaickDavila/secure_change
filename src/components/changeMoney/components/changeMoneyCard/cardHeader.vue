<script setup lang="ts">
import { EChangeAction } from "@/types/changeForm.types.js";
import changeFormStore from "@/components/changeMoney/changeMoney.store.js";
import useChangeAction from "@/components/changeMoney/composables/useChangeActions.ts";
import { computed } from "vue";

const get_purchase_price = computed(() => changeFormStore.get_purchase_price());
const get_sale_price = computed(() => changeFormStore.get_sale_price());
const { changeAction, get_action } = useChangeAction();
</script>

<template>
  <div class="tab">
    <div class="item" @click="changeAction(EChangeAction.SALE)">
      <div class="wrapper">
        <div :class="{ 'tab-active': get_action === EChangeAction.PURCHASE }">
          <p>Dólar compra</p>
          <span class="font-semibold">{{ get_purchase_price }}</span>
        </div>
      </div>
    </div>

    <div class="item" @click="changeAction(EChangeAction.PURCHASE)">
      <div class="wrapper">
        <div :class="{ 'tab-active': get_action === EChangeAction.SALE }">
          <p>Dólar venta</p>
          <span class="font-semibold">{{ get_sale_price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab {
  @apply flex items-center justify-between border-b-2 w-full pt-5 text-xs;

  .item {
    @apply flex-1 text-[#717191] cursor-pointer;
  }

  .wrapper {
    @apply flex flex-col items-center justify-center text-center;
  }
}

.tab-active {
  @apply text-[#2F00FF] border-b-2 border-[#2F00FF] transition-colors duration-300 ease-in-out;
}
</style>
