import React, { useEffect, useState } from 'react'

import "./List.css";
  import { Table } from 'react-bootstrap'
import { getEnquirys } from '../services/Allapi';


function List() {

   const [enquirys,setEnquirys]=useState({})

   const getEnquirysData = async () => {
    const { data } = await getEnquirys()
    console.log(data);
    setEnquirys(data)
}

console.log(enquirys);

useEffect(() => {
    getEnquirysData()
}, [])
   




  return (
       
    <div className='view_detail'  style={{ padding: '1rem 0' }}>
            
            <h1 className='mb-4 mt-5 text-center text-white fw-bolder'>ENQUIRED LIST</h1>
            <div className='view_table'>
                {enquirys.length > 0 ? (
                    <Table striped bordered responsive hover variant="dark" className=''>

                        <thead >
                            <tr>
                                <th>#</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>CONTACT NO</th>
                            </tr>
                        </thead>
                        <tbody>

                            {enquirys.map((i, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{i.uname}</td>
                                    <td>{i.email}</td>
                                    <td>{i.phn}</td>


                                </tr>
                            )}




                        </tbody>


                    </Table>
                ) : <h1>NO DATA FOUND</h1>
                }



            </div>
        </div>







  )
}

export default List