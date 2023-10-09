import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import First from "../pages/First";
import Second from "../pages/Second";
import Theard from "../pages/Theard";
import Fourth from "../pages/Fourth";

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/LocalMarketStory_FE/" element={<First />} />
            <Route path="/LocalMarketStory_FE/Second" element={<Second />} />
            <Route path="/LocalMarketStory_FE/Theard" element={<Theard />} />
            <Route path="/LocalMarketStory_FE/Fourth" element={<Fourth />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    );
  };
  
  export default Router;