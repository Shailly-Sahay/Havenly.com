import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { PrimaryLayout } from "./layouts";
import { Register, SignIn, AddHotel, MyHotels, EditHotel } from "./pages";
import { useAppContext } from "./contexts/AppContext";

function App() {
  const { isLoggedIn } = useAppContext();

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

          {isLoggedIn && (
            <>
              <Route
                path="/add-hotel"
                element={
                  <PrimaryLayout>
                    <AddHotel />
                  </PrimaryLayout>
                }
              />

              <Route
                path="/my-hotels"
                element={
                  <PrimaryLayout>
                    <MyHotels />
                  </PrimaryLayout>
                }
              />

              <Route
                path="/edit-hotel/:hotelId"
                element={
                  <PrimaryLayout>
                    <EditHotel />
                  </PrimaryLayout>
                }
              />
            </>
          )}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
