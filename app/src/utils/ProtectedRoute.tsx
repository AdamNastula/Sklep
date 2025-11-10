import { Navigate, Outlet, useLocation } from "react-router";

interface ProtectedRouteProps {
  allowedFrom: string;
  redirectTo: string;
}

function ProtectedRoute(props: ProtectedRouteProps) {
  const location = useLocation();

  if (location.state?.from !== props.allowedFrom) {
    return <Navigate to={props.redirectTo} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
