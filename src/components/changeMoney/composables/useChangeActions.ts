import { computed } from "vue";
import { EChangeAction } from "@/types/changeForm.types.js";
import changeFormStore from "@/components/changeMoney/changeMoney.store.js";

export function useChangeAction() {
  const get_action = computed({
    get: () => changeFormStore.get_action(),
    set: (value: EChangeAction) => changeFormStore.setAction(value),
  });

  function changeAction() {
    const action = changeFormStore.get_action();
    if (action === EChangeAction.PURCHASE) {
      changeFormStore.setAction(EChangeAction.SALE);
    } else {
      get_action.value = EChangeAction.PURCHASE;
    }
  }

  return { get_action, changeAction };
}
