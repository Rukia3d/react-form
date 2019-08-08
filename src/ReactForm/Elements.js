import React from 'react';
import PropTypes from 'prop-types';

const uuidv1 = require('uuid/v1');

const Text = ({ label, id }) => (
  <input type="text" name={label} id={id} required pattern="\S+ \S+.*" />
);

Text.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const MIN_AGE = 18;
const DateOfBirth = ({ label, id }) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - MIN_AGE);
  return <input type="date" name={label} id={id} required max={date.toJSON().slice(0, 10)} />;
};

DateOfBirth.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const Gender = ({ label, id }) => (
  <select name={label} id={id}>
    <option value="0">------</option>
    <option value="1">Male</option>
    <option value="2">Female</option>
  </select>
);

Gender.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
    this.addContact = this.addContact.bind(this);
  }

  addContact(event) {
    event.preventDefault();
    this.setState({
      contacts: this.state.contacts.concat({ id: uuidv1() }),
    });
  }

  renderContacts() {
    return (
      this.state.contacts.map(c => (
        <div key={c.id}>
          <label htmlFor={`type-${c.id}`}>Type</label>
          <select name="type" id={`type-${c.id}`}>
            <option value="home">Home</option>
            <option value="work">Work</option>
          </select>

          <label htmlFor={`phone-${c.id}`}>Phone</label>
          <input type="text" name="phone" id={`phone-${c.id}`} />
        </div>
      ))
    );
  }

  render() {
    return (
      <div>
        {this.renderContacts()}
        <button onClick={this.addContact}>Add Contact</button>
      </div>

    );
  }
}


export default {
  Text, DateOfBirth, Gender, Contacts,
};
