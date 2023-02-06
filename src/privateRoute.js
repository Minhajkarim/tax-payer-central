import { Redirect, Route } from "react-router-dom";

export function PrivateRoute({ children, ...rest }) {
  //   let auth = useAuth();
  const token = sessionStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
