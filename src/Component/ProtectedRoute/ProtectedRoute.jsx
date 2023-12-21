import { useEffect } from "react";
import { useNavigate } from "react-router";
function ProtectedRoute(props) {
  let navigate = useNavigate();
  useEffect(() => {
    let loggedIn = JSON.parse(localStorage.getItem("isAuth"));
    if (loggedIn) {
      navigate("/dashboard");
    }
  }, []);
  // eslint-disable-next-line react/prop-types
  const { Component } = props;
  return <Component />;
}
export default ProtectedRoute;