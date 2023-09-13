import { Component } from "react";
import { FormWrap, InputWrap, Label, Input, Button } from "./ContactForm. styled";

const INITIAL_STATE = {
    name: '',
    number: '',
}
class ContactForm extends Component {
state = INITIAL_STATE;
handleChange = ({target:{value, name}}) => {
   
    this.setState({[name]: value})
    // console.log(name)
}
handleSubmit = (e) => {
  e.preventDefault();
  this.props.createUser(this.state);
  this.setState(INITIAL_STATE);
}
render(){
  
    return (
        <FormWrap onSubmit={this.handleSubmit}>
        <InputWrap>
            <Label htmlFor="name">Name</Label>
            <Input
                onChange={this.handleChange}
                value={this.state.name} 
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required/>
        </InputWrap>
        <InputWrap>
            <Label htmlFor="number">Number</Label>
            <Input
                onChange={this.handleChange}
                value={this.state.number}  
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required/>
        </InputWrap>
        <Button type="submit">Add contact</Button>
      </FormWrap>   
    )
}
}

export default ContactForm;