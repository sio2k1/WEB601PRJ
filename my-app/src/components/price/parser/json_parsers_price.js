import React from 'react'
//import './page_json_parser.css';
//import './flipcards.css';



const TableLine = props => //return table line prices
{
    return (
        <tr>
                <td>
                    <p>{props.line.item_name}</p>
                </td>
                <td>
                    <p>{props.line.price} </p>
                </td>
                <td>
                    <p>{props.line.units} </p>
                </td>
        </tr>
    )
}

const return_price_table = json => //return table with prices
{
    return (
        <div className="price-table-centerer">
            <table>
            {
                json.map((line) => 
                    <TableLine line={line} />
                )
            }
            </table>
        </div>
    )

}

const json_parser = (json) => {
    return (
      <div>
        <div className="text-box">
            {return_price_table(json.table)}
        </div> 
      </div>
      )
    }
    
export default json_parser;