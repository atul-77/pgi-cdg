import React, {Component,useState,useEffect} from "react";
import {Row} from "simple-flexbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Multiselect } from 'multiselect-react-dropdown';
import { withRouter } from "react-router";
import { createBrowserHistory } from 'history';
// import { useLocation } from "react-router";
import { store } from 'react-notifications-component';

import {myvar} from '../user/user.js';

const history = createBrowserHistory();

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


export default function FormA(props) {


    // useEffect(() => {
    //     console.log(myvar);
    // });
    function handle(){
        var str1="";
        var str2="";
        if(document.getElementById('3A_ark').checked){
            str1+="Arkayfacory;";        
        }
        if(document.getElementById('3A_nip').checked){
            str1+="nipro;";        
        }
        if(document.getElementById('3A_opt').checked){
            str1+="optium;";        
        }
        if(document.getElementById('yourBox').checked){
            str1+=document.getElementById("yourText").value;        
        }
        console.log("3A_brand",str1);
        if(document.getElementById('3A_18G').checked){
            str2+="18G;";        
        }
        if(document.getElementById('3A_nip').checked){
            str2+="20G;";        
        }
        if(document.getElementById('yourBox2').checked){
            str2+=document.getElementById("yourText2").value;        
        }
        console.log("3A_spec",str2);
    }
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
    const [A_3B_qty,setA_3B_qty]=useState("c")
    const [A_3B_remarks,setA_3B_remarks]=useState("d")

    // const brand_3A_options = [{name:'volvo',value:'volvo'},{name:"Compatible to our machine",value:"Compatible to our machine"}]
    const brand_3A_options = ["volvo","Compatible to our machine","others"]
    const [checkboxSelected_1,setCheckboxSelected_1] = useState({Arkay_factory: false ,Nipro: false ,optium:false,other:''})
    const [checkboxSelected_2,setCheckboxSelected_2] = useState({Arkay_factory: false ,Nipro: false ,optium:false,other:''})
    
    // const qty_3A_options = ['1','10','other']
    // const [qty3A,setQty3A] = useState
    
    const checkboxOptions = ['Arkay_factory','Nipro','optium']
    const handleChange = async (event)=>{
        console.log(event.target.name,event.target.checked);
        // console.log("\nbefore",checkboxSelected_1);
        setCheckboxSelected_1({...checkboxSelected_1,[event.target.name]:event.target.checked});
    }

    function testhandle(var1){
        var str_3A="";
        var otherflag = false;
        for (const [key, value] of Object.entries(var1)) {
            if(key==='other'){
                if(value){
                    otherflag=true;
                }
                //console.log("hello",value);
            }
            else if(key==='otherval'){
                if(otherflag){
                    str_3A+=value;
                    str_3A+=";";
                }
            }
            else if(value){
                str_3A+=key;
                str_3A+=";";
            }
          }
        console.log("value ",otherflag," =>",str_3A,);
    }


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
                            {checkboxSelected_1.cricket}
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
                        <input type="number" val="10" onChange={(event)=>(setA_1_remarks(event.target.value))}></input>
                        </TableCell>
                        <TableCell >
                            <input val={A_1_remarks} onChange={(event)=>(setA_1_remarks(event.target.value))}></input>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{marginTop:"0px"}}>
                        <TableCell >2A</TableCell>
                        <TableCell >Arterial line cannula (Adult)</TableCell>
                        <TableCell >
                        <div><label>
                                <input type="checkbox" id="3A_18G" value="18G" />
                                18G
                        </label></div>
                        <div className="radio"><label>
                                <input type="checkbox" id="3A_20G" value="20G" />
                                20G
                        </label></div>
                        <div><label>
                            <input type="checkbox" id="yourBox2" onChange={(event)=>(document.getElementById('yourText2').disabled = !(event.target.checked))}></input>
                                Other
                            </label>
                            <input placeholder="" id="yourText2" disabled ></input> 
                        </div>
                        </TableCell>
                        <TableCell >
                            <Select onChange={(event)=>(setA_2A_brand(event.target.value))}> 
                                <option value="Vygon">Vygon</option>
                                <option value="other">other</option>
                            </Select> 
                        </TableCell>
                        <TableCell >
                            <input type="number" val="10" onChange={(event)=>(setA_1_remarks(event.target.value))}></input>
                        </TableCell>
                        <TableCell >
                            <input val={A_2A_remarks} onChange={(event)=>(setA_2A_remarks(event.target.value))}></input>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{marginTop:"0px"}}>
                        <TableCell >3A</TableCell>
                        <TableCell >Blood glucose strip</TableCell>
                         {/* <TableCell>{checkboxSelected_1.Arkay_factory==true?"true":"false"},
                        {checkboxSelected_1.Nipro==true?"true":"false"},
                        {checkboxSelected_1.optium==true?"true":"false"},
                        {checkboxSelected_1.other}</TableCell>  */}
                        
                        <TableCell >
                            <Select onChange={(event)=>(setA_3A_descr(event.target.value))}>     
                                <option value="volvo">Volvo</option>
                                <option Selected value="Compatible to our machine">Compatible to our machine</option>
                                <option value="other">other</option>
                            </Select> 
                            {/* <select value={dropdown} onChange={(e)=>{setDropdown(e.target.value)}}>
                                <option value="apple">Apple</option>
                                <option value="orange">Orange</option>
                                <option value="banana">Banana</option>
                            </select> */}
                            {/* <Multiselect
                                options={brand_3A_options}
                                isObject={false}
                                showCheckbox={false}
                                onChange={(e)=>(setA_3A_descr(e.target.value),console.log(A_3A_descr))}
                            /> */}
                        </TableCell>
                        <TableCell >
                        <div><label>
                                <input type="checkbox" id="3A_ark" value="Arkay factory" />
                                Arkay factory
                        </label></div>
                        <div className="radio"><label>
                                <input type="checkbox" id="3A_nip" value="Nipro" />
                                Nipro
                        </label></div>
                        <div className="radio"><label>
                                <input type="checkbox" id="3A_opt" value="Optium" />
                                Optium
                        </label></div>
                        <div><label>
                            <input type="checkbox" id="yourBox" onChange={(event)=>(document.getElementById('yourText').disabled = !(event.target.checked))}></input>
                                Other
                            </label>
                            <input placeholder="" id="yourText" disabled ></input> 
                        </div>

                        </TableCell> 
                        <TableCell>
                            
                            {
                                checkboxOptions.map(
                                    (c,i)=><div><label key={c}><Checkbox name={c} checked={checkboxSelected_1.c} onChange={handleChange}/>{c}</label></div>
                                )
                            }    
                            <div><label><Checkbox type="checkbox" id="yourBox1" onChange={(event)=>(document.getElementById('yourText1').disabled = !(event.target.checked))}/>other</label>
                            <input placeholder="" id="yourText1" disabled onChange={(event) => setCheckboxSelected_1({...checkboxSelected_1,['other']:event.target.value})}></input>
                            </div>
                            {/* <div> */}
                            {/* <label>
                            <input type="checkbox" id="yourBox1" onChange={(event)=>(document.getElementById('yourText1').disabled = !(event.target.checked))}></input>
                                Other
                            </label>
                            <input placeholder="" id="yourText" disabled onChange={(event)=>setCheckboxSelected(...checkboxSelected_1,other:event.target.value}></input>  */}
                            {/* </div> */}
                        
                    </TableCell>
                        <TableCell >
                        {/* <input></input>     */}
                            <Select value={A_3A_qty} defaultValue={{value:'1',label:'1'}} 
                                onChange={(event)=>(setA_3A_qty(event.target.value))}>     
                                <option value="1">1</option>
                                <option value="other">other</option>
                            </Select> 
                            {/* {
                                qty_3A_options.map(
                                    (c,i)=><div><label key={c}><Checkbox name={c} checked={checkboxSelected_1.c} onChange={handleChange}/>{c}</label></div>
                                )
                            } */}
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
            <Button variant="contained" color="secondary"
                onClick={()=>(
                    console.log('values====>\ncompany_name:',A_3A_brand,'\nQty_required:',A_3A_qty,'\nSpecification:',A_3A_descr,'\nRemarks:',A_3A_remarks,"\n------------- ",props.docnumber,"\n----------------")
                    // ,testhandle(checkboxSelected)
                    // ,fetch(SUBMIT_FORM_API+myvar,
                    ,handle()
                    ,fetch(SUBMIT_FORM_API+props.docnumber,
                        {
                        credentials: 'include',
                        method:'PATCH',
                        headers: {
                        Accept: 'application/json',
                        "Content-Type": 'application/json',
                        },
                        body: JSON.stringify({
                            code         : myvar,
                            A_1_descr     :A_1_descr,
                            A_1_brand     :A_1_brand,
                            A_1_qty      :A_1_qty,
                            A_1_remarks  :A_1_remarks,
                            A_2A_descr     :A_2A_descr,           
                            A_2A_brand     :A_2A_brand,
                            A_2A_qty      :A_2A_qty,
                            A_2A_remarks  :A_2A_remarks,
                            A_2B_descr     :A_2B_descr,           
                            A_2B_brand     :A_2B_brand,
                            A_2B_qty      :A_2B_qty,
                            A_2B_remarks  :A_2B_remarks,
                            A_3A_descr     :A_3A_descr,
                            A_3A_brand     :A_3A_brand,
                            A_3A_qty      :A_3A_qty,
                            A_3A_remarks  :A_3A_remarks,
                            A_3B_descr     :A_3B_descr,
                            A_3B_brand     :A_3B_brand,
                            A_3B_qty      :A_3B_qty,
                            A_3B_remarks  :A_3B_remarks, 
                        }),
                    })

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
            >Submit</Button>
            </div>
        )
    }