import React, { useState } from 'react'
import "./Add.css";
import { Col, Container, Row } from 'react-bootstrap'
import { Form } from 'react-bootstrap';
import { addDestination } from '../services/Allapi';


function Add() {

   const [image,setImage]=useState("")


   const [inputs,setInputs]=useState({

    destination:"",
    discription:"",
    price:"",
    days:""


   });

   const getInputs =(e)=>{

    const {name,value}=e.target
    setInputs({...inputs,[name]:value})

   }
console.log(inputs);


    const chooseImage=(e)=>{

        setImage(e.target.files[0])
    }




   const handleData = async (e) => {
    e.preventDefault();
    const { destination, discription, price, days } = inputs;
    if (
      destination == "" ||
      discription == "" ||
      price == "" ||
      days == ""
    ) {
      alert("please add username and password");
    } else {
      //setting header
      const headerConfig = {
        "Content-Type": "multipart/form-data",
      };

      //file type content sent chyumpo nammal form data typil aayirikanm body akath send cheyunnath
      //for that formtype body object create cheyyanm ennit aakanam data send cheyandath
      const data = new FormData();
      console.log("data", data);

      data.append("destination",  destination);
      data.append("discription", discription);
      data.append("price", price);
      data.append("days", days);
      //nammal backend routes akath(multer use cheytha same name thanne key aayit kodukanam)
      data.append("user_profile", image);

      const result = await  addDestination(data, headerConfig);
      if (result.status >= 200 && result.status <= 300) {
        alert("data added ");
        setInputs({
          ...inputs,
          destination: "",
          discription: "",
          price: "",
          days: "",
        });
        setImage("");
      } else {
        console.log("unable to post");
      }
    }
  };

console.log("img",image)



  return (

    <div>

<div className='add_form_head'>
    <div>
      <h1 className='d-flex justify-content-center' style={{color:"#02656A"}}>Add Destinations</h1>
                <Container className='container__wrapper'>
                    <form>
                        <Row>
                            <Col>
                                <Form.Label className='label__style' htmlFor="inputPassword5">Name of Destination</Form.Label>
                                <Form.Control
                                 onChange={(e)=> getInputs(e)}
                                   name='destination'
                                    type="text"
                                    id="destinatin"
                                    aria-describedby="passwordHelpBlock"
                                />
                                <Form.Label  className='label__style' htmlFor="inputPassword5">Description </Form.Label>
                                <Form.Control
                                 onChange={(e)=> getInputs(e)}
                                    name='discription'
                                    type="text"
                                    id="desc"
                                    aria-describedby="passwordHelpBlock"
                                />
                                 
                                 
                                  
                             
                            </Col>
                            <Col>
                           
                               
                                 <Form.Label  className='label__style mt-2' htmlFor="inputPassword5">price</Form.Label>
                                <Form.Control
                                     onChange={(e)=> getInputs(e)}
                                    name='price'
                                    type="text"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                                 <Form.Label htmlFor="inputPassword5">Days</Form.Label>
                                <Form.Control
                                    onChange={(e)=> getInputs(e)}
                                    name='days'
                                    type="text"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                                  <Form.Label  className='label__style' htmlFor="inputPassword5">image</Form.Label>
                                <Form.Control
                             
                                   onChange={(e)=> chooseImage(e)}
                                    name='profile'
                                    type="file"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                                   
                            </Col>
                        </Row>

                        <Row>
                            
                            <button  onClick={handleData}  className='btn  mb-4 mt-4 text-white' style={{backgroundColor:"#02656A"}}>Submit</button>
                        </Row>
                    </form>
                </Container>
            </div>
    </div>


        </div>
  )
}

export default Add