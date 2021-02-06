import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";

import "fontsource-roboto";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

import { green, orange } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient( 45deg, #FE6B8B, #FF8E53)",
    border: 0,
    borderRadius: 50,
    marginBottom: 15,
    width: "20vw",
    color: "white",
    padding: "15px 30px",
  },
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 18,
    },
  },
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[400],
    },
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxExample() {
  const [checked, setCheched] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setCheched(e.target.checked)}
          imputProps={{
            "aria-label": "secondary checked",
          }}
        />
      }
      label="Testing Checkbox"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="100%">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <ToolBar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography varian="h6">MUI Themeing</Typography>
                <Button>LogIn</Button>
              </ToolBar>
            </AppBar>
            <Typography variant="h1">Page Header h1</Typography>
            <Typography variant="h2">custom slyle h2</Typography>
            <Typography variant="h3" component="div">
              h3 title tag
            </Typography>
            <Typography variant="subtitle">Random title</Typography>
            <Typography variant="body1">Random title</Typography>
            <ButtonStyled />

            <Grid container spacing={4} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 150, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 150, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 150, width: "100%" }} />
              </Grid>
            </Grid>

            <TextField
              variant="outlined"
              color="secondary"
              type="email"
              label="Email"
              placeholder="Enter Your Email"
            />
            <CheckboxExample />
            <ButtonGroup variant="contained" color="primary">
              <Button startIcon={<SaveIcon />}>Save</Button>
              <Button startIcon={<DeleteIcon />} color="secondary">
                Discard
              </Button>
            </ButtonGroup>
            <br />
            <Button
              startIcon={<SaveIcon />}
              endIcon={<SaveIcon />}
              style={{ fontSize: "24px" }}
              size="large"
              variant="contained"
              color="secondary"
            >
              Save
            </Button>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
