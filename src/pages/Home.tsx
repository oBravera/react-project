import * as React from "react";
import Typography from "@mui/material/Typography";
import Menu from "../components/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";


export default function Home() {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sistema de Gerenciamento Integrado
          </Typography>
        </Toolbar>
      </AppBar>   
      <Menu />
      </React.Fragment>
      
  );
}