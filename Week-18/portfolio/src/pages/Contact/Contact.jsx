import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import styles from "./Contact.module.less";
const Contact = () => {
  return (
    <div className={styles.Contact}>
      <Typography variant="h6" className={styles.head}>
        <span>Let's Talk about</span> Your Next Project{" "}
      </Typography>
      <Box className={styles.fieldWrap}>
        <TextField variant={"outlined"} placeholder="Your Name" className={styles.field} />
        <TextField variant={"outlined"} placeholder="Your Email" className={styles.field} />
        <Button variant={'contained'} className={styles.btn}>Contact</Button>
      </Box>
    </div>
  );
};

export default Contact;
