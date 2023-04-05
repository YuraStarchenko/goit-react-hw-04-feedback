import PropTypes from 'prop-types';
import { List, Item, Btn } from './OptionsFeedback.styled.js';

export const OptionsFeedback = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(value => (
        <Item key={value}>
          <Btn type="button" value={value} onClick={onLeaveFeedback}>
            {value[0].toUpperCase() + value.slice(1)}
          </Btn>
        </Item>
      ))}
    </List>
  );
};

OptionsFeedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
