import React from 'react';
import './App.css';

class ReactForm extends React.Component{
    constructor(props){
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
    }

    renderForm(i){
      return(
        <div>
        <label htmlFor={i.id}>{i.label}</label>
        <input id={i.id} type={i.type}/>
        </div>
      )
    }
    onSubmit(event){
      event.preventDefault();
      this.props.output(event.target.elements["name"].value);
    }

    render(){
      return(
        <form onSubmit={this.onSubmit}>
          { this.renderForm(this.props.input[0]) }
          <button>Submit</button>
        </form>
      )
    }

}

export default ReactForm;
