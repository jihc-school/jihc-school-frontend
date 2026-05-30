import { Navigate, useLocation } from "react-router";
import useUserRole from "../hooks/useUserRole";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Common/Spinner/Spinner";

const PrivateRoute = ({ children, allowedRoles }) => {
  const { user, loading: authLoading } = useAuth();
  const { role, roleLoading } = useUserRole();
  const location = useLocation();

  if (authLoading || roleLoading) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && role && !allowedRoles.includes(role)) {
    return <Navigate to="/forbidden" replace />;
  }

  return children;
};

export default PrivateRoute;
