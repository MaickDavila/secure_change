<script setup lang="ts">
import useInput from "@/composables/useInput.ts";
import { useChangeAction } from "@/components/changeMoney/composables/useChangeActions.ts";
import reloadSvg from "@/assets/svgs/reload.svg";
import { computed, ref, watch } from "vue";
import changeMoneyStore from "@/components/changeMoney/changeMoney.store.ts";
import { EChangeAction } from "@/types/changeForm.types.ts";

const sendValue = ref();
const receiveValue = ref();
const {
  get_action,
  sendLabelText,
  receiveLabelText,
  getSendSimbol,
  getReceiveSimbol,
} = useChangeAction();

const get_purchase_price = computed(() =>
  changeMoneyStore.get_purchase_price()
);

const get_sale_price = computed(() => changeMoneyStore.get_sale_price());

const spin = () => applyAnimation("spin");
const spinBack = () => applyAnimation("spinBack");

function applyAnimation(animationName: string) {
  const button = document.querySelector(".change-button") as HTMLImageElement;
  if (!button) return;
  button.style.animation = `${animationName} 0.3s linear`;
}

function setPurchaseChangeMoney() {
  const send = Number(sendValue.value) || 0;

  if (get_action.value === EChangeAction.PURCHASE)
    receiveValue.value = (send * get_purchase_price.value).toFixed(2);
  else receiveValue.value = (send / get_sale_price.value).toFixed(2);
}

function setReceiveChangeMoney() {
  const receive = Number(receiveValue.value) || 0;

  if (get_action.value === EChangeAction.PURCHASE)
    sendValue.value = (receive / get_purchase_price.value).toFixed(2);
  else sendValue.value = (receive * get_sale_price.value).toFixed(2);
}

watch(get_action, () => {
  setPurchaseChangeMoney();
});
</script>

<template>
  <div class="tab-content">
    <form class="flex flex-col gap-5">
      <div class="flex flex-col gap-5 relative">
        <div
          class="flex items-center justify-between h-[45px] border border-[#6E46E6] rounded-lg"
        >
          <div
            class="w-[94px] h-full bg-[#F3F3F6] text-[#6E46E6] flex items-center justify-center rounded-l-lg"
          >
            <p>{{ sendLabelText }}</p>
          </div>

          <div class="flex flex-col text-end px-2">
            <span class="text-xs text-[#717191]">Envías</span>
            <div class="flex items-center space-x-1">
              <span class="self-end">{{ getSendSimbol }}</span>

              <input
                type="text"
                class="text-end custom-input"
                placeholder="0.00"
                autofocus
                :maxlength="6"
                v-model="sendValue"
                @keypress="useInput().onlyNumbers($event)"
                @input="setPurchaseChangeMoney"
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
            <p>{{ receiveLabelText }}</p>
          </div>

          <div class="flex flex-col text-end px-2">
            <span class="text-xs text-[#717191]">Recibes</span>
            <div class="flex items-center space-x-1">
              <span class="self-end">{{ getReceiveSimbol }}</span>

              <input
                type="text"
                class="text-end custom-input"
                placeholder="0.00"
                autofocus
                :maxlength="6"
                @keypress="useInput().onlyNumbers($event)"
                v-model="receiveValue"
                @input="setReceiveChangeMoney"
              />
            </div>
          </div>
        </div>
      </div>

      <button class="bg-[#6E46E6] text-white h-[45px] rounded-lg mt-5">
        Iniciar operación
      </button>
    </form>
  </div>
</template>

<style scoped>
.tab-content {
  @apply w-full p-10 pb-0 flex flex-col gap-5;
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
</style>
