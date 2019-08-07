import React from 'react';
import './App.css';

class ReactForm extends React.Component{
    constructor(props){
      super(props);
      this.form = JSON.parse(this.props.input);
      this.onSubmit = this.onSubmit.bind(this);
    }

    renderForm(){
      return this.form.map( i => {
        return(
          <div key={i.id}>
          <label htmlFor={i.id}>{i.label}</label>
          <input id={i.id} type={i.type}/>
          </div>
        )
      });
    }
    onSubmit(event){
      event.preventDefault();
      this.props.output(event.target.elements["name"].value);
    }

    render(){
      return(
        <form onSubmit={this.onSubmit}>
          { this.renderForm() }
          <button>Submit</button>
        </form>
      )
    }

}

export default ReactForm;
