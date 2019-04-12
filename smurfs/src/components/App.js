import React, { Component } from 'react';
import './App.css';

import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:"",
      age:null,
      height:""
    }
    // this.onAddSmurf = this.onAddSmurf.bind(this);

  }
  componentDidMount = () => {
    this.props.getSmurfs();
  }

  editSmurfInfo = event => {
    const currentState = this.state
    currentState[event.target.name] = event.target.value
    this.setState({ state: currentState })
  }

  onSubmit = event => {
    // event.prevenDefault();
    console.log("hi")
    this.props.addSmurf(this.state);
    this.setState({
      state: {
        name:"",
        age:null,
        height:""
      }
    })
  }

  render() {
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
        <form onSubmit={this.onSubmit} >
          <input placeholder="name" name="name" value={this.state.name} type="text" onChange={this.editSmurfInfo} required/>
          <input placeholder="age" name="age" value={this.state.age ? this.state.age : ""} type="number" onChange={this.editSmurfInfo} required/>
          <input placeholder="height" name="height" value={this.state.height} type="text" onChange={this.editSmurfInfo} required/>
          <button type="submit">Add Smurf</button>
        </form>
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
