import React from "react";
import styles from "./Projects.module.less";
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
const Projects = () => {
  const projects = [
    {
      head: "Dashboard",
      sub: "Dashboard for a POS system",
      img: "https://t4.ftcdn.net/jpg/02/70/95/21/360_F_270952103_2zSDVMWHM7KFOXmO0Dko0pYOE9aCs07k.jpg",
    },
    {
      head: "POS system",
      sub: "Point of sales system for retail stores",
      img: "https://cdn.dribbble.com/userupload/3571004/file/original-cd5efe3fbbc6fbf0dfe14de04c9657e4.png?resize=1200x900",
    },
    {
      head: "UI & UX Design",
      sub: "Creating original and selling design",
      img: "https://cdn.dribbble.com/userupload/3571004/file/original-cd5efe3fbbc6fbf0dfe14de04c9657e4.png?resize=1200x900",
    },
    {
      head: "Dashboard",
      sub: "Dashboard for a POS system",
      img: "https://t4.ftcdn.net/jpg/02/70/95/21/360_F_270952103_2zSDVMWHM7KFOXmO0Dko0pYOE9aCs07k.jpg",
    },
  ];
  return (
    <Box className={styles.projects} sx={{height:{xs: 'auto'}}}>
   <Container>
       <Grid container>
        <Grid item md={12} xs={12} >
          <Typography variant="h5" className={styles.head}>
            Some of my <span>Recent Works</span>
          </Typography>
        </Grid>
        {/* <Grid item md={1}/> */}
        {projects.map((project, index) => (
          <>
            <Grid item md={6} xs={12} key={index} className={styles.cardWrap}>
              <Card className={styles.projectCard} sx={{margin:{xs: '1rem 0'}}}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={project.img}
                  title="green iguana"
                />
                <CardContent className={styles.projectDesc}>
                  <Typography variant="h6" className={styles.title}>
                    {project.head}
                  </Typography>
                  <Typography variant="body2" className={styles.sub}>
                    {project.sub}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </>
        ))}
        {/* <Grid item md={2} /> */}
      </Grid>
   </Container>
    </Box>
  );
};

export default Projects;
