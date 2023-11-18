import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './contactForm/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContactOnSubmit = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContactOnSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onFilterChange} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact} />
      </>
    );
  }
}