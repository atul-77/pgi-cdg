import React, {Component, useState} from "react";
import axios from "axios";
import {Row} from "simple-flexbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import moment from "Moment";
import format from 'date-fns/format';

import "react-datepicker/dist/react-datepicker.css";
import { Select } from "@material-ui/core";

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

const PATIENT_TABLE_API='http://127.0.0.1:8000/api/patients'


export default class AddPatient extends Component{

    state = {
        name:"",
        ward_adhaar:0,
        blood_group:"",
        gender:"",
        // dob:moment().format("yyyy-MM-dd"),
        dob: "",
    }



    render()
    {      
        // const [dateofbirth,setdateofbirth] = useState(null);
        return(
            <div style={{marginTop:"-100px",height:"750px",background: "linear-gradient(45deg, black, transparent)"}}>
            <Row style={headerDiv}>
                <div className="montserrat" 
                style={headerleft} 
                >
                PGIMER                   
                </div>                
                <span style={{marginRight:"640px",color: "white",fontSize:"28px"}}>
                    <div>Add Patients</div>
                </span>
                <span style={help}>
                    <button className="fs-16" style={{background:'none',border:'none',boxShadow:'none', textDecoration: "none", color: "white" }}>
                    Welcome!
                    </button>
                 </span>                
                <span style={help}>
              </span>
            </Row>

            <Table style={{marginTop:"150px",marginLeft:"400px",width:"650px"}}>
                <TableBody>
                    <TableRow>
                        <TableCell><div style={{marginTop:"20px",marginLeft:"20px"}}>Name of Patient:</div></TableCell>
                        <TableCell><Input style={{marginLeft:"-80px"}}
                        onChange={event=>(
                            this.setState({name:event.target.value})
                        )}
                        ></Input></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"20px",marginLeft:"20px"}}>Wardadhaar:</div></TableCell>
                        <TableCell><Input type="number" style={{marginLeft:"-80px"}} min="100000000000"  max="999999999999"
                        onChange={event=>(
                            this.setState({ward_adhaar:event.target.value})
                        )}                        
                        ></Input></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"20px",marginLeft:"20px"}}>Blood Group:</div></TableCell>
                        <TableCell><Select 

                        onChange={event=>(
                            this.setState({blood_group:event.target.value})
                        )}                        
                        >
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option selected value="AB+">AB+</option>
                        <option selected value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>    
                        </Select></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"20px",marginLeft:"20px"}}>Gender:</div></TableCell>
                        <TableCell><Select
                        onChange={event=>(
                            this.setState({gender:event.target.value})
                        )}                        
                        ><option value="male">Male</option>
                        <option value="female">Female</option>
                        <option selected value="other">Other</option></Select></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><div style={{marginTop:"20px",marginLeft:"20px"}}>Date Of Birth:</div></TableCell>
                        <TableCell>
                            
                        <DatePicker
                        placeholderText="Select DoB"
                        showYearDropdown
                        isClearable
                        selected={ this.state.dob }
                        onChange={(newDate)=> 
                        (   
                            console.log("Picked:",format(newDate,"yyyy-MM-dd")),
                            this.setState({dob:newDate})
                        )
                        }
                        name="startDate"
                        dateFormat="yyyy-MM-dd"
                        />
                            {/* <Input style={{marginLeft:"-80px"}}
                        onChange={event=>(
                            this.setState({dob:event.target.value})
                        )}                        
                        ></Input> */}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Button style={{marginLeft:"680px",marginTop:"20px"}}
            onClick={(event)=>(
                console.log("Posting"),
                fetch(PATIENT_TABLE_API,
                    {
                        credentials: 'include',
                        method:'POST',
                        headers: {
                        Accept: 'application/json',
                        "Content-Type": 'application/json',
                  },
                  body: JSON.stringify({
                    name: this.state.name,
                    wardadhaar: this.state.ward_adhaar,
                    bloodgroup: this.state.blood_group,
                    gender: this.state.gender,
                    dob: format(this.state.dob,'yyyy-MM-dd'),
                  }),
                })
                .then(result=>console.log("Success===:",result))
                .catch(error=>console.log("Error===:",error))
            )}
            >Submit</Button>
            </div>
        )
    }
}
