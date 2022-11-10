import { Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import Main from "../../pages/main/main";
import Tests from "../../pages/tests/tests";
import { AppRoute } from "../../const/app-route";


function App() {
    return (

        <Routes>
            <Route path={"/"} element={<Layout />}>
                <Route path={AppRoute.Main} index element={<Main />} />
                <Route path={AppRoute.Tests} element={<Tests />} />
            </Route>
        </Routes>
    );
}

export default App;
