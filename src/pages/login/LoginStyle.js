import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  cont: {
    minHeight: "100vh",
    background:
      " linear-gradient(138deg, rgba(163,40,5,1) 24%, rgba(54,33,33,1) 75%)",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    height: "20rem",
    width: "18rem",
    borderRadius: 5,
    display: "grid",
    placeItems: "center",
    marginTop: "4rem",
  },
  login: {
    fontWeight: 600,
    fontSize: "2rem",
    textAlign: "center",
    marginTop: 0,
    marginBottom: "1rem",
  },
  button: {
    width: "100%",
    borderRadius: 5,
    height: "2.5rem",
  },
  error: {
    color: "#ab150a",
    fontWeight: 500,
    fontSize: "0.8rem",
    marginBottom: "1rem",
  },
  input: {
    marginBottom: "1rem",
  },
}));
