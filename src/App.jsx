import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Wellcome from "./pages/wellcome/wellcome";
import Dashboard from "./pages/home/dashboard";
import My_Sessions from "./pages/home/my-Sessions";
import SaveDraft from "./components/session/save-Draft";
import Published from "./components/session/published";
import Sessions from "./pages/home/sessions";
import PublicSession from "./pages/wellcome/publicSession";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import SessionEditor from "./pages/home/sessionEditor";
//Navbar Link Importing..
import Service from "./components/homeNavLink/service";
import About from "./components/homeNavLink/about";
import Contact from "./components/homeNavLink/contact";
import Home from "./pages/wellcome/publicSession";

const router = createBrowserRouter([
   {
    path: "/home",
    element: <PublicSession />,
  },
   {
    path: "/about",
    element: <About />,
  },
  
  {
    path: "/service",
    element: <Service />,
  },
   {
    path: "/contact",
    element: <Contact />,
  },
   {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Wellcome />,
  },
  {
    path: "/public-sessions",
    element: <PublicSession />,
  },

  {
    path: "/sessions",
    element: (
      <ProtectedRoute>
        <Sessions />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
   {
    path: "/session-editor/:id?",
    element: (
      <ProtectedRoute>
        <SessionEditor />
      </ProtectedRoute>
    ),
  },
  
  {
    path: "/dashboard/my-sessions",
    element: (
      <ProtectedRoute>
        <My_Sessions />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/my-sessions/save-Draft",
    element: (
      <ProtectedRoute>
        <SaveDraft />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/my-sessions/published",
    element: (
      <ProtectedRoute>
        <Published />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
