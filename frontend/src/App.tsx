import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { PrimaryLayout } from "./layouts";
import { Register, SignIn } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrimaryLayout>
                <p>Home page</p>
              </PrimaryLayout>
            }
          />
          <Route
            path="/search"
            element={
              <PrimaryLayout>
                <p>Search page</p>
              </PrimaryLayout>
            }
          />

          <Route
            path="/register"
            element={
              <PrimaryLayout>
                <Register />
              </PrimaryLayout>
            }
          />

          {/* Sign In */}
          <Route
            path="/sign-in"
            element={
              <PrimaryLayout>
                <SignIn />
              </PrimaryLayout>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
