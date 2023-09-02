import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LanguageIcon from "@mui/icons-material/Language";
const Header = () => {
  return (
    <>
      <Box sx={{ height: "500px", backgroundColor: "gray" }}>
        <Typography variant="h3">Démarrez votre projet</Typography>
        <Typography variant="h6">
          web Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          dui nunc, sagittis sagittis.
        </Typography>

        <Grid container spacing={2}>
          <Grid  container item xs={4}>
            <Grid item xs={1}>
              <LanguageIcon />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="h6"> Créer un site Internet</Typography>
              <Typography variant="p">
                Lorem ipsum dolor amet consectetur nunc eu sit gravida sit.
              </Typography>
            </Grid>

            {/* </Box> */}
            {/* <Item>xs=8</Item> */}
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6"> Gagner de l'argent en ligne</Typography>
            <Typography variant="p">
              Lorem ipsum dolor amet consectetur nunc eu sit gravida sit.
            </Typography>
            {/* <Item>xs=4</Item> */}
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6"> Démarrer un blogue</Typography>
            <Typography variant="p">
              Lorem ipsum dolor amet consectetur nunc eu sit gravida sit.
            </Typography>
            {/* <Item>xs=4</Item> */}
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6"> Devenir entrepreneur web</Typography>
            <Typography variant="p">
              Lorem ipsum dolor amet consectetur nunc eu sit gravida sit.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">
              {" "}
              Apprendre l'affiliation en ligne
            </Typography>
            <Typography variant="p">
              Lorem ipsum dolor amet consectetur nunc eu sit gravida sit.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6"> Générer du trafic</Typography>
            <Typography variant="p">
              Lorem ipsum dolor amet consectetur nunc eu sit gravida sit.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Header;
