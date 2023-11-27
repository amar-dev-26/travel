import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import './footer.css'
function Footer() {
  return (
    
    <div style={{ backgroundColor: 'white' }}>
    <Container>
      <Row>
        <Col className="p-3">
          <div
            className="mt-2 "
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "-20px",
            }}>
            <img
              style={{ height: "50px", width: "50px", marginTop: "-19px" }}
              src="https://i.postimg.cc/66fpHsZs/rc-Loy5-Lpi.gif"
              alt="logo"
            />
            <h3 style={{ color: "#19406b" }}>JetSetGo</h3>
          </div>

          <p style={{marginLeft:"0px" ,textAlign:"initial",fontSize:"medium",color:"#19406b"}}>
          Book your trip in minutes,get<br></br>  full control for much longer.
          </p>
        </Col>

        <Col className=" contact__style">
          <h5 className="text" style={{color:"#19406b"}}>Contact us</h5>
          <ul className='list 'style={{listStyleType:"none",textAlign:"match-parent",padding:"0px",marginInlineStart:"0px"}} >
             <li>FAQs</li>
             <li>Help</li> 
             <li>Policies</li>  
             <li>Terms & Conditions</li>   
          </ul>
         
        </Col>
        <Col className="p-5 quick__style">
          <h5 className="text" style={{color:"#19406b"}}>Quick Links</h5>
          <ul className='list 'style={{listStyleType:"none",textAlign:"match-parent",padding:"0px",marginInlineStart:"0px"}} >
             <li>Destination</li>
             <li>Hotels</li> 
             <li>Flights</li>  
             <li>Bookings</li>   
          </ul>
         
        </Col>
        <Col className="contactus__style">
          <h4 className="my-3" style={{color:"#19406b"}}>Connect With Us</h4>

          <div>
            <i
              class="fa-brands fa-instagram fa-xl mt-3 ms-2"
              style={{ cursor: "pointer" }}>   </i>
            <i
              class="fa-brands fa-facebook fa-xl mt-3 ms-2"
              style={{ cursor: "pointer" }}></i>
            <i
              class="fa-brands fa-linkdin fa-xl mt-3 ms-2"
              style={{ cursor: "pointer" }}></i>
            <i
              class="fa-brands fa-github fa-xl mt-3 ms-2"
              style={{ cursor: "pointer" }}></i>
            <i
              class="fa-brands fa-twitter fa-xl mt-3 ms-2"
              style={{ cursor: "pointer" }}></i>
          </div>
          <div className="mt-3">
            <i
              class="fa-solid fa-envelopes-bulk fa-xl mt-3 ms-2"
              style={{ cursor: "pointer" }}></i>
            demo@gmail.com
          </div>
        </Col>
        
       
      </Row>
    </Container>
  </div>



   
  )
}

export default Footer