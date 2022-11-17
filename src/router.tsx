import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicTemplate from "./components/Templates/public";
import PrivateTemplate from "./components/Templates/private";
import Home from "./modules/Home";
import Post from "./modules/Post";
import User from "./modules/User";
import Error from "./components/Error";

type TemplateProps = {
  children: ReactElement;
};

function PublicRoute({ children }: TemplateProps) {
  return <PublicTemplate>{children}</PublicTemplate>;
}

function PrivateRoute({ children }: TemplateProps) {
  const token = localStorage.getItem("token");
  return token ? (
    <PrivateTemplate>{children}</PrivateTemplate>
  ) : (
    <Navigate to="/" />
  );
}

const RouterBase = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/posts"
        element={
          <PrivateRoute>
            <Post />
          </PrivateRoute>
        }
      />
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);

export default RouterBase;
