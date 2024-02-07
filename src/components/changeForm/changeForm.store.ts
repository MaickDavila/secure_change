import {reactive} from "vue";
import {ECurrency, IChangeFormStore} from "../../types/changeForm.types.ts";

const state = reactive<IChangeFormStore>({
    current_currency: ECurrency.USD,
    purchase_price: 0,
    sale_price: 0,
});

const getters = {
    get_currentCurrency: () => state.current_currency,
    get_purchase_price: () => state.purchase_price,
    get_sale_price: () => state.sale_price,
}

const mutations = {
    setCurrentCurrency: (currency: ECurrency) => state.current_currency = currency,
    setPurchasePrice: (price: number) => state.purchase_price = price,
    setSalePrice: (price: number) => state.sale_price = price,
}

export default {
    ...getters,
    ...mutations,
}
