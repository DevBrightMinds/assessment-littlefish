import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";

import { useDispatch, useSelector } from "react-redux";
import { CartListHolder } from "./components/CartListHolder";
import { useAppStorage } from "../../shared/hooks/useAppStorage";
import { AppBackDrop } from "../../shared/appbackdrop/AppBackDrop";
import { useGetAllProductsQuery } from "../../utilis/redux/api/apiSlice";
import { addToCartList, toggleCartListHolder } from "../../utilis/redux/actions/ReduxActions";

export const HomeScreen: React.FC<{}> = (): JSX.Element => {
    const dispatch = useDispatch();
    const { saveCartList, getCartList } = useAppStorage();
    const { data: allProductsData, isLoading, isError } = useGetAllProductsQuery({});

    const [CartList, setCartList] = useState<TProduct[]>([]);

    const CartHolderStatus: boolean = useSelector((state: any) => state.allReducers.CartHolderStatus);

    useEffect(() => {
        const savedCart = getCartList();
        if (savedCart) {
            const list: TProduct[] = JSON.parse(savedCart);
            setCartList(list);
            dispatch(addToCartList(list));
        }
    }, []);

    const addProductToCart = (product: TProduct) => {
        const ifExists = CartList.find((item: TProduct) => {
            return (item.id == product.id);
        });

        if (!ifExists) {
            setCartList([...CartList, product]);
            saveCartList([...CartList, product]);
            dispatch(addToCartList([...CartList, product]));
        }
    }

    const removeItem = (item: TProduct) => {
        const selectedProducts = CartList.filter((product: TProduct) => {
            return (product.id != item.id);
        });

        setCartList(selectedProducts);
        saveCartList(selectedProducts);
        dispatch(addToCartList(selectedProducts));

        if (selectedProducts.length == 0)
            dispatch(toggleCartListHolder(false))
    }

    return <>
        <h4>Our Products</h4>
        {isLoading ? 'Loading' : isError ? 'Sorry, something is wrong, try again later' : <div className="products-container">
            {allProductsData?.map((item: TProduct, index: number) => {
                return <ProductCard key={index} Product={item} addProductToCart={addProductToCart} />
            })}
        </div>}

        <AppBackDrop Status={CartHolderStatus} />
        <CartListHolder removeItem={removeItem} CartList={CartList} Status={CartHolderStatus} />
    </>
}