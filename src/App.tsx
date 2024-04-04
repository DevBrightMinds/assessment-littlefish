import {
    Routes, Route, BrowserRouter
} from "react-router-dom";

import "./App.css";

import { MainLayout } from "./layouts/MainLayout";
import { HomeScreen } from "./screens/home/HomeScreen";

// redux //
import { Provider } from "react-redux";
import { store } from "./utilis/redux/store/store";

const App = () => {

    return <>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<HomeScreen />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </>
}

export default App;