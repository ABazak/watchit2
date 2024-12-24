import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";
import Films from "./pages/Films";
import NotFound from "./pages/NotFound";
import SingleFilm from "./pages/SingleFilm";
import ActorInfo from "./pages/ActorInfo";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Auth from "./layout/Auth";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SavedFilms from "./pages/SavedFilms";

const PrivateRoute = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Main />
      </>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/films",
        element: <Films />,
      },
      {
        path: "/films/:filmId",
        element: (
          <>
            <ScrollToTop />
            <PrivateRoute>
              <SingleFilm />
            </PrivateRoute>
          </>
        ),
      },
      {
        path: "/actor/:actorId",
        element: (
          <>
            <ScrollToTop />
            <PrivateRoute>
              <ActorInfo />
            </PrivateRoute>
          </>
        ),
      },
      {
        path: "/savedFilms",
        element: (
          <>
            <ScrollToTop />
            <PrivateRoute>
              <SavedFilms />
            </PrivateRoute>
          </>
        ),
      },
    ],
  },
  {
    path: "auth/",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Register />,
      },
    ],
  },
]);

export default router;
