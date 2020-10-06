/*
    We use this to parse json with prices into table content
*/

import React from 'react';

const TableLine = (
  props //return table line with prices from props
) => {
  return (
    <tr>
      <td>
        <p>{props.line.SalesItemName}</p>
      </td>
      <td>
        <p>${props.line.Price.toFixed(2)}</p>
      </td>
      <td>
        <p>{props.line.SalesItemUnits} </p>
      </td>
    </tr>
  );
};

const return_price_table = (
  json //return table with prices
) => {
  //let i=0;
  //console.log(json)
  return (
    <div className="price-content-centrer">
      <div className="price-table-centerer">
        <div className="price-table-caption-holder">
          <p>Prices</p>
        </div>
        <div className="price-table-holder">
          <table>
            <tbody>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Units</th>
              </tr>
              {json.map((line) => (
                <TableLine key={line.PriceListId} line={line} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const json_parser = (json) => {
  //parse json with prices
  return (
    <div>
      <div className="text-box">{return_price_table(json)}</div>
    </div>
  );
};

export default json_parser;
