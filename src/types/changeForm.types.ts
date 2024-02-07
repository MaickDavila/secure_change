export enum ECurrency {
    USD = 'USD',
    PEN = 'PEN',
}

export  interface IChangeFormStore {
    current_currency: ECurrency;
    purchase_price: number;
    sale_price: number;
}