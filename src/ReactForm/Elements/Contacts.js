import React from 'react';
import PropTypes from 'prop-types';

const uuidv1 = require('uuid/v1');

/*
Contacts form allows user to add any munber of phone numbers with type and value.
*/
class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
    this.addContact = this.addContact.bind(this);
    this.updateContact = this.updateContact.bind(this);
  }

  // TODO extract update data into a separate dpcumented function
  setContacts(newContacts) {
    const { updateData } = this.props;

    this.setState(
      { contacts: newContacts },
      () => updateData(
        'contact',
        newContacts.map(({ type, value }) => ({ type, value })),
      ),
    );
  }

  addContact(event) {
    event.preventDefault();
    const { contacts } = this.state;
    this.setContacts(contacts.concat({ id: uuidv1(), type: 'home', value: '' }));
  }

  updateContact(id, key, value) {
    const { contacts } = this.state;
    const contact = contacts.find(c => c.id === id);
    contact[key] = value;

    this.setContacts(contacts);
  }

  renderContacts() {
    const { contacts } = this.state;
    return (
      contacts.map(c => (
        <div key={c.id}>
          <label htmlFor={`type-${c.id}`}>Type</label>
          <select
            name="type"
            id={`type-${c.id}`}
            value={c.type}
            onChange={event => this.updateContact(c.id, 'type', event.target.value)}
          >
            <option value="home">Home</option>
            <option value="work">Work</option>
          </select>

          <label htmlFor={`phone-${c.id}`}>Phone</label>
          <input
            type="text"
            name="value"
            id={`phone-${c.id}`}
            value={c.value}
            onChange={event => this.updateContact(c.id, 'value', event.target.value)}
          />
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

Contacts.propTypes = {
  updateData: PropTypes.func.isRequired,
};

export default Contacts;
