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


export default function FormA() {

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
                        <TableCell >ACT Tubes</TableCell>
                        <TableCell >
                            {/* <imput
                            val={A1_1}
                            onchange={(event)=>(setA1_1(event.target.value))}
                            ></input> */}

                            {/* 1st input*/ } 
                            <select onChange={(event)=>(setA1_1(event.target.value))}>     
                            {/* <option value="volvo">Volvo</option> */}
                                <option value="Compatible to our machine">Compatible to our machine</option>
                                <option value="other">other</option>
                            </select> 
                        </TableCell>
                        <TableCell >
                            <select onChange={(event)=>(setA1_2(event.target.value))}>     
                                <option value="Helena Lab">Helena Lab</option>
                                <option value="Beaumount Texas">Beaumount Texas</option>
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
                        <TableCell >Arterial line cannula (Adult)</TableCell>
                        <TableCell >

                            <select onChange={(event)=>(setA2A_1(event.target.value))}>     
                                <option value="18G">18G</option>
                                <option value="20G">20G</option>
                                <option value="other">other</option>
                            </select> 
                                {/* <input></input> */}
                        </TableCell>
                        <TableCell >
                            {/* <input></input> */}
                            <select onChange={(event)=>(setA2A_2(event.target.value))}> 
                                <option value="Vygon">Vygon</option>
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
                        <TableCell >3A</TableCell>
                        <TableCell >Blood glucose strip</TableCell>
                        <TableCell >
                            {/* <input></input> */}
                            <select onChange={(event)=>(setA1_1(event.target.value))}>     
                            {/* <option value="volvo">Volvo</option> */}
                                <option value="Compatible to our machine">Compatible to our machine</option>
                                <option value="other">other</option>
                            </select> 
                        </TableCell>
                        <TableCell >
                            {/* <select onChange={(event)=>(setA2B_2(event.target.value))}>     
                                <option value="Arkay factory">Arkay Factory</option>
                                <option value="Nipro">Nipro</option>
                                <option value="Optium">Optium</option>
                                <option value="other">other</option>
                            </select>  */
                            }
                            <div>
                                <label>
                                <input type="checkbox" value="Arkay factory" />
                                Arkay factory
                                </label>
                                </div>
                                <div className="radio">
                                <label>
                                    <input type="checkbox" value="Nipro" />
                                    Nipro
                            </label> 
                         </div>
                         <div className="radio">
                                <label>
                                    <input type="checkbox" value="Optium" />
                                    Optium
                            </label> 
                         </div>
                         <div>
                         <label>
                         <input type="checkbox" id="yourBox" onChange={(event)=>(document.getElementById('yourText').disabled = !(event.target.checked))}></input>
                         Other
                         </label>
                         <input placeholder="" id="yourText" disabled></input>
                         
                         </div>
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
                        <TableCell >3B</TableCell>
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
                        <TableCell >5</TableCell>
                        <TableCell >Bronchial blocker</TableCell>
                        <TableCell >
                            {/* <input></input> */}
                            <select onChange={(event)=>(setA2B_1(event.target.value))}>     
                                <option value="5F">5F</option>
                                <option value="7F">7F</option>
                                <option value="other">other</option>
                            </select> 
                        </TableCell>
                        <TableCell >
                            <select onChange={(event)=>(setA2B_2(event.target.value))}>     
                                <option value="Portex">Portex</option>
                                <option value="Rusch">Rusch</option>
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
