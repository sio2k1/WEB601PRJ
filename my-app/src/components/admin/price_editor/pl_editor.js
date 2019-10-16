/*
  we are using this component to modify price list, mainly with MaterialTable
  we specify material table events for row delete\insert\update and call corresponding api methods.
*/

import React from 'react'
import './pl_editor.css';
import TitleChanger from '../../../functions/titlechanger'
import api from '../../../api_list/api_price_list_axios' //load api connector fot this particular component
import * as operations from '../../../api_list/api_operations' // get operations (get/post/put/patch)


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



// we have to get icons, according to material table dicumentation
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


const TITLE = 'Price list editor'; //for TitleChanger(TITLE);


class PlEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:[], isFetching: true} //set default value as empty array
  }

  // when component mount
  async componentDidMount()
  { 
    this.setState({...this.state, isFetching: true}); // we r fetching, handle this in render()
    const inData = await operations.FGet(api) // using axios request api root (api url set up in import api from 'FILEPATH')
    this.setState({data: inData, isFetching: false});  // adding json from api to state  
  }

   render() { 
    TitleChanger(TITLE); //rendering title
    if (!this.state.isFetching) // if we r not fetching - > display data
    {
      return (
        <div className="price-edit-holder">
          <MaterialTable 
            columns={[ // define material table columns
             
              { title: 'Caption', field: 'SalesItemName' }, 
              { title: 'Price', field: 'Price', type: 'numeric' },
              { title: 'Units', field: 'SalesItemUnits'  }
              
            ]}
            data={this.state.data} //set data source for material table
            title="Price list editor"  // table title
            icons={tableIcons} // set icons
            editable={{
              onRowAdd: newData => // this occurs when we insert new row
                new Promise( resolve =>  {
                  setTimeout(async () => { // w8 800ms
                    resolve();
                    const data = [...this.state.data];
                    newData= await operations.FAdd(newData, api); // we need to receive inserted id to fill the table with actual db value
                    data.push(newData); // add this to state.data
                    this.setState({ ...this.state, data });
                  }, 800);
                }),
              onRowUpdate: (newData, oldData) => // this happens on row is modified
                new Promise(resolve => {
                  setTimeout(() => { // timout
                    resolve();
                    const data = [...this.state.data];
                    data[data.indexOf(oldData)] = newData; // get updatet row object
                    operations.FUpdate( Object.assign(newData, {id:newData.PriceListId}) ,api); // send to api
                    
                    this.setState({ ...this.state, data }); // update state with updated row object
                  }, 600);
                }),
              onRowDelete: oldData => // this happens on row delete
                new Promise(resolve => {
                  setTimeout(() => { // timeout for operation
                    resolve();
                    const data = [...this.state.data];
                    //oldData.id=oldData.PriceListId;
                    operations.FDelete( Object.assign(oldData, {id:oldData.PriceListId}), api); // call delete api method
                    data.splice(data.indexOf(oldData), 1); // remove row from state
                    this.setState({ ...this.state, data });
                  }, 600);
                }),
            }}
  
          />
        </div>
      )
    } else // display loading if we r still fetching
    {
      return (<div>Loading...</div>)
    }

     //parsing json to jsx in return
    
  }
}
export default PlEditor;
