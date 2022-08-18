import { React, useState, useEffect } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function LoginForm(props) {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    margin: "100px auto",
    width: 320,
  };
  const avatarStyle = { backgroundColor: "rgb(26 157 126)" };
  const buttonStyle = {
    marginTop: "20px",
    backgroundColor: "rgb(26 157 126)",
    color: "white",
  };
  const textFieldStyle = { marginTop: "10px" };
  const error = { color: "red" };

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  // const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      window.location.href = "/dashboard";
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.username) {
      errors.username = "username is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regax.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <div>
      <form>
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
              name="username"
              placeholder="Enter Username"
              fullWidth
              value={formValues.username}
              required
              onChange={handleChange}
            />
            <p style={error}>{formErrors.username}</p>
            <TextField
              label="Email"
              placeholder="Enter Email"
              value={formValues.email}
              name="email"
              fullWidth
              type="email"
              style={textFieldStyle}
              onChange={handleChange}
              required
            />
            <p style={error}>{formErrors.email}</p>
            <TextField
              label="Password"
              placeholder="Enter Password"
              name="password"
              value={formValues.password}
              fullWidth
              type="password"
              style={textFieldStyle}
              onChange={handleChange}
              required
            />
            <p style={error}> {formErrors.password}</p>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={buttonStyle}
              onClick={handleSubmit}
            >
              Sign in
            </Button>
          </Paper>
        </Grid>
      </form>
    </div>
  );
}
