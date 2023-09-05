import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { green } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit" href="https://mui.com/"></Link> &copy; Br Inv. -
      2023
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/react-project/home');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const log = new FormData(event.currentTarget);
    console.log({
      user: log.get("usuario"),
      senha: log.get("senha"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: green[500], marginBottom: 1 }} variant="rounded">
            <AssignmentIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Acessar o Sistema
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="usuario"
              label="Email"
              name="usuario"
              autoComplete="usuario"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-senha"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleClick}
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Esqueceu a senha?
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
