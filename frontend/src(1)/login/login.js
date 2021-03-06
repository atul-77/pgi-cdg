import React, {Component} from "react";
import styled from 'styled-components';
import Table from "@material-ui/core/Table";
import {Link} from "react-router-dom";
import logo from '.././logo.svg';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory({forceRefresh:true});

const Input=styled.input`
  width:100%;
  height: 35px;
  border-radius: 4px;
  border: solid 1px #a8a8a8;
  margin-bottom:18px;
  margin-left:-12px;
  font-size:13px;
  color:#454545;
  font-family:roboto;
  padding:10px;
  &:focus{
    outline:none;
    border:solid 2px #0052cc;
    }

`;

const Button=styled.button`
  width: 100%;
  height: 35px;
  border-radius: 4px;
  font-size: 12px;
  background-color: #0052cc;
  margin-bottom:30px;
  border:none;
  text-align:center;
  color:#ffffff;
  `;

const HorizontalLine=styled.hr`
  width: 100%;
  border: solid 1px #e8e8e8;
  `;

const LoginToAccount=styled.h1`
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  color: #454545;
 display: flex;
 justify-content: center;
 padding-bottom: 20px;
`;

const LoginBox=styled.div`
  max-width: 335px;
  width:auto;
  padding-left:35px;
  padding-right:35px;
  padding-top: 25px;
  margin:auto;
  border-radius: 4px;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  `;


export default class Login extends Component{

  state = {
    username:"",
    password:"",
  }


  validate=async()=> {
    let USER_TABLE_API='http://127.0.0.1:8000/get-user-table'
    const response=await fetch(USER_TABLE_API);
    const data=await response.json();

    for(var i=0;i<data.length;i++)
    {
      if(data[i].username===this.state.username && data[i].password===this.state.password)
      {
        history.push({
          pathname:`/user`,
          search:data[i].username,
        })
      }
      if(data[i].username===this.state.username && data[i].password!=this.state.password)
      {
        alert("Username or Password Incorrect")
      }
    }
    
  } 
    render()
    {
        return (
            <>
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{marginTop:"-470px",marginLeft:"-38px",width:"50px",height:"50px"}} className="App-logo" alt="logo" />
      </header>
    </div>

            <div style={{margin:'auto',marginTop: '-600px',
  marginBottom: '40px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'50px'}} className="montserrat"><span style={{color:'#999997'}} className='montserrat'>PGI</span><span className='montserrat' style={{color:'#005CA8'}}>MER</span></div>

            <LoginBox style={{marginTop:"-40px"}}>
                <LoginToAccount>Log in to your account</LoginToAccount>
                <Input
                    id="email"
                    type="text"
                    placeholder="Username"
                    onChange={(event)=>{
                      this.setState({username:event.target.value})
                    }}                
                />
                <Input
                    id="password"
                    placeholder="Password"
                    type="password"
                    onChange={(event)=>{
                      this.setState({password:event.target.value})
                    }}                
                />

                <Button
                onClick={()=>{this.validate()}}
                >Log in</Button>
                <HorizontalLine></HorizontalLine>

            </LoginBox>

            </>
        )
    }
} 