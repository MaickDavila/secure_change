import { computed } from "vue";
import { EChangeAction } from "@/types/changeForm.types.js";
import changeFormStore from "@/components/changeMoney/changeMoney.store.js";

export default function useChangeAction() {
  const get_action = computed({
    get: () => changeFormStore.get_action(),
    set: (value: EChangeAction) => changeFormStore.setAction(value),
  });

  const sendLabelText = computed(() => {
    return get_action.value === EChangeAction.PURCHASE ? "Dólares" : "Soles";
  });

  const receiveLabelText = computed(() => {
    return get_action.value === EChangeAction.PURCHASE ? "Soles" : "Dólares";
  });

  const getSendSimbol = computed(() => {
    return get_action.value === EChangeAction.PURCHASE ? "$" : "S/";
  });

  const getReceiveSimbol = computed(() => {
    return get_action.value === EChangeAction.PURCHASE ? "S/" : "$";
  });

  function changeAction(action: EChangeAction | null): void {
    if (!action) {
      action = get_action.value;
    }

    if (action === EChangeAction.PURCHASE) {
      changeFormStore.setAction(EChangeAction.SALE);
      return;
    }

    get_action.value = EChangeAction.PURCHASE;
  }

  return {
    get_action,
    sendLabelText,
    receiveLabelText,
    getSendSimbol,
    getReceiveSimbol,
    changeAction,
  };
}
