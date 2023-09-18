import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./utils/Routes";
import Index from "./pages/Landingpage/Index";
const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index path={ROUTES.LANDINGPAGE} element={<Index />} />

        {/* <Route path={ROUTES.LOGIN} element={<Login />} />

				<Route path={ROUTES.SIGNUP} element={<SignUp />} /> */}

        {/* </Route> */}

        {/* <Route path={ROUTES.SERVICES} element={<Services />} /> */}

        {/* <Route path={"*"} element={<Page404 />} /> */}
      </Routes>
    </>
  );
};

export default App;
