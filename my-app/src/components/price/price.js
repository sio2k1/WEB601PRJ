import React from 'react'
import './price.css';
import price_data from '../../jsondata/prices.json'
import json_parser from './parser/json_parsers_price'
import TitleChanger from '../../functions/titlechanger'

const TITLE = 'Prices Page'; //TitleChanger(TITLE);

const Price = () => { 
  TitleChanger(TITLE);
  return (
    <div>
      {json_parser(price_data)}
    </div>
    )
  }
export default Price;

