import React from 'react';
import './App.css';

class ReactForm extends React.Component{
    constructor(props){
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
      event.preventDefault();
      this.props.output(event.target.elements["data"].value);
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
