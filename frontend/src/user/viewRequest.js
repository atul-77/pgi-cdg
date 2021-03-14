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
import './viewRequest.css';


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
  width: 70%;
  height: 10px;
  border-radius: 4px;
  border: solid 1px #a8a8a8;
  background-color: #ffffff;
  margin-top: 10px;
  padding: 5px;
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


export default function ViewRequest(){
    const location=useLocation();
    const [form,setForm]=React.useState(0)

    const [A1_1,setA1_1]=React.useState("")
    const [A1_4,setA1_4]=React.useState("")
    const [A1_3,setA1_3]=React.useState("")
    const [A1_2,setA1_2]=React.useState("")
    /*const [A2A_1,setA2A_1]=React.useState("")
    const [A2A_4,setA2A_4]=React.useState("")
    const [A2A_3,setA2A_3]=React.useState("")
    const [A2A_2,setA2A_2]=React.useState("")
    const [A2B_1,setA2B_1]=React.useState("")
    const [A2B_4,setA2B_4]=React.useState("")
    const [A2B_3,setA2B_3]=React.useState("")
    const [A2B_2,setA2B_2]=React.useState("")
    const [A3A_1,setA3A_1]=React.useState("")
    const [A3A_4,setA3A_4]=React.useState("")
    const [A3A_3,setA3A_3]=React.useState("")
    const [A3A_2,setA3A_2]=React.useState("")
    const [A3B_1,setA3B_1]=React.useState("")
    const [A3B_4,setA3B_4]=React.useState("")
    const [A3B_3,setA3B_3]=React.useState("")
    const [A3B_2,setA3B_2]=React.useState("")
    const [A4_1,setA4_1]=React.useState("")
    const [A4_4,setA4_4]=React.useState("")
    const [A4_3,setA4_3]=React.useState("")
    const [A4_2,setA4_2]=React.useState("")
    const [A5_1,setA5_1]=React.useState("")
    const [A5_4,setA5_4]=React.useState("")
    const [A5_3,setA5_3]=React.useState("")
    const [A5_2,setA5_2]=React.useState("")
    const [A6_1,setA6_1]=React.useState("")
    const [A6_4,setA6_4]=React.useState("")
    const [A6_3,setA6_3]=React.useState("")
    const [A6_2,setA6_2]=React.useState("")
    const [A7_1,setA7_1]=React.useState("")
    const [A7_4,setA7_4]=React.useState("")
    const [A7_3,setA7_3]=React.useState("")
    const [A7_2,setA7_2]=React.useState("")
    const [A8_1,setA8_1]=React.useState("")
    const [A8_4,setA8_4]=React.useState("")
    const [A8_3,setA8_3]=React.useState("")
    const [A8_2,setA8_2]=React.useState("")
    const [A9_1,setA9_1]=React.useState("")
    const [A9_4,setA9_4]=React.useState("")
    const [A9_3,setA9_3]=React.useState("")
    const [A9_2,setA9_2]=React.useState("")
    const [A9B_1,setA9B_1]=React.useState("")
    const [A9B_4,setA9B_4]=React.useState("")
    const [A9B_3,setA9B_3]=React.useState("")
    const [A9B_2,setA9B_2]=React.useState("")
    const [A10A_1,setA10A_1]=React.useState("")
    const [A10A_4,setA10A_4]=React.useState("")
    const [A10A_3,setA10A_3]=React.useState("")
    const [A10A_2,setA10A_2]=React.useState("")
    const [A10B_1,setA10B_1]=React.useState("")
    const [A10B_4,setA10B_4]=React.useState("")
    const [A10B_3,setA10B_3]=React.useState("")
    const [A10B_2,setA10B_2]=React.useState("")
    const [A11A_1,setA11A_1]=React.useState("")
    const [A11A_4,setA11A_4]=React.useState("")
    const [A11A_3,setA11A_3]=React.useState("")
    const [A11A_2,setA11A_2]=React.useState("")
    const [A11B_1,setA11B_1]=React.useState("")
    const [A11B_4,setA11B_4]=React.useState("")
    const [A11B_3,setA11B_3]=React.useState("")
    const [A11B_2,setA11B_2]=React.useState("")
    const [A12_1,setA12_1]=React.useState("")
    const [A12_4,setA12_4]=React.useState("")
    const [A12_3,setA12_3]=React.useState("")
    const [A12_2,setA12_2]=React.useState("")
    const [A13_1,setA13_1]=React.useState("")
    const [A13_4,setA13_4]=React.useState("")
    const [A13_3,setA13_3]=React.useState("")
    const [A13_2,setA13_2]=React.useState("")
    const [A14A_1,setA14A_1]=React.useState("")
    const [A14A_4,setA14A_4]=React.useState("")
    const [A14A_3,setA14A_3]=React.useState("")
    const [A14A_2,setA14A_2]=React.useState("")
    const [A14B_1,setA14B_1]=React.useState("")
    const [A14B_4,setA14B_4]=React.useState("")
    const [A14B_3,setA14B_3]=React.useState("")
    const [A14B_2,setA14B_2]=React.useState("")
    const [A15_1,setA15_1]=React.useState("")
    const [A15_4,setA15_4]=React.useState("")
    const [A15_3,setA15_3]=React.useState("")
    const [A15_2,setA15_2]=React.useState("")
    const [A16A_1,setA16A_1]=React.useState("")
    const [A16A_4,setA16A_4]=React.useState("")
    const [A16A_3,setA16A_3]=React.useState("")
    const [A16A_2,setA16A_2]=React.useState("")
    const [A16B_1,setA16B_1]=React.useState("")
    const [A16B_4,setA16B_4]=React.useState("")
    const [A16B_3,setA16B_3]=React.useState("")
    const [A16B_2,setA16B_2]=React.useState("")
    const [A16C_1,setA16C_1]=React.useState("")
    const [A16C_4,setA16C_4]=React.useState("")
    const [A16C_3,setA16C_3]=React.useState("")
    const [A16C_2,setA16C_2]=React.useState("")
    const [A17_1,setA17_1]=React.useState("")
    const [A17_4,setA17_4]=React.useState("")
    const [A17_3,setA17_3]=React.useState("")
    const [A17_2,setA17_2]=React.useState("")
    const [A18_1,setA18_1]=React.useState("")
    const [A18_4,setA18_4]=React.useState("")
    const [A18_3,setA18_3]=React.useState("")
    const [A18_2,setA18_2]=React.useState("")
    const [A19_1,setA19_1]=React.useState("")
    const [A19_4,setA19_4]=React.useState("")
    const [A19_3,setA19_3]=React.useState("")
    const [A19_2,setA19_2]=React.useState("")
    const [A20_1,setA20_1]=React.useState("")
    const [A20_4,setA20_4]=React.useState("")
    const [A20_3,setA20_3]=React.useState("")
    const [A20_2,setA20_2]=React.useState("")
    const [A21_1,setA21_1]=React.useState("")
    const [A21_4,setA21_4]=React.useState("")
    const [A21_3,setA21_3]=React.useState("")
    const [A21_2,setA21_2]=React.useState("")
    const [A22_1,setA22_1]=React.useState("")
    const [A22_4,setA22_4]=React.useState("")
    const [A22_3,setA22_3]=React.useState("")
    const [A22_2,setA22_2]=React.useState("")
    const [A23_1,setA23_1]=React.useState("")
    const [A23_4,setA23_4]=React.useState("")
    const [A23_3,setA23_3]=React.useState("")
    const [A23_2,setA23_2]=React.useState("")
    const [A24_1,setA24_1]=React.useState("")
    const [A24_4,setA24_4]=React.useState("")
    const [A24_3,setA24_3]=React.useState("")
    const [A24_2,setA24_2]=React.useState("")
    const [A25_1,setA25_1]=React.useState("")
    const [A25_4,setA25_4]=React.useState("")
    const [A25_3,setA25_3]=React.useState("")
    const [A25_2,setA25_2]=React.useState("")
    const [A26_1,setA26_1]=React.useState("")
    const [A26_4,setA26_4]=React.useState("")
    const [A26_3,setA26_3]=React.useState("")
    const [A26_2,setA26_2]=React.useState("")
    const [A27_1,setA27_1]=React.useState("")
    const [A27_4,setA27_4]=React.useState("")
    const [A27_3,setA27_3]=React.useState("")
    const [A27_2,setA27_2]=React.useState("")
    const [A28_1,setA28_1]=React.useState("")
    const [A28_4,setA28_4]=React.useState("")
    const [A28_3,setA28_3]=React.useState("")
    const [A28_2,setA28_2]=React.useState("")
    const [A29_1,setA29_1]=React.useState("")
    const [A29_4,setA29_4]=React.useState("")
    const [A29_3,setA29_3]=React.useState("")
    const [A29_2,setA29_2]=React.useState("")
    const [A30_1,setA30_1]=React.useState("")
    const [A30_4,setA30_4]=React.useState("")
    const [A30_3,setA30_3]=React.useState("")
    const [A30_2,setA30_2]=React.useState("")
    const [A31_1,setA31_1]=React.useState("")
    const [A31_4,setA31_4]=React.useState("")
    const [A31_3,setA31_3]=React.useState("")
    const [A31_2,setA31_2]=React.useState("")
    const [A32_1,setA32_1]=React.useState("")
    const [A32_4,setA32_4]=React.useState("")
    const [A32_3,setA32_3]=React.useState("")
    const [A32_2,setA32_2]=React.useState("")
    const [A33_1,setA33_1]=React.useState("")
    const [A33_4,setA33_4]=React.useState("")
    const [A33_3,setA33_3]=React.useState("")
    const [A33_2,setA33_2]=React.useState("")
    const [A35_1,setA35_1]=React.useState("")
    const [A35_4,setA35_4]=React.useState("")
    const [A35_3,setA35_3]=React.useState("")
    const [A35_2,setA35_2]=React.useState("")
    const [A36_1,setA36_1]=React.useState("")
    const [A36_4,setA36_4]=React.useState("")
    const [A36_3,setA36_3]=React.useState("")
    const [A36_2,setA36_2]=React.useState("")
    const [A37A_1,setA37A_1]=React.useState("")
    const [A37A_4,setA37A_4]=React.useState("")
    const [A37A_3,setA37A_3]=React.useState("")
    const [A37A_2,setA37A_2]=React.useState("")
    const [A37B_1,setA37B_1]=React.useState("")
    const [A37B_4,setA37B_4]=React.useState("")
    const [A37B_3,setA37B_3]=React.useState("")
    const [A37B_2,setA37B_2]=React.useState("")
    const [A38_1,setA38_1]=React.useState("")
    const [A38_4,setA38_4]=React.useState("")
    const [A38_3,setA38_3]=React.useState("")
    const [A38_2,setA38_2]=React.useState("")
    const [A39_1,setA39_1]=React.useState("")
    const [A39_4,setA39_4]=React.useState("")
    const [A39_3,setA39_3]=React.useState("")
    const [A39_2,setA39_2]=React.useState("")
    const [A40_1,setA40_1]=React.useState("")
    const [A40_4,setA40_4]=React.useState("")
    const [A40_3,setA40_3]=React.useState("")
    const [A40_2,setA40_2]=React.useState("")
    const [A41_1,setA41_1]=React.useState("")
    const [A41_4,setA41_4]=React.useState("")
    const [A41_3,setA41_3]=React.useState("")
    const [A41_2,setA41_2]=React.useState("")
    const [A42_1,setA42_1]=React.useState("")
    const [A42_4,setA42_4]=React.useState("")
    const [A42_3,setA42_3]=React.useState("")
    const [A42_2,setA42_2]=React.useState("")
    const [A43_1,setA43_1]=React.useState("")
    const [A43_4,setA43_4]=React.useState("")
    const [A43_3,setA43_3]=React.useState("")
    const [A43_2,setA43_2]=React.useState("")
    const [A44_1,setA44_1]=React.useState("")
    const [A44_4,setA44_4]=React.useState("")
    const [A44_3,setA44_3]=React.useState("")
    const [A44_2,setA44_2]=React.useState("")
    const [A45_1,setA45_1]=React.useState("")
    const [A45_4,setA45_4]=React.useState("")
    const [A45_3,setA45_3]=React.useState("")
    const [A45_2,setA45_2]=React.useState("")

    const [B1_1,setB1_1]=React.useState("")
    const [B1_2,setB1_2]=React.useState("")
    const [B1_3,setB1_3]=React.useState("")
    const [B1_4,setB1_4]=React.useState("")
    const [B2A_1,setB2A_1]=React.useState("")
    const [B2A_2,setB2A_2]=React.useState("")
    const [B2A_3,setB2A_3]=React.useState("")
    const [B2A_4,setB2A_4]=React.useState("")
    const [B2B_1,setB2B_1]=React.useState("")
    const [B2B_2,setB2B_2]=React.useState("")
    const [B2B_3,setB2B_3]=React.useState("")
    const [B2B_4,setB2B_4]=React.useState("")
    const [B3A_1,setB3A_1]=React.useState("")
    const [B3A_2,setB3A_2]=React.useState("")
    const [B3A_3,setB3A_3]=React.useState("")
    const [B3A_4,setB3A_4]=React.useState("")
    const [B3B_1,setB3B_1]=React.useState("")
    const [B3B_2,setB3B_2]=React.useState("")
    const [B3B_3,setB3B_3]=React.useState("")
    const [B3B_4,setB3B_4]=React.useState("")
    const [B3C_1,setB3C_1]=React.useState("")
    const [B3C_2,setB3C_2]=React.useState("")
    const [B3C_3,setB3C_3]=React.useState("")
    const [B3C_4,setB3C_4]=React.useState("")
    const [B3D_1,setB3D_1]=React.useState("")
    const [B3D_2,setB3D_2]=React.useState("")
    const [B3D_3,setB3D_3]=React.useState("")
    const [B3D_4,setB3D_4]=React.useState("")
    const [B4_1,setB4_1]=React.useState("")
    const [B4_2,setB4_2]=React.useState("")
    const [B4_3,setB4_3]=React.useState("")
    const [B4_4,setB4_4]=React.useState("")
    const [B5A_1,setB5A_1]=React.useState("")
    const [B5A_2,setB5A_2]=React.useState("")
    const [B5A_3,setB5A_3]=React.useState("")
    const [B5A_4,setB5A_4]=React.useState("")
    const [B5B_1,setB5B_1]=React.useState("")
    const [B5B_2,setB5B_2]=React.useState("")
    const [B5B_3,setB5B_3]=React.useState("")
    const [B5B_4,setB5B_4]=React.useState("")
    const [B5C_1,setB5C_1]=React.useState("")
    const [B5C_2,setB5C_2]=React.useState("")
    const [B5C_3,setB5C_3]=React.useState("")
    const [B5C_4,setB5C_4]=React.useState("")
    const [B5D_1,setB5D_1]=React.useState("")
    const [B5D_2,setB5D_2]=React.useState("")
    const [B5D_3,setB5D_3]=React.useState("")
    const [B5D_4,setB5D_4]=React.useState("")
    const [B5E_1,setB5E_1]=React.useState("")
    const [B5E_2,setB5E_2]=React.useState("")
    const [B5E_3,setB5E_3]=React.useState("")
    const [B5E_4,setB5E_4]=React.useState("")
    const [B6_1,setB6_1]=React.useState("")
    const [B6_2,setB6_2]=React.useState("")
    const [B6_3,setB6_3]=React.useState("")
    const [B6_4,setB6_4]=React.useState("")
    const [B7A_1,setB7A_1]=React.useState("")
    const [B7A_2,setB7A_2]=React.useState("")
    const [B7A_3,setB7A_3]=React.useState("")
    const [B7A_4,setB7A_4]=React.useState("")
    const [B7B_1,setB7B_1]=React.useState("")
    const [B7B_2,setB7B_2]=React.useState("")
    const [B7B_3,setB7B_3]=React.useState("")
    const [B7B_4,setB7B_4]=React.useState("")
    const [B7C_1,setB7C_1]=React.useState("")
    const [B7C_2,setB7C_2]=React.useState("")
    const [B7C_3,setB7C_3]=React.useState("")
    const [B7C_4,setB7C_4]=React.useState("")
    const [B8_1,setB8_1]=React.useState("")
    const [B8_2,setB8_2]=React.useState("")
    const [B8_3,setB8_3]=React.useState("")
    const [B8_4,setB8_4]=React.useState("")
    const [B9A_1,setB9A_1]=React.useState("")
    const [B9A_2,setB9A_2]=React.useState("")
    const [B9A_3,setB9A_3]=React.useState("")
    const [B9A_4,setB9A_4]=React.useState("")
    const [B9B_1,setB9B_1]=React.useState("")
    const [B9B_2,setB9B_2]=React.useState("")
    const [B9B_3,setB9B_3]=React.useState("")
    const [B9B_4,setB9B_4]=React.useState("")
    const [B9C_1,setB9C_1]=React.useState("")
    const [B9C_2,setB9C_2]=React.useState("")
    const [B9C_3,setB9C_3]=React.useState("")
    const [B9C_4,setB9C_4]=React.useState("")
    const [B10A_1,setB10A_1]=React.useState("")
    const [B10A_2,setB10A_2]=React.useState("")
    const [B10A_3,setB10A_3]=React.useState("")
    const [B10A_4,setB10A_4]=React.useState("")
    const [B10B_1,setB10B_1]=React.useState("")
    const [B10B_2,setB10B_2]=React.useState("")
    const [B10B_3,setB10B_3]=React.useState("")
    const [B10B_4,setB10B_4]=React.useState("")
    const [B11A_1,setB11A_1]=React.useState("")
    const [B11A_2,setB11A_2]=React.useState("")
    const [B11A_3,setB11A_3]=React.useState("")
    const [B11A_4,setB11A_4]=React.useState("")
    const [B11B_1,setB11B_1]=React.useState("")
    const [B11B_2,setB11B_2]=React.useState("")
    const [B11B_3,setB11B_3]=React.useState("")
    const [B11B_4,setB11B_4]=React.useState("")
    const [B11C_1,setB11C_1]=React.useState("")
    const [B11C_2,setB11C_2]=React.useState("")
    const [B11C_3,setB11C_3]=React.useState("")
    const [B11C_4,setB11C_4]=React.useState("")
    const [B12_1,setB12_1]=React.useState("")
    const [B12_2,setB12_2]=React.useState("")
    const [B12_3,setB12_3]=React.useState("")
    const [B12_4,setB12_4]=React.useState("")
    const [B13A_1,setB13A_1]=React.useState("")
    const [B13A_2,setB13A_2]=React.useState("")
    const [B13A_3,setB13A_3]=React.useState("")
    const [B13A_4,setB13A_4]=React.useState("")
    const [B13B_1,setB13B_1]=React.useState("")
    const [B13B_2,setB13B_2]=React.useState("")
    const [B13B_3,setB13B_3]=React.useState("")
    const [B13B_4,setB13B_4]=React.useState("")
    const [B13C_1,setB13C_1]=React.useState("")
    const [B13C_2,setB13C_2]=React.useState("")
    const [B13C_3,setB13C_3]=React.useState("")
    const [B13C_4,setB13C_4]=React.useState("")
    const [B13D_1,setB13D_1]=React.useState("")
    const [B13D_2,setB13D_2]=React.useState("")
    const [B13D_3,setB13D_3]=React.useState("")
    const [B13D_4,setB13D_4]=React.useState("")
    const [B14_1,setB14_1]=React.useState("")
    const [B14_2,setB14_2]=React.useState("")
    const [B14_3,setB14_3]=React.useState("")
    const [B14_4,setB14_4]=React.useState("")
    const [B15_1,setB15_1]=React.useState("")
    const [B15_2,setB15_2]=React.useState("")
    const [B15_3,setB15_3]=React.useState("")
    const [B15_4,setB15_4]=React.useState("")
    const [B16_1,setB16_1]=React.useState("")
    const [B16_2,setB16_2]=React.useState("")
    const [B16_3,setB16_3]=React.useState("")
    const [B16_4,setB16_4]=React.useState("")
    const [B17A_1,setB17A_1]=React.useState("")
    const [B17A_2,setB17A_2]=React.useState("")
    const [B17A_3,setB17A_3]=React.useState("")
    const [B17A_4,setB17A_4]=React.useState("")
    const [B127B_1,setB127B_1]=React.useState("")
    const [B127B_2,setB127B_2]=React.useState("")
    const [B127B_3,setB127B_3]=React.useState("")
    const [B127B_4,setB127B_4]=React.useState("")
    const [B17C_1,setB17C_1]=React.useState("")
    const [B17C_2,setB17C_2]=React.useState("")
    const [B17C_3,setB17C_3]=React.useState("")
    const [B17C_4,setB17C_4]=React.useState("")
    const [B17D_1,setB17D_1]=React.useState("")
    const [B17D_2,setB17D_2]=React.useState("")
    const [B17D_3,setB17D_3]=React.useState("")
    const [B17D_4,setB17D_4]=React.useState("")
    const [B18A_1,setB18A_1]=React.useState("")
    const [B18A_2,setB18A_2]=React.useState("")
    const [B18A_3,setB18A_3]=React.useState("")
    const [B18A_4,setB18A_4]=React.useState("")
    const [B18B_1,setB18B_1]=React.useState("")
    const [B18B_2,setB18B_2]=React.useState("")
    const [B18B_3,setB18B_3]=React.useState("")
    const [B18B_4,setB18B_4]=React.useState("")
    const [B19A_1,setB19A_1]=React.useState("")
    const [B19A_2,setB19A_2]=React.useState("")
    const [B19A_3,setB19A_3]=React.useState("")
    const [B19A_4,setB19A_4]=React.useState("")
    const [B19B_1,setB19B_1]=React.useState("")
    const [B19B_2,setB19B_2]=React.useState("")
    const [B19B_3,setB19B_3]=React.useState("")
    const [B19B_4,setB19B_4]=React.useState("")
    const [B19C_1,setB19C_1]=React.useState("")
    const [B19C_2,setB19C_2]=React.useState("")
    const [B19C_3,setB19C_3]=React.useState("")
    const [B19C_4,setB19C_4]=React.useState("")
    const [B20A_1,setB20A_1]=React.useState("")
    const [B20A_2,setB20A_2]=React.useState("")
    const [B20A_3,setB20A_3]=React.useState("")
    const [B20A_4,setB20A_4]=React.useState("")
    const [B20B_1,setB20B_1]=React.useState("")
    const [B20B_2,setB20B_2]=React.useState("")
    const [B20B_3,setB20B_3]=React.useState("")
    const [B20B_4,setB20B_4]=React.useState("")
    const [B20C_1,setB20C_1]=React.useState("")
    const [B20C_2,setB20C_2]=React.useState("")
    const [B20C_3,setB20C_3]=React.useState("")
    const [B20C_4,setB20C_4]=React.useState("")
    const [B21_1,setB21_1]=React.useState("")
    const [B21_2,setB21_2]=React.useState("")
    const [B21_3,setB21_3]=React.useState("")
    const [B21_4,setB21_4]=React.useState("")
    const [B22_1,setB22_1]=React.useState("")
    const [B22_2,setB22_2]=React.useState("")
    const [B22_3,setB22_3]=React.useState("")
    const [B22_4,setB22_4]=React.useState("")

    const [C1_1,setC1_1]=React.useState("")
    const [C1_2,setC1_2]=React.useState("")
    const [C1_3,setC1_3]=React.useState("")
    const [C1_4,setC1_4]=React.useState("")
    const [C2A_1,setC2A_1]=React.useState("")
    const [C2A_2,setC2A_2]=React.useState("")
    const [C2A_3,setC2A_3]=React.useState("")
    const [C2A_4,setC2A_4]=React.useState("")
    const [C2B_1,setC2B_1]=React.useState("")
    const [C2B_2,setC2B_2]=React.useState("")
    const [C2B_3,setC2B_3]=React.useState("")
    const [C2B_4,setC2B_4]=React.useState("")
    const [C2C_1,setC2C_1]=React.useState("")
    const [C2C_2,setC2C_2]=React.useState("")
    const [C2C_3,setC2C_3]=React.useState("")
    const [C2C_4,setC2C_4]=React.useState("")
    const [C3_1,setC3_1]=React.useState("")
    const [C3_2,setC3_2]=React.useState("")
    const [C3_3,setC3_3]=React.useState("")
    const [C3_4,setC3_4]=React.useState("")
    const [C4_1,setC4_1]=React.useState("")
    const [C4_2,setC4_2]=React.useState("")
    const [C4_3,setC4_3]=React.useState("")
    const [C4_4,setC4_4]=React.useState("")
    const [C5_1,setC5_1]=React.useState("")
    const [C5_2,setC5_2]=React.useState("")
    const [C5_3,setC5_3]=React.useState("")
    const [C5_4,setC5_4]=React.useState("")
    const [C6_1,setC6_1]=React.useState("")
    const [C6_2,setC6_2]=React.useState("")
    const [C6_3,setC6_3]=React.useState("")
    const [C6_4,setC6_4]=React.useState("")
    const [C7_1,setC7_1]=React.useState("")
    const [C7_2,setC7_2]=React.useState("")
    const [C7_3,setC7_3]=React.useState("")
    const [C7_4,setC7_4]=React.useState("")
    const [C8_1,setC8_1]=React.useState("")
    const [C8_2,setC8_2]=React.useState("")
    const [C8_3,setC8_3]=React.useState("")
    const [C8_4,setC8_4]=React.useState("")
    const [C9_1,setC9_1]=React.useState("")
    const [C9_2,setC9_2]=React.useState("")
    const [C9_3,setC9_3]=React.useState("")
    const [C9_4,setC9_4]=React.useState("")
    const [C10_1,setC10_1]=React.useState("")
    const [C10_2,setC10_2]=React.useState("")
    const [C10_3,setC10_3]=React.useState("")
    const [C10_4,setC10_4]=React.useState("")
    const [C11_1,setC11_1]=React.useState("")
    const [C11_2,setC11_2]=React.useState("")
    const [C11_3,setC11_3]=React.useState("")
    const [C11_4,setC11_4]=React.useState("")
    const [C12_1,setC12_1]=React.useState("")
    const [C12_2,setC12_2]=React.useState("")
    const [C12_3,setC12_3]=React.useState("")
    const [C12_4,setC12_4]=React.useState("")
    const [C13_1,setC13_1]=React.useState("")
    const [C13_2,setC13_2]=React.useState("")
    const [C13_3,setC13_3]=React.useState("")
    const [C13_4,setC13_4]=React.useState("")
    const [C14_1,setC14_1]=React.useState("")
    const [C14_2,setC14_2]=React.useState("")
    const [C14_3,setC14_3]=React.useState("")
    const [C14_4,setC14_4]=React.useState("")
    const [C15A_1,setC15A_1]=React.useState("")
    const [C15A_2,setC15A_2]=React.useState("")
    const [C15A_3,setC15A_3]=React.useState("")
    const [C15A_4,setC15A_4]=React.useState("")
    const [C15B_1,setC15B_1]=React.useState("")
    const [C15B_2,setC15B_2]=React.useState("")
    const [C15B_3,setC15B_3]=React.useState("")
    const [C15B_4,setC15B_4]=React.useState("")
    const [C16_1,setC16_1]=React.useState("")
    const [C16_2,setC16_2]=React.useState("")
    const [C16_3,setC16_3]=React.useState("")
    const [C16_4,setC16_4]=React.useState("")
    const [C17A_1,setC17A_1]=React.useState("")
    const [C17A_2,setC17A_2]=React.useState("")
    const [C17A_3,setC17A_3]=React.useState("")
    const [C17A_4,setC17A_4]=React.useState("")
    const [C17B_1,setC17B_1]=React.useState("")
    const [C17B_2,setC17B_2]=React.useState("")
    const [C17B_3,setC17B_3]=React.useState("")
    const [C17B_4,setC17B_4]=React.useState("")
    const [C17C_1,setC17C_1]=React.useState("")
    const [C17C_2,setC17C_2]=React.useState("")
    const [C17C_3,setC17C_3]=React.useState("")
    const [C17C_4,setC17C_4]=React.useState("")
    const [C18_1,setC18_1]=React.useState("")
    const [C18_2,setC18_2]=React.useState("")
    const [C18_3,setC18_3]=React.useState("")
    const [C18_4,setC18_4]=React.useState("")
    const [C19_1,setC19_1]=React.useState("")
    const [C19_2,setC19_2]=React.useState("")
    const [C19_3,setC19_3]=React.useState("")
    const [C19_4,setC19_4]=React.useState("")
    const [C20_1,setC20_1]=React.useState("")
    const [C20_2,setC20_2]=React.useState("")
    const [C20_3,setC20_3]=React.useState("")
    const [C20_4,setC20_4]=React.useState("")
    const [C21_1,setC21_1]=React.useState("")
    const [C21_2,setC21_2]=React.useState("")
    const [C21_3,setC21_3]=React.useState("")
    const [C21_4,setC21_4]=React.useState("")
    const [C22_1,setC22_1]=React.useState("")
    const [C22_2,setC22_2]=React.useState("")
    const [C22_3,setC22_3]=React.useState("")
    const [C22_4,setC22_4]=React.useState("")
    const [C23_1,setC23_1]=React.useState("")
    const [C23_2,setC23_2]=React.useState("")
    const [C23_3,setC23_3]=React.useState("")
    const [C23_4,setC23_4]=React.useState("")
    const [C24_1,setC24_1]=React.useState("")
    const [C24_2,setC24_2]=React.useState("")
    const [C24_3,setC24_3]=React.useState("")
    const [C24_4,setC24_4]=React.useState("")
    const [C25_1,setC25_1]=React.useState("")
    const [C25_2,setC25_2]=React.useState("")
    const [C25_3,setC25_3]=React.useState("")
    const [C25_4,setC25_4]=React.useState("")
    const [C26_1,setC26_1]=React.useState("")
    const [C26_2,setC26_2]=React.useState("")
    const [C26_3,setC26_3]=React.useState("")
    const [C26_4,setC26_4]=React.useState("")
    const [C27_1,setC27_1]=React.useState("")
    const [C27_2,setC27_2]=React.useState("")
    const [C27_3,setC27_3]=React.useState("")
    const [C27_4,setC27_4]=React.useState("")
    const [C28_1,setC28_1]=React.useState("")
    const [C28_2,setC28_2]=React.useState("")
    const [C28_3,setC28_3]=React.useState("")
    const [C28_4,setC28_4]=React.useState("")
    const [C29_1,setC29_1]=React.useState("")
    const [C29_2,setC29_2]=React.useState("")
    const [C29_3,setC29_3]=React.useState("")
    const [C29_4,setC29_4]=React.useState("")
    const [C30_1,setC30_1]=React.useState("")
    const [C30_2,setC30_2]=React.useState("")
    const [C30_3,setC30_3]=React.useState("")
    const [C30_4,setC30_4]=React.useState("")
    const [C31_1,setC31_1]=React.useState("")
    const [C31_2,setC31_2]=React.useState("")
    const [C31_3,setC31_3]=React.useState("")
    const [C31_4,setC31_4]=React.useState("")
    const [C32A_1,setC32A_1]=React.useState("")
    const [C32A_2,setC32A_2]=React.useState("")
    const [C32A_3,setC32A_3]=React.useState("")
    const [C32A_4,setC32A_4]=React.useState("")
    const [C32B_1,setC32B_1]=React.useState("")
    const [C32B_2,setC32B_2]=React.useState("")
    const [C32B_3,setC32B_3]=React.useState("")
    const [C32B_4,setC32B_4]=React.useState("")
    const [C33_1,setC33_1]=React.useState("")
    const [C33_2,setC33_2]=React.useState("")
    const [C33_3,setC33_3]=React.useState("")
    const [C33_4,setC33_4]=React.useState("")
    const [C34_1,setC34_1]=React.useState("")
    const [C34_2,setC34_2]=React.useState("")
    const [C34_3,setC34_3]=React.useState("")
    const [C34_4,setC34_4]=React.useState("")
    const [C35_1,setC35_1]=React.useState("")
    const [C35_2,setC35_2]=React.useState("")
    const [C35_3,setC35_3]=React.useState("")
    const [C35_4,setC35_4]=React.useState("")
    const [C36_1,setC36_1]=React.useState("")
    const [C36_2,setC36_2]=React.useState("")
    const [C36_3,setC36_3]=React.useState("")
    const [C36_4,setC36_4]=React.useState("")
    const [C37_1,setC37_1]=React.useState("")
    const [C37_2,setC37_2]=React.useState("")
    const [C37_3,setC37_3]=React.useState("")
    const [C37_4,setC37_4]=React.useState("")
    const [C38_1,setC38_1]=React.useState("")
    const [C38_2,setC38_2]=React.useState("")
    const [C38_3,setC38_3]=React.useState("")
    const [C38_4,setC38_4]=React.useState("")
    const [C39_1,setC39_1]=React.useState("")
    const [C39_2,setC39_2]=React.useState("")
    const [C39_3,setC39_3]=React.useState("")
    const [C39_4,setC39_4]=React.useState("")
    const [C40_1,setC40_1]=React.useState("")
    const [C40_2,setC40_2]=React.useState("")
    const [C40_3,setC40_3]=React.useState("")
    const [C40_4,setC40_4]=React.useState("")
    const [C41_1,setC41_1]=React.useState("")
    const [C41_2,setC41_2]=React.useState("")
    const [C41_3,setC41_3]=React.useState("")
    const [C41_4,setC41_4]=React.useState("")
    const [C42_1,setC42_1]=React.useState("")
    const [C42_2,setC42_2]=React.useState("")
    const [C42_3,setC42_3]=React.useState("")
    const [C42_4,setC42_4]=React.useState("")
    const [C43_1,setC43_1]=React.useState("")
    const [C43_2,setC43_2]=React.useState("")
    const [C43_3,setC43_3]=React.useState("")
    const [C43_4,setC43_4]=React.useState("")

    const [D1_1,setD1_1]=React.useState("")
    const [D1_2,setD1_2]=React.useState("")
    const [D1_3,setD1_3]=React.useState("")
    const [D1_4,setD1_4]=React.useState("")
    const [D2_1,setD2_1]=React.useState("")
    const [D2_2,setD2_2]=React.useState("")
    const [D2_3,setD2_3]=React.useState("")
    const [D2_4,setD2_4]=React.useState("")
    const [D3_1,setD3_1]=React.useState("")
    const [D3_2,setD3_2]=React.useState("")
    const [D3_3,setD3_3]=React.useState("")
    const [D3_4,setD3_4]=React.useState("")
    const [D4_1,setD4_1]=React.useState("")
    const [D4_2,setD4_2]=React.useState("")
    const [D4_3,setD4_3]=React.useState("")
    const [D4_4,setD4_4]=React.useState("")
    const [D5_1,setD5_1]=React.useState("")
    const [D5_2,setD5_2]=React.useState("")
    const [D5_3,setD5_3]=React.useState("")
    const [D5_4,setD5_4]=React.useState("")
    const [D6_1,setD6_1]=React.useState("")
    const [D6_2,setD6_2]=React.useState("")
    const [D6_3,setD6_3]=React.useState("")
    const [D6_4,setD6_4]=React.useState("")
    const [D7_1,setD7_1]=React.useState("")
    const [D7_2,setD7_2]=React.useState("")
    const [D7_3,setD7_3]=React.useState("")
    const [D7_4,setD7_4]=React.useState("")
    const [D8_1,setD8_1]=React.useState("")
    const [D8_2,setD8_2]=React.useState("")
    const [D8_3,setD8_3]=React.useState("")
    const [D8_4,setD8_4]=React.useState("")
    const [D9_1,setD9_1]=React.useState("")
    const [D9_2,setD9_2]=React.useState("")
    const [D9_3,setD9_3]=React.useState("")
    const [D9_4,setD9_4]=React.useState("")
    const [D10_1,setD10_1]=React.useState("")
    const [D10_2,setD10_2]=React.useState("")
    const [D10_3,setD10_3]=React.useState("")
    const [D10_4,setD10_4]=React.useState("")
    const [D11_1,setD11_1]=React.useState("")
    const [D11_2,setD11_2]=React.useState("")
    const [D11_3,setD11_3]=React.useState("")
    const [D11_4,setD11_4]=React.useState("")
    const [D12_1,setD12_1]=React.useState("")
    const [D12_2,setD12_2]=React.useState("")
    const [D12_3,setD12_3]=React.useState("")
    const [D12_4,setD12_4]=React.useState("")
    const [D13_1,setD13_1]=React.useState("")
    const [D13_2,setD13_2]=React.useState("")
    const [D13_3,setD13_3]=React.useState("")
    const [D13_4,setD13_4]=React.useState("")
    const [D14_1,setD14_1]=React.useState("")
    const [D14_2,setD14_2]=React.useState("")
    const [D14_3,setD14_3]=React.useState("")
    const [D14_4,setD14_4]=React.useState("")
    const [D15_1,setD15_1]=React.useState("")
    const [D15_2,setD15_2]=React.useState("")
    const [D15_3,setD15_3]=React.useState("")
    const [D15_4,setD15_4]=React.useState("")
    const [D16_1,setD16_1]=React.useState("")
    const [D16_2,setD16_2]=React.useState("")
    const [D16_3,setD16_3]=React.useState("")
    const [D16_4,setD16_4]=React.useState("")
    const [D17_1,setD17_1]=React.useState("")
    const [D17_2,setD17_2]=React.useState("")
    const [D17_3,setD17_3]=React.useState("")
    const [D17_4,setD17_4]=React.useState("")
    const [D18_1,setD18_1]=React.useState("")
    const [D18_2,setD18_2]=React.useState("")
    const [D18_3,setD18_3]=React.useState("")
    const [D18_4,setD18_4]=React.useState("")
    const [D19_1,setD19_1]=React.useState("")
    const [D19_2,setD19_2]=React.useState("")
    const [D19_3,setD19_3]=React.useState("")
    const [D19_4,setD19_4]=React.useState("")
    const [D20_1,setD20_1]=React.useState("")
    const [D20_2,setD20_2]=React.useState("")
    const [D20_3,setD20_3]=React.useState("")
    const [D20_4,setD20_4]=React.useState("")
    const [D21_1,setD21_1]=React.useState("")
    const [D21_2,setD21_2]=React.useState("")
    const [D21_3,setD21_3]=React.useState("")
    const [D21_4,setD21_4]=React.useState("")
    const [D22_1,setD22_1]=React.useState("")
    const [D22_2,setD22_2]=React.useState("")
    const [D22_3,setD22_3]=React.useState("")
    const [D22_4,setD22_4]=React.useState("")
    const [D23_1,setD23_1]=React.useState("")
    const [D23_2,setD23_2]=React.useState("")
    const [D23_3,setD23_3]=React.useState("")
    const [D23_4,setD23_4]=React.useState("")
    const [D24A_1,setD24A_1]=React.useState("")
    const [D24A_2,setD24A_2]=React.useState("")
    const [D24A_3,setD24A_3]=React.useState("")
    const [D24A_4,setD24A_4]=React.useState("")
    const [D24B_1,setD24B_1]=React.useState("")
    const [D24B_2,setD24B_2]=React.useState("")
    const [D24B_3,setD24B_3]=React.useState("")
    const [D24B_4,setD24B_4]=React.useState("")
    const [D25_1,setD25_1]=React.useState("")
    const [D25_2,setD25_2]=React.useState("")
    const [D25_3,setD25_3]=React.useState("")
    const [D25_4,setD25_4]=React.useState("")
    const [D26_1,setD26_1]=React.useState("")
    const [D26_2,setD26_2]=React.useState("")
    const [D26_3,setD26_3]=React.useState("")
    const [D26_4,setD26_4]=React.useState("")
    const [D27_1,setD27_1]=React.useState("")
    const [D27_2,setD27_2]=React.useState("")
    const [D27_3,setD27_3]=React.useState("")
    const [D27_4,setD27_4]=React.useState("")
    const [D28_1,setD28_1]=React.useState("")
    const [D28_2,setD28_2]=React.useState("")
    const [D28_3,setD28_3]=React.useState("")
    const [D28_4,setD28_4]=React.useState("")
    const [D29_1,setD29_1]=React.useState("")
    const [D29_2,setD29_2]=React.useState("")
    const [D29_3,setD29_3]=React.useState("")
    const [D29_4,setD29_4]=React.useState("")
    const [D30_1,setD30_1]=React.useState("")
    const [D30_2,setD30_2]=React.useState("")
    const [D30_3,setD30_3]=React.useState("")
    const [D30_4,setD30_4]=React.useState("")
    const [D31_1,setD31_1]=React.useState("")
    const [D31_2,setD31_2]=React.useState("")
    const [D31_3,setD31_3]=React.useState("")
    const [D31_4,setD31_4]=React.useState("")
    const [D32_1,setD32_1]=React.useState("")
    const [D32_2,setD32_2]=React.useState("")
    const [D32_3,setD32_3]=React.useState("")
    const [D32_4,setD32_4]=React.useState("")
    const [D33_1,setD33_1]=React.useState("")
    const [D33_2,setD33_2]=React.useState("")
    const [D33_3,setD33_3]=React.useState("")
    const [D33_4,setD33_4]=React.useState("")
    const [D34_1,setD34_1]=React.useState("")
    const [D34_2,setD34_2]=React.useState("")
    const [D34_3,setD34_3]=React.useState("")
    const [D34_4,setD34_4]=React.useState("")
    const [D35_1,setD35_1]=React.useState("")
    const [D35_2,setD35_2]=React.useState("")
    const [D35_3,setD35_3]=React.useState("")
    const [D35_4,setD35_4]=React.useState("")
    const [D36_1,setD36_1]=React.useState("")
    const [D36_2,setD36_2]=React.useState("")
    const [D36_3,setD36_3]=React.useState("")
    const [D36_4,setD36_4]=React.useState("")
    const [D37_1,setD37_1]=React.useState("")
    const [D37_2,setD37_2]=React.useState("")
    const [D37_3,setD37_3]=React.useState("")
    const [D37_4,setD37_4]=React.useState("")
    const [D38_1,setD38_1]=React.useState("")
    const [D38_2,setD38_2]=React.useState("")
    const [D38_3,setD38_3]=React.useState("")
    const [D38_4,setD38_4]=React.useState("")
    const [D39_1,setD39_1]=React.useState("")
    const [D39_2,setD39_2]=React.useState("")
    const [D39_3,setD39_3]=React.useState("")
    const [D39_4,setD39_4]=React.useState("")
    const [D40_1,setD40_1]=React.useState("")
    const [D40_2,setD40_2]=React.useState("")
    const [D40_3,setD40_3]=React.useState("")
    const [D40_4,setD40_4]=React.useState("")
    const [D41_1,setD41_1]=React.useState("")
    const [D41_2,setD41_2]=React.useState("")
    const [D41_3,setD41_3]=React.useState("")
    const [D41_4,setD41_4]=React.useState("")
    const [D42_1,setD42_1]=React.useState("")
    const [D42_2,setD42_2]=React.useState("")
    const [D42_3,setD42_3]=React.useState("")
    const [D42_4,setD42_4]=React.useState("")
    const [D43_1,setD43_1]=React.useState("")
    const [D43_2,setD43_2]=React.useState("")
    const [D43_3,setD43_3]=React.useState("")
    const [D43_4,setD43_4]=React.useState("")
    const [D44_1,setD44_1]=React.useState("")
    const [D44_2,setD44_2]=React.useState("")
    const [D44_3,setD44_3]=React.useState("")
    const [D44_4,setD44_4]=React.useState("")
    const [D45_1,setD45_1]=React.useState("")
    const [D45_2,setD45_2]=React.useState("")
    const [D45_3,setD45_3]=React.useState("")
    const [D45_4,setD45_4]=React.useState("")
    const [D46_1,setD46_1]=React.useState("")
    const [D46_2,setD46_2]=React.useState("")
    const [D46_3,setD46_3]=React.useState("")
    const [D46_4,setD46_4]=React.useState("")
    const [D47_1,setD47_1]=React.useState("")
    const [D47_2,setD47_2]=React.useState("")
    const [D47_3,setD47_3]=React.useState("")
    const [D47_4,setD47_4]=React.useState("")
    const [D48_1,setD48_1]=React.useState("")
    const [D48_2,setD48_2]=React.useState("")
    const [D48_3,setD48_3]=React.useState("")
    const [D48_4,setD48_4]=React.useState("")
    const [D49_1,setD49_1]=React.useState("")
    const [D49_2,setD49_2]=React.useState("")
    const [D49_3,setD49_3]=React.useState("")
    const [D49_4,setD49_4]=React.useState("")
    const [D50_1,setD50_1]=React.useState("")
    const [D50_2,setD50_2]=React.useState("")
    const [D50_3,setD50_3]=React.useState("")
    const [D50_4,setD50_4]=React.useState("")
    const [D51_1,setD51_1]=React.useState("")
    const [D51_2,setD51_2]=React.useState("")
    const [D51_3,setD51_3]=React.useState("")
    const [D51_4,setD51_4]=React.useState("")
    const [D52_1,setD52_1]=React.useState("")
    const [D52_2,setD52_2]=React.useState("")
    const [D52_3,setD52_3]=React.useState("")
    const [D52_4,setD52_4]=React.useState("")
    const [D53_1,setD53_1]=React.useState("")
    const [D53_2,setD53_2]=React.useState("")
    const [D53_3,setD53_3]=React.useState("")
    const [D53_4,setD53_4]=React.useState("")

    const [E1_1,setE1_1]=React.useState("")
    const [E1_2,setE1_2]=React.useState("")
    const [E1_3,setE1_3]=React.useState("")
    const [E1_4,setE1_4]=React.useState("")
    const [E2_1,setE2_1]=React.useState("")
    const [E2_2,setE2_2]=React.useState("")
    const [E2_3,setE2_3]=React.useState("")
    const [E2_4,setE2_4]=React.useState("")
    const [E3_1,setE3_1]=React.useState("")
    const [E3_2,setE3_2]=React.useState("")
    const [E3_3,setE3_3]=React.useState("")
    const [E3_4,setE3_4]=React.useState("")
    const [E4_1,setE4_1]=React.useState("")
    const [E4_2,setE4_2]=React.useState("")
    const [E4_3,setE4_3]=React.useState("")
    const [E4_4,setE4_4]=React.useState("")
    const [E5_1,setE5_1]=React.useState("")
    const [E5_2,setE5_2]=React.useState("")
    const [E5_3,setE5_3]=React.useState("")
    const [E5_4,setE5_4]=React.useState("")
    const [E6_1,setE6_1]=React.useState("")
    const [E6_2,setE6_2]=React.useState("")
    const [E6_3,setE6_3]=React.useState("")
    const [E6_4,setE6_4]=React.useState("")
    const [E7_1,setE7_1]=React.useState("")
    const [E7_2,setE7_2]=React.useState("")
    const [E7_3,setE7_3]=React.useState("")
    const [E7_4,setE7_4]=React.useState("")
    const [E8_1,setE8_1]=React.useState("")
    const [E8_2,setE8_2]=React.useState("")
    const [E8_3,setE8_3]=React.useState("")
    const [E8_4,setE8_4]=React.useState("")
    const [E9_1,setE9_1]=React.useState("")
    const [E9_2,setE9_2]=React.useState("")
    const [E9_3,setE9_3]=React.useState("")
    const [E9_4,setE9_4]=React.useState("")
    const [E10_1,setE10_1]=React.useState("")
    const [E10_2,setE10_2]=React.useState("")
    const [E10_3,setE10_3]=React.useState("")
    const [E10_4,setE10_4]=React.useState("")
    const [E11_1,setE11_1]=React.useState("")
    const [E11_2,setE11_2]=React.useState("")
    const [E11_3,setE11_3]=React.useState("")
    const [E11_4,setE11_4]=React.useState("")
    const [E12_1,setE12_1]=React.useState("")
    const [E12_2,setE12_2]=React.useState("")
    const [E12_3,setE12_3]=React.useState("")
    const [E12_4,setE12_4]=React.useState("")
    const [E13_1,setE13_1]=React.useState("")
    const [E13_2,setE13_2]=React.useState("")
    const [E13_3,setE13_3]=React.useState("")
    const [E13_4,setE13_4]=React.useState("")
    const [E14_1,setE14_1]=React.useState("")
    const [E14_2,setE14_2]=React.useState("")
    const [E14_3,setE14_3]=React.useState("")
    const [E14_4,setE14_4]=React.useState("")
    const [E15_1,setE15_1]=React.useState("")
    const [E15_2,setE15_2]=React.useState("")
    const [E15_3,setE15_3]=React.useState("")
    const [E15_4,setE15_4]=React.useState("")
    const [E16_1,setE16_1]=React.useState("")
    const [E16_2,setE16_2]=React.useState("")
    const [E16_3,setE16_3]=React.useState("")
    const [E16_4,setE16_4]=React.useState("")
    const [E17_1,setE17_1]=React.useState("")
    const [E17_2,setE17_2]=React.useState("")
    const [E17_3,setE17_3]=React.useState("")
    const [E17_4,setE17_4]=React.useState("")
    const [E18_1,setE18_1]=React.useState("")
    const [E18_2,setE18_2]=React.useState("")
    const [E18_3,setE18_3]=React.useState("")
    const [E18_4,setE18_4]=React.useState("")
    const [E19_1,setE19_1]=React.useState("")
    const [E19_2,setE19_2]=React.useState("")
    const [E19_3,setE19_3]=React.useState("")
    const [E19_4,setE19_4]=React.useState("")
    const [E20_1,setE20_1]=React.useState("")
    const [E20_2,setE20_2]=React.useState("")
    const [E20_3,setE20_3]=React.useState("")
    const [E20_4,setE20_4]=React.useState("")
    const [E21_1,setE21_1]=React.useState("")
    const [E21_2,setE21_2]=React.useState("")
    const [E21_3,setE21_3]=React.useState("")
    const [E21_4,setE21_4]=React.useState("")
    const [E22_1,setE22_1]=React.useState("")
    const [E22_2,setE22_2]=React.useState("")
    const [E22_3,setE22_3]=React.useState("")
    const [E22_4,setE22_4]=React.useState("")
    const [E23_1,setE23_1]=React.useState("")
    const [E23_2,setE23_2]=React.useState("")
    const [E23_3,setE23_3]=React.useState("")
    const [E23_4,setE23_4]=React.useState("")
    const [E24_1,setE24_1]=React.useState("")
    const [E24_2,setE24_2]=React.useState("")
    const [E24_3,setE24_3]=React.useState("")
    const [E24_4,setE24_4]=React.useState("")
    const [E25_1,setE25_1]=React.useState("")
    const [E25_2,setE25_2]=React.useState("")
    const [E25_3,setE25_3]=React.useState("")
    const [E25_4,setE25_4]=React.useState("")
    const [E26_1,setE26_1]=React.useState("")
    const [E26_2,setE26_2]=React.useState("")
    const [E26_3,setE26_3]=React.useState("")
    const [E26_4,setE26_4]=React.useState("")
    const [E27_1,setE27_1]=React.useState("")
    const [E27_2,setE27_2]=React.useState("")
    const [E27_3,setE27_3]=React.useState("")
    const [E27_4,setE27_4]=React.useState("")
    const [E28_1,setE28_1]=React.useState("")
    const [E28_2,setE28_2]=React.useState("")
    const [E28_3,setE28_3]=React.useState("")
    const [E28_4,setE28_4]=React.useState("")
    const [E29_1,setE29_1]=React.useState("")
    const [E29_2,setE29_2]=React.useState("")
    const [E29_3,setE29_3]=React.useState("")
    const [E29_4,setE29_4]=React.useState("")
    const [E30_1,setE30_1]=React.useState("")
    const [E30_2,setE30_2]=React.useState("")
    const [E30_3,setE30_3]=React.useState("")
    const [E30_4,setE30_4]=React.useState("")
    const [E31_1,setE31_1]=React.useState("")
    const [E31_2,setE31_2]=React.useState("")
    const [E31_3,setE31_3]=React.useState("")
    const [E31_4,setE31_4]=React.useState("")
    const [E32_1,setE32_1]=React.useState("")
    const [E32_2,setE32_2]=React.useState("")
    const [E32_3,setE32_3]=React.useState("")
    const [E32_4,setE32_4]=React.useState("")
    const [E33_1,setE33_1]=React.useState("")
    const [E33_2,setE33_2]=React.useState("")
    const [E33_3,setE33_3]=React.useState("")
    const [E33_4,setE33_4]=React.useState("")
    const [E34_1,setE34_1]=React.useState("")
    const [E34_2,setE34_2]=React.useState("")
    const [E34_3,setE34_3]=React.useState("")
    const [E34_4,setE34_4]=React.useState("")
    const [E35_1,setE35_1]=React.useState("")
    const [E35_2,setE35_2]=React.useState("")
    const [E35_3,setE35_3]=React.useState("")
    const [E35_4,setE35_4]=React.useState("")
    const [E36_1,setE36_1]=React.useState("")
    const [E36_2,setE36_2]=React.useState("")
    const [E36_3,setE36_3]=React.useState("")
    const [E36_4,setE36_4]=React.useState("")
    const [E37_1,setE37_1]=React.useState("")
    const [E37_2,setE37_2]=React.useState("")
    const [E37_3,setE37_3]=React.useState("")
    const [E37_4,setE37_4]=React.useState("")
    const [E38_1,setE38_1]=React.useState("")
    const [E38_2,setE38_2]=React.useState("")
    const [E38_3,setE38_3]=React.useState("")
    const [E38_4,setE38_4]=React.useState("")
    const [E39_1,setE39_1]=React.useState("")
    const [E39_2,setE39_2]=React.useState("")
    const [E39_3,setE39_3]=React.useState("")
    const [E39_4,setE39_4]=React.useState("")
    const [E40_1,setE40_1]=React.useState("")
    const [E40_2,setE40_2]=React.useState("")
    const [E40_3,setE40_3]=React.useState("")
    const [E40_4,setE40_4]=React.useState("")
    const [E41_1,setE41_1]=React.useState("")
    const [E41_2,setE41_2]=React.useState("")
    const [E41_3,setE41_3]=React.useState("")
    const [E41_4,setE41_4]=React.useState("")
    const [E42_1,setE42_1]=React.useState("")
    const [E42_2,setE42_2]=React.useState("")
    const [E42_3,setE42_3]=React.useState("")
    const [E42_4,setE42_4]=React.useState("")
    const [E43_1,setE43_1]=React.useState("")
    const [E43_2,setE43_2]=React.useState("")
    const [E43_3,setE43_3]=React.useState("")
    const [E43_4,setE43_4]=React.useState("")
    const [E44_1,setE44_1]=React.useState("")
    const [E44_2,setE44_2]=React.useState("")
    const [E44_3,setE44_3]=React.useState("")
    const [E44_4,setE44_4]=React.useState("")
    const [E45_1,setE45_1]=React.useState("")
    const [E45_2,setE45_2]=React.useState("")
    const [E45_3,setE45_3]=React.useState("")
    const [E45_4,setE45_4]=React.useState("")
    const [E46_1,setE46_1]=React.useState("")
    const [E46_2,setE46_2]=React.useState("")
    const [E46_3,setE46_3]=React.useState("")
    const [E46_4,setE46_4]=React.useState("")
    const [E47_1,setE47_1]=React.useState("")
    const [E47_2,setE47_2]=React.useState("")
    const [E47_3,setE47_3]=React.useState("")
    const [E47_4,setE47_4]=React.useState("")
    const [E48_1,setE48_1]=React.useState("")
    const [E48_2,setE48_2]=React.useState("")
    const [E48_3,setE48_3]=React.useState("")
    const [E48_4,setE48_4]=React.useState("")
    const [E49_1,setE49_1]=React.useState("")
    const [E49_2,setE49_2]=React.useState("")
    const [E49_3,setE49_3]=React.useState("")
    const [E49_4,setE49_4]=React.useState("")
    const [E50_1,setE50_1]=React.useState("")
    const [E50_2,setE50_2]=React.useState("")
    const [E50_3,setE50_3]=React.useState("")
    const [E50_4,setE50_4]=React.useState("")
    const [E51_1,setE51_1]=React.useState("")
    const [E51_2,setE51_2]=React.useState("")
    const [E51_3,setE51_3]=React.useState("")
    const [E51_4,setE51_4]=React.useState("")
    const [E52_1,setE52_1]=React.useState("")
    const [E52_2,setE52_2]=React.useState("")
    const [E52_3,setE52_3]=React.useState("")
    const [E52_4,setE52_4]=React.useState("")
    const [E53_1,setE53_1]=React.useState("")
    const [E53_2,setE53_2]=React.useState("")
    const [E53_3,setE53_3]=React.useState("")
    const [E53_4,setE53_4]=React.useState("")
    const [E54_1,setE54_1]=React.useState("")
    const [E54_2,setE54_2]=React.useState("")
    const [E54_3,setE54_3]=React.useState("")
    const [E54_4,setE54_4]=React.useState("")
    const [E55_1,setE55_1]=React.useState("")
    const [E55_2,setE55_2]=React.useState("")
    const [E55_3,setE55_3]=React.useState("")
    const [E55_4,setE55_4]=React.useState("")
    const [E56_1,setE56_1]=React.useState("")
    const [E56_2,setE56_2]=React.useState("")
    const [E56_3,setE56_3]=React.useState("")
    const [E56_4,setE56_4]=React.useState("")*/

    return(
        console.log("Location:",location),
        <div 
        style={{background: "#0f1923", fontFamily: "Muli", color:"white"}}>
            <Row style={headerDiv}>
                <div className="montserrat" 
                style={headerleft} 
                >
                PGIMER                   
                </div>                
                <span style={{marginRight:"640px",color: "white",fontSize:"28px"}}>
                    <div>View Request</div>
                </span>
                <span style={help}>
                    <button className="fs-16" style={{background:'none',border:'none',boxShadow:'none', textDecoration: "none", color: "white" }}>
                    Welcome!
                    </button>
                 </span>                
                <span style={help}>
              </span>
            </Row>
            
            <div style={{
                marginLeft:"-1200px",
                marginTop:"-250px",
                display: "flex",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
                flexFlow: "column"                            
                }}
                onClick={()=>{
                    setForm(0)
                }}                    
                ><a class="white" href="#">
            <p><span class="bg"></span><span class="base"></span><span class="text">Anesthetic Items</span></p>
            </a></div>

            <div style={{
                marginLeft:"-600px",
                marginTop:"-792px",
                display: "flex",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
                flexFlow: "column"                            
                }}
                onClick={()=>{
                    setForm(1)
                }}                    
                ><a class="white" href="#">
            <p><span class="bg"></span><span class="base"></span><span class="text">Cardio Pulmonary Bypass</span></p>
            </a></div>
            <div style={{
                marginLeft:"0px",
                marginTop:"-792px",
                display: "flex",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
                flexFlow: "column"                            
                }}
                onClick={()=>{
                    setForm(2)
                }}
                ><a class="white" href="#">
            <p><span class="bg"></span><span class="base"></span><span class="text">Sternotomy and thoracotmy items</span></p>
            </a></div>
            <div style={{
                marginLeft:"600px",
                marginTop:"-792px",
                display: "flex",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
                flexFlow: "column"                            
                }}
                onClick={()=>{
                    setForm(3)
                }}
                ><a class="white" href="#">
            <p><span class="bg"></span><span class="base"></span><span class="text"></span>Suture Materials</p>
            </a></div>
            <div style={{
                marginLeft:"1200px",
                marginTop:"-792px",
                display: "flex",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
                flexFlow: "column"                            
                }}
                onClick={()=>{
                    setForm(4)
                }}
                ><a class="white" href="#">
            <p><span class="bg"></span><span class="base"></span><span class="text">Drugs and Medicines</span></p>
            </a></div>
            {/* <Button style={{marginLeft:"200px",marginTop:"100px",height:"40px"}}
            onClick={()=>{
                setForm(0)
            }}
            >Anesthetic Items</Button>
            <Button style={{marginLeft:"400px",marginTop:"-40px",height:"40px"}}
            onClick={()=>{
                setForm(1)
            }}            
            >Cardio Pulmoany Bypass Items</Button>
            <Button style={{marginLeft:"600px",marginTop:"-40px",height:"40px"}}
            onClick={()=>{
                setForm(2)
            }}            
            >Sternotomy and thoracotmy items</Button>

            <Button style={{marginLeft:"800px",marginTop:"-40px",height:"40px"}}
            onClick={()=>{
                setForm(3)
            }}            
            >Suture Materials</Button>
            <Button style={{marginLeft:"1000px",marginTop:"-40px",height:"40px"}}
            onClick={()=>{
                setForm(4)
            }}            
            >Drugs and Medicines</Button> */}
            {form===0?
            
            <Table style={{marginTop:"-350px",marginLeft:"400px",width:"650px",color:"white"}}>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"white"}}>
                            Sr. No.
                        </TableCell>
                        <TableCell style={{width:"400px",color:"white"}}>
                            Name
                        </TableCell>
                        <TableCell style={{color:"white"}}>
                            Specification
                        </TableCell>
                        <TableCell style={{color:"white"}}>
                            Company Name
                        </TableCell>
                        <TableCell style={{color:"white"}}>
                            Quantity Required
                        </TableCell>
                        <TableCell style={{color:"white"}}>
                            Remarks
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow style={{padding:"0px"}}>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;1</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ACT Tubes</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>
                        &emsp;
                        <Input
                        val={A1_1}
                        onchange={(event)=>(setA1_1(event.target.value))}
                        ></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>
                        &emsp;
                        <Input
                        val={A1_2}
                        onchange={(event)=>(setA1_2(event.target.value))}
                        ></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>
                        &emsp;
                        <Input
                        val={A1_3}
                        onchange={(event)=>(setA1_3(event.target.value))}
                        ></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>
                        &emsp;
                        <Input
                        val={A1_4}
                        onchange={(event)=>(setA1_4(event.target.value))}
                        ></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{marginTop:"0px"}}>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;2A</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Arterial line cannula (Adult)</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{marginTop:"0px"}}>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;2B</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Arterial line cannula ( Pediatric)</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{marginTop:"0px"}}>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;3</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Blood glucose strip</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{marginTop:"0px"}}>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;9</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Blood transfusion Set </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{marginTop:"0px"}}>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;4</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;BIS Sensor</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;5</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Bronchial blocker</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;6</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Camera cover</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;7</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Central Venous line</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;8</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Dial flow</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;9</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Disposable Syringe with leur lock</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;9B</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Disposable Syringe without leur lock</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;10A</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Disposable Ventilator tubing, Adult</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;10B</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Disposable Ventilator tubing, Pediatric</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;11A</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Disposable Nasal Prong, Adult</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;11B</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Disposable nasal prong, Pediatric</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;12</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Disposable IV Canula Fixation Dressing</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;13</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Durapore</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;14A</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ECG elctrodes, Adult</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;14B</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ECG elctrodes, Pediatric</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;15</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Elastoplast ( Dynaplast)</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;16A</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Endotracheal tube with cuffed</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;16B</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Endotracheal tube with Uncuffed</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;16C</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Endotracheal tube, Double lumen tube ( DLT)</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;17</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Epidural set ( MINI PACK)</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;18</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Heat and Moisture Exchanger (HME)</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;19</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;High Pressure Bag</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;20</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;High Pressure tubing, Male to Male</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;21</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;High Pressure tubing, Male to Female</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;22</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Hypodermic needle</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;23</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;IV infusion set, with leur lock</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;24</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Infant feeding tube</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;25</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;IV infusion set, without leur lock</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;26</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;J R circuit ( Jackson Rees) Pediatric</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;27</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Microdrip set</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;28</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Multifunctional Electrode Pads/ AED pads</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;29</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Multilumen extension</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;30</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;NIRS Sensor</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;31</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;NIV mask</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;32</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;NOX BOX circuit</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;33</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Pediatric drip set ( Burrete set) with leur lock</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;35</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Pediatric drip set ( Burrete set) without leur lock</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;36</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Peripheral Venous cannula</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;37A</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Pressure Monitoring kit with Dome, Double</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;37B</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Pressure Monitoring kit with Dome, Single</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;38</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;RAMS Cannula</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;39</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Ryles tube</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;40</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;SIPAP circuit</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;41</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Sticking plaster ( Leukoplast)</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;42</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Suction Catheter with eye</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;43</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Suction Catheter without eye</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;44</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Three way with extension</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;45</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Three way without extension</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
               </TableBody>
            </Table>
            :
            ""
            }

            {
                form===1?
                <Table style={{marginTop:"-350px",marginLeft:"400px",width:"650px",color:"white"}}>
                <TableHead style={{color:"white"}}>
                    <TableRow>
                        <TableCell>
                            <div style={{color:"white"}}>
                            Sr. No.
                            </div>
                        </TableCell>
                        <TableCell>
                            <div style={{color:"white"}}>
                            Name
                            </div>
                        </TableCell>
                        <TableCell>
                            <div style={{color:"white"}}>
                            Specification
                            </div>
                        </TableCell>
                        <TableCell>
                            <div style={{color:"white"}}>
                            Company Name
                            </div>
                        </TableCell>
                        <TableCell>
                            <div style={{color:"white"}}>
                            Quantity Required
                            </div>
                        </TableCell>
                        <TableCell>
                            <div style={{color:"white"}}>
                            Remarks
                            </div>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;1
                            </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Antegrade cardioplegia Cannula, with vent</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;2A</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Aortic perfusion cannula, wire reinforced, Angled</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;2B</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Aortic perfusion cannula, wire reinforced, straight</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;3A</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Autovent cum Filter, Adult</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;3B</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Autovent cum Filter, Pediatric</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;3C</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Autovent cum filter, Neonate and infant</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;3D</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Autovent cum Filter, Neonate</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;4</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Blower/ Mister</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;5A</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Cardiovascular Patch, ePTFE</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;5B</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Cardiovascualr Patch, e PTFE membrane</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;5C</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Cardiovascular Patch, Dacron</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;5D</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Cardiovascular Patch, Pericardial, Bovine</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;5E</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Cardiovascular Patch, Pericardial, Bovine</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;6</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Cardiovascular Felt</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;7A</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Cardiac Tissue Stabliser, Octupus evolution</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;7B</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Cardiac tissue stabliser, Starfish</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;7C</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Cardiac Tissue Stabliser, Urchin</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;8</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Cell Saver Kit</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;9A</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Coronary artery ostial cardioplegia cannula, basket type</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;9B</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Coronary artery ostial cardioplegia cannula,  flexible silicon tip</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;9C</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Coronary artery ostial cardioplegia cannula, for pediatric</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;10A</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;CPB Custom tubing pack, Adult</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;10B</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;CPB Custom tubing pack, Pediatric</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;11A</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;CPB, Peripheral, Femoral Arterial cannula</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;11B</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;CPB, Peripheral, Femoral Venousl cannula</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;11C</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;CPB, Peripheral cannula with insertion kit</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;12</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Femoral arterial sheath</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;13A</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Hemofilter, Adult</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;13B</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Hemofilter, Pediatric</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;13C</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Hemofilter, Neonate   & infant        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;13D</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Hemofilter, Neonate         </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;14</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Intra Cardiac sump </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;15</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Intra Aortic ballon pump Catheter</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;16</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Intra Coronary Shunt</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;17A</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Membrane oxygenator, Adult</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;127B</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Membrane oxygenator, Pediatric</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;17C</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Membrane oxygenator, Neonate and infant</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;17D</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Membrane oxygenator, Neonate</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;18A</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Multiple Perfusion Set with vessel cannula</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;18B</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Multiple Perfusion Set without vessel cannula</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;19A</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Vascular tube graft; ePTFE</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;19B</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Vascular tube graft; ePTFE</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;19C</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Vascular tube graft;  Dacron</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;20A</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Vena cava cannula, single stage, straight</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;20B</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Vena cava cannula, single stage, Angled</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;20C</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Vena cava cannula, Dual stage</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;21</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Vent catheter</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;22</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;Vein Cannula</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                </TableBody>
                </Table>                
                :
                ""
            }

            {form===2?
            
            <Table style={{marginTop:"-350px",marginLeft:"400px",width:"650px",color:"white"}}>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"white"}}>
                            Sr. No.
                        </TableCell>
                        <TableCell style={{color:"white"}}>
                            Name
                        </TableCell>
                        <TableCell style={{color:"white"}}>
                            Specification
                        </TableCell>
                        <TableCell style={{color:"white"}}>
                            Company Name
                        </TableCell>
                        <TableCell style={{color:"white"}}>
                            Quantity Required
                        </TableCell>
                        <TableCell style={{color:"white"}}>
                            Remarks
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;1</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Asepto pump</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;2A</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Chest drain kit, Bag</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;2B</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Chest drain Kit , Bottle</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;2C</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Chest drain kit, dry seal and dry suction</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;3</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Chest tube</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;4</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Crepe Bandage</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;5</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Disposable caps</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;6</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Disposable Gloves, Powdered</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;7</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Disposable Gloves, Powder free</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;8</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;disposable gloves, latex free, powder free ( PI Hybrid)</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;9</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Disposable Mask</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;10</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Disposable Patient electrocautery plate</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;11</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Disposable Surgical Gown</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;12</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Disposable Suction kit</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;13</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Disposable Dressing, Tegaderm</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;14</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Dispoasble Dressing, Primapore</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;15A</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Electro Cautery lead/ pencil ( Teflon Coated E-Z Clean)</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;15B</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Electro Cautery lead/pencil tip</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;16</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Giggli wire</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;17A</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Hemostatic Clip, Small (code- 001204)</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;17B</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Hemostatic Clip, Medium (code- 002204)</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;17C</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Hemostatic Clip, Large (code- LT 400)</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;18</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Hemostatic agent: Absorbable hemostat: SURGICELL</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;19</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Hemostatic agent: Absorbable hemostat; FIBRILLAR</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;20</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Hemostatic agent: Absorbable gelatin; SPONGOSTAN</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;21</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Hemostatic agent: Hemostatic matrix; SURGIFLOW </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;22</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Hemostatic agent: surgical sealent; COSEAL</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;23</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Hemostatic agent:  Fibrin Sealent;TISSEEL </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;24</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;hemostatic agent: FLOWSEAL</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;25</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Hemostatic agent: Surgical adhesive; BIOGLUE</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;26</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;IOBAN</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;27</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Latex Examination Gloves</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;28</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Plastic Apron, sterile pack</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;29</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Polydrapes</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;30</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Patient Scrub: Povidone Iodine, Scrub 10 %</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;31</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Patient Scrub: Povidone Iodine, lotion 10 %</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;32A</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Rub in hand disinfectant; Propanolol</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;32B</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Rub in hand disinfectant; Chlorhexidine solution</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;33</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Pacing leads Temporary</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;34</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Romoseal Drain</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;35</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Skin Marker</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;36</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Skin Stapler</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;37</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Snugger Set</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;38</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Specican</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;39</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Sternal Saw Blade </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;40</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Surgical Blade</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;41</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Tissue Stapler cartidges</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;42</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Urometer</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;43</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Vascular tape</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            :
            ""
            }

            {form===3?
            
            <Table style={{marginTop:"-350px",marginLeft:"400px",width:"650px",color:"white"}}>
                <TableHead>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            Sr. No.
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white",width:"200px"}}>&emsp;
                            Name
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>
                            Description
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white",width:"150px"}}>
                            Company Name
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white",width:"150px"}}>
                            Quantity Required
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white",width:"150px"}}>
                            Remarks
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;1</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Bone Wax</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            W81001
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;2</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHIBOND 2-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            ETHIBOND 2-O half circle, taper cut17/16 mm double needle, PTFE pladget ( 6x3x1.5/7X3x 1.5)75cm ( Aortic) Code: NMW 6555/ 3219-56,
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;3</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHIBOND 2-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            ETHIBOND 2-O, half circle taper cut 17 mm double needle PTFE pledget ( 3X3X1.5) 75 cm, ( Aortic) Code: MNW6556/ 3218-56
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;4</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHIBOD 2-O </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            ETHIBOND ( green) 2-O, double needle 17 mm with pledget ( Aortic) Code: PX 54 H
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;5</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHIBOND 2-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            ETHIBOND (white) 2-O double needle17 mm with pledget ( Aortic) Code: PX17
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;6</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHIBOND 2-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            ETHIBOND ( green) 2-O, double needle 17 mm, non pledget ( Aortic) Code: W6937
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;7</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHIBOND 2-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            ETHIBOND (white) 2-O, double needle 17 mm, non pledget ( Aortic) Code: W6917
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;8</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHIBOND 2-O</TableCell>
                        <TableCell style={{padding:"10px",color:"white"}}>&emsp;
                            ETHIBOND 2-O half circle taper cut 25 mm double needle PTFE pledget ( 3X3X1.5) 75 cm ( Mitral) Code: MNW 6578/ 3218-56
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;9</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHIBOND 2-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            ETHIBOND 2-O half circle taper cut 25 mm double needle PTFE pledget ( 6X3X1.5) 75 cm ( Mitral) Code: MNW 6577/ 3324-56
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;10</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHIBOND 2-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            ETHIBOND 2-O ( Green) half circle taper cut 26 mm double needle PTFE pledget (Mitral) Code: PX 62H 
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;11</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHIBOND 2-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            ETHIBOND 2-O ( white) half circle taper cut 26 mm double needle PTFE pledget (Mitral) Code: PX 64H 
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;12</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHIBOND 2-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            ETHIBOND 2-O ( Green) half circle taper cut double needle 25 mm non pledget ( Mitral ) code: W6977
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;13</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHIBOND 2-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            ETHIBOND 2-O ( White) half circle taper cut double needle 25 mm non pledget ( Mitral ) code: W6987
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;14</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHIBOND 2-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            ETHIBOND 2-O ( Green) half circle round body single needle 26 mm, 75 cm (Mitral) Code: X833H
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;15</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHIBOND 3-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            ETHIBOND 3-O 1/2 Circle round body, double needle, 100cm. Code: W 6552
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;16</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHIBOND 3-O </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            ETHIBOND 3-O 1/2 Circle round body Single SH needle, 75cm. Code: X 832 H 
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;17</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHIBOND no-2 </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            ETHIBOND no-2, taper cut 1/2 circle (heavy). Code: W 4843
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;18</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHIBOND no-5 </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            ETHIBOND no-5, taper cut 1/2 circle (heavy). Code: W 4846
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;19</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHISTEEL no-5 </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            ETHISTEEL no-5, 1/2 circle CCS conventional cutting. Code: M 653
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;20</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHILON 2-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            ETHILON 2-O Copde: NW 3336
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;21</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;ETHILON 3-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            Ethilon 3-O, Code: NW 3328
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;22</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Mersilene Tape </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            Mersilene Tape 1/2 circle round body blunt (heavy) double needle, 65 mm. Code: RS21
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;23</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;MONOCRYL 3-O </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            Monocryl 3-O, Code:  NW 1326
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;24A</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Pacing wire</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            FEP 15E/TPW30
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;24B</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Pacing wire</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            FEP 13E/ TPW10
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;25</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;PROLENE 1-O </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            PROLENE 1-O 1/2 circle round body, Code: NW 846 
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;26</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;PROLENE 2-O </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            PROLENE 2-O 1/2 circle round body, Code: NW 844
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;27</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;PROLENE 3-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            PROLENE 3-O half circle taper point double needle 26 mm 90 cm. Code: 8522H
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;28</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;PROLENE 4-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            PROLENE 4-O half circle taper point double needle 26 mm 90 cm. Code: 8521H
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;29</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;PROLENE 4-O  </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            PROLENE 4-O 1/2 Circle Round body,12.5 mm  TF double needle, 60cms  Code: 8204 H
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;30</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;PROLENE 4-O </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            PROLENE 4-O 1/2 circle round body, 17mm double needle, 90cm. Code: W 8557
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;31</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;PROLENE 5-O </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                             PROLENE 5-O 1/2 Circle Round body-2, 13 mm double needle, 75cms. code: W 8710
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;32</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;PROLENE 5-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            PROLENE 5-O 1/2 Circle Round body  double needle, 60 cms. Code:  TF8205 H 
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;33</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;PROLENE 6-O </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            PROLENE 6-O 3/8 Circle Round body double needle, 9.3mm 60cms. Code: W 8712
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;34</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;PROLENE 6-O </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            PROLENE 6-O Circle Round body  double needle,10mm/13mm, 60 cms. Code: W 8597/ VP 706X
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;35</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;PROLENE 7-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            PROLENE 7-O 3/8 circle curved round body taper point double needle BV 175-6, 7.6 mm/ 8 mm, 60 cm Code: 8735H/ VP 630X
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;36</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;PROLENE 7-O </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            PROLENE 7-O 3/8 Circle  taper point double needle BV 175-6, 8mm, 60cms. Code: EP 8735H 
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;37</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;PROLINE 8-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            PROLENE 8-O 3/8 circle taper point double needle BV 175-6, 8 mm, 60 cm. Code: 8741H
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;38</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;SILK 1-O </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            MERSILK 1-O Round Body, Code: NW 5332
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;39</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;SILK 1-O reverse cutting</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            MERSILK 1-O reverse cutting, Code: NW 5037
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;40</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;SILK 2-O  </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            MERSILK 2-O Round Body, Code:  NW 5331
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;41</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;SILK 2-O reverse cutting </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            MERSILK 2-O reverse cutting, Code: NW 5036
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;42</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;SILK 3-O  </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            MERSILK 3-O round body 25 mm needle Code; NW 5087
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;43</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;SILK 3-O  </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            MERSILK 3-O round body 20 mm needle Code:  NW 5085
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;44</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;SILK 3-O reverse cutting</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            MERSILK 3-O reverse cutting, Code: NW 5028
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;45</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;SILK SUTUPACK 3-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            SILK SUTUPACK 3-O code: SW 222
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;46</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;SILK REEL NO. 1</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            R825
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;47</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;SILK REEL NO. 2</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            R826
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;48</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;SILK REEL NO. 1-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            R824
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;49</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;Umblical tape</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            W2760
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;50</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;VICRYL 1-O  </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            VICRYL 1-O round body, Code: NW 2546/2346
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;51</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;VICRYL 2-O  </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            NW 2341/2317
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;52</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;VICRYL 3-O </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            VICRYL 3-O round body, Code: NW 2437
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;53</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;VICRYL rapide 3-O</TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                            VICRYL rapide 3-o cutting undyed, Code:  W9932
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{padding:"0px",color:"white"}}>&emsp;
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                </TableBody>
                </Table>
                :
                ""
            }

            {form===4?
            
            <Table style={{marginTop:"-350px",marginLeft:"400px",width:"650px",color:"white"}}>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"white"}}>
                            Sr. No.
                        </TableCell>
                        <TableCell style={{color:"white"}}>
                            Drugs / Medicine
                        </TableCell>
                        <TableCell style={{color:"white"}}>
                            Strength
                        </TableCell>
                        <TableCell style={{color:"white"}}>
                            Company Name
                        </TableCell>
                        <TableCell style={{color:"white"}}>
                            Quantity Required
                        </TableCell>
                        <TableCell style={{color:"white"}}>
                            Remarks
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>1</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Inj. Amino Acid sol.</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>2</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Inj. Dextrose </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>3</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Inj. Plasma Lyte A</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>4</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Inj. Normal saline</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>5</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Inj Normal saline</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>6</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Inj Ringer Lactate</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>7</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Inj Ringer Lactate</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>8</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Adenosine Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>9</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Albumin Inj 20%</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>10</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Amikacin Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>11</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Aminocaproic Acid Inj (Hemostat)</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>12</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Amiodarone Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>13</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Atracurium Inj </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>14</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Bupivacaine/Rupivac  Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>15</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Cefazolin</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>16</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Cefuroxime Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>17</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Cefipime Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>18</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Ceftizoxime Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>19</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Diltiazem Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>20</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Dexmed Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>21</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Dobutamine Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>22</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Duolin Puff</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>23</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Esmolol Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>24</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Glycopyrrolate Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>25</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Heparin Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>26</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Insulin Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>27</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Ketamine Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>28</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Labetolol Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>29</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Levosimendan</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>30</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Lignocain Spray </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>31</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Majnesium Sulphate Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>342</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Mannitol Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>33</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Metaprolol Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>34</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Metoclopramide Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>35</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Midazolam Inj Ampule</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>36</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Milrinone Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>37</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Neostigmine+ Glycopyrrolate Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>38</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Nitroglycerine Inj (NTG)</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>39</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Pancuronium Bromide Inj.</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>40</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Paracetamol Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>41</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Phenylephrine Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>42</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Priperacillin Tazobactum Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>43</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Plegiocard Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>44</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Potassium Chloride Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>45</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Propofol Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>46</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Protamine Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>47</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Ranitidine Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>48</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Soda-Bicarbonate Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>49</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Sodium Nitroprusside Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>50</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Teicoplanin Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>51</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Thyopentone inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>52</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Tranexemic Acid Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>53</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Vacomycin Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>54</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Vecuronium Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>55</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Xylocard Inj/ Lignocain Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color:"white",padding:"0px"}}>56</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>Vasopresin Inj</TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                            <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>    
                        </TableCell>
                        <TableCell style={{color:"white",padding:"0px"}}>
                        <Input></Input>
                        </TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
                :
                ""
            }
            <div style={{height:"20px"}}></div>
            <Button style={{marginLeft:"45%"}}>Submit</Button>
            <div style={{height:"20px"}}></div>
            
        </div>
    )

}