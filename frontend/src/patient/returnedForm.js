import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar'
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, specifications, brand, requested, supplied,difference,remarks) {
  return { name, specifications, brand, requested, supplied,difference,remarks };
}
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };
 

const apiURL="http://127.0.0.1:8000/api/combined-form/";

export default function ReturnedTable(props) {
    // var rows = [
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0,4,4),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3,4,4),
    //     createData('Eclair', 262, 16.0, 24, 6.0,4,4),
    //     createData('Cupcake', 305, 3.7, 67, 4.3,4,4),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9,4,4),
    //   ];
    var temp=[];
    const [rows, setRows] = React.useState([createData(123323427897,11,"atul","yo","sfsdf")]);
    const fetchData = async () => {
        console.log("in fetch");
        const response = await axios.get(apiURL+props.docnumber)
        // const response = await fetch(apiURL);
        const books = await response.data;
        console.log(books);
        console.log(books["**Requested**"][0].A_1_name)
        temp=[
            createData(books["**Requested**"][0].A_1_name,books["**Requested**"][0].A_1_descr,books["**Requested**"][0].A_1_brand,books["**Requested**"][0].A_1_qty,books["**Supplied**"][0].A_1_qty,(books["**Requested**"][0].A_1_qty)-(books["**Supplied**"][0].A_1_qty),"yes"),
            createData(books["**Requested**"][0].A_2A_name,books["**Requested**"][0].A_2A_descr,books["**Requested**"][0].A_2A_brand,books["**Requested**"][0].A_2A_qty,books["**Supplied**"][0].A_2A_qty,(books["**Requested**"][0].A_2A_qty)-(books["**Supplied**"][0].A_2A_qty),"yes"),
            
        ];
        // console.log("see here bruh : "+books[0].createdby);
        // books[0].createdby = "atul op";
        // axios.patch(updateURL+"199/",books[0]);
        console.log("response\n");
        console.log(response);
        console.log(temp);
        setRows(temp);
    };
    //fetchData();
    useEffect(()=>{
         console.log("in use effect");  
         fetchData();
         },[]) ; 
  const classes = useStyles();

  return (
      <React.Fragment>
          <CssBaseline />
    <AppBar position="static">
    <Toolbar variant="dense">
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            PGIMER-Cardiac Form
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Container>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
                        <TableCell style={{color:"Black"}}>
                            Item
                        </TableCell>
                        {/* <TableCell style={{color:"black"}}>
                            {checkboxSelected_1.cricket}
                        </TableCell> */}
                        <TableCell style={{color:"black"}}>
                            Specification
                        </TableCell>
                        <TableCell style={{color:"black"}}>
                            Company Name
                        </TableCell>
                        <TableCell style={{color:"black"}}>
                            Quantity Requested
                        </TableCell>
                        <TableCell style={{color:"black"}}>
                            Quantity Supplied
                        </TableCell>
                        <TableCell style={{color:"black"}}>
                            Difference
                        </TableCell>
                        <TableCell style={{color:"black"}}>
                            Remarks
                        </TableCell>
                        <TableCell style={{color:"black"}}>
                            Add comment
                        </TableCell>
                    </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.specifications}</TableCell>
              <TableCell align="right">{row.brand}</TableCell>
              <TableCell align="right">{row.requested}</TableCell>
              <TableCell align="right">{row.supplied}</TableCell>
              <TableCell align="right">{row.difference}</TableCell>
              <TableCell align="right">{row.remarks}</TableCell>
              <TableCell align="right"><input></input></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </React.Fragment>
  );
}