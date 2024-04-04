import { EnvVariables } from "../../utilis/EnvVariables";

export const useFetch = () => {
    const AppApiUrl: string = EnvVariables.AppUrls.ApiUrl;

    const post = async (Params: any, EndPoint: string) => {
        return fetch(AppApiUrl + EndPoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Params) })
            .then((response: Response) => response.json());
    }

    const get = async (EndPoint: string) => {
        return fetch(AppApiUrl + EndPoint, { method: "GET" })
            .then((response: Response) => response.json());
    }

    return { post, get };
}