import { ListItem, Name, Number, CloseButton, Dot } from "./ContactItem.styled";
import PropTypes from 'prop-types';


const ContactItem = ({name, number, click}) => (
    <ListItem>
        <Dot/>
        <Name>{name}</Name>:
        <Number>{number}</Number>
        <CloseButton onClick={click}>Delete</CloseButton>
  </ListItem>
)

ContactItem.propTypes ={
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  clic: PropTypes.func
}

export default ContactItem;