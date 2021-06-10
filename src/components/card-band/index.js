import CardBandStyles from "./CardBandStyles";
import { useHistory } from "react-router-dom";

const CardBand = ({ band }) => {
  const classes = CardBandStyles();
  const history = useHistory();

  return (
    <div
      style={{
        width: "15rem",
        height: "18rem",
        backgroundColor: "white",
        borderRadius: 5,
        marginLeft: "0.5rem",
        marginRight: "0.5rem",
        boxShadow: "-1px 2px 9px 4px rgba(0,0,0,0.63)",
        marginBottom: "1rem",
        cursor: "pointer",
      }}
      onClick={() => history.push(`/band-profile/${band.id}`)}
    >
      <div className={classes.bandImageContainer}>
        <img
          className={classes.bandImage}
          src="https://elordenmundial.com/wp-content/uploads/2019/11/10675861575_e3257f7ace_k-1310x873.jpg"
          alt="bandImage"
        />
      </div>
      <h3 className={classes.nameBand}>{band.name}</h3>
    </div>
  );
};

export default CardBand;
