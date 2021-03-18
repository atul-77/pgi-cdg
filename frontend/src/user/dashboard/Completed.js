import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, CRNumber, Wardadhaar, ViewRequest) {
  return {id, CRNumber, Wardadhaar, ViewRequest};
}
var i;
const rows = [
  createData(0, 'Completed: 797', '777', <a href="http://localhost:8000/addrequest">click here</a>),
];
for(i=0;i<10;i++){
  rows.push(createData(0, 'Completed: '+i, 73*i+97, <a href="http://localhost:8000/addrequest">click here</a>));
}
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Completed() {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <Title>Requests</Title> */}
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>CRNumber</TableCell>
            <TableCell>Wardadhaar</TableCell>
            <TableCell>View The request</TableCell>
            {/* <TableCell>Payment Method</TableCell> */}
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.CRNumber}</TableCell>
              <TableCell>{row.Wardadhaar}</TableCell>
              <TableCell>{row.ViewRequest}</TableCell>
              {/* <TableCell>{row.paymentMethod}</TableCell> */}
              {/* <TableCell align="right">{row.amount}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="http://localhost:3000/addrequest" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}
    </React.Fragment>
  );
}
 
