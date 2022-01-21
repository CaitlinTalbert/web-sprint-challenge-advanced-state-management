import React from 'react';
import Smurf from './Smurf';
import { fetchSmurfs } from './../actions';
import { useEffect } from 'react';
import { connect } from 'react-redux';

 const SmurfList = (props) => {
    useEffect(() => {
        props.fetchSmurfs();
    }, []); 

    const isLoading = false;
    const testSmurf = {
        /*
          id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        name:'Poppa Smurf',
        position:'Village Leader',
        nickname: 'Pops',
        description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    */
    }


    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {props.smurfs.map((smurf) => {
            return (
              <div>
                <h3>{smurf.name}</h3>
              </div>
            )
          })}
        <Smurf smurf={testSmurf}/>
    </div>);
}

const mapStateToProps = state => {
    return {
        smurfs: state.results,
        info: state.info,
        results: state.results,
        loading: state.isLoading, 
        error: state.error,
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
