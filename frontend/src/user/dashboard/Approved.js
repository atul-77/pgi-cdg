import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Switch from "react-switch";

// const SwitchExample = () => {
//   // render() {
//     return (
//       <label>
//         {/* <span>Switch with default style</span> */}
//         {/* <Switch onChange={handleChange} checked={checked} /> */}
//         <Switch button onChange={()=>{ setChecked(checked^1) }} checked={checked}/>
//       </label>
//     );
//   // }
// }

// Generate Order Data


  const SwitchExample = (checked,setChecked) => {
    // render() {
      return (
        <label>
          {/* <span>Switch with default style</span> */}
          {/* <Switch onChange={handleChange} checked={checked} /> */}
          <Switch button onChange={()=>{ setChecked(checked^1) }} checked={1}/>
        </label>
      );
    // }
  }

function createData(id, CRNumber, Wardadhaar, ViewRequest, Toggle) {
  return {id, CRNumber, Wardadhaar, ViewRequest, Toggle};
}
var i;
const rows = [
  createData(0, 'Approved: 867', '1100', <a href="http://localhost:8000/addrequest">click here</a>,<SwitchExample />),
];
for(i=0;i<20;i++){
  rows.push(createData(0, 'Approved: '+i, 47*i+9, <a href="http://localhost:8000/addrequest">click here</a>,<SwitchExample />));
}


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));



export default function Approved() {
  const classes = useStyles();
  const [checked,setChecked]=React.useState(false);

  return (
    <React.Fragment>
      {/* <Title>Requests</Title> */}
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>CRNumber</TableCell>
            <TableCell>Wardadhaar</TableCell>
            <TableCell>View The request</TableCell>
            <TableCell>Toggle</TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.CRNumber}</TableCell>
              <TableCell>{row.Wardadhaar}</TableCell>
              <TableCell>{row.ViewRequest}</TableCell>
              <TableCell>{row.Toggle}</TableCell>
              {/* <TableCell align="right">{row.amount}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
 
