import { connect } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn }) => {
  const auth = isLoggedIn;

  return auth ? <Outlet /> : <Navigate replace to={"/sign-in"} />;
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};
export default connect(mapStateToProps)(ProtectedRoute);
