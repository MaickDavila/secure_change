import { db } from "../../../libs/firebase.ts";
import changeMoneyStore from "../changeMoney.store.ts";
import ratesData from "../rates.data.ts";

export const getRatesTest = async () => {
  try {
    const data = ratesData;
    if (!data) return;

    changeMoneyStore.setSalePrice(data.sale_price);
    changeMoneyStore.setPurchasePrice(data.purchase_price);
  } catch (error) {
    console.log(error);
  }
};

export const getRates = async () => {
  try {
    const collection_name = "rates";
    const docId = "awaOMswZ8JGxjmHCpVZ4";

    db.collection(collection_name)
      .doc(docId)
      .onSnapshot(
        (doc) => {
          const data = doc.data();
          if (!data) return;

          changeMoneyStore.setSalePrice(data.sale_price);
          changeMoneyStore.setPurchasePrice(data.purchase_price);
        },
        (error) => {
          console.log(error);
        }
      );
  } catch (error) {
    console.log(error);
  }
};
