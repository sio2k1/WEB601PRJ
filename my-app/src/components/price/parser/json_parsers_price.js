import React from 'react'

const TableLine = props => //return table line prices
{
    return (
        <tr>
            <td>
                <p>{props.line.SalesItemName}</p>
            </td>
            <td>
                <p>{props.line.Price} </p>
            </td>
            <td>
                <p>{props.line.SalesItemUnits} </p>
            </td>
        </tr>
    )
}

const return_price_table = json => //return table with prices
{
    return (
        <div className="price-table-centerer">
            <table><tbody>
            {
                json.map((line) => 
                    <TableLine key={line.id} line={line} />
                )
            }
            </tbody></table>
        </div>
    )
}

const json_parser = (json) => {
    return (
      <div>
        <div className="text-box">
            {return_price_table(json)}
        </div> 
      </div>
      )
    }
    
export default json_parser;