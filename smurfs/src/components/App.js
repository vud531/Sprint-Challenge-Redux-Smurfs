import React, { Component } from 'react';
import './App.css';
import SmurfForm from '../components/SmurfForm';
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {


  componentDidMount = () => {
    this.props.getSmurfs();
  }



  render = () => {
    console.log(this.props.smurf)
    //create smuftList divs
    const smurfList = this.props.smurf.map(smurf => (
    <div key={smurf.name}>
    <p>Name: {smurf.name}</p>
    <p>Age: {smurf.age}</p>
    <p>Heigh: {smurf.height}</p>
    <p>---------------------------</p>
    </div>
    ))
    return (
      <div className="App" >
        <SmurfForm addSmurf={this.props.addSmurf} />

        {this.props.fetchingSmurfs ? 
            <div>Loading Smurf - Please Wait!!</div> : ""}
        <h1>SMURFS VILLAGE</h1>

        {smurfList}
      </div>
    );
  }
}

// export default App;

const mapStateToProps = state => ({
  smurf: state.smurf,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  error: state.error
});

export default connect(
  mapStateToProps,
  {
    getSmurfs,
    addSmurf
  }
)(App);
