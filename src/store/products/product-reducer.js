import { PRODUCT_ACTION_TYPES } from "./product-types";

const INITIAL_PRODUCT = {};

export const productReducer = (state = INITIAL_PRODUCT, action) => {
    const { type, payload } = action;
    switch (type) {
        case PRODUCT_ACTION_TYPES.CREATE_PRODUCT:
            return {
                ...state, product: payload
            }
        default:
            return state
    }
}