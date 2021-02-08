import React from "react";

import Button from "@material-ui/core/Button";

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default function Navigation() {
  return (
    <>
      <AppBar color="primary">
        <ToolBar>
          <IconButton>
            <MenuIcon />
          </IconButton>

          <Button>LogIn</Button>
        </ToolBar>
      </AppBar>
    </>
  );
}
