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

export default function PatientDetails(props){
    
        return(
            <>
            <h1>Patient Details for {props.patient_name}</h1>
            </>
        )
}