import { GetIcon } from "../icon/GetIcon";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartListHolder } from "../../utilis/redux/actions/ReduxActions";

export const AppHeader: React.FC<{}> = (): JSX.Element => {
    const dispatch = useDispatch();

    const CartList: TProduct[] = useSelector((state: any) => state.allReducers.CartProductsList);
    const HolderStatus: TProduct[] = useSelector((state: any) => state.allReducers.CartHolderStatus);

    const changeCartHolderStatus = () => {
        if (CartList.length > 0)
            dispatch(toggleCartListHolder(!HolderStatus));
    }

    return <>
        <header>
            <div className="app-header-top-layer">
                <div className="top-layer-content">
                    <div className="dates-holder">
                        <p><span>Mon - Thur</span> <span>8h30 - 17h30</span></p>
                    </div>
                    <div className="address-holder">
                        <p>35 Cnr Parklands, Townhouse 5</p>
                    </div>
                    <div className="contact-details-holder">
                        <p>+27 578 1123 111</p>
                    </div>
                </div>
            </div>
            <div className="app-header-container">
                <div className="app-header-content">
                    <div className="app-name">
                        <small><GetIcon Name="bi-bag-heart-fill" /> OurECommerce</small>
                    </div>
                    <div className="menu-section">
                        <ul>
                            <li onClick={changeCartHolderStatus}><span><GetIcon Name="bi-cart" />({CartList.length || 0})</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </>
}
