import React, {Component,useState} from "react";
import {Row} from "simple-flexbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styled from 'styled-components';

const REQUEST_TABLE_API='http://127.0.0.1:8000/api/requests'

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
const Input = styled.input`
  width: 100%;
  height: 20px;
  border-radius: 4px;
  border: solid 1px #a8a8a8;
  background-color: #ffffff;
  margin-top: 18px;
  padding: 10px;
  &:focus{
  outline: none;
  border: solid 2px #0052cc;
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


export default function AddRequest(){

        const [department,setDepartment]=useState("Bypass Surgery");
        const [crNumber,setCrNumber]=useState("_");
        const [wardAdhaar,setWardAdhaar]=useState(0);
        const [wardName,setWardName]=useState("_");
        const [patientName,setPatientName]=useState("_");
        const [docNumber,setDocNumber]=useState("_");
        const [consultantUname,setConsultantUname]=useState("_");
        const [height,setHeight] = useState(0);
        const [weight,setWeight] = useState(0);

        return(
        <div style={{background: "linear-gradient(45deg, lightblue , transparent)",position:"fixed",padding:0,margin:0,top:0,left:0,width: "100%",height: "100%"}}
        >
            <Row style={headerDiv}>
                <div className="montserrat" 
                style={headerleft} 
                >
                PGIMER                   
                </div>                
                <span style={{marginRight:"640px",color: "white",fontSize:"28px"}}>
                    <div>Add Requests</div>
                </span>
                <span style={help}>
                    <button className="fs-16" style={{background:'none',border:'none',boxShadow:'none', textDecoration: "none", color: "white" }}>
                    Welcome!
                    </button>
                 </span>                
                <span style={help}>
              </span>
            </Row>

            <Table style={{marginTop:"50px",marginLeft:"400px",width:"650px"}}>
                <TableBody>
                    <TableRow>
                        <TableCell><div style={{marginTop:"0px",marginLeft:"20px"}}>CR Number:</div></TableCell>
                        <TableCell><Input style={{marginTop:"0px",marginLeft:"-80px",height:"8px"}}
                            onChange={(event)=>{
                                setCrNumber(event.target.value)
                            }}
                        ></Input></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"0px",marginLeft:"20px"}}>Ward Adhaar No.:</div></TableCell>
                        <TableCell><Input type="number" style={{marginTop:"0px",marginLeft:"-80px",height:"8px"}} min="100000000000"  max="999999999999"
                            onChange={(event)=>{
                                setWardAdhaar(event.target.value)
                            }}
                        ></Input></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"0px",marginLeft:"20px"}}>Ward Name:</div></TableCell>
                        <TableCell><Input style={{marginTop:"0px",marginLeft:"-80px",height:"8px"}}
                            onChange={(event)=>{
                                setWardName(event.target.value)
                            }}
                        ></Input></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"0px",marginLeft:"20px"}}>Department:</div></TableCell>
                        <TableCell>
                            <Select style={{marginTop:"0px",marginLeft:"-80px",width:"80%"}}
                                onChange={(event)=>{
                                    setDepartment(event.target.value)
                                }}
                            >   
                                <option value="Cardiology">Cardiology</option>
                                <option value="Immunology">Immunology</option>
                                <option value="Oncology">Oncology</option>
                                <option value="Psychiatry">Psychiatry</option>
                                {/* <MenuItem onClick={()=>{
                                    setDepartment("Cardiology")
                                }}>
                                Cardiology
                                </MenuItem>
                                <MenuItem onClick={()=>{
                                    setDepartment("Immunology")
                                }}>
                                Immunology
                                </MenuItem>
                                <MenuItem onClick={()=>{
                                    setDepartment("Oncology")
                                }}>
                                Oncology
                                </MenuItem>
                                <MenuItem onClick={()=>{
                                    setDepartment("Psychiatry")
                                }}>
                                Psychiatry
                                </MenuItem> */}
                            </Select>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"0px",marginLeft:"20px"}}>Document Number:</div></TableCell>
                        <TableCell><Input style={{marginTop:"0px",marginLeft:"-80px",height:"8px"}}
                            onChange={(event)=>{
                                setDocNumber(event.target.value)
                            }}
                        ></Input></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"0px",marginLeft:"20px"}}>Consultant User Name:</div></TableCell>
                        <TableCell><Input style={{marginTop:"0px",marginLeft:"-80px",height:"8px"}}
                            onChange={(event)=>{
                                setConsultantUname(event.target.value)
                            }}
                        ></Input></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"0px",marginLeft:"20px"}}>Height</div></TableCell>
                        <TableCell><Input type="number" style={{marginTop:"1px",marginLeft:"-80px",height:"8px"}} placeholder="Type in cm"
                            onChange={(event)=>{
                                setHeight(event.target.value);
                            }}
                        ></Input></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"0px",marginLeft:"20px"}}>Weight</div></TableCell>
                        <TableCell><Input type="number" style={{marginTop:"0px",marginLeft:"-80px",height:"8px"}} placeholder="Type in kg"
                            onChange={(event)=>{
                                setWeight(event.target.value);
                            }}
                        ></Input></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Button style={{fontSize:"16px",marginLeft:"680px",marginTop:"20px",height:"40px",width:"150px",font:"message-box"}}
                onClick={()=>(
                    console.log(crNumber,wardAdhaar,wardName,department,docNumber,consultantUname,height,weight),
                    fetch(REQUEST_TABLE_API,
                        {
                        credentials: 'include',
                        method:'POST',
                        headers: {
                        Accept: 'application/json',
                        "Content-Type": 'application/json',
                        },
                        body: JSON.stringify({
                            crnumber: crNumber,
                            wardadhaar: wardAdhaar,
                            wardname: wardName,
                            department: department,
                            docnumber: docNumber,
                            consultantuname: consultantUname,
                            height: height,
                            weight:weight,
                            bsa:0,
                        }),
                    })
                    .then(result=>console.log("Success===:",result))
                    .catch(error=>console.log("Error===:",error))
                )}
                
            ><h3>SUBMIT</h3>
            </Button>
            <div style={{height:"20px"}}></div>
        </div>
        )
    
}
