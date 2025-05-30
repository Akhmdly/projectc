// App.jsx
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import Footer from "./components/Footer.jsx";
import FooterBottom from "./components/FooterBottom.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Slider from "./components/Slider.jsx";
import SubMenu from "./components/SubMenu.jsx";
import { BasketProvider } from "./context/BasketContext";

import Register from "./components/Register.jsx";
import Basket from "./pages/Basket.jsx";
import Brands from "./pages/Brands.jsx";
import Children from "./pages/Children.jsx";
import Home from "./pages/Home.jsx";
import Men from "./pages/Men.jsx";
import ProductCard from "./pages/ProductCard.jsx";
import Women from "./pages/Women.jsx";

function AppContent() {
  const location = useLocation();
  const isInitialLoad = location.pathname === "/";
  const hideSliderPages = ["/register"];

  const shouldShowSlider = !hideSliderPages.includes(location.pathname);

  return (
    <>
      <Header />

      {isInitialLoad ? (
        <Main />
      ) : (
        shouldShowSlider && (
          <>
            <SubMenu />
            <Slider />
          </>
        )
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kishiler" element={<Men />} />
        <Route path="/qadinlar" element={<Women />} />
        <Route path="/ushaqlar" element={<Children />} />
        <Route path="/product/:id" element={<ProductCard />} />
        <Route path="/brendler" element={<Brands />} />
        <Route path="/sebet" element={<Basket />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
      <FooterBottom />
    </>
  );
}

function App() {
  return (
    <BasketProvider>
      <Router>
        <AppContent />
      </Router>
    </BasketProvider>
  );
}

export default App;
