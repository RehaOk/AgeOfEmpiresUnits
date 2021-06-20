import React from "react";
import Grid from "@material-ui/core/Grid";
import introImage from "../../assets/intro-image.jpg";
import styles from "../../styles/styles.module.css";

const HomePageViewIndex = () => {
  return (
    <div data-testid="home-page-view-index" className={styles.homePageViewRoot}>
      <Grid container className={styles.introGridContainer}>
        <Grid item xs={12} className={styles.introImageContainer}>
          <img src={introImage} alt="age of empires intro wallpaper" />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePageViewIndex;
