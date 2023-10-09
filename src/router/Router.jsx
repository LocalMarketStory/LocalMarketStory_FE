import {Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import First from "../pages/First";
import Second from "../pages/Second";
import Third from "../pages/Third";
import Fourth from "../pages/Fourth";

const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<First />} />
          <Route path="/Second/:placeID" element={<Second />} />
          <Route path="/Third" element={<Third />} />
          <Route path="/Fourth" element={<Fourth />} />
        </Route>
      </Routes>  
    );
};

export default Router;
