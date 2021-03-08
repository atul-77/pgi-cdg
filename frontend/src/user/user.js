import React, {Component,useEffect} from "react";
import {Row} from "simple-flexbox";
import {Link} from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styled from 'styled-components';
import { createBrowserHistory } from 'history';
import PatientDetails from "../patient/patientDetails";
// import { useLocation } from "react-router-dom";
import './user.css';

const history = createBrowserHistory();
// const location = useLocation(); 

const headerleft = {
    flexGrow: "1",
    cursor:'pointer',
    fontSize: "22px",
    paddingLeft: "20px",
    color: "white",
};
const help = {
    float: "right",
    display:'flex',
    textTranform: "initial",
    margin: "0px 20px 0px 0px",
    fontFamily: "Roboto",
    fontSize: "22px",
    color: "white",
};
const headerDiv = {
    width: "100%",
    backgroundColor: "#205081",
    height: "45px",
    paddingTop: "5px",
    paddingBottom: "5px",
    alignItems: "center",
    top: 0,
    position: "fixed",
    zIndex: "100",

};
const TableViewContainer = styled.div`
  display: flex;
  margin-top: 70px;
  margin-left: 20px;
`;
const PatientContainer = styled.div`
  min-width: 49%;
  margin-right: 1%;
`;
const PatientRow = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
`;

const PatientHeading = styled.div`
  width: 100%;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  color: #222222;
`;
const Button = styled.button`
  width: 88px;
  height: 30px;
  color: #0052cc;
  border-radius: 4px;
  border: solid 1px #0052cc;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: none;
    border: solid 2px #0052cc;
  }
  font-family: Roboto;
  font-size: 11px;
  font-weight: normal;
  // margin-bottom: 20px;
`;
const HorizontalLine = styled.div`
  // margin-top: -10px;
  width: 100%;
  border-bottom: solid 1px #e8e8e8;
`;

const TableRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  cursor: pointer;
  padding-bottom: 3px;
`;

const ActionRequiredLabelData = styled.div`
  width: 75%;
  font-family: Roboto;
  font-size: 16x;
  font-weight: 400;
  color: #000;
`;

const HotPOContainer = styled.div`
  min-width: 49%;
  margin-left: 1%;
`;

export default class User extends Component{

  state = {
      patients:[],
      selected_patient:"",
      requests:[],
      selected_request:"",
    }


  async componentDidMount() {
    let PATIENT_TABLE_API='http://127.0.0.1:8000/api/get-patient-table'
    let REQUEST_TABLE_API='http://127.0.0.1:8000/api/get-request-table'
    const response=await fetch(PATIENT_TABLE_API);
    const data=await response.json();
    await this.setState({patients:data})
    await this.setState({selected_patient:data[0]})
    const req_response=await fetch(REQUEST_TABLE_API);
    const req_data=await req_response.json();
    await this.setState({requests:req_data})
    await this.setState({selected_request:req_data[0]})
    console.log("data",req_data)
    console.log("Patients",this.state.patients)
    // this.timer = setInterval(() => this.fetchUsers(), 5000);
}

    render()
    {
      // useEffect(()=>{
      //   // getPatientList()
      // },[])    

      return(
            <>
            {console.log("Receiveed:",this.props)}
            <Row style={headerDiv}>
                <div className="montserrat" 
                style={headerleft} 
                >
                PGIMER                   
                </div>                
                <span style={help}>
                    <button className="fs-16" style={{background:'none',border:'none',boxShadow:'none', textDecoration: "none", color: "white" }}>
                    Welcome!
                    </button>
                 </span>                
                <span style={help}>
              </span>
            </Row>
    {
    <TableViewContainer >
        <PatientContainer>
          <PatientRow>
            <PatientHeading style={{marginLeft:"50%"}}>Patients</PatientHeading>{" "}
            <Button><Link to={"/addpatient"} style={{textDecoration:"none"}}>+</Link></Button>
          </PatientRow>
          <HorizontalLine />
          <div>
            <HorizontalLine />
          </div>
          <div style={{maxHeight:"270px",maxWidth:"700px",overflowY:"auto",overflowX:"hidden"}}>
          {
          this.state.patients?
          <>
          {
                this.state.patients.map((patient)=>(
                  <>
                <HotPOContainer>
                  <TableRowContainer className="row"
                  style={{marginLeft:"10px"}}
                  onClick={()=>(
                    this.setState({selected_patient:patient})
                  )} 
                  >
                    <ActionRequiredLabelData>
                      &emsp;{patient.name} - {patient.bloodgroup}
                    </ActionRequiredLabelData>
                  </TableRowContainer>
                  <HorizontalLine style={{width:"700px"}}/>
                  </HotPOContainer>
                  </>
                ))
          }
          </>
          :
          <>
          </>
          }
          </div>
        </PatientContainer>
        </TableViewContainer>
          }

      <div style={{marginLeft:"750px",marginTop:"-310px",width:"650px",height:"300px"}}>
          <PatientHeading>
            <div style={{marginLeft:"40%"}}>Patient Details</div>
          </PatientHeading>
          <Table 
          // style={{marginTop:"150px",marginLeft:"400px",width:"650px"}}
          >
                <TableBody>
                    <TableRow>
                        <TableCell><div style={{marginTop:"5px",marginLeft:"20px"}}>Name of Patient:</div></TableCell>
                        <TableCell>{this.state.selected_patient==""?<></>:this.state.selected_patient.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"5px",marginLeft:"20px"}}>Room No.:</div></TableCell>
                        <TableCell>{this.state.selected_patient==""?<></>:this.state.selected_patient.wardadhaar}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"5px",marginLeft:"20px"}}>Blood Group:</div></TableCell>
                        <TableCell>{this.state.selected_patient==""?<></>:this.state.selected_patient.bloodgroup}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"5px",marginLeft:"20px"}}>Gender:</div></TableCell>
                        <TableCell>{this.state.selected_patient==""?<></>:this.state.selected_patient.gender}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"5px",marginLeft:"20px"}}>Date Of Birth:</div></TableCell>
                        <TableCell>{this.state.selected_patient==""?<></>:this.state.selected_patient.dob}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
      </div>

      <TableViewContainer style={{marginTop:"20px"}}>
        <PatientContainer>
          <PatientRow>
            <PatientHeading style={{marginLeft:"50%"}}>Requests</PatientHeading>{" "}
            <Button><Link to={"/addrequest"} style={{textDecoration:"none"}}>+</Link></Button>
          </PatientRow>
          <HorizontalLine style={{width:"650px"}}/>
          <div>
            <HorizontalLine />
          </div>
          <div style={{height:"270px",maxHeight:"270px",maxWidth:"700px",overflowY:"auto",overflowX:"hidden"}}>
          {
          this.state.requests?
          <>
          {
                this.state.requests.map((request)=>(
                  <>
                <HotPOContainer>
                  <TableRowContainer className="row"
                  style={{marginLeft:"10px"}}
                  onClick={()=>(
                    this.setState({selected_request:request})
                  )} 
                  >
                    <ActionRequiredLabelData>
                    &emsp;{request.crnumber} - {request.wardadhaar}
                    </ActionRequiredLabelData>
                  </TableRowContainer>
                  <Button><Link to={{
                    pathname: "/view_request",
                    search: request.crnumber, 
                  }} 
                  style={{textDecoration:"none"}}>+</Link></Button>
                  <HorizontalLine style={{width:"700px"}}/>
                  </HotPOContainer>
                  </>
                ))
          }
          </>
          :
          <>
          </>
          }
          </div>

        </PatientContainer>

      </TableViewContainer>

      <div style={{marginLeft:"750px",marginTop:"-310px",width:"650px",height:"300px"}}>
          <PatientHeading>
            <div style={{marginLeft:"40%"}}>Request Details</div>
          </PatientHeading>
          <Table 
          // style={{marginTop:"150px",marginLeft:"400px",width:"650px"}}
          >
                <TableBody>
                    <TableRow>
                        <TableCell><div style={{marginTop:"5px",marginLeft:"20px"}}>CR Number:</div></TableCell>
                        <TableCell>{this.state.selected_request==""?<></>:this.state.selected_request.crnumber}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"5px",marginLeft:"20px"}}>Room No.:</div></TableCell>
                        <TableCell>{this.state.selected_request==""?<></>:this.state.selected_request.wardadhaar}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"5px",marginLeft:"20px"}}>Document Number:</div></TableCell>
                        <TableCell>{this.state.selected_request==""?<></>:this.state.selected_request.docnumber}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"5px",marginLeft:"20px"}}>Department:</div></TableCell>
                        <TableCell>{this.state.selected_request==""?<></>:this.state.selected_request.department}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"5px",marginLeft:"20px"}}>Consultant:</div></TableCell>
                        <TableCell>{this.state.selected_request==""?<></>:this.state.selected_request.consultantuname}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
      </div>


            </>

        )
    }
}