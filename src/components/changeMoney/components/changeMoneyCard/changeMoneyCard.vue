<script setup lang="ts">
import useInput from "../../../../composables/useInput.ts";
import reloadSvg from "../../../../assets/svgs/reload.svg";
import CardHeader from "@/components/changeMoney/components/changeMoneyCard/CardHeader.vue";
import { useChangeAction } from "@/components/changeMoney/composables/useChangeActions.ts";

const spin = () => applyAnimation("spin");
const spinBack = () => applyAnimation("spinBack");

function applyAnimation(animationName: string) {
  const button = document.querySelector(".change-button") as HTMLImageElement;
  if (!button) return;
  button.style.animation = `${animationName} 0.3s linear`;
}
</script>

<template>
  <div class="w-[386px] h-[325px] rounded-lg bg-white shadow-md text-black">
    <card-header />

    <div class="tab-content">
      <form class="flex flex-col gap-5">
        <div class="flex flex-col gap-5 relative">
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
              <div class="flex items-center space-x-1">
                <span class="self-end">$</span>

                <input
                  type="text"
                  class="text-end custom-input"
                  placeholder="0.00"
                  autofocus
                  :maxlength="6"
                  @keypress="useInput().onlyNumbers($event)"
                />
              </div>
            </div>
          </div>

          <div
            class="absolute flex items-center justify-center h-full w-full z-0"
          >
            <img
              :src="reloadSvg"
              alt="reload"
              class="change-button"
              @mouseover="spin"
              @mouseleave="spinBack"
              @click="useChangeAction().changeAction()"
            />
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
              <div class="flex items-center space-x-1">
                <span class="self-end">S/</span>

                <input
                  type="text"
                  class="text-end custom-input"
                  placeholder="0.00"
                  autofocus
                  :maxlength="6"
                  @keypress="useInput().onlyNumbers($event)"
                />
              </div>
            </div>
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
.tab-content {
  @apply w-full h-full p-10 flex flex-col gap-5;
}

.custom-input {
  @apply w-full h-full border-none bg-transparent z-50 !important;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
}

.change-button {
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(150deg);
  }
}

@keyframes spinBack {
  from {
    transform: rotate(150deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
