import React, { Component } from 'react';

export default class SmurfForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name:"",
          age:null,
          height:""
        }
    }
    
    editSmurfInfo = event => {
        const currentState = this.state
        currentState[event.target.name] = event.target.value
        this.setState({ state: currentState })
    }
    
    onFormSubmit = event => {
        // event.prevenDefault();
        console.log(this.props)
        this.props.addSmurf(this.state);
        this.setState({
            state: {
            name:"",
            age:null,
            height:""
            }
        })
    }
    
    render = () => (
        <form onSubmit={this.onFormSubmit} >
            <input placeholder="name" name="name" value={this.state.name} type="text" onChange={this.editSmurfInfo} required/>
            <input placeholder="age" name="age" value={this.state.age ? this.state.age : ""} type="number" onChange={this.editSmurfInfo} required/>
            <input placeholder="height" name="height" value={this.state.height} type="text" onChange={this.editSmurfInfo} required/>
            <button type="submit">Add Smurf</button>
        </form>
    )
}

// export default SmurfForm;