import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Inventories from "./pages/Home/Inventories";
import Inventory from "./components/Inventory/Inventory";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import ManageInventories from "./pages/ManageInventories/ManageInventories";
import PageNotFount from "./pages/PageNotFound/PageNotFount";
import Register from "./pages/Register/Register";
import RequireAuth from "./pages/Signin/RequireAuth";
import Signin from "./pages/Signin/Signin";

function App() {
  return (
    <div className="App font-dmsans">
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/inventory" element={<Inventories></Inventories>} />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        />
        <Route
          path="/manageinventory"
          element={
            <RequireAuth>
              <ManageInventories></ManageInventories>
            </RequireAuth>
          }
        />
        <Route path="/signin" element={<Signin></Signin>} />
        <Route path="/register" element={<Register></Register>} />

        <Route path="/*" element={<PageNotFount></PageNotFount>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
