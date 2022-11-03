import * as React from "react";
import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import BasicModal from "../BasicModal/BasicModal";
import Filter from "../filter/Filter";
import './petCards.css'

const cards = [];

export default function PetCards(props) {
       
  (() => {
    for (let index = 0; index < props.image.length; index++) {
      cards[index] = index;
    }
  })();
  return (
    <main >
      <div className="petCards">
      <CssBaseline />
      <Box
        sx={{
          pt: 10,
          pb: 0,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{ fontSize: { xs: 30, sm: 50 }}}
            dir='rtl'
          >
            בעלי חיים שאבדו
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ fontSize: { xs: 15, sm: 22 } }}
            dir='rtl'
          >במאגר הזה תוכלו למצוא דיווחים על בעלי חיים שאיבדו את בלעיהם בשטחי העיר דימונה. מאגר זה נועד כדי לייעל את התהליך הכה מאתגר של מציאת בעלי חיים,ולהשיב חיות המחמד.
          </Typography>
          <div style={{display:"flex",justifyContent:"center"}}>
          <Filter />
         
          </div>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="xlg">
        {/* End hero unit */}
        <Grid container spacing={3}>
          {cards.map((card, index) => (
            <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Box sx={{bgcolor:'text.disabled', display: "flex", justifyContent: "center" }}>
                  <img
                    src={props.image[index]}
                    alt={index}
                    className="album-image"
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 , bgcolor:'text.disabled'}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {props.type[index]}
                    </Typography>
                    <Typography>
                      {props.problem[index]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <BasicModal id={props.id[index]} image={props.image[index]} name={props.name[index]} phone={props.phone[index]} email={props.email[index]} type={props.type[index]} size={props.size[index]} vailent={props.vailent[index]} place={props.place[index]} time={props.time[index]} problem={props.problem[index]} exstraD={props.exstraD[index]}/>
                  </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      </div>
    </main>
  );
}
