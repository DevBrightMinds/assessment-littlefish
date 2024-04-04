export const CartProductsList = (state = {}, action: any) => {
    switch (action.type) {
        case "SETCARTLIST":
            return action.payload;
        default:
            return state;
    }
}

export const CartHolderStatus = (state = false, action: any) => {
    switch (action.type) {
        case "TOGGLECARTLISTHOLDER":
            return action.payload;
        default:
            return state;
    }
}