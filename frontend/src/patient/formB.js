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
import { useLocation } from "react-router";
const Input = styled.input`
  border-radius: 4px;
  border: solid 1px #a8a8a8;
  background-color: #ffffff;
  margin-top: 10px;
  padding: 5px;
  &:focus{
  outline: none;
  border: solid 2px #0052cc;
  `;


export default function FormB() {

    const [A1_1,setA1_1]=React.useState("")
    const [A1_4,setA1_4]=React.useState("")
    const [A1_3,setA1_3]=React.useState("")
    const [A1_2,setA1_2]=React.useState("")
    const [A2A_1,setA2A_1]=React.useState("")
    const [A2A_4,setA2A_4]=React.useState("")
    const [A2A_3,setA2A_3]=React.useState("")
    const [A2A_2,setA2A_2]=React.useState("")
    const [A2B_1,setA2B_1]=React.useState("")
    const [A2B_4,setA2B_4]=React.useState("")
    const [A2B_3,setA2B_3]=React.useState("")
    const [A2B_2,setA2B_2]=React.useState("")

    // state = {
    //     name:"",
    //     ward_adhaar:0,
    //     blood_group:"",
    //     gender:"",
    //     // dob:moment().format("yyyy-MM-dd"),
    //     dob: "",
    // }
      
        // const [dateofbirth,setdateofbirth] = useState(null);
        return(
            <div>
                
            <Table> {//style={{marginTop:"-350px",marginLeft:"400px",width:"650px",color:"white"}}>}
        }
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"white"}}>
                            Sr. No.
                        </TableCell>
                        <TableCell style={{color:"black"}}>
                            Name
                        </TableCell>
                        <TableCell style={{color:"black"}}>
                            Specification
                        </TableCell>
                        <TableCell style={{color:"black"}}>
                            Company Name
                        </TableCell>
                        <TableCell style={{color:"black"}}>
                            Quantity Required
                        </TableCell>
                        <TableCell style={{color:"black"}}>
                            Remarks
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow style={{padding:"0px"}}>
                        <TableCell >1</TableCell>
                        <TableCell >Antegrade cardioplegia Cannula, with vent</TableCell>
                        <TableCell >
                            {/* <imput
                            val={A1_1}
                            onchange={(event)=>(setA1_1(event.target.value))}
                            ></input> */}

                            {/* 1st input*/ } 
                            <select onChange={(event)=>(setA1_1(event.target.value))}>     
                            {/* <option value="volvo">Volvo</option> */}
                                <option value="14 G(Code:20014)">14 G(Code:20014)</option>
                                <option value="16 G(Code:20016)">16 G(Code:20016)</option>
                                <option value="other">other</option>
                            </select> 
                        </TableCell>
                        <TableCell >
                            <select onChange={(event)=>(setA1_2(event.target.value))}>     
                                <option value="Medtronic">Medtronic</option>
                                <option value="Edward">Edward</option>
                                <option value="Sarns">Sarns</option>
                                <option value="other">other</option>
                            </select> 
                        </TableCell>
                        <TableCell >
                            {/* <input
                            val={A1_3}
                            onchange={(event)=>(setA1_3(event.target.value))}
                            ></input>     */}
                            <select onChange={(event)=>(setA1_3(event.target.value))}>     
                            <option value="10">10</option>
                            {/* <option value="Beaumount Texas">Beaumount Texas</option> */}
                            <option value="other">other</option>
                        </select> 
                        </TableCell>
                        <TableCell >
                            <input val={A1_4} onchange={(event)=>(setA1_4(event.target.value))}></input>
                            {/* <select onChange={(event)=>(setA1_4(event.target.value))}>     
                            <option value="Helena Lab">Helena Lab</option>
                            <option value="Beaumount Texas">Beaumount Texas</option>
                            <option value="other">other</option>
                            </select>  */}
                        </TableCell>
                    </TableRow>
                    <TableRow style={{marginTop:"0px"}}>
                        <TableCell >2A</TableCell>
                        <TableCell >Aortic perfusion cannula, wire reinforced, Angled</TableCell>
                        <TableCell >

                            <select onChange={(event)=>(setA2A_1(event.target.value))}>     
                                <option value="20 Fr">20 Fr</option>
                                <option value="22 Fr">22 Fr</option>
                                <option value="other">other</option>
                            </select> 
                                {/* <input></input> */}
                        </TableCell>
                        <TableCell >
                            {/* <input></input> */}
                            <select onChange={(event)=>(setA2A_2(event.target.value))}> 
                                <option value="Medtronic">Medtronic</option>
                                <option value="Edward">Edward</option>
                                <option value="Sarns">Sarns</option>
                                <option value="other">other</option>
                            </select> 
                        </TableCell>
                        <TableCell >
                            {/* <input></input>     */}
                            <select onChange={(event)=>(setA2A_3(event.target.value))}>     
                                <option value="1">1</option>
                                <option value="other">other</option>
                            </select> 
                        </TableCell>
                        <TableCell >
                            <input type="date"></input>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{marginTop:"0px"}}>
                        <TableCell >2B</TableCell>
                        <TableCell >Aortic perfusion cannula, wire reinforced, straight</TableCell>
                        <TableCell >
                            {/* <input></input> */}
                            <select onChange={(event)=>(setA1_1(event.target.value))}>     
                            {/* <option value="volvo">Volvo</option> */}
                                <option value="6 Fr">6 Fr</option>
                                <option value="8 Fr">8 Fr</option>
                                <option value="10 Fr">10 Fr</option>
                                <option value="12 Fr">12 Fr</option>
                                <option value="14 Fr">14 Fr</option>
                                <option value="16 Fr">16 Fr</option>
                                <option value="18 Fr">18 Fr</option>
                                <option value="20 Fr">20 Fr</option>
                                <option value="other">other</option>
                            </select> 
                        </TableCell>
                        <TableCell >
                            <select onChange={(event)=>(setA2B_2(event.target.value))}>     
                                <option value="Medtronic">Medtronic</option>
                                <option value="Edward">Edward</option>
                                <option value="Sarns">Sarns</option>
                                <option value="other">other</option>
                            </select> 
                        </TableCell>
                        <TableCell >
                        {/* <input></input>     */}
                            <select onChange={(event)=>(setA2B_3(event.target.value))}>     
                                <option value="1">1</option>
                                <option value="other">other</option>
                            </select> 
                        </TableCell>
                        <TableCell >
                            <input></input>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{marginTop:"0px"}}>
                        <TableCell >3A</TableCell>
                        <TableCell >Blood transfusion sset</TableCell>
                        <TableCell >
                            <select onChange={(event)=>(setA2A_1(event.target.value))}>     
                                <option value="with leur lock">with leur lock</option>
                                <option value="other">other</option>
                            </select> 
                                {/* <input></input> */}
                        </TableCell>
                        <TableCell >
                        {/* <input></input> */}
                        <select onChange={(event)=>(setA2A_2(event.target.value))}> 
                            <option value="BD">BD</option>
                            <option value="Romson">Romson</option>
                            <option value="other">other</option>
                        </select> 
                        </TableCell>
                        <TableCell >
                        {/* <input></input>     */}
                        <select onChange={(event)=>(setA2A_3(event.target.value))}>     
                            <option value="1">1</option>
                            <option value="other">other</option>
                        </select> 
                        </TableCell>
                        <TableCell >
                        <input></input>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{marginTop:"0px"}}>
                        <TableCell >4</TableCell>
                        <TableCell >BIS Sensor</TableCell>
                        <TableCell >
                            {/* <input></input> */}
                            <select onChange={(event)=>(setA2B_1(event.target.value))}>     
                                <option value="Adult Pediatric">Adult Pediatric</option>
                                <option value="other">other</option>
                            </select> 
                        </TableCell>
                        <TableCell >
                            <select onChange={(event)=>(setA2B_2(event.target.value))}>     
                                <option value="Medtronic">Medtronic</option>
                                <option value="other">other</option>
                            </select> 
                        </TableCell>
                        <TableCell >
                            {/* <input></input>     */}
                            <select onChange={(event)=>(setA2B_3(event.target.value))}>     
                                <option value="1">1</option>
                                <option value="other">other</option>
                            </select> 
                        </TableCell>
                        <TableCell >
                            <input></input>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{marginTop:"0px"}}>
                        <TableCell >4</TableCell>
                        <TableCell >Blower/Mister</TableCell>
                        <TableCell >
                            <input></input>
                        </TableCell>
                        <TableCell >
                            <select onChange={(event)=>(setA2B_2(event.target.value))}>     
                                <option value="Medtronic">Medtronic</option>
                                <option value="Guidant">Guidant</option>
                                <option value="other">other</option>
                            </select> 
                        </TableCell>
                        <TableCell >
                            {/* <input></input>     */}
                            <select onChange={(event)=>(setA2B_3(event.target.value))}>     
                                <option value="1">1</option>
                                <option value="other">other</option>
                            </select> 
                        </TableCell>
                        <TableCell >
                            <input></input>
                        </TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            <button     
            >Submit</button>
            </div>
        )
    }
