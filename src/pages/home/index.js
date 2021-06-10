import React, { useState, useEffect, useContext } from "react";
import HomeStyles from "./homeStyle";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import UseMediaQuery from "@material-ui/core/useMediaQuery";

import CardBand from "../../components/card-band";
import Redirect from "../../components/redirect";

import IndexService from "../../services/index.service";

import { UserContext } from "../../auth/UserContext";

const Home = () => {
  const classes = HomeStyles();
  const matches = UseMediaQuery("(min-width:800px)");

  const [user] = useContext(UserContext);

  const [bands, setBands] = useState();
  const [genres, setGenres] = useState();
  const [genreFilter, setGenreFilter] = useState("");
  const [sorting, setSorting] = useState("");

  const handleChangeSorting = (event) => {
    setSorting(event.target.value);
  };

  const handleChangeGenreFilter = (event) => {
    setGenreFilter(event.target.value);
  };

  const getBands = async (page) => {
    try {
      let res = await IndexService.getBands(page);
      setBands(res.data);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  const filterBandsForGender = async (code) => {
    try {
      let res = await IndexService.getBandsForGenre(code);
      setBands(res.data);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  useEffect(() => {
    if (genreFilter !== "") {
      filterBandsForGender(genreFilter);
    }
  }, [genreFilter]);

  const getGenre = async () => {
    try {
      let res = await IndexService.getGenre();
      setGenres(res.data);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  const getBandsSort = async (order) => {
    try {
      let res = await IndexService.getBandsSort(order);
      setBands(res.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    if (sorting === "az") {
      getBandsSort("asc");
    }
    if (sorting === "za") {
      getBandsSort("desc");
    }
  }, [sorting]);

  useEffect(() => {
    getBands();
    getGenre();
  }, []);

  const clearFilters = () => {
    setGenreFilter("");
    setSorting("");
    getBands();
  };

  if (user.email === "") {
    return <Redirect />;
  }

  return (
    <>
      <div className={classes.contFull}>
        <h1 className={classes.title}>Rock bands!</h1>
        {!matches && (
          <>
            <div className={classes.filterPhone}>
              <p className={classes.filterTitlePhone}>Filters</p>
              <div
                style={{
                  display: "flex",
                }}
              >
                <div style={{ width: "50%" }}>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Genres:
                  </p>
                  <FormControl
                    className={classes.formControl}
                    variant="outlined"
                  >
                    <Select
                      labelId="genres"
                      id="genres"
                      value={genreFilter}
                      onChange={handleChangeGenreFilter}
                    >
                      {genres &&
                        genres.map((genre, index) => (
                          <MenuItem key={index} value={genre.code}>
                            {genre.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </div>
                <div style={{ width: "50%" }}>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Sort:
                  </p>
                  <FormControl
                    className={classes.formControl}
                    variant="outlined"
                  >
                    <Select
                      labelId="genres"
                      id="genres"
                      value={sorting}
                      onChange={handleChangeSorting}
                    >
                      <MenuItem value="az">Order A-Z</MenuItem>
                      <MenuItem value="za">Order Z-A</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  paddingBottom: "1rem",
                  cursor: "pointer",
                }}
                onClick={() => clearFilters()}
              >
                Clear filters
              </p>
            </div>{" "}
          </>
        )}
        <div className={classes.cont}>
          {matches && (
            <>
              <div className={classes.filter}>
                <p className={classes.filterTitle}>Filters</p>
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  Genres:
                </p>
                <FormControl className={classes.formControl} variant="outlined">
                  <Select
                    labelId="genres"
                    id="genres"
                    value={genreFilter}
                    onChange={handleChangeGenreFilter}
                  >
                    {genres &&
                      genres.map((genre, index) => (
                        <MenuItem key={index} value={genre.code}>
                          {genre.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  Sort:
                </p>
                <FormControl className={classes.formControl} variant="outlined">
                  <Select
                    labelId="genres"
                    id="genres"
                    value={sorting}
                    onChange={handleChangeSorting}
                  >
                    <MenuItem value="az">Order A-Z</MenuItem>
                    <MenuItem value="za">Order Z-A</MenuItem>
                  </Select>
                </FormControl>
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    marginBottom: "0.4rem",
                    cursor: "pointer",
                  }}
                  onClick={() => getBands()}
                >
                  Clear filters
                </p>
              </div>{" "}
            </>
          )}
          <div className={classes.bandsContainer}>
            {bands &&
              bands.map((band) => <CardBand band={band} key={band.id} />)}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
