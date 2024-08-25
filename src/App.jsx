import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Layout from "./layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";

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
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
