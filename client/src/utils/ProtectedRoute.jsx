import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn }) => {
  const auth = isLoggedIn;

  return auth ? <Outlet /> : <Navigate replace to={"/sign-in"} />;
};

export default ProtectedRoute;
