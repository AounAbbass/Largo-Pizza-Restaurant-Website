import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuCategory from "./pages/MenuCategory.jsx";
import Product from "./pages/Product.jsx";
import LoginSignup from "./pages/LoginSignup.jsx";
import Menu from "./pages/Menu.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Banner_1 from './Components/Assets/Banner_1.png'
import Banner_2 from './Components/Assets/Banner_2.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/deals" element={<MenuCategory banner={Banner_1} category="deals" />} />
        <Route path="/product" banner={Banner_2} element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={<LoginSignup />}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
