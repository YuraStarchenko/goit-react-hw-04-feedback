import PropTypes from 'prop-types';
import { Sections, Text } from './Section.styled.js';

export const Section = ({ title, children }) => {
  return (
    <Sections>
      <Text>{title}</Text>
      {children}
    </Sections>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};