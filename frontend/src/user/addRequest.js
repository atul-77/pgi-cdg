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

        const [surgeryType,setSurgeryType]=useState("Bypass Surgery")

        return(
            <div style={{background: "linear-gradient(45deg, black, transparent)"}}>
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
                        <TableCell><div style={{marginTop:"20px",marginLeft:"20px"}}>CR Number:</div></TableCell>
                        <TableCell><Input style={{marginLeft:"-80px"}}></Input></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"20px",marginLeft:"20px"}}>Room No.:</div></TableCell>
                        <TableCell><Input style={{marginLeft:"-80px"}}></Input></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"20px",marginLeft:"20px"}}>Department:</div></TableCell>
                        <TableCell>
                            <Select>
                                <MenuItem onClick={()=>{
                                    setSurgeryType("Cardiology")
                                }}>
                                Cardiology
                                </MenuItem>
                                <MenuItem onClick={()=>{
                                    setSurgeryType("Immunology")
                                }}>
                                Immunology
                                </MenuItem>
                                <MenuItem onClick={()=>{
                                    setSurgeryType("Oncology")
                                }}>
                                Oncology
                                </MenuItem>
                                <MenuItem onClick={()=>{
                                    setSurgeryType("Psychiatry")
                                }}>
                                Psychiatry
                                </MenuItem>
                            </Select>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"20px",marginLeft:"20px"}}>Document Number:</div></TableCell>
                        <TableCell><Input style={{marginLeft:"-80px"}}></Input></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"20px",marginLeft:"20px"}}>Consultant Name</div></TableCell>
                        <TableCell><Input style={{marginLeft:"-80px"}} ></Input></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"20px",marginLeft:"20px"}}>Patient BSA</div></TableCell>
                        <TableCell><Input style={{marginLeft:"-80px"}}></Input></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"20px",marginLeft:"20px"}}>Height</div></TableCell>
                        <TableCell><Input type="number" style={{marginLeft:"-80px"}} placeholder="Type in cm"></Input></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"20px",marginLeft:"20px"}}>Weight</div></TableCell>
                        <TableCell><Input type="number" style={{marginLeft:"-80px"}} placeholder="Type in kg"></Input></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"20px",marginLeft:"20px"}}>Assigned Technician</div></TableCell>
                        <TableCell><Input style={{marginLeft:"-80px"}}></Input></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"20px",marginLeft:"20px"}}>Assigned Perfusionist</div></TableCell>
                        <TableCell><Input style={{marginLeft:"-80px"}}></Input></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Button style={{marginLeft:"680px",marginTop:"20px"}}>Submit</Button>

            <div style={{height:"20px"}}></div>
            </div>
        )
    
}
