import React, { Component } from 'react';
import './App.css';
import SmurfForm from '../components/SmurfForm';
import SmurfView from '../components/SmurfView';
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {






  render = () => {
    // console.log(this.props.smurf)
    //create smuftList divs

    return (
      <div className="App" >
        <SmurfForm addSmurf={this.props.addSmurf} />
        <h1>SMURFS VILLAGE</h1>
        <SmurfView smurfs={this.props.smurf} />  
        {/* {smurfList} */}
      </div>
    );
  }
}

export default App;

