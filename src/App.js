import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import PageNotFount from "./pages/PageNotFound/PageNotFount";

function App() {
  return (
    <div className="App font-dmsans">
      <Header />
      <Routes>
        <Route path="/home" element={<Home></Home>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/inventory" element={<Inventory></Inventory>} />

        <Route path="/*" element={<PageNotFount></PageNotFount>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
