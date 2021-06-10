import React, { useContext } from "react";
import HeaderStyles from "./HeaderStyles";
import { useHistory } from "react-router-dom";

import { UserContext } from "../../auth/UserContext";

import Button from "@material-ui/core/Button";

const Header = () => {
  const history = useHistory();
  const classes = HeaderStyles();
  const [user, setUser] = useContext(UserContext);
  return (
    <div className={classes.container}>
      <p onClick={() => history.push("/")} className={classes.home}>
        RockBands
      </p>
      <div>
        {user.email === "" ? (
          <>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => history.push("/login")}
            >
              Login
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => setUser({ email: "" })}
            >
              Logout
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
