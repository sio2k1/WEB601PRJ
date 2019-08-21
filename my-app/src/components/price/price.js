import React from 'react'
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

