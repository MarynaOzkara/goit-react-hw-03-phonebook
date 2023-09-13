import {LabelFind, ImputFind, Wrap} from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({onChangeFilter}) => {
    const handleChange = ({target: {value}}) => {
        onChangeFilter(value)
    }
    return (
    <Wrap>
      <LabelFind>Find contacts by name</LabelFind>
      <ImputFind 
           type="text" 
           onChange={handleChange}
           />
    </Wrap>
     
)}
Filter.propTypes = {
    onChangeFilter: PropTypes.func.isRequired 
}
export default Filter;