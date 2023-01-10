import { Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import Main from "../../pages/main/main";
import Tests from "../../pages/tests/tests";
import { AppRoute } from "../../const/app-route";
import UserTestContent from "../user-test/user-test-content/user-test-content";
import CurrentTest from "../user-test/current-test/current-test";


function App() {
    return (

        <Routes>
            <Route path={"/"} element={<Layout />}>
                <Route path={AppRoute.Main} index element={<Main />} />
                <Route path={AppRoute.Tests} element={<Tests />} />
                <Route path={AppRoute.CurrentTest} element={<CurrentTest />} />
            </Route>
        </Routes>
    );
}

export default App;
