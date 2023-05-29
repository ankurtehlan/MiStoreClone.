import React from "react";
import PreNavbar from "./components/preNavbar";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./components/Slider";
import somejson from "./data/data";
import Offers from "./components/Offers";
import Line from "./components/Line";
import StarProducts from "./components/StarProducts";
import HotAccesoriesMenu from "./components/HotAccesoriesMenu";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <PreNavbar />
        <NavBar />
        <Slider start={somejson.banner.start} />
        <Offers offer={somejson.offer} />
        <Line text={"STAR PRODUCTS"} />
        <StarProducts starProduct={somejson.starProduct} />
        <Line text={"HOT ACCESSORIES"} />
        <HotAccesoriesMenu />

        <Routes>
          <Route
            exact
            path="/music"
            element={
              <HotAccessories
                music={somejson.hotAccessories.music}
                musicCover={somejson.hotAccessoriesCover.music}
              />
            }
          ></Route>
          {/* <Route exact path="/smartDevice">
       <HotAccessories smartDevice={somejson.hotAccessories.smartDevice} smartDeviceCover={somejson.hotAccessoriesCover.smartDevice}  />
      </Route> */}
        </Routes>
        <Line text={"PRODUCT REVIEWS"} />
        <ProductReviews ProductReviews={somejson.productReviews} />
        <Line text={"VIDEOS"} />
        <Videos videos={somejson.videos} />
        <Line text={"IN THE PRESS"} />
        <Banner banner={somejson.banner} />
        <Footer footer={somejson.footer} />
      </Router>
    </>
  );
};
export default App;
