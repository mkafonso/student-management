import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// import styles
import { Container, Content, StudentStatus } from "./styles";

// import components
import PieChartComponent from "../../components/Charts/PieChart";
import RadarChartComponent from "../../components/Charts/RadarChart";

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
  createData("Theodore Templeton", "Visto", "31/12/2020", "view"),
  createData("Stacy", "Visto", "31/12/2020", "view"),
  createData("Scooter Buskie", "Passaporte", "31/12/2020", "view"),
  createData("Jimbo", "Visto", "31/12/2020", "view"),
  createData("Mega Fat CEO Baby", "Passaporte", "31/12/2020", "view"),
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
            <StyledTableCell align="left">Documento</StyledTableCell>
            <StyledTableCell align="left">Vencimento</StyledTableCell>
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
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Dashboard = () => {
  return (
    <Container>
      <h1 className="page_title">Dashboard</h1>

      <Content>
        <div>
          <StudentStatus>
            <h3 className="box-title">Status dos alunos</h3>
            <PieChartComponent />
          </StudentStatus>

          <div className="box-gastos">
            <h3 className="box-title">Gastos mensais</h3>
            <RadarChartComponent />
          </div>
        </div>

        <div className="documentos">
          <DashboardTable />
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
