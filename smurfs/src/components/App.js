import React, { Component } from 'react';
import './App.css';
import SmurfView from '../components/SmurfView';
import { connect } from "react-redux";
import { getSmurfs,addSmurf } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  state = {
    name:"",
    age:null,
    height:""
  }

  componentDidMount = () => {
    this.props.getSmurfs();  
  }
  editSmurfInfo = event => {
    const currentState = this.state
    currentState[event.target.name] = event.target.value
    this.setState({ state: currentState })
  }

  onFormSubmit = event => {
      if (event) event.preventDefault();
      console.log(this.props)
      this.props.addSmurf(this.state);
      this.setState({
          name:"",
          age:null,
          height:""
      })
  }

  render = () => {
    console.log(this.props)
    //create smuftList divs

    return (
      <div className="App" >
        <form >
            <input placeholder="name" name="name" value={this.state.name} type="text" onChange={this.editSmurfInfo} required/>
            <input placeholder="age" name="age" value={this.state.age ? this.state.age : ""} type="number" onChange={this.editSmurfInfo} required/>
            <input placeholder="height" name="height" value={this.state.height} type="text" onChange={this.editSmurfInfo} required/>
            <button onClick={() => this.onFormSubmit()}>Add Smurf</button>
        </form>
        {this.props.error ? <div>{this.props.error}</div> : ""}
        <h1>SMURFS VILLAGE</h1>
        
        {this.props.fetchingSmurfs ? <div>Loading Smurf - Please Wait!!</div> : <SmurfView smurf={this.props.smurf} /> }
      </div>
    );
  }
}

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
