import { reactive } from "vue";
import {
  EChangeAction,
  IChangeFormStore,
} from "../../types/changeForm.types.ts";

const state = reactive<IChangeFormStore>({
  action: EChangeAction.PURCHASE,
  purchase_price: 0,
  sale_price: 0,
});

const getters = {
  get_action: () => state.action,
  get_purchase_price: () => state.purchase_price,
  get_sale_price: () => state.sale_price,
};

const mutations = {
  setCurrentCurrency: (currency: EChangeAction) => (state.action = currency),
  setPurchasePrice: (price: number) => (state.purchase_price = price),
  setSalePrice: (price: number) => (state.sale_price = price),
};

export default {
  ...getters,
  ...mutations,
};
