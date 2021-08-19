import React from "react";
import { makeStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import juvaLogo from "../assets/juva.jpg";
import IconWithDetail from "./partials/IconWithDetail";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import siteData from "./json/siteData";

import { TrophyFilled } from "@ant-design/icons";

const { name, stars, num_reviews, business_type, business_city } = siteData;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "5rem 2rem 0",
    display: "flex",
    border: "1px solid lightgray",
    padding: "1.5rem",
    width: "34rem",
    [theme.breakpoints.down("sm")]: {
      margin: "1rem auto",
      padding: "1rem 0.3rem",
      width: "95%",
      border: "1px solid lightgray",
    },
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
  textDiv: {
    marginLeft: "1rem",
    marginTop: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0.5rem",
      marginTop: "0.5rem",
    },
  },
  headerText: {
    fontSize: "1.4rem",
    fontWeight: "600",
    fontFamily: "arial",
    marginLeft: "0.8rem",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      marginLeft: "0.4rem",
    },
  },
  ratingDiv: {
    display: "flex",
    alignItems: "center",
    marginTop: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0.5rem",
    },
  },
  ratingText: {
    marginLeft: "0.5rem",
    fontSize: "0.9rem",
    fontWeight: "thin",
    opacity: "0.8",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.6rem",
    },
  },

  locationText: {
    fontSize: "0.9rem",
    fontWeight: "thin",
    opacity: "0.9",
    marginTop: "0.5rem",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
      marginTop: "0.05rem",
    },
  },

  iconListInnerDiv: {
    width: "15rem",
    marginBottom: "0.2rem",
    marginTop: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "0.05rem",
    },
  },

  startIcon: { fontSize: "1.1rem", color: "gray" },
  endIcon: {
    marginLeft: "0.15rem",
    fontSize: "0.9rem",
    color: "gray",
    opacity: "0.8",
  },

  deliveryHeader: { fontSize: "0.9rem", fontWeight: "bold", opacity: "0.9" },
  deliveryDesc: {
    marginTop: "0.4rem",
    fontSize: "0.9rem",
    fontWeight: "thin",
    opacity: "0.9",
  },

  logoDiv: {
    width: "5.5rem",
    height: "5.5rem",
    border: "1px solid lightgray",
    [theme.breakpoints.down("md")]: {
      width: "4rem",
      height: "4rem",
    },
  },
  logo: {
    width: "5.5rem",
    height: "5.5rem",
    [theme.breakpoints.down("md")]: {
      width: "4rem",
      height: "4rem",
    },
  },
  trophy: {
    color: "gold",
    fontSize: "2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
}));

function Panel() {
  const classes = useStyles();
  return (
    <a className={classes.link} href="https://google.com" target="_blank">
      <div className={classes.root}>
        <div className={classes.logoDiv}>
          <img src={juvaLogo} alt="Bento Logo" className={classes.logo} />
        </div>
        <div className={classes.textDiv}>
          <div style={{ display: "flex", alignItems: "center", width: "90%" }}>
            <div>
              {" "}
              <TrophyFilled className={classes.trophy} />
            </div>
            <div className={classes.headerText}> {name} </div>
          </div>
          <div className={classes.ratingDiv}>
            <div>
              <Rating
                name="half-rating"
                defaultValue={stars}
                precision={0.5}
                color="white"
                readOnly="true"
                size="small"
              />
            </div>
            <div className={classes.ratingText}>
              {" "}
              {stars} ({num_reviews}){" "}
            </div>
          </div>
          <div items className={classes.iconListInnerDiv}>
            <IconWithDetail
              startIcon={<DriveEtaIcon className={classes.startIcon} />}
              label={business_type}
            />
          </div>
          <div className={classes.locationText}> {business_city}</div>
        </div>
      </div>
    </a>
  );
}

export default Panel;
