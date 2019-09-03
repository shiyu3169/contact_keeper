import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <>
      {contacts.map(contact => (
        <h3>
          <ContactItem contact={contact} />
        </h3>
      ))}
    </>
  );
};

export default Contacts;
