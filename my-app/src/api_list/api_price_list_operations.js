//this file is for generali inserting\updating and deleting anything
//incoming json object should contain 'id' field for delete and update
// api is a link to axios: 
/*
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001/api/pricelist",
  responseType: "json"
});
*/

const FGet = async (api) =>
{
    console.log('getting');
    let inDt=null;
    try 
    {
        inDt = await api.get('/')  // using axios request api root (api url set up in import api from 'FILEPATH') 
        
    } catch(err)
    {
        console.error("Error response:");
        console.error(err.response);    
    }
    return inDt;  
     
}

const FDelete = async (json, api) =>
{
    console.log(json);
    await api.delete(`/${json.id}`)    // this one need id filed provided, we add id from WhatEverId field before coming here
}

const FAdd = async (json, api) => // this function returns inserted object from db with actual id
{
    let inData=await api.post('/', {data:json} );
    return inData.data[0];   
}

const FUpdate = async (json, api) =>
{
    console.log(json);
    await api.patch(`/${json.id}`, {data:json})    // this one need id filed provided, we add id from WhatEverId field before coming here
}

export  {FGet, FDelete, FAdd, FUpdate}