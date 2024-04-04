export const addToCartList = (products: TProduct[]) => {
    return {
        type: "SETCARTLIST",
        payload: products
    }
}

export const toggleCartListHolder = (status: boolean) => {
    return {
        type: "TOGGLECARTLISTHOLDER",
        payload: status
    }
}
