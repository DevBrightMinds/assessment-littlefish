import { Outlet } from "react-router-dom";
import { AppHeader } from "../shared/appheader/AppHeader";

export const MainLayout: React.FC<{}> = (): JSX.Element => {
    return <>
        <AppHeader />
        <div className="home-welcome">
            <div className="welcome-content">
                <h2>The Best or Nothing lol :)</h2>
                <div className="about-write-earn">
                    <p>Best products, best prices, check out our merchandise.</p>
                    <p>With a variety of products to choose from, this is where you want to be.</p>
                </div>
                <div className="terms-write-earn">
                    <span>Digital Shopping <i className="bi bi-chevron-right"></i></span>
                </div>
            </div>
        </div>
        <section>
            <div className="main-container">
                <Outlet />
            </div>
        </section>
    </>
}