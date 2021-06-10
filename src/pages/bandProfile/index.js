import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import IndexService from "../../services/index.service";
import Redirect from "../../components/redirect";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import UseMediaQuery from "@material-ui/core/useMediaQuery";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import BandProfileStyle from "./BandProfileStyle";

import { UserContext } from "../../auth/UserContext";

const BandProfile = () => {
  const classes = BandProfileStyle();
  const matches = UseMediaQuery("(min-width:992px)");

  const [idBand, setIdBand] = useState(useParams().id);
  const [band, setBand] = useState();
  const [albums, setAlbums] = useState();

  const [user] = useContext(UserContext);

  const getBandForId = async () => {
    try {
      let res = await IndexService.getBandForId(idBand);
      setBand(res.data[0]);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const getAlbumForBandId = async () => {
    try {
      let res = await IndexService.getAlbumForBandId(idBand);
      setAlbums(res.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    getBandForId();
    getAlbumForBandId();
  }, []);

  if (user.email === "") {
    return <Redirect />;
  }

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          paddingBottom: "5rem",
          background:
            " linear-gradient(138deg, rgba(163,40,5,1) 24%, rgba(54,33,33,1) 75%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            placeItems: "center",
          }}
        >
          <div className={classes.imgCont}>
            {!matches && (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "1rem",
                  }}
                >
                  <img
                    className={classes.imgPhone}
                    src="https://elordenmundial.com/wp-content/uploads/2019/11/10675861575_e3257f7ace_k-1310x873.jpg"
                    alt="bandImage"
                  />
                  <h2 className={classes.name}>{band && band.name}</h2>
                </div>
                <div className={classes.divider}></div>
              </>
            )}
            {matches && (
              <img
                className={classes.img}
                src="https://elordenmundial.com/wp-content/uploads/2019/11/10675861575_e3257f7ace_k-1310x873.jpg"
                alt="bandImage"
              />
            )}
            <div style={{ marginLeft: "1rem" }}>
              {matches && <h2 className={classes.name}>{band && band.name}</h2>}
              <p className={classes.info}>{band && band.genreCode}</p>
              <p className={classes.info}>{band && band.country}</p>
              <p className={classes.info}>{band && band.year}</p>
            </div>
          </div>
          <Accordion className={classes.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="members"
              id="members"
            >
              <p className={classes.heading}>Members</p>
            </AccordionSummary>
            <AccordionDetails style={{ flexDirection: "column" }}>
              {band &&
                band.members.map((member, index) => (
                  <>
                    <p className={classes.detailsAccordion}>{member.name}</p>
                  </>
                ))}
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="members"
              id="members"
            >
              <p className={classes.heading}>Albums</p>
            </AccordionSummary>
            <AccordionDetails style={{ flexDirection: "column" }}>
              {albums &&
                albums.map((album, index) => (
                  <>
                    <p className={classes.detailsAccordion}>
                      {album.name} ({album.year})
                    </p>
                  </>
                ))}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};
export default BandProfile;
