import { EnvVariables } from "../../utilis/EnvVariables";


export const GetImage: React.FC<{ ImageUrl: string, Caption?: string, Type: string }> = ({ ImageUrl, Caption, Type }): JSX.Element => {
    const ImagesUrl: string = EnvVariables.AppUrls.ImagesUrl;

    return <>
        {Type == 'Local' ? <img src={ImagesUrl + Image} alt={Caption} />
            : <div className="image-background-container" style={{ backgroundImage: `url(${ImageUrl})` }}></div>}
    </>
}