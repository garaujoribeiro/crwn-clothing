import { PRODUCT_ACTION_TYPES } from "./product-types"

export const setProduct = (product) => {
    return { type: PRODUCT_ACTION_TYPES.CREATE_PRODUCT, payload: product }
}