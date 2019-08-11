import React from 'react';
import PropTypes from 'prop-types';
import Elements from './Elements';

// Render correct Component based on type
const inputTypes = {
  name: Elements.Name,
  date: Elements.DateOfBirth,
  gender: Elements.Gender,
  contact: Elements.Contacts,
};

/*
REACT FORM - Renders the set of inputs.
Based on schema received as input prop.
*/

class ReactForm extends React.Component {
  constructor(props) {
    super(props);
    const { input } = this.props;
    this.state = {
      data: {},
    };
    this.form = JSON.parse(input);
    this.onSubmit = this.onSubmit.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { output } = this.props;
    const { data } = this.state;
    output(data);
  }

  // Updates the state with data received from form Elements
  updateData(key, value) {
    const { data } = this.state;
    this.setState({
      data: Object.assign({}, data, { [key]: value }),
    });
  }

  renderElement(i) {
    const Comp = inputTypes[i.type];
    return <Comp {...i} updateData={this.updateData} />;
  }

  renderForm() {
    return this.form.map(i => (
      <div key={i.id}>
        <label htmlFor={i.id}>{i.label}</label>
        { this.renderElement(i) }
      </div>
    ));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        { this.renderForm() }
        <button>Submit</button>
      </form>
    );
  }
}

ReactForm.propTypes = {
  output: PropTypes.func.isRequired,
  input: PropTypes.node.isRequired,
};


export default ReactForm;
