import React from 'react';
import './App.css';
import Elements from "./Elements";

const inputTypes = {
  text: Elements.Text,
  date: Elements.DateOfBirth,
  gender: Elements.Text,
}

class ReactForm extends React.Component{
    constructor(props){
      super(props);
      this.form = JSON.parse(this.props.input);
      this.onSubmit = this.onSubmit.bind(this);
    }

    renderElement(i){
      const Comp = inputTypes[i.type];
      return <Comp {...i} />
    }

    renderForm(){
      return this.form.map( i => {
        return(
          <div key={i.id}>
          <label htmlFor={i.id}>{i.label}</label>
          { this.renderElement(i) }
          </div>
        )
      });
    }
    onSubmit(event){
      event.preventDefault();
      const result = this.form.reduce((f, i) => {
        f[i.id] = event.target.elements[i.id].value;
        return f;
      }, {});
      this.props.output(result);
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
