<script setup lang="ts">
import changeFormStore from "./changeMoney.store.ts";
import { computed } from "vue";
import { EChangeAction } from "../../types/changeForm.types.ts";

const get_action = computed(() => changeFormStore.get_action());

const changeCurrency = (state: EChangeAction) => {
  changeFormStore.setCurrentCurrency(state);
};
</script>

<template>
  <div class="w-[386px] h-[325px] rounded-lg bg-white shadow-md text-black">
    <div class="tab">
      <div
        class="item"
        @click="changeCurrency(EChangeAction.PURCHASE)"
        :class="{ active: get_action === EChangeAction.PURCHASE }"
      >
        <div class="flex flex-col items-center justify-center">
          <p>Dólar compra</p>
          <span>3.9240</span>
        </div>
      </div>

      <div
        class="item"
        @click="changeCurrency(EChangeAction.SALE)"
        :class="{ active: get_action === EChangeAction.SALE }"
      >
        <div class="flex flex-col items-center justify-center">
          <p>Dólar venta</p>
          <span>3.9240</span>
        </div>
      </div>
    </div>

    <div class="tab-content">
      <form class="flex flex-col gap-5">
        <div
          class="flex items-center justify-between h-[45px] border border-[#6E46E6] rounded-lg"
        >
          <div
            class="w-[94px] h-full bg-[#F3F3F6] text-[#6E46E6] flex items-center justify-center rounded-l-lg"
          >
            <p>Dólares</p>
          </div>

          <div class="flex flex-col text-end px-2">
            <span class="text-xs text-[#717191]">Envías</span>
            <input
              type="number"
              class="text-end rounded-r-lg custom-input"
              placeholder="0.00"
              autofocus
            />
          </div>
        </div>

        <div
          class="flex items-center justify-between h-[45px] border border-[#6E46E6] rounded-lg"
        >
          <div
            class="w-[94px] h-full bg-[#F3F3F6] text-[#6E46E6] flex items-center justify-center rounded-l-lg"
          >
            <p>Soles</p>
          </div>

          <div class="flex flex-col text-end px-2">
            <span class="text-xs text-[#717191]">Recibes</span>
            <input
              type="number"
              class="text-end rounded-r-lg custom-input"
              placeholder="0.00"
            />
          </div>
        </div>

        <button class="bg-[#6E46E6] text-white h-[45px] rounded-lg">
          Iniciar operación
        </button>
      </form>
    </div>
  </div>
</template>

<style>
.tab {
  @apply flex items-center justify-between border-b-2 w-full pt-5 text-xs;

  .item {
    @apply flex-1 text-[#717191] cursor-pointer;
  }

  .active {
    @apply text-[#2F00FF] border-b-2 border-[#2F00FF] transition-colors duration-300 ease-in-out;
  }
}

.tab-content {
  @apply w-full h-full p-10 flex flex-col gap-5;
}

.custom-input {
  @apply w-full h-full border-none bg-transparent !important;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
}
</style>
