import React from 'react';
import store from '../store';
// import {getLabels,addLabel,updateLabel,deleteLabel} from '../actions';
import {fgetLabels,faddLabel,fupdateLabel,fdeleteLabel} from '../actions';
import { connect } from 'react-redux';
class Main extends React.Component{
    componentWillReceiveProps(nextProps){
      console.log("Main Compoent Will Receive Props "+JSON.stringify(nextProps));
    }
    getAllLabels(){
      this.props.getAllLabels();
    }
    addLabel(){
      var data = {"label_name": "TaxNO","label_value": "AP3Z434A56"};
      this.props.addLabel(data);
    }
    updateLabel(){
      var data = {"label_name": "TaxNO","label_value": "AP3Z434A56",id:2};
      this.props.updateLabel(data);
    }
    deleteLabel(){
      var data = [1,2];
      this.props.deleteLabel(data);
    }
    render(){
      return (
        <div style={{textAlign:"center"}}>
          <button onClick={this.getAllLabels.bind(this)}>Get</button>
          <button onClick={this.addLabel.bind(this)}>Add</button>
          <button onClick={this.updateLabel.bind(this)}>Update</button>
          <button onClick={this.deleteLabel.bind(this)}>Delete</button>
        </div>
      )
    }
  }

  const mapStateToProps = (state,ownProps)=>{
    return{
      lables:state.coreReducer.lables
    }
  }
  const mapDispatchToProps = (dispatch,ownProps)=>{
    return{
      getAllLabels: () => dispatch(fgetLabels()),
      addLabel: (data) => dispatch(faddLabel(data)),
      updateLabel: (data) => dispatch(fupdateLabel(data)),
      deleteLabel: (data) => dispatch(fdeleteLabel(data))
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Main);
  