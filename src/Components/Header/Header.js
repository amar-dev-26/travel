import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './header.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import emailjs from '@emailjs/browser'








function Header() {

    const isLoggedInData=localStorage.getItem("isloggedin")
    console.log(isLoggedInData);
    const navigate=useNavigate()


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


   // create state for input data

   const [inputs,setInputs]=useState({
    username:"",
    email:" ",
    phone:" ",
    message:" "

   })
    

   const getInputs=(e)=>{
       
      //destructure data

      const {name,value}=e.target
    // const name=e.target.name
    // const value=e.target.value
    // console.log(name)
    // console.log(value);
    //   console.log(name,value);

      setInputs({...inputs,[name]:value})

   }

   console.log(inputs);

   const handleSubmit=(e)=>{

    e.preventDefault()
    const service_id ="service_bw731lb"
    const template_id="template_0c2k69q"
    const public_key="XLB8bZzFViMweFP1E"
    

    const templateParams={
        from_name:inputs.username,
        to_name:"jetsetgo",
        from_email:inputs.email,
        from_phone:inputs.phone,
        message:inputs.message
    }

    emailjs.send(service_id,template_id,templateParams,public_key).then((result)=>{
        console.log("success",result);
        setInputs({
            ...inputs,
            username:"",
            email:" ",
            phone:" ",
             message:" "
        })
        alert("email send succesfully")
    
    }
    ).catch((error)=>{

        console.log("error",error);
        alert("unable to send email")
    })
    handleClose()

   }

   const handlelogout =()=>{

    navigate("/")
    localStorage.clear()

   }



  return (
    <div>

<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container >
      <img
              style={{ height: "50px", width: "50px", marginTop: "-19px" }}
              src="https://i.postimg.cc/66fpHsZs/rc-Loy5-Lpi.gif"
              alt="logo"
            />
        
        <Navbar.Brand  style={{ color: "#19406b" }} href="#home" className='heading '><h3>JetSetGo</h3>
       
        </Navbar.Brand>
        
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto container__content-style">
          <Link className='text-decoration-none' to={'/destination'}>
            <Nav.Link href="#features"> <h4>Destination</h4></Nav.Link>
            </Link>

            <Link to={'/'} className='text-decoration-none'>
            <Nav.Link href="#pricing"><h4>Home</h4></Nav.Link>
            </Link>

            <Link className="text-decoration-none" to={'/add'}>
           {  
                
            isLoggedInData? <Nav.Link href="#pricing"><h4>Add</h4></Nav.Link>:<p></p>
            
           }
           </Link>

           <Link className="text-decoration-none" to={'/list'}>
           {  
                
            isLoggedInData? <Nav.Link href="#pricing"><h4>ENQlist</h4></Nav.Link>:<p></p>
            
           }
           </Link>
           

           
        
          </Nav>

         
            
         
        </Navbar.Collapse>


        {
            !isLoggedInData?<Button variant="outline-info " onClick={handleShow} className='me-2'>
            Contact Us
          </Button>:<p></p>
           }
        {
            !isLoggedInData?<Link to={"./login"}>
            <Button variant="outline-warning" className='me-2'>Login</Button>{' '}
            </Link>:<Link >
        <Button  variant="outline-warning" onClick={handlelogout} className='me-2 button__logout'>Logout</Button>{' '}
        </Link>
        }

        
 

        

        
        
            
      </Container>
    </Navbar>

 

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
              onChange={(e)=>getInputs(e)}
              name='username'
                type="email"
                placeholder="name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
              onChange={(e)=>getInputs(e)}
              name='email'
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contact No</Form.Label>
              <Form.Control
              onChange={(e)=>getInputs(e)}
               name='phone'
                type="number"
                placeholder="contact No"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea"
              onChange={(e)=>getInputs(e)}
               rows={3} name='message' />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
      
          <Button variant="primary" onClick={handleSubmit} >
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Header