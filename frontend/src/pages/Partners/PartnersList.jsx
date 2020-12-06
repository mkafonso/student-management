import React from "react";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// import styles
import { Container } from "./styles";

// import libs
import { routesConfig } from "../../lib/routes";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "UNASP",
    "Privada",
    "www.unasp.com.br",
    "+55 11 957944107",
    "view"
  ),
  createData("USP", "Privada", "www.usp.com.br", "+55 11 957944107", "view"),
  createData(
    "Anhembi",
    "Privada",
    "www.usp.com.br",
    "+55 11 957944107",
    "view"
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const DashboardTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="left">Tipo</StyledTableCell>
            <StyledTableCell align="left">Website</StyledTableCell>
            <StyledTableCell align="left">Contato</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>
              <StyledTableCell align="left">{row.carbs}</StyledTableCell>
              <StyledTableCell align="left">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const PartnersList = () => {
  return (
    <Container>
      <h1 className="page_title">Instituições parceiras</h1>

      <Link to={routesConfig.partnersRegister.path}>
        <button className="add-partners_btn">
          <MdAdd /> Adicionar
        </button>
      </Link>

      <DashboardTable className="partners-table" />
    </Container>
  );
};

export default PartnersList;
