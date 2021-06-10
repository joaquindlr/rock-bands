import React, { useEffect, useState, useContext } from "react";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import { UserContext } from "../../auth/UserContext";
import LoginStyle from "./LoginStyle";
import Users from "../../config/users";

const Login = () => {
  const classes = LoginStyle();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setData(data);
  };

  const [user, setUser] = useContext(UserContext);

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [incorrect, setIncorrect] = useState(false);

  useEffect(() => {
    if (user.email !== "") {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    if (data) {
      let x = Users.find(
        (user) => user.email === data.email && user.password === data.password
      );
      if (x) {
        setUser({ email: data.email });
        signIn();
      } else {
        setLoading(true);
        setTimeout(function () {
          setLoading(false);
          setIncorrect(true);
        }, 1000);
      }
    }
  }, [data]);

  const signIn = () => {
    setLoading(true);
    setTimeout(function () {
      history.push("/");
    }, 1000);
  };

  return (
    <>
      <div className={classes.cont}>
        <div className={classes.card}>
          <div>
            <p className={classes.login}>Login</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div style={{ flexDirection: "column", display: "flex" }}>
                <TextField
                  {...register("email", { required: true })}
                  id="email"
                  label="Email"
                  variant="outlined"
                  className={classes.input}
                  type="email"
                />
                {errors.email && (
                  <span className={classes.error}>Email is required</span>
                )}
              </div>
              <div style={{ flexDirection: "column", display: "flex" }}>
                <TextField
                  {...register("password", { required: true })}
                  id="password"
                  label="Password"
                  variant="outlined"
                  className={classes.input}
                  type="password"
                />
                {errors.password && (
                  <span className={classes.error}>Password is required</span>
                )}
                {incorrect && (
                  <span className={classes.error}>
                    Incorrect email or password.
                  </span>
                )}
              </div>
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
                color="primary"
              >
                Sign In
                {loading && (
                  <CircularProgress
                    color="white"
                    size="1.3rem"
                    style={{ marginLeft: "1rem" }}
                  />
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
