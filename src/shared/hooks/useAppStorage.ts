export const useAppStorage = () => {
    const saveCartList = (products: TProduct[]) => {
        sessionStorage.setItem("cartlist", JSON.stringify(products));
    }

    const getCartList = () => {
        const products = sessionStorage.getItem("cartlist");

        if (products && products !== null)
            return products;
    }

    const removeCartList = () => {
        sessionStorage.removeItem("cartlist");
    }

    return { getCartList, saveCartList, removeCartList }
}