import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function Ordem() {
  const [serv, setServ] = React.useState("");

  const handleChange = (event) => {
    setServ(event.target.value);
  };

  const tipoSerevico = [
    "Corretiva",
    "Preventiva"
  ];
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cadastro de Chamados
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}>
        <Box sx={{ padding: 5 }}>
          <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
          Emissão de Ordem de Serviço
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Número O.S.:
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="nOS"
                name="nOS"
                label="12345"
                fullWidth
                size="small"
                autoComplete="on"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Data:
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="data"
                name="data"
                label="21/08/2023"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Tipo de Serviço:
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth size="small">
                <InputLabel id="label-servico">Tipo de Serviço</InputLabel>
                <Select
                  labelId="label-servico"
                  id="label-servico-selecao"
                  value={serv}
                  label="Tipo de Serviço"
                  onChange={handleChange}
                >
                  {tipoSerevico.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Solicitante:
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="solicitante"
                name="solicitante"
                label=""
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Detalhes:
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                id="outlined-multiline-static"
                label="Detalhe o problema:"
                multiline
                fullWidth
                rows={4}
              />
            </Grid>            
            <Grid item xs={12} sm={4}>
              <Button variant="contained" sx={{ color: "#ffffff" }}>
                Gravar
              </Button>
            </Grid>
            <Grid item xs={12} sm={5} />
          </Grid>
        </Box>
      </Paper>
    </React.Fragment>
  );
}
