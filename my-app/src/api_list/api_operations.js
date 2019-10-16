//this file is for general inserting\updating and deleting anything
//incoming json object should contain 'id' field for delete and update
// api is a link to axios: 
/*
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001/api/pricelist",
  responseType: "json"
});
*/

const FGetById = async (api, id) => // for get queries
{
    //console.log('gettingbyid');
    let inDt=null;
    try 
    {
        inDt = await api.get(`/${id}`)  // using axios request api root (api url set up in import api from 'FILEPATH') 
        inDt = inDt.data[0]; 
        
    } catch(err)
    {
        console.error("Error response:");
        console.error(err.response);    
    }
    
    return inDt; 
}

const FGet = async (api) => // for get queries
{
    //console.log('getting');
    let inDt=null;
    try 
    {
        inDt = await api.get('/')  // using axios request api root (api url set up in import api from 'FILEPATH') 
        
    } catch(err)
    {
        console.error("Error response:");
        console.error(err.response);    
    }
    return inDt.data;   
}

const FDelete = async (json, api) => //delete
{
    //console.log(json);
    await api.delete(`/${json.id}`)    // this one need id field provided, we add id from WhatEverId field before coming here
}

const FAdd = async (json, api) => // this function returns inserted object from db with actual id
{
    let inData=await api.post('/', {data:json} );
    return inData.data[0];   
}

const FUpdate = async (json, api) => //patch
{
    //console.log(json);
    await api.patch(`/${json.id}`, {data:json})    // this one need id field provided, we add id from WhatEverId field before coming here
}

export  {FGet, FGetById, FDelete, FAdd, FUpdate}