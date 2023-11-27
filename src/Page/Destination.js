import React, { useEffect, useState } from 'react'
import "./Destination.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { getAllPackages } from '../services/Allapi';
import BASE_URL from '../services/Baseurl';
import { useNavigate } from 'react-router-dom';




function Destination() {
   

    const navigate=useNavigate()

     const [display,setDisplay]=useState({})



     const getPackages= async()=>{

        const {data}=await getAllPackages()
        console.log(data);
        setDisplay(data)
     }

     console.log(display);
  

     useEffect(()=>{
        getPackages();
     },[])

   const  singleData=(id)=>{
    navigate(`/single/${id}`)
   }

  return (
    <div>
          <div className='destinationbg'>
                <div className='destinationhead'>

                    <h1 className='destinationheadstyle text-white'>
                        DESTINATIONS
                    </h1>

                </div>
          </div>

          <Container >

              <div  className='destinationcard'>

              
                { display.length>0 && display.map((i)=>(
             <Card onClick={()=>{
                singleData(i._id)
             }} style={{ width: '20rem', height:'22rem'}}>
              <Card.Img 
              style={{height:'15rem'}}
               variant="top" 
                src={`${BASE_URL}/tourimage/${i.profile}`}/>
               <Card.Body>
                <Card.Title>{i.destination}</Card.Title>
                <Card.Text>
                starting @ {i.price}
               </Card.Text>
               <Button variant="primary">know more</Button>
               </Card.Body>
               </Card>

                ))
                   
                }
                



               {/* <Card style={{ width: '20rem', height:'22rem'}}>
              <Card.Img variant="top" src="https://i.postimg.cc/N0phmDqY/merlion-statue-cityscape-singapore.jpg" />
               <Card.Body>
                <Card.Title>Singapore</Card.Title>
                <Card.Text>
                 starting @ 50k
               </Card.Text>
               <Button variant="primary">Go somewhere</Button>
               </Card.Body>
               </Card>
               <Card style={{ width: '20rem', height:'22rem'}}>
              <Card.Img variant="top" src="https://i.postimg.cc/8c3wSF2q/rest-sunshine-atoll-bungalow-holiday.jpg" />
               <Card.Body>
                <Card.Title> Mauritius</Card.Title>
                <Card.Text>
                starting @ 80k
               </Card.Text>
               <Button variant="primary">Go somewhere</Button>
               </Card.Body>
               </Card> */}
               </div>

                          

               </Container>


    </div>
  )
}

export default Destination