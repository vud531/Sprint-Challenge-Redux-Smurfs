import React, { Component } from 'react';
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";



class SmurfView extends Component {


    componentDidMount = () => {
        this.props.getSmurfs();  
    }
    render = () => {

        return (
            <ul>
                

                {this.props.fetchingSmurfs ? 
                <div>Loading Smurf - Please Wait!!</div> :
                this.props.smurf.map(smurf => (
                    <li key={smurf.name}>
                    <p>Name: {smurf.name}</p>
                    <p>Age: {smurf.age}</p>
                    <p>Heigh: {smurf.height}</p>
                    <p>---------------------------</p>
                    </li>
                ))}
            </ul>
        )
    }
}

// export default SmurfView


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
    }
  )(SmurfView);