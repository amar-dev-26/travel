import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import { addEnquirys, getSinglePackages } from '../services/Allapi';
import BASE_URL from '../services/Baseurl';
import Modal from 'react-bootstrap/Modal';
import "./Single.css";
import { Col, Row } from 'react-bootstrap';






function Single() {

   const navigate=useNavigate()
    //card inte akath  ninnu varunna data store cheyyanaum display cheyyanum (card filedil ninnu unique ayitu id pass cheyyunundu)

        const [inputs,setInputs]=useState("")

        const {id}=useParams()
        const singleDestinationData=async ()=>{
            const result =await getSinglePackages(id)
            setInputs(result.data)
        }
       

       // form data eddukan
       const [idata, setIdata] = useState({
        uname: "",
        email: "",
        phn: ""
    })

    const getIdata = (e) => {
        const { name, value } = e.target
        setIdata({ ...idata, [name]: value })
    }
    console.log(idata);

   //api for quote

   const handleSubmit=async(e)=>{
    e.preventDefault();
    const result=await addEnquirys(idata)
    console.log(result);
    alert("Data successfully sent,we will contact you shortly")
    navigate('/single/:id')
    handleClose();
}





    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);





        useEffect(()=>{
            singleDestinationData()

        },[])
  



  return (
    <div className='d-flex justify-content-center  mb-5 mt-4'>
        
        <Card style={{ width: '50rem', height:'40rem',  border:0,marginTop:20,marginLeft:30}}>
      <Card.Img variant="top" src={`${BASE_URL}/tourimage/${inputs.profile}`}/>
      <Card.Body>
        <Card.Title style={{fontWeight:'800'}} >{inputs.destination}</Card.Title>
        <hr></hr>
        <Row>

            <Col>   
            <Card.Text className='destin2 px-3'>
             {inputs.discription}
            </Card.Text>

            </Col>
            <Col>

            <Card.Text className='destin3'>PRICE :
              {inputs.price }
           </Card.Text>
            </Col>
            <Col >
            <Card.Text className='destin4'>
             {inputs.days }
           </Card.Text>
            
            </Col>

        </Row>
        <Row>
            <Col>
            <img style={{height:'80px',width:'90px'}} src="https://i.postimg.cc/HndCYCfr/five-star-rating-11549726812abjskp8qz8-removebg-preview.png" alt="" />
            </Col>
            <Col>

            <Button onClick={handleShow} className='destinbtn mt-3'  variant="outline-info">ENQUIRY</Button>
            </Col>
            <Col>
            <img  className="mt-2"   style={{height:'55px',width:'105px'}} src="https://i.postimg.cc/RVqH13sV/21-216032-travel-icons-travel-and-tours-icons-png-removebg-preview.png" alt="" />
            </Col>
        </Row>
        
        
        
        
      </Card.Body>
    </Card>




    <Modal show={show} >
                <Modal.Header closeButton>
                    <Modal.Title className='text-primary'>ENTER YOUR DETAILS</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form>

                        <div className="form-outline mb-3">
                            <input  onChange={(e) => getIdata(e)} type="text" name='uname' className="form-control  form-control-lg" />
                            <label className="form-label text-dark" >Your Name</label>
                        </div>

                        <div className="form-outline mb-3">
                            <input  onChange={(e) => getIdata(e)} type="email" name='email' className="form-control form-control-lg" />
                            <label className="form-label text-dark" >Your Email</label>
                        </div>


                        <div className="form-outline mb-3">
                            <input  onChange={(e) => getIdata(e)}  type="number" name='phn' className="form-control form-control-lg " />
                            <label className="form-label text-dark" >Your phone</label>
                        </div>

                    </form>

                </Modal.Body>
                <Modal.Footer>

                    <Button  onClick={handleSubmit} variant="info">
                        SEND
                    </Button>
                </Modal.Footer>
            </Modal>
  





    </div>
  )
}

export default Single