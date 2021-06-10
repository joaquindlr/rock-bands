import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  container: {
    height: "4rem",
    background: "#1c1c1c",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "3rem",
    paddingRight: "3rem",
  },
  home: {
    cursor: "pointer",
    color: "white",
    fontSize: "1.6rem",
  },
}));
