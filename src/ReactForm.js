import React from 'react';
import './App.css';

class ReactForm extends React.Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <form onSubmit={this.onSubmit}>
          <label htmlFor="data">Data</label>
          <input id="data" type="text"/>
          <button>Submit</button>
        </form>
      )
    }

}

export default ReactForm;
