import React from 'react'
import './pl_editor.css';
import TitleChanger from '../../../functions/titlechanger'
import api from '../../../api_list/api_price_list_axios' //load api connector fot this particular component



//material table and icons initialization begin
import MaterialTable from 'material-table'
import AddBox from '@material-ui/icons/AddBox'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import { forwardRef } from 'react'
import * as operations from '../../../api_list/api_price_list_operations'

//const operations = require('../../../api_list/api_price_list_operations')

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
//material table and icons initialization end


const TITLE = 'Price list editor'; //TitleChanger(TITLE);

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
        <div className="price-edit-holder">
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



class PlEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:[]} //set default value as empty array
  }

  async componentDidMount()
  { 
      let inData = await operations.FGet(api) // using axios request api root (api url set up in import api from 'FILEPATH')
      this.setState({data: inData.data}); // adding json from api to state
      console.log(inData.data);
  }

   render() {
    
    TitleChanger(TITLE); //rendering title
  
     //parsing json to jsx in return
    return (
      <div className="price-edit-holder">
        <MaterialTable 
          columns={[
           
            { title: 'Caption', field: 'SalesItemName' },
            { title: 'Price', field: 'Price', type: 'numeric' },
            { title: 'Units', field: 'SalesItemUnits'  }
            
          ]}
          data={this.state.data}
          title="Price list editor" 
          icons={tableIcons}
          editable={{
            onRowAdd: newData =>
              new Promise( resolve =>  {
                setTimeout(async () => {
                  resolve();
                  const data = [...this.state.data];
                  newData= await operations.FAdd(newData, api); // we need to receive inserted id to fill the table with actual db value
                  data.push(newData);
                  
                  this.setState({ ...this.state, data });
                }, 800);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  const data = [...this.state.data];
                  data[data.indexOf(oldData)] = newData;
                  //newData.id=newData.PriceListId;
                  //operations.FUpdate(newData,api);
                  operations.FUpdate( Object.assign(newData, {id:newData.PriceListId}) ,api);
                  
                  this.setState({ ...this.state, data });
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  const data = [...this.state.data];
                  //oldData.id=oldData.PriceListId;
                  operations.FDelete( Object.assign(oldData, {id:oldData.PriceListId}), api);
                  data.splice(data.indexOf(oldData), 1);
                  this.setState({ ...this.state, data });
                }, 600);
              }),
          }}

        />
      </div>
    )
  }
}
//icons={tableIcons}
//{json_parser(this.state)} 
export default PlEditor;

/*

const PlEditor = () => {  
  TitleChanger(TITLE);  

  return (
      <div>editor</div>
  )
}
export default PlEditor;
*/