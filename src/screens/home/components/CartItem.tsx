import { useState } from "react";
import { GetIcon } from "../../../shared/icon/GetIcon";
import { GetImage } from "../../../shared/image/GetImage";
import { AppButton } from "../../../shared/appbtn/AppButton";

export const CartItem: React.FC<{
    Product: TProduct,
    removeItem: (element: TProduct) => void,
    updatePrice: (product: TProduct, price: number, count: number) => void
}> = ({ Product, removeItem, updatePrice }): JSX.Element => {
    const [ItemCount, setItemCount] = useState<number>(1);
    const [OriginalPrice, _] = useState<number>(Product.price);

    const handleQuantityChange = (type: string) => {
        let counter = ItemCount;

        switch (type) {
            case "add":
                counter++;
                break;

            default:
                if (counter > 1)
                    counter--;
                break;
        }

        updatePrice(Product, OriginalPrice, counter);
        setItemCount(counter);
    }


    return <div className="item-holder">
        <div className="item-image">
            <GetImage ImageUrl={Product.image} Type="Live" />
        </div>
        <div className="item-description">
            <p>Quantity: {ItemCount}</p>
            <p>{Product.title}</p>
            <p>R{Product.price.toFixed(2)}</p>
            <p>{Product.description}</p>
            <div className="quantity-controls">
                <AppButton IconName="bi-plus-lg" ButtonName="" handleBtnClick={() => handleQuantityChange("add")} />
                <AppButton IconName="bi-dash-lg" ButtonName="" handleBtnClick={() => handleQuantityChange("minus")} />
            </div>
        </div>
        <div className="item-controls">
            <span onClick={() => removeItem(Product)}><GetIcon Name="bi-trash3" /></span>
        </div>
    </div>
}