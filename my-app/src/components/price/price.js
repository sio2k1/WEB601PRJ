import React from 'react'
import ReactDOM from 'react-dom'
//import {createStore} from '../../my_redux'
import './price.css';
import price_data from '../../jsondata/prices.json'
import json_parser from './parser/json_parsers_price'



const Price = () => { 
    return (
      <div>
        {json_parser(price_data)}
      </div>
      )
    }
export default Price;

