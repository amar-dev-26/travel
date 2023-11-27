import BASE_URL from "./Baseurl";
import { commonStructure } from "./Commonstructure";


//admin register api

export const adminRegisterApi=async(body)=>{
    return await commonStructure("POST",`${BASE_URL}/tour/admin-signup`,body)
}

//admin login api

export const adminLoginApi=async(body)=>{
    return await commonStructure("POST",`${BASE_URL}/tour/login`,body)
 }




//api for add destination


export const addDestination=async(body,header)=>{
    return await commonStructure("POST",`${BASE_URL}/tour/addDestination`,body,header)
}

//api for getdestination

export const getAllPackages=async()=>{
    return await commonStructure("GET",`${BASE_URL}/tour/getDestination`,"")
}

 // api for single package

export const getSinglePackages=async(id)=>{
    return await commonStructure("GET",`${BASE_URL}/tour/destinationDescription/${id}`,"")
}

//api for enuiry form in single page
export const addEnquirys=async(body)=>{
    return await commonStructure("POST",`${BASE_URL}/tour/addEnquirys`,body)
}


// api for equiry details 

export const getEnquirys=async()=>{
    return await commonStructure("GET",`${BASE_URL}/tour/getEnquirys`,"")
}