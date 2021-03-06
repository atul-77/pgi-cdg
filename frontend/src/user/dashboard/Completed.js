// import React from 'react';
import React, { useState , useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Switch from "react-switch";
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory({forceRefresh:true});

function createData(doc,wardadhaar,name , ViewRequest, Toggle) {
  return {doc,wardadhaar,name ,ViewRequest, Toggle};
}
var i;
// var rows = [
//   createData(0, 'Approved: 867', '1100', <a href="http://localhost:8000/addrequest">click here</a>,<SwitchExample />),
// ];
// for(i=0;i<20;i++){
//   rows.push(createData(0, 'Approved: '+i, 47*i+9, <a href="http://localhost:8000/addrequest">click here</a>,<SwitchExample />));
// }


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
  const [checked,setChecked]= React.useState(false);

  const apiURL = "http://127.0.0.1:8000/api/view-request-table";
  const updateURL = "http://127.0.0.1:8000/api/get-request-table/" ;

  
  // update(e) {
  //   // update entity - PUT
  //   e.preventDefault();
  // }
  const SwitchExample = () => {
      return (
        <label>
          <Button onClick={()=>{ setChecked(checked^1) }} >
            Move to Pending
            </Button>
        </label>
      );
  }
//   const SwitchExample = (docnumber) => {
//     return (
//       <label>
//         <Switch button onChange={()=>{ dotoggle(docnumber) }} />
//       </label>
//     );
// }

  const [books, setBooks] = React. useState(null);
  const [rows, setRows] = React. useState(createData(123323427897,11,"atul","yo","sfsdf"));

  const fetchData = async () => {
      console.log("in fetch");
      const response = await axios.get(apiURL)
      // const response = await fetch(apiURL);
      const books = await response.data;
      // console.log("see here bruh : "+books[0].createdby);
      // books[0].createdby = "atul op";
      // axios.patch(updateURL+"199/",books[0]);
      console.log("response\n");
      console.log(response);

      var temp = [];
      for(i=0;i<books.length;i++){
        if(books[i].state != "Completed")continue;
        var naam = books[i].patientname;
        var ward = books[i].wardadhaar;
        var link = "insert link here";
        var doc = books[i].docnumber;
        var booktemp = books[i];
        var tog = booktemp;
        temp.push({doc,ward,naam,link,tog});
      } 
      setRows(temp);
      // books[0].name = "Thischangedname";
      // axios.put(updateURL,books);
  }

  console.log("globe");
  useEffect(()=>{
    console.log("in use effect");  
    fetchData()
    
      // getPatientList()
    },[])   
// const rows;

  return (
    <React.Fragment>
      
      {/* <Title>Requests</Title> */}
      <Table size="small">
        <TableHead>
          <TableRow>
          <TableCell>DOCUMENT NUMBER</TableCell>
            <TableCell>PATIENT NAME</TableCell>
            <TableCell>WARD-ADHAAR</TableCell>
            <TableCell>VIEW COMPLETE REQEUST</TableCell>
            <TableCell>ACTION</TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>

          {rows.length>0 ? 
          rows.map((row) => (
            <TableRow key={row.doc}>
              <TableCell>{row.doc}</TableCell>
              <TableCell>{row.naam}</TableCell>
              <TableCell>{row.ward}</TableCell>
              <TableCell>{row.link}</TableCell>   
              <TableCell>
                {/* var booktemp = {row.tog}; */}
              <Button color="primary" variant='contained'onClick={()=>{ row.tog.state = "Approved";
      axios.patch(updateURL+row.doc,row.tog); 
      }} >
      Move to Approved
      </Button>
          
                </TableCell>
              {/* <TableCell align="right">{row.amount}</TableCell> */}
            </TableRow>
          ))
          : ""}
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
 




// import React from 'react';
// import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Title from './Title';

// // Generate Order Data
// function createData(id, CRNumber, Wardadhaar, ViewRequest) {
//   return {id, CRNumber, Wardadhaar, ViewRequest};
// }
// var i;
// const rows = [
//   createData(0, 'Completed: 797', '777', <a href="http://localhost:8000/addrequest">click here</a>),
// ];
// for(i=0;i<10;i++){
//   rows.push(createData(0, 'Completed: '+i, 73*i+97, <a href="http://localhost:8000/addrequest">click here</a>));
// }
// function preventDefault(event) {
//   event.preventDefault();
// }

// const useStyles = makeStyles((theme) => ({
//   seeMore: {
//     marginTop: theme.spacing(3),
//   },
// }));

// export default function Completed() {
//   const classes = useStyles();
//   return (
//     <React.Fragment>
//       {/* <Title>Requests</Title> */}
//       <Table size="small">
//         <TableHead>
//           <TableRow>
//             <TableCell>CRNumber</TableCell>
//             <TableCell>Wardadhaar</TableCell>
//             <TableCell>View The request</TableCell>
//             {/* <TableCell>Payment Method</TableCell> */}
//             {/* <TableCell align="right">Sale Amount</TableCell> */}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell>{row.CRNumber}</TableCell>
//               <TableCell>{row.Wardadhaar}</TableCell>
//               <TableCell>{row.ViewRequest}</TableCell>
//               {/* <TableCell>{row.paymentMethod}</TableCell> */}
//               {/* <TableCell align="right">{row.amount}</TableCell> */}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       {/* <div className={classes.seeMore}>
//         <Link color="primary" href="http://localhost:3000/addrequest" onClick={preventDefault}>
//           See more orders
//         </Link>
//       </div> */}
//     </React.Fragment>
//   );
// }
 
