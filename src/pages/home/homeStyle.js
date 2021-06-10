import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  contFull: {
    minHeight: "100vh",
    paddingTop: "1rem",
    background:
      " linear-gradient(138deg, rgba(163,40,5,1) 24%, rgba(54,33,33,1) 75%)",
  },
  cont: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "5rem",
  },
  filter: {
    backgroundColor: "white",
    height: "21rem",
    minWidth: "14rem",
    borderRadius: 5,
    boxShadow: "-1px 2px 9px 4px rgba(0,0,0,0.63)",
    marginTop: "2rem",
    marginLeft: "1rem",
    marginRight: "2rem",
    paddingLeft: "1rem",
  },
  filterPhone: {
    backgroundColor: "white",
    borderRadius: 5,
    boxShadow: "-1px 2px 9px 4px rgba(0,0,0,0.63)",
    marginTop: "2rem",
    marginLeft: "1rem",
    marginRight: "1rem",
    paddingLeft: "1rem",
  },
  bandsContainer: {
    display: "flex",
    marginTop: "2rem",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "65rem",
  },
  filterTitle: {
    fontWeight: 600,
    fontSize: "1.4rem",
    textAlign: "center",
  },
  filterTitlePhone: {
    fontWeight: 600,
    fontSize: "1.6rem",
    textAlign: "center",
    paddingTop: "1rem",
    marginBottom: 0,
  },
  title: {
    textAlign: "center",
    fontSize: "4rem",
    color: "white",
  },
  formControl: {
    width: "90%",
  },
}));
