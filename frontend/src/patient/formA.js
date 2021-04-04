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
import { Multiselect } from 'multiselect-react-dropdown';

import { useLocation } from "react-router";
import { store } from 'react-notifications-component';
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

const SUBMIT_FORM_API = 'http://127.0.0.1:8000/api/update-cardiac-form/'

// const pate  = this.props.location

export default function FormA() {

    const [A_1_descr,setA_1_descr]=React.useState("a")
    const [A_1_brand,setA_1_brand]=React.useState("b")
    const [A_1_qty,setA_1_qty]=React.useState("c")
    const [A_1_remarks,setA_1_remarks]=React.useState("d")

    const [A_2A_descr,setA_2A_descr]=React.useState("a")
    const [A_2A_brand,setA_2A_brand]=React.useState("b")
    const [A_2A_qty,setA_2A_qty]=React.useState("c")
    const [A_2A_remarks,setA_2A_remarks]=React.useState("d")
    
    const [A_2B_descr,setA_2B_descr]=React.useState("a")
    const [A_2B_brand,setA_2B_brand]=React.useState("b")
    const [A_2B_qty,setA_2B_qty]=React.useState("c")
    const [A_2B_remarks,setA_2B_remarks]=React.useState("d")
    
    const [A_3A_descr,setA_3A_descr]=React.useState("a")
    const [A_3A_brand,setA_3A_brand]=React.useState("b")
    const [A_3A_qty,setA_3A_qty]=React.useState("c")
    const [A_3A_remarks,setA_3A_remarks]=React.useState("d")
    
    const [A_3B_descr,setA_3B_descr]=React.useState("a")
    const [A_3B_brand,setA_3B_brand]=React.useState("b")
    const [A_3B_qty,setA_3B_qty]=React.useState("c")
    const [A_3B_remarks,setA_3B_remarks]=React.useState("d")

    // const brand_3A_options = [{name:'volvo',value:'volvo'},{name:"Compatible to our machine",value:"Compatible to our machine"}]
    const brand_3A_options = ["volvo","Compatible to our machine","others"]
    const state = this.props.location
    
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
                    {/* <TableRow style={{padding:"0px"}}>
                        <TableCell >1</TableCell>
                        <TableCell >ACT Tubes</TableCell>
                        <TableCell >
                            <Select 
                            onChange={(event)=>(setA_1_descr(event.target.value))}>     
                                <option value="volvo">Volvo</option>
                                <option value="Compatible to our machine">Compatible to our machine</option>
                                <option value="other">other</option>
                            </Select> 
                        </TableCell>
                        <TableCell >
                            <Select onChange={(event)=>(setA_1_brand(event.target.value))}>     
                                <option value="Helena Lab">Helena Lab</option>
                                <option value="Beaumount Texas">Beaumount Texas</option>
                                <option value="other">other</option>
                            </Select> 
                        </TableCell>
                        <TableCell >
                            <Select onChange={(event)=>(setA_1_qty(event.target.value))}>     
                            <option value="10">10</option>
                            <option value="other">other</option>
                        </Select> 
                        </TableCell>
                        <TableCell >
                            <input val={A_1_remarks} onChange={(event)=>(setA_1_remarks(event.target.value))}></input>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{marginTop:"0px"}}>
                        <TableCell >2A</TableCell>
                        <TableCell >Arterial line cannula (Adult)</TableCell>
                        <TableCell >
                            <Select onChange={(event)=>(setA_2A_descr(event.target.value))}>     
                                <option value="18G">18G</option>
                                <option value="20G">20G</option>
                                <option value="other">other</option>
                            </Select>
                        </TableCell>
                        <TableCell >
                            <Select onChange={(event)=>(setA_2A_brand(event.target.value))}> 
                                <option value="Vygon">Vygon</option>
                                <option value="other">other</option>
                            </Select> 
                        </TableCell>
                        <TableCell >
                            <Select onChange={(event)=>(setA_2A_qty(event.target.value))}>     
                                <option value="1">1</option>
                                <option value="other">other</option>
                            </Select> 
                        </TableCell>
                        <TableCell >
                            <input val={A_2A_remarks} onChange={(event)=>(setA_2A_remarks(event.target.value))}></input>
                        </TableCell>
                    </TableRow> */}
                    <TableRow style={{marginTop:"0px"}}>
                        <TableCell >3A</TableCell>
                        <TableCell >Blood glucose strip</TableCell>
                        <TableCell >
                            <Select onChange={(event)=>(setA_3A_descr(event.target.value))}>     
                                <option value="volvo">Volvo</option>
                                <option Selected value="Compatible to our machine">Compatible to our machine</option>
                                <option value="other">other</option>
                            </Select> 
                            {/* <Select options={brand_3A_options}>
                            </Select> */}
                            {/* <Multiselect
                                options={brand_3A_options}
                                isObject={false}
                                showCheckbox={false}
                                onChange={(e)=>(setA_3A_descr(e.target.value),console.log(A_3A_descr))}
                            /> */}
                        </TableCell>
                        <TableCell >
                        <div>
                            <label>
                                <input type="checkbox" value="Arkay factory" onClick={(event)=>setA_3A_brand(event.target.value)}/>
                                Arkay factory
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="checkbox" value="Nipro" onClick={(event)=>setA_3A_brand(event.target.value)}/>
                                Nipro
                            </label> 
                        </div>
                        <div className="radio">
                            <label>
                                <input type="checkbox" value="Optium" onClick={(event)=>setA_3A_brand(event.target.value)}/>
                                Optium
                            </label> 
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" id="yourBox" onChange={(event)=>(document.getElementById('yourText').disabled = !(event.target.checked))}></input>
                                Other
                            </label>
                            <input placeholder="" id="yourText" disabled onChange={(event)=>setA_3A_brand(event.target.value)}></input> 
                        </div>
                        </TableCell>
                        <TableCell >
                        {/* <input></input>     */}
                            <Select value={A_3A_qty} defaultValue={{value:'1',label:'1'}} 
                                onChange={(event)=>(setA_3A_qty(event.target.value))}>     
                                <option value="1">1</option>
                                <option value="other">other</option>
                            </Select> 
                        </TableCell>
                        <TableCell >
                            <input val={A_3A_remarks} onChange={(event)=>(setA_3A_remarks(event.target.value))}></input>
                        </TableCell>
                    </TableRow>
                    {/* <TableRow style={{marginTop:"0px"}}>
                        <TableCell >3B</TableCell>
                        <TableCell >Blood transfusion set</TableCell>
                        <TableCell >
                            <Select onChange={(event)=>(setA_3B_descr(event.target.value))}>     
                                <option value="with leur lock">with leur lock</option>
                                <option value="other">other</option>
                            </Select>
                        </TableCell>
                        <TableCell >
                        <Select onChange={(event)=>(setA_3B_brand(event.target.value))}> 
                            <option value="BD">BD</option>
                            <option value="Romson">Romson</option>
                            <option value="other">other</option>
                        </Select> 
                        </TableCell>
                        <TableCell >
                        <Select onChange={(event)=>(setA_3B_qty(event.target.value))}>     
                            <option value="1">1</option>
                            <option value="other">other</option>
                        </Select> 
                        </TableCell>
                        <TableCell >
                        <input val={A_3B_remarks} onChange={(event)=>(setA_3B_remarks(event.target.value))}></input>
                        </TableCell>
                    </TableRow> */}
                    
                    {/* <TableRow style={{marginTop:"0px"}}>
                        <TableCell >4</TableCell>
                        <TableCell >BIS Sensor</TableCell>
                        <TableCell > */}
                            {/* <input></input> */}
                            {/* <Select onChange={(event)=>(setA2B_descr(event.target.value))}>     
                                <option value="Adult Pediatric">Adult Pediatric</option>
                                <option value="other">other</option>
                            </Select> 
                        </TableCell>
                        <TableCell >
                            <Select onChange={(event)=>(setA2B_brand(event.target.value))}>     
                                <option value="Medtronic">Medtronic</option>
                                <option value="other">other</option>
                            </Select> 
                        </TableCell>
                        <TableCell > */}
                            {/* <input></input>     */}
                            {/* <Select onChange={(event)=>(setA2B_qty(event.target.value))}>     
                                <option value="1">1</option>
                                <option value="other">other</option>
                            </Select> 
                        </TableCell>
                        <TableCell >
                            <input></input>
                        </TableCell>
                    </TableRow>
                    
                    <TableRow style={{marginTop:"0px"}}>
                        <TableCell >5</TableCell>
                        <TableCell >Bronchial blocker</TableCell>
                        <TableCell > */}
                            {/* <input></input> */}
                            {/* <Select onChange={(event)=>(setA2B_descr(event.target.value))}>     
                                <option value="5F">5F</option>
                                <option value="7F">7F</option>
                                <option value="other">other</option>
                            </Select> 
                        </TableCell>
                        <TableCell >
                            <Select onChange={(event)=>(setA2B_brand(event.target.value))}>     
                                <option value="Portex">Portex</option>
                                <option value="Rusch">Rusch</option>
                                <option value="other">other</option>
                            </Select> 
                        </TableCell>
                        <TableCell > */}
                            {/* <input></input>     */}
                            {/* <Select onChange={(event)=>(setA2B_qty(event.target.value))}>     
                                <option value="1">1</option>
                                <option value="other">other</option>
                            </Select> 
                        </TableCell>
                        <TableCell >
                            <input></input>
                        </TableCell>
                    </TableRow> */}
                    </TableBody>
                </Table>
            <button
                onClick={()=>(
                    console.log('values====>\ncompany_name:',A_3A_brand,'\nQty_required:',A_3A_qty,'\nSpecification:',A_3A_descr,'\nRemarks:',A_3A_remarks),
                    console.log(pate)
                    // fetch(SUBMIT_FORM_API+'199',
                    //     {
                    //     credentials: 'include',
                    //     method:'PATCH',
                    //     headers: {
                    //     Accept: 'application/json',
                    //     "Content-Type": 'application/json',
                    //     },
                    //     body: JSON.stringify({
                    //         code         : '199',
                    //         A_1_descr     :A_1_descr,
                    //         A_1_brand     :A_1_brand,
                    //         A_1_qty      :A_1_qty,
                    //         A_1_remarks  :A_1_remarks,
                    //         A_2A_descr     :A_2A_descr,           
                    //         A_2A_brand     :A_2A_brand,
                    //         A_2A_qty      :A_2A_qty,
                    //         A_2A_remarks  :A_2A_remarks,
                    //         A_2B_descr     :A_2B_descr,           
                    //         A_2B_brand     :A_2B_brand,
                    //         A_2B_qty      :A_2B_qty,
                    //         A_2B_remarks  :A_2B_remarks,
                    //         A_3A_descr     :A_3A_descr,
                    //         A_3A_brand     :A_3A_brand,
                    //         A_3A_qty      :A_3A_qty,
                    //         A_3A_remarks  :A_3A_remarks,
                    //         A_3B_descr     :A_3B_descr,
                    //         A_3B_brand     :A_3B_brand,
                    //         A_3B_qty      :A_3B_qty,
                    //         A_3B_remarks  :A_3B_remarks, 
                    //     }),
                    // })

                    // .then((result)=>{store.addNotification({
                    //     title: "Success",
                    //     message: "Request added successfully",
                    //     type: "success",
                    //     insert: "top",
                    //     container: "bottom-right",
                    //     animationIn: ["animate__animated", "animate__fadeIn"],
                    //     animationOut: ["animate__animated", "animate__fadeOut"],
                    //     dismiss: {
                    //       duration: 5000,
                    //       onScreen: true
                    //     }
                    //   });console.log("Success===:",result)})
                    // .catch((error)=>{store.addNotification({
                    //     title: "Failed",
                    //     message: "Request could not be added",
                    //     type: "danger",
                    //     insert: "top",
                    //     container: "bottom-right",
                    //     animationIn: ["animate__animated", "animate__fadeIn"],
                    //     animationOut: ["animate__animated", "animate__fadeOut"],
                    //     dismiss: {
                    //       duration: 5000,
                    //       onScreen: true
                    //     }
                    //   });console.log("Error===:",error)})
                )}
            >Submit</button>
            </div>
        )
    }
