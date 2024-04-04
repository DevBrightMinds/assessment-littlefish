import { CartItem } from "./CartItem";
import { useDispatch } from "react-redux";
import { GetIcon } from "../../../shared/icon/GetIcon";
import { toggleCartListHolder } from "../../../utilis/redux/actions/ReduxActions";

export const CartListHolder: React.FC<{
    CartList: TProduct[],
    Status: boolean,
    removeItem: (element: TProduct) => void
}> = ({ CartList, Status, removeItem }): JSX.Element => {
    const dispatch = useDispatch();

    const handleHolderStatus = () => {
        dispatch(toggleCartListHolder(false));
    }

    return <div className={!Status ? "cart-list-holder" : "cart-list-holder cart-list-holder-active"}>
        <div className="holder-header">
            <h6>Selected Product(s)</h6>
            <span onClick={handleHolderStatus}><GetIcon Name="bi-x-circle" /></span>
        </div>

        <div className="holder-body">
            {CartList.map((item: TProduct, index) => {
                return <CartItem Product={item} key={index} removeItem={removeItem} />
            })}
        </div>
    </div>
}