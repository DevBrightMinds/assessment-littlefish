import { GetIcon } from "../../../shared/icon/GetIcon";
import { GetImage } from "../../../shared/image/GetImage";
import { AppButton } from "../../../shared/appbtn/AppButton";

export const ProductCard: React.FC<{
    Product: TProduct,
    addProductToCart: (product: TProduct) => void
}> = ({ Product, addProductToCart }): JSX.Element => {
    return <div className="product-card">
        <div className="product-title">
            <h6>{Product.title.substring(0, 20)}</h6>
        </div>
        <div className="product-body">
            <div className="product-image">
                <GetImage Type="Live" ImageUrl={Product.image} />
            </div>
            <div className="product-rating">
                <span>  {Array.apply(null, Array(Math.round(Product.rating.rate)))
                    .map((_, index: number) => {
                        return <GetIcon Name="bi-star-fill" key={index} />
                    })}</span>
                <span>Reviews ({Product.rating.count})</span>
            </div>
            <p>{Product.description.substring(0, 90)}..</p>
        </div>
        <div className="product-footer">
            <div className="product-controls">
                <p>R{Product.price}</p>
                <AppButton ButtonName="Add to Cart" IconName="bi-plus-lg" handleBtnClick={() => addProductToCart(Product)} />
            </div>
        </div>
    </div>
}