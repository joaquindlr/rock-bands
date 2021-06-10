import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  bandsContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "blue",
  },
  bandImage: {
    width: "100%",
    borderRadius: 5,
  },
  bandImageContainer: {
    paddingTop: "0.2rem",
    paddingLeft: "0.2rem",
    paddingRight: "0.2rem",
  },
  nameBand: {
    textAlign: "center",
    fontSize: "1.4rem",
    color: "#1c1c1c",
  },
}));
