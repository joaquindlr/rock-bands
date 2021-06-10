import React, { useEffect } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";
import UseMediaQuery from "@material-ui/core/useMediaQuery";

const Redirect = () => {
  const matches = UseMediaQuery("(min-width:960px)");

  const history = useHistory();

  useEffect(() => {
    setTimeout(function () {
      history.push("/login");
    }, 3000);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        background:
          " linear-gradient(138deg, rgba(163,40,5,1) 24%, rgba(54,33,33,1) 75%)",
      }}
    >
      <div
        style={
          matches
            ? {
                display: "flex",
                alignItems: "center",
                marginLeft: "1rem",
                paddingTop: "2rem",
              }
            : {
                alignItems: "center",
                marginLeft: "1rem",
                paddingTop: "2rem",
              }
        }
      >
        <p
          style={{
            margin: 0,
            fontSize: "2.5rem",
            fontWeight: 600,
            marginRight: "1rem",
          }}
        >
          Please login to access this page. Redirecting ...
        </p>
        <CircularProgress />
      </div>
    </div>
  );
};

export default Redirect;
