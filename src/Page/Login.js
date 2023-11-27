import React, { useState } from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";
import { adminLoginApi } from '../services/Allapi';
import Aos from 'aos';







function Login() {

    const [emailValid,setEmailValid]=useState(true)

  const[pswValid,setPswValid]=useState(true)


   const [inputs,setInputs]=useState({

       email:"",
       psw:""


   });


   const getInputs = (e) =>{
    const { value,name} = e.target

    if(name=='email'){
     if(value.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
      setEmailValid(true)
      setInputs({...inputs,[name]:value})
     }
     else{
      setEmailValid(false)
    }
     
    
      
    }
   

    if(name=='psw'){

      if(value.match(/^[a-zA-Z0-9]+$/)){
        setPswValid(true)
        setInputs({...inputs,[name]:value})
      }
      else{
        setPswValid(false)
      }

    }

    // setLoginInputs({...loginInputs,[name]:value})


   }
  
   console.log(inputs);



    const navigate = useNavigate();

    const handleSubmit = async() => {
      const {email,psw}=inputs
      if(email=="" || psw==""){
        alert("all inputs are required")
      }
      else{
        const result=await adminLoginApi(inputs)
        console.log(result);
        if(result.status>=200 && result.status<300){
            localStorage.setItem("isloggedin",result.data.isAdmin)
          alert("login success")
          navigate('/');
        }
        else{
          alert(result.response.data);
        }
      }
      
    };

   



  


  



   

  return (
    <div    className="container__Wrapper">
    <Container >
      <Row>
        <Col lg={8} className=" p-4 ">
          <img
            className="left-image__Section"
            src="https://i.postimg.cc/vmJ4gm9g/10476.jpg"
            alt="logo"
          />
        </Col>
        <Col lg={4} className="mt-0 p-3  login_input_wrapper">
          <div className='login__style__wrapper'>
            <h2 className="mb-5 text-center">Admin Login</h2>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3 ">
              <Form.Control
              className='login__input__style'
            
                type="email"
                name='email'
                onChange={(e)=> getInputs(e)}
                placeholder="name@example.com"
              />
            </FloatingLabel>

           {/* {  !emailValid &&
           <div>
              <p className='text-danger'>invalid email *</p>
            </div>
            } */}
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                class='login__input__style'
                
                type="password"
                name='psw'
                onChange={(e)=> getInputs(e)}
                placeholder="Password"
              />
            </FloatingLabel>
             

            <Button
              onClick={handleSubmit}
              style={{ backgroundColor: "#08428c", color: "white" }}
              className="mt-5 w-100 btn">
              Login
            </Button>
            <div>
             <Link className='text-decoration-none' to={'/signup'}>
                      <p className=" mt-2 text-decoration-none">Dont have account? <a className="text-dark-50 fw-bold text-decoration-none">Sign Up</a>
                      </p>
                    </Link>
             </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
    
  )
}

export default Login