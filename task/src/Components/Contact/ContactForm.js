import React from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
export default function ContactForm() {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    margin: "20px auto",
    width: 320,
  };
  const avatarStyle = { backgroundColor: "rgb(26 157 126)" };
  const buttonStyle = {
    marginTop: "20px",
    backgroundColor: "rgb(26 157 126)",
    color: "white",
  };
  const textFieldStyle = { marginTop: "20px" };

  const handleSubmit = () => {
    alert("thank you");
  };
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            {" "}
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign in</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter Username"
            fullWidth
            required
            // style={textFieldStyle}
          />
          <TextField
            label="Email"
            placeholder="Enter Email"
            fullWidth
            type="email"
            style={textFieldStyle}
            required
          />
          <TextField
            label="Password"
            placeholder="Enter Password"
            fullWidth
            type="password"
            style={textFieldStyle}
            required
          />
          <Button
            type="submit"
            variant="contained"
            // color="primary"
            fullWidth
            style={buttonStyle}
            onClick={handleSubmit}
          >
            Sign in
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}
