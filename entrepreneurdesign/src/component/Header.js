// import React from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import LanguageIcon from "@mui/icons-material/Language";
// const Header = () => {
//   return (
//     <>
//       <Box sx={{ height: "500px", backgroundColor: "gray" }}>
//         
//         <Grid container spacing={2}>
//           <Grid  container item xs={4}>
//             <Grid item xs={1}>
//               <LanguageIcon />
//             </Grid>
//             <Grid item xs={11}>
//               <Typography variant="h6"> Créer un site Internet</Typography>
//               <Typography variant="p">
//                 Lorem ipsum dolor amet consectetur nunc eu sit gravida sit.
//               </Typography>
//             </Grid>

//             {/* </Box> */}
//             {/* <Item>xs=8</Item> */}
//           </Grid>
//           <Grid item xs={4}>
//             <Typography variant="h6"> Gagner de l'argent en ligne</Typography>
//             <Typography variant="p">
//               Lorem ipsum dolor amet consectetur nunc eu sit gravida sit.
//             </Typography>
//             {/* <Item>xs=4</Item> */}
//           </Grid>
//           <Grid item xs={4}>
//             <Typography variant="h6"> Démarrer un blogue</Typography>
//             <Typography variant="p">
//               Lorem ipsum dolor amet consectetur nunc eu sit gravida sit.
//             </Typography>
//             {/* <Item>xs=4</Item> */}
//           </Grid>
//           <Grid item xs={4}>
//             <Typography variant="h6"> Devenir entrepreneur web</Typography>
//             <Typography variant="p">
//               Lorem ipsum dolor amet consectetur nunc eu sit gravida sit.
//             </Typography>
//           </Grid>
//           <Grid item xs={4}>
//             <Typography variant="h6">
//               {" "}
//               Apprendre l'affiliation en ligne
//             </Typography>
//             <Typography variant="p">
//               Lorem ipsum dolor amet consectetur nunc eu sit gravida sit.
//             </Typography>
//           </Grid>
//           <Grid item xs={4}>
//             <Typography variant="h6"> Générer du trafic</Typography>
//             <Typography variant="p">
//               Lorem ipsum dolor amet consectetur nunc eu sit gravida sit.
//             </Typography>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };
// export default Header;
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
