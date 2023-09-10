import React from "react";
import styles from "./Skills.module.less";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
const Skills = () => {
  const skills = [
    {
      head: "Front-end development",
      sub: "Development of figma design",
      icon:<DesignServicesIcon/>
    },
    {
      head: "UI & UX Design",
      sub: "Creating original and selling design",
      icon:<CodeIcon/>
    },
    {
      head: "UI & UX Design",
      sub: "Creating original and selling design",
      icon:<CodeIcon/>
    },
  ];
  return (
    <div className={styles.skillContainer}>
        <Container>

      <Grid container>
        <Grid item md={12} xs={6}>
          <Typography variant="h5" className={styles.head}>
            <span>Professional</span> Expertiese
          </Typography>
        </Grid>
        {/* <Grid item md={1}/> */}
        {skills.map((skill) => (
          <>
          <Grid item md={4} sx={12} className={styles.skillCard}>
            <Card className={styles.cardWrap}>
              <CardContent>
                {skill.icon}
                <Typography variant="h6" className={styles.title}>
                  {skill.head}
                </Typography>
                <Typography variant="body2" className={styles.sub}>
                  {skill.sub}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          </>
        ))}
        {/* <Grid item md={2} /> */}
      </Grid>
        </Container>
    </div>
  );
};

export default Skills;
