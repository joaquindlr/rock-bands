import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  img: {
    height: "100%",
    width: "auto",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  imgPhone: {
    height: "5rem",
    width: "5rem",
    borderRadius: "50%",
    marginLeft: "1rem",
  },
  imgCont: {
    background:
      "linear-gradient(138deg, rgba(28,28,28,1) 17%, rgba(44,33,33,1) 100%)",
    width: "80%",
    height: "20rem",
    marginTop: "1rem",
    borderRadius: 5,
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
    [theme.breakpoints.down("md")]: {
      height: "15rem",
    },
  },
  name: {
    fontSize: "2.8rem",
    marginBottom: 0,
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
      margin: 0,
      marginLeft: "0.5rem",
    },
  },
  info: {
    fontWeight: 600,
    fontSize: "2.4rem",
    marginTop: "0.5rem",
    marginBottom: 0,
    color: "white",
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4rem",
      margin: 0,
      marginLeft: "0.5rem",
    },
  },
  accordion: {
    borderRadius: 5,
    marginTop: "1rem",
    width: "80%",
    background:
      "linear-gradient(138deg, rgba(28,28,28,1) 17%, rgba(44,33,33,1) 100%)",
  },
  heading: {
    color: "white",
    fontSize: "1.8rem",
    fontWeight: 600,
  },
  detailsAccordion: {
    fontSize: "1.6rem",
    color: "white",
    margin: 0,
    marginBottom: "0.2rem",
  },
  divider: {
    height: "0.1rem",
    backgroundColor: "white",
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
}));
