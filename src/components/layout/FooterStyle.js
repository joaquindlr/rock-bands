import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  cont: {
    height: "7rem",
    backgroundColor: "#1c1c1c",
    display: "grid",
    placeContent: "center",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
  me: {
    margin: 0,
    color: "white",
    fontSize: "2rem",
  },
}));
