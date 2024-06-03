import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuCategory from "./pages/MenuCategory.jsx";
import Products from "./pages/Products.jsx";
import LoginSignup from "./pages/LoginSignup.jsx";
import Menu from "./pages/Menu.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/deals" element={<MenuCategory category="deals" />} />
        <Route path="/products" element={<Products />}>
          <Route path=":productId" element={<Products />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={<LoginSignup />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
