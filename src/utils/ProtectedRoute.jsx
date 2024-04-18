import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ Component, auth, ...rest }) => {
  const user = auth;

  return (
    <>
      {/* <Route
        {...rest}
        render={(props) => {
          if (!user) {
            return <Navigate to="/login" />;
          }
          return <Component />;
        }} */}
      {/* /> */}
    </>
  );
};

export default ProtectedRoute;
