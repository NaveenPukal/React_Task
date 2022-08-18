import React from "react";
import { Grid, Paper, Button } from "@material-ui/core";
export default function Dashboard(props) {
  const paperStyle = {
    padding: 20,
    height: "50vh",
    margin: "100px auto",
    width: 620,
    backgroundColor: "rgb(26 157 126)",
  };
  const welcome = {
    color: "white",
    marginTop: "130px",
  };
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h1 style={welcome}>Welome </h1>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
