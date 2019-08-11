import React from 'react';
import PropTypes from 'prop-types';
import Elements from './Elements';
import withJSONInput from './withJSONInput';

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
    this.state = {
      data: {},
    };
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
    const { input } = this.props;
    return input.map(i => (
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

const formElementShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

ReactForm.propTypes = {
  output: PropTypes.func.isRequired,
  input: PropTypes.arrayOf(formElementShape).isRequired,
};


export default withJSONInput(ReactForm);
