import ContactForm from "./ContactForm/ContactForm";
import { Container, Title, SubTitle, Message } from "./App.styled";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { Component } from "react";
import { nanoid } from "nanoid";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };
deleteContact = (contactId) => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  }))
}
createUser = (userData) => {
  const userAlreadyExist = this.state.contacts.find(el => el.name.toLowerCase() === userData.name.toLowerCase());
  if(userAlreadyExist) {
        Notify.warning('Contact is alresdy exist!');
        return 
  }
  const newContact = {
    id: nanoid(),
    ...userData,
  }
  // console.log(newContact);
  this.setState(prevState => ({
    contacts: [newContact, ...prevState.contacts,]
  }))
}
onChangeFilter = (filterQuery) => {
     this.setState({filter: filterQuery})
}
filteredContacts = () => {
  const {filter, contacts} = this.state;
  const filterToLowerCase = filter.toLowerCase();
  return contacts.filter(({name}) => name.toLowerCase().includes(filterToLowerCase))
}
  render() {
    const filteredContacts = this.filteredContacts();
    const length = this.state.contacts.length;
    
    // console.log(this.state);
    // console.log(filteredContacts);
    return (
      <Container>
          <Title>Phonebook</Title>
          <ContactForm 
                 createUser={this.createUser}/>
          <SubTitle>Contacts</SubTitle>
          <Filter onChangeFilter={this.onChangeFilter}/>{
            length > 0 ?
              <ContactList 
                contacts={filteredContacts} 
                onDeleteContact={this.deleteContact}/>
             : 
              <Message>Contact list is empty! Add your first contact.</Message>
            
          } 
          </Container>
    )
  }
}

