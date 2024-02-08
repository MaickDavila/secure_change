export enum ECurrency {
  USD = "USD",
  PEN = "PEN",
}

export enum EChangeAction {
  PURCHASE = "PURCHASE",
  SALE = "SALE",
}

export interface IChangeFormStore {
  action: EChangeAction;
  purchase_price: number;
  sale_price: number;
}
