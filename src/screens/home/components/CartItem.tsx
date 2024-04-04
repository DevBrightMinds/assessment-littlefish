import { GetIcon } from "../../../shared/icon/GetIcon";
import { GetImage } from "../../../shared/image/GetImage";

export const CartItem: React.FC<{ Product: TProduct, removeItem: (element: TProduct) => void }> = ({ Product, removeItem }): JSX.Element => {
    return <div className="item-holder">
        <div className="item-image">
            <GetImage ImageUrl={Product.image} Type="Live" />
        </div>
        <div className="item-description">
            <p>{Product.title}</p>
            <p>R{Product.price}</p>
            <p>{Product.description}</p>
        </div>
        <div className="item-controls">
            <span onClick={() => removeItem(Product)}><GetIcon Name="bi-trash3" /></span>
        </div>
    </div>
}