import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Layout from "./layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import LayoutDashboard from "./layout/LayoutDashboard";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/product"
            element={
              <Layout>
                <Product />
              </Layout>
            }
          />
          <Route
            path="/product/:id"
            element={
              <Layout>
                <Product />
              </Layout>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <LayoutDashboard>
                <Profile />
              </LayoutDashboard>
            }
          />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
