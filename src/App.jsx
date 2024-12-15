import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import FooterBottom from "./components/FooterBottom.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Slider from "./components/Slider.jsx";
import SubMenu from "./components/SubMenu.jsx";
import Brands from "./pages/Brands.jsx";
import Children from "./pages/Children.jsx";
import Home from "./pages/Home.jsx";
import Men from "./pages/Men.jsx";
import ProductCard from "./pages/ProductCard.jsx";
import Women from "./pages/Women.jsx";

function AppContent() {
  const location = useLocation(); 
  const isInitialLoad = location.pathname === "/";

  return (
    <div>
      <Header />
      {isInitialLoad ? (
        <Main />
      ) : (
        <>
          <SubMenu />
          <Slider />
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kishiler" element={<Men />} />
        <Route path="/qadinlar" element={<Women />} />
        <Route path="/ushaqlar" element={<Children />} />
        <Route path="/product/:id" element={<ProductCard />} />
        <Route path="/brendler" element={<Brands />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
      <FooterBottom />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
