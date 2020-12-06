import React from "react";
import { Link } from "react-router-dom";
import { MdAdd, MdSearch, MdVisibility } from "react-icons/md";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// import styles
import { Container, Filters, Content } from "./styles";

// import libs
import { routesConfig } from "../../lib/routes";

import avatar from "../../assets/baby_avatar.jpg";

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
    <img className="user-img" src={avatar} alt="Mr. baby Boss" />,
    <h3>Ms. Stacy</h3>,
    <h3>Engenharia de software</h3>,
    "Ativo",
    <ul className="user-actions">
      <li>
        <MdSearch />
      </li>
      <li>
        <MdVisibility />
      </li>
    </ul>
  ),
  createData(
    <img
      className="user-img"
      src={
        "https://img.pngio.com/the-boss-baby-art-boss-baby-em-2019-aniversario-do-chefe-boss-baby-transparent-400_657.png"
      }
      alt="Mr. baby Boss"
    />,
    <h3>Mr. Baby Boss</h3>,
    <h3>Engenharia de software</h3>,
    "Ativo",
    <ul className="user-actions">
      <li>
        <MdSearch />
      </li>
      <li>
        <MdVisibility />
      </li>
    </ul>
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
            <StyledTableCell>Imagem</StyledTableCell>
            <StyledTableCell align="left">Nome</StyledTableCell>
            <StyledTableCell align="left">Curso</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
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

const StudentsList = () => {
  return (
    <Container>
      <h1 className="page_title">Estudantes</h1>

      <Filters>
        <Link to={routesConfig.studentsRegister.path}>
          <button className="add-student_btn">
            <MdAdd /> Adicionar
          </button>
        </Link>

        <div className="status">filtros</div>

        <input
          type="search"
          name="searchStudent"
          id="searchStudent"
          placeholder="Pesquisar..."
        />
      </Filters>

      <Content>
        <DashboardTable />
      </Content>
    </Container>
  );
};

export default StudentsList;
