import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";

const GridComponent = ({
  primeiraColuna,
  segundaColuna,
  terceiraColuna,
  quartaColuna,
  quintaColuna,
  data,
  // onEdit,
  // onDelete,
}) => {
  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{primeiraColuna}</TableCell>
              <TableCell>{segundaColuna}</TableCell>
              <TableCell>{terceiraColuna}</TableCell>
              <TableCell>{quartaColuna}</TableCell>
              <TableCell>{quintaColuna}</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item[primeiraColuna]}</TableCell>
                <TableCell>{item[segundaColuna]}</TableCell>
                <TableCell>{item[terceiraColuna]}</TableCell>
                <TableCell>{item[quartaColuna]}</TableCell>
                <TableCell>{item[quintaColuna]}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    // onClick={() => onEdit(index)}
                    sx={{ marginRight: 1 }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    // onClick={() => onDelete(index)}
                  >
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default GridComponent;
