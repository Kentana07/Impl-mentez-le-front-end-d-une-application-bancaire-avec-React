import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./container/Header/Header.jsx";
import Footer from "./container/Footer/Footer.jsx";
import Home from "./pages/Home/index.jsx";
import Login from "./pages/Login/index.jsx";
import Account from "./pages/Account/index.jsx";

const App = () => {
    return (
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/user" element={<Account />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    );
  };
  
  export default App;