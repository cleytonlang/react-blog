import { ReactElement } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicTemplate from "./components/Templates/public";
import PrivateTemplate from "./components/Templates/private";
import Home from "./modules/Home";
import Task from "./modules/Task";
import Error from "./components/Error";

type TemplateProps = {
  children: ReactElement;
};

function PublicRoute({ children }: TemplateProps) {
  return <PublicTemplate>{children}</PublicTemplate>;
}

function PrivateRoute({ children }: TemplateProps) {
  //   const token = TokenServices.getAccessToken();
  //   return token ? (
  return <PrivateTemplate>{children}</PrivateTemplate>;
  //   ) : (
  //     <Navigate to={{ pathname: "/" }} />
  //   );
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
        path="/task"
        element={
          <PrivateRoute>
            <Task />
          </PrivateRoute>
        }
      />
      <Route
        path="/users/:userId"
        element={
          <PrivateRoute>
            <Task />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);

export default RouterBase;
