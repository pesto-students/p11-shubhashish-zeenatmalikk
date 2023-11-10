import { Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./Home.module.less";
import profile from "../../assets/profile.jpeg";
const Home = () => {
  return (
    <div>
      <Grid container className={styles.homeWrap}>
        <Grid item md={12} xs={6} sm={12} className={styles.nameContainer}>
          <Typography variant="h1" className={styles.name}>
            Hello
          </Typography>
          <Typography variant="h1" className={styles.name2}>
            I'm <span>Z</span>eenat
          </Typography>
        </Grid>
        <Grid item md={7} xs={12} sm={6}>
          <Typography variant="body1" className={styles.intro}>
            <span>I am a front-end developer</span> who constantly seeks out innovative
            solutions to everyday problems
          </Typography>
        </Grid>
        <Grid item md={5}/>
      </Grid>
    </div>
  );
};

export default Home;
