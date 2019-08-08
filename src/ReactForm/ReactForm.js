import React from 'react';
import PropTypes from 'prop-types';
import Elements from './Elements';

const inputTypes = {
  text: Elements.Text,
  date: Elements.DateOfBirth,
  gender: Elements.Gender,
  contact: Elements.Contacts,
};

function renderElement(i) {
  const Comp = inputTypes[i.type];
  return <Comp {...i} />;
}

class ReactForm extends React.Component {
  constructor(props) {
    super(props);
    const { input } = this.props;
    this.form = JSON.parse(input);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { output } = this.props;
    const result = this.form.reduce(
      (f, i) => Object.assign(f, { [i.id]: event.target.elements[i.id].value }),
      {},
    );
    output(result);
  }

  renderForm() {
    return this.form.map(i => (
      <div key={i.id}>
        <label htmlFor={i.id}>{i.label}</label>
        { renderElement(i) }
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
