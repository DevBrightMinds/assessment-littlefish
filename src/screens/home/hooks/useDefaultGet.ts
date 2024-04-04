import { useFetch } from "../../../shared/hooks/useFetch";
import { EnvVariables } from "../../../utilis/EnvVariables";

export const useDefaultGet = () => {
    const { get } = useFetch();

    const getProducts = async (): Promise<TProduct> => {
        const endPoint: string = EnvVariables.EndPoints.Products.GetProducts;

        const products = await get(endPoint);

        return products;
    }

    return { getProducts };
}