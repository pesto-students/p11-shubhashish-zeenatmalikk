import React from "react";
import styles from "./Blogs.module.less";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
const Blogs = () => {
  const blogs = [
    {
      id: 1,
      head: "TypeScript vs. JavaScript: Which is the better pick?",
      sub: "Deciding what programming language to use can be challenging when you begin a new development project. ",
      img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*KkKCu1meV6O1E8esel6JZg.jpeg",
      desc: `Javascript is one of the most popular programming languages and has been around for many years. This software is straightforward to learn, intuitive to use, and makes it easy for developers to build stunning projects.

      Whenever one language arises, an alternative is always available. There is a famous typescript vs. javascript debate, and we are discussing TypeScript.
      
      Here’s an in-depth guide to everything you need to know about both languages and how to decide which one to choose for your new development project.`,
    },
    {
      id: 2,

      head: "TypeScript vs. JavaScript: Which is the better pick?",
      sub: "Deciding what programming language to use can be challenging when you begin a new development project. ",
      img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*KkKCu1meV6O1E8esel6JZg.jpeg",
      desc: `Javascript is one of the most popular programming languages and has been around for many years. This software is straightforward to learn, intuitive to use, and makes it easy for developers to build stunning projects.

      Whenever one language arises, an alternative is always available. There is a famous typescript vs. javascript debate, and we are discussing TypeScript.
      
      Here’s an in-depth guide to everything you need to know about both languages and how to decide which one to choose for your new development project.`,
    },
    {
      id: 3,
      head: "TypeScript vs. JavaScript: Which is the better pick?",
      sub: "Deciding what programming language to use can be challenging when you begin a new development project. ",
      img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*KkKCu1meV6O1E8esel6JZg.jpeg",
      desc: `Javascript is one of the most popular programming languages and has been around for many years. This software is straightforward to learn, intuitive to use, and makes it easy for developers to build stunning projects.

      Whenever one language arises, an alternative is always available. There is a famous typescript vs. javascript debate, and we are discussing TypeScript.
      
      Here’s an in-depth guide to everything you need to know about both languages and how to decide which one to choose for your new development project.`,
    },
    {
      id: 4,
      head: "TypeScript vs. JavaScript: Which is the better pick?",
      sub: "Deciding what programming language to use can be challenging when you begin a new development project. ",
      img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*KkKCu1meV6O1E8esel6JZg.jpeg",
      desc: `Javascript is one of the most popular programming languages and has been around for many years. This software is straightforward to learn, intuitive to use, and makes it easy for developers to build stunning projects.

      Whenever one language arises, an alternative is always available. There is a famous typescript vs. javascript debate, and we are discussing TypeScript.
      
      Here’s an in-depth guide to everything you need to know about both languages and how to decide which one to choose for your new development project.`,
    },
  ];
  return (
    <div>
      <Container>
        <Grid container className={styles.blogGrids}>
          <Grid item md={12} xs={12}>
            <Typography variant="h5" className={styles.head}>
              Latest <span>News</span>
            </Typography>
          </Grid>
          {/* <Grid item md={1}/> */}
          {blogs.map((blog, index) => (
            <>
              <Grid item md={6} xs={12} key={index} className={styles.cardWrap}>
                <Link
                  to={`/blog/${blog.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    className={styles.blogCard}
                    sx={{ margin: { xs: "1rem 0" } }}
                  >
                    <CardMedia sx={{ height: 140 }} image={blog.img} />
                    <CardContent className={styles.projectDesc}>
                      <Typography variant="h6" className={styles.title}>
                        {blog.head}
                      </Typography>
                      <Typography variant="body2" className={styles.sub}>
                        {blog.sub}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            </>
          ))}
          {/* <Grid item md={2} /> */}
        </Grid>
      </Container>
    </div>
  );
};

export default Blogs;
