import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/layout";
import { Register } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <p>Home page</p>
              </Layout>
            }
          />
          <Route
            path="/search"
            element={
              <Layout>
                <p>Search page</p>
              </Layout>
            }
          />

          <Route
            path="/register"
            element={
              <Layout>
                <Register />{" "}
              </Layout>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
