import ContactItem from "./ContactItem";
import { ListOfContacts } from "./ContactList.styled";
import PropTypes from 'prop-types';


const ContactList = ({contacts, onDeleteContact}) => (
  <ListOfContacts>
    {contacts.map(({id, name, number}) => (
      <ContactItem
          key={id}
          name={name}
          number={number}
          click={() => onDeleteContact(id)}
        />
    ))}
  </ListOfContacts>
)

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired
}

export default ContactList;