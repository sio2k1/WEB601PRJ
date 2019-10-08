import React from 'react'
import './price.css';
import price_data from '../../jsondata/prices.json'
import json_parser from './parser/json_parsers_price'
import TitleChanger from '../../functions/titlechanger'

const TITLE = 'Prices Page'; //TitleChanger(TITLE);


class Price extends React.Component {
  constructor(props) {
    super(props);

    this.state = {table:[]}

  }

  componentDidMount()
  {
    fetch('http://localhost:3001/api/pricelist/')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        table: data
      });
    });
    
    
    /*
    fetch('http://localhost:3001/api/pricelist/',{ mode: "no-cors"})
		.then(res => res.json())
		.then(data => {
			if(data.cod === '404') {		
      } else 
      {
        console.log(data);	  
        this.setState({
                table: data
            });
      }
		})
		.catch(err => {
		   console.log(err);
        })*/
    //console.log(this.state);	
  }
  render() {
    TitleChanger(TITLE);
    return (
      <div>     
         {json_parser(this.state)} 
      </div>
    );
  }
}

//{json_parser(this.state)} 
export default Price;

/*
const Price = () => { //call a parser to parse price list into jsx table 
  TitleChanger(TITLE);
  return (
    <div>
      {json_parser(price_data)} 
    </div>
    )
  }
export default Price;*/

